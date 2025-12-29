'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useSearch, SearchData } from '@/hooks/useSearch';
import { Search, X } from 'lucide-react';

interface HeaderSearchProps {
  data: SearchData[];
  placeholder?: string;
  variant?: 'minimal' | 'full';
  expanded?: boolean;
  autoFocus?: boolean;
  onClose?: () => void;
  hideTrigger?: boolean;
}

export function HeaderSearch({ data, placeholder = 'Keresés...', variant = 'minimal', expanded = false, autoFocus = false, onClose, hideTrigger = false }: HeaderSearchProps) {
  const {
    query,
    setQuery,
    results,
    isOpen,
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
    navigateTo,
    inputRef,
  } = useSearch({ data, maxResults: 8, debounceMs: 200 });

  const [isExpanded, setIsExpanded] = useState(expanded);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  React.useEffect(() => {
    if (isExpanded && autoFocus) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, autoFocus, inputRef]);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
    setQuery('');
    onClose?.();
  }, [onClose, setQuery]);

  const handleIconClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleKeyDownWrapper = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') handleClose();
    if (e.key === 'Enter' && selectedIndex >= 0) setIsExpanded(false);
    handleKeyDown(e);
  }, [handleClose, handleKeyDown, selectedIndex]);

  const highlightMatch = (text: string, q: string) => {
    if (!q.trim()) return text;
    const query = q.toLowerCase();
    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(query);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-amber-200 text-gray-900 font-medium">{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return '📅';
      case 'service': return '🏢';
      case 'page': return '📄';
      case 'news': return '📰';
      default: return '🔗';
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'event': return 'Esemény';
      case 'service': return 'Szolgáltatás';
      case 'page': return 'Oldal';
      case 'news': return 'Hír';
      default: return 'Tartalom';
    }
  };

  if (variant === 'minimal') {
    return (
      <>
        <style>{`
          .search-minimal-container {
            width: 2.75rem;
            height: 2.75rem;
            position: relative;
          }

          .search-minimal-icon-btn {
            background-color: #2C7BA0;
            border: none;
            cursor: pointer;
            color: #ffffff;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 0.375rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
          }

          .search-minimal-icon-btn:hover { background-color: #1A4D6B; }

          .search-minimal-dropdown-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 998;
            animation: fadeIn 0.2s ease;
          }

          .search-minimal-dropdown-panel {
            position: fixed;
            top: 5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 94vw;
            max-width: 1000px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
            z-index: 999;
            padding: 1.25rem;
            animation: slideDownFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          
          @keyframes slideDownFade {
            from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
          }

          .search-input-wrapper {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .search-minimal-dropdown-input {
            flex: 1;
            height: 3.5rem;
            padding: 0 1.25rem;
            font-size: 1.1rem;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            outline: none;
            transition: border-color 0.2s;
          }

          .search-minimal-dropdown-input:focus { border-color: #2C7BA0; }

          .search-minimal-results-list {
            max-height: 60vh;
            overflow-y: auto;
            margin: 0;
            padding: 0;
            list-style: none;
            border-top: 1px solid #f3f4f6;
          }

          .search-minimal-result-item {
            padding: 1rem;
            display: flex;
            gap: 1rem;
            cursor: pointer;
            border-bottom: 1px solid #f9fafb;
            transition: background 0.2s;
          }

          .search-minimal-result-item:hover, 
          .search-minimal-result-item.selected {
            background-color: #f0f9ff;
          }

          .search-minimal-result-icon { font-size: 1.5rem; }
          .search-minimal-result-title { font-weight: 600; color: #1f2937; }
          .search-minimal-result-meta { font-size: 0.75rem; color: #6b7280; display: flex; gap: 0.5rem; margin-top: 0.25rem; }
          .search-minimal-result-type { background: #f3f4f6; padding: 0.1rem 0.4rem; border-radius: 4px; }
          .search-minimal-result-excerpt { font-size: 0.85rem; color: #4b5563; margin-top: 0.4rem; }

          @media (min-width: 768px) {
            .search-minimal-dropdown-panel { top: 7rem; width: 85vw; padding: 2rem; }
          }
        `}</style>

        {!hideTrigger && (
          <div className="search-minimal-container" role="search" ref={searchWrapperRef}>
            <button type="button" onClick={handleIconClick} className="search-minimal-icon-btn" title="Keresés">
              <Search size={20} />
            </button>
          </div>
        )}

        {isExpanded && (
          <>
            <div className="search-minimal-dropdown-overlay" onClick={handleClose} />
            <div className="search-minimal-dropdown-panel">
              <div className="search-input-wrapper">
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDownWrapper}
                  placeholder={placeholder}
                  className="search-minimal-dropdown-input"
                  autoComplete="off"
                />
                <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {isOpen && query.trim() && (
                <div className="search-results-container">
                  {results.length > 0 ? (
                    <ul className="search-minimal-results-list">
                      {results.map((result, i) => (
                        <li
                          key={result.id}
                          className={`search-minimal-result-item ${i === selectedIndex ? 'selected' : ''}`}
                          onClick={() => {
                            setIsExpanded(false);
                            onClose?.();
                            navigateTo(result);
                          }}
                          onMouseEnter={() => setSelectedIndex(i)}
                        >
                          <div className="search-minimal-result-icon">{getIcon(result.type)}</div>
                          <div className="search-minimal-result-content">
                            <div className="search-minimal-result-title">{highlightMatch(result.title, query)}</div>
                            <div className="search-minimal-result-meta">
                              <span className="search-minimal-result-type">{getLabel(result.type)}</span>
                              {result.date && <span>• {result.date}</span>}
                            </div>
                            {result.excerpt && <p className="search-minimal-result-excerpt">{result.excerpt}</p>}
                          </div>
                          {i === selectedIndex && <div className="text-blue-600 self-center">→</div>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      ❌ Nincs találat a következőre: <strong>"{query}"</strong>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }

  return null;
}