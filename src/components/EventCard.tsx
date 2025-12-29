'use client';

import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export interface EventData {
  id: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  category?: string;
  link?: string;
}

interface EventCardProps {
  event: EventData;
  searchQuery?: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * Event Card Component
 * Displays event information with optional search highlighting
 */
export const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  ({ event, searchQuery = '', isActive = false, onClick }, ref) => {
    const highlightText = (text: string, query: string) => {
      if (!query.trim()) return text;

      const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));

      return (
        <>
          {parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <span key={i} className="bg-yellow-200 font-semibold">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </>
      );
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`p-4 rounded-lg border transition-all cursor-pointer ${
          isActive
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : 'border-gray-200 bg-white hover:shadow-md'
        }`}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {searchQuery ? highlightText(event.title, searchQuery) : event.title}
        </h3>

        {event.description && (
          <p className="text-gray-600 text-sm mb-3">
            {searchQuery ? highlightText(event.description, searchQuery) : event.description}
          </p>
        )}

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {event.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          )}
        </div>

        {event.category && (
          <div className="mt-3">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
              {event.category}
            </span>
          </div>
        )}

        {event.link && (
          <div className="mt-3">
            <a
              href={event.link}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Részletek →
            </a>
          </div>
        )}
      </div>
    );
  }
);

EventCard.displayName = 'EventCard';
