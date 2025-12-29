'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { 
  Search, X, Calendar, Building2, FileText, Newspaper, 
  ArrowRight, Command, CornerDownLeft, Sparkles 
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Típusok ---
export interface SearchItem {
  id: string;
  title: string;
  type: 'event' | 'service' | 'page' | 'news';
  description?: string;
  link: string;
}

// --- Konfiguráció ---
const TYPE_CONFIG = {
  event: { label: 'Események', icon: Calendar, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  service: { label: 'Szolgáltatások', icon: Building2, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  page: { label: 'Oldalak', icon: FileText, color: 'text-slate-500', bg: 'bg-slate-500/10' },
  news: { label: 'Hírek', icon: Newspaper, color: 'text-amber-500', bg: 'bg-amber-500/10' },
};

// --- Komponens: Highlighted Text ---
// Ez a rész felelős azért, hogy a keresett szavak félkövérek legyenek
const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) return <span className="text-slate-700">{text}</span>;
  
  // Regex a "fuzzy" jellegű match-hez (szavanként keres)
  const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(' ').join('|')})`, 'gi'));
  
  return (
    <span className="text-slate-700">
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() || highlight.toLowerCase().includes(part.toLowerCase()) ? (
          <span key={i} className="text-slate-900 font-bold bg-yellow-200/50 rounded-[1px] px-[1px]">{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};

// --- FŐ KOMPONENS ---

type CommandPaletteProps = {
  data: SearchItem[];
  triggerClassName?: string;
  triggerLabel?: string;
  open?: boolean; // controlled open state
  onOpenChange?: (open: boolean) => void; // notify parent
  hideTrigger?: boolean; // allow external trigger (navbar button)
};

export function CommandPalette({ data, triggerClassName, triggerLabel = 'Keresés...', open, onOpenChange, hideTrigger = false }: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === 'boolean' && typeof onOpenChange === 'function';
  const paletteOpen = isControlled ? open : internalOpen;
  const setPaletteOpen = isControlled ? onOpenChange : setInternalOpen;
  const togglePalette = () => {
    if (isControlled) {
      onOpenChange?.(!paletteOpen);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Fuse.js beállítása (Szigorúbb, de megengedő)
  const fuse = useMemo(() => new Fuse(data, {
    keys: ['title', 'description', 'type'],
    threshold: 0.4, // Mennyire engedjen elírást (0.0 szigorú, 1.0 laza)
    distance: 100,
  }), [data]);

  // 2. Keresés
  const results = useMemo(() => {
    if (!query) return data.slice(0, 5); // Üresen az első 5 ajánlott
    return fuse.search(query).map(r => r.item).slice(0, 20);
  }, [query, data, fuse]);

  // 3. Csoportosítás (Grouped Results)
  const grouped = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    results.forEach(item => {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    });
    return groups;
  }, [results]);

  // 4. Flattened list a billentyűzet navigációhoz
  const flattenedResults = useMemo(() => {
    return Object.values(grouped).flat();
  }, [grouped]);

  // 5. Scroll-into-view logika (Pro Feature)
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  // Shortcutok
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === 'Escape' && paletteOpen) {
        e.preventDefault();
        setPaletteOpen(false);
      }
      if (!paletteOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(i => (i + 1) % flattenedResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(i => (i - 1 + flattenedResults.length) % flattenedResults.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (flattenedResults[activeIndex]) {
          window.location.href = flattenedResults[activeIndex].link;
          setPaletteOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [paletteOpen, flattenedResults, activeIndex, setPaletteOpen]);

  // Reset index on query change
  useEffect(() => setActiveIndex(0), [query]);

  return (
    <>
      {/* Trigger Button */}
      {!hideTrigger && (
        <button
          onClick={() => setPaletteOpen(true)}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all group w-full max-w-xs",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
            triggerClassName
          )}
          aria-label="Keresés megnyitása"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
          <span className="text-sm text-slate-500 font-medium">{triggerLabel}</span>
          <kbd className="ml-auto hidden sm:inline-flex h-5 items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      )}

      <Dialog.Root open={paletteOpen} onOpenChange={setPaletteOpen}>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm"
            />
          </Dialog.Overlay>
          
          <Dialog.Content asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-[50%] top-[10%] z-50 w-full max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl"
            >
              {/* Header Input */}
              <div className="flex items-center border-b border-slate-100 px-4 py-4">
                <Search className="mr-3 h-5 w-5 text-slate-400" />
                  <input
                  ref={inputRef}
                  className="flex-1 bg-transparent text-lg font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  placeholder="Hová szeretnél menni?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <div onClick={() => setPaletteOpen(false)} className="cursor-pointer rounded-md p-1 hover:bg-slate-100 transition-colors">
                  <X className="h-5 w-5 text-slate-400" />
                </div>
              </div>

              {/* Találatok */}
              <div ref={listRef} className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent p-2">
                {flattenedResults.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50">
                      <Search className="h-6 w-6 text-slate-300" />
                    </div>
                    <p className="text-sm text-slate-500">Nincs találat a keresésre.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(grouped).map(([type, items]) => (
                      <div key={type} className="mb-2">
                        {/* Sticky Header */}
                        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {TYPE_CONFIG[type as keyof typeof TYPE_CONFIG]?.label || type}
                        </div>
                        
                        <div className="space-y-1">
                          {items.map((item) => {
                            const globalIndex = flattenedResults.indexOf(item);
                            const isActive = globalIndex === activeIndex;
                            const TypeIcon = TYPE_CONFIG[item.type as keyof typeof TYPE_CONFIG]?.icon || Sparkles;
                            const typeStyle = TYPE_CONFIG[item.type as keyof typeof TYPE_CONFIG] || { color: 'text-slate-500', bg: 'bg-slate-100' };

                            return (
                              <motion.div
                                key={item.id}
                                data-index={globalIndex}
                                layout
                                onClick={() => {
                                  window.location.href = item.link;
                                  setPaletteOpen(false);
                                }}
                                onMouseEnter={() => setActiveIndex(globalIndex)}
                                className={cn(
                                  "group relative flex cursor-pointer select-none items-center gap-4 rounded-xl p-3 transition-all duration-200",
                                  isActive ? "bg-slate-100" : "hover:bg-slate-50"
                                )}
                              >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                  <motion.div 
                                    layoutId="active-indicator"
                                    className="absolute left-0 h-8 w-1 rounded-r-full bg-indigo-500"
                                  />
                                )}

                                {/* Icon */}
                                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", typeStyle.bg, typeStyle.color)}>
                                  <TypeIcon size={20} />
                                
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-hidden">
                                  <h4 className="truncate text-sm font-medium text-slate-900">
                                    <HighlightedText text={item.title} highlight={query} />
                                  </h4>
                                  {item.description && (
                                    <p className="truncate text-xs text-slate-500 mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>

                                {/* Enter Icon (csak ha aktív) */}
                                {isActive && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-slate-400"
                                  >
                                    <CornerDownLeft size={18} />
                                  </motion.div>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-2.5 backdrop-blur text-[11px] text-slate-500">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5">
                    <Command size={12} /> <span className="font-medium">Keresés</span>
                  </span>
                  {query && (
                    <span className="text-slate-400">
                      {flattenedResults.length} találat
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-white px-1.5 py-0.5 border border-slate-200 font-sans text-[10px] shadow-sm">↑</kbd>
                    <kbd className="rounded bg-white px-1.5 py-0.5 border border-slate-200 font-sans text-[10px] shadow-sm">↓</kbd>
                    <span>navigálás</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-white px-1.5 py-0.5 border border-slate-200 font-sans text-[10px] shadow-sm">↵</kbd>
                    <span>megnyitás</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}