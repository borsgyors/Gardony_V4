# SearchBar Component - Integration Guide

## Overview
A fast, user-friendly search bar component for the Gárdony website with real-time filtering, keyboard navigation, and smart result ranking.

## Features
✅ Real-time search with debouncing (150ms default)
✅ Smart scoring: exact matches → keyword matches → partial matches
✅ Keyboard navigation: ↑↓ for results, Enter to select, Esc to close
✅ Dropdown results with max 8 items
✅ Type icons and labels (Page / Event / Service)
✅ Text highlighting for matched queries
✅ Mobile-responsive design
✅ Dark mode support
✅ Accessibility: ARIA labels, semantic HTML
✅ Click outside to close
✅ No external dependencies

## Files
- **SearchBar.tsx** - React component with full functionality
- **SearchBar.css** - Styled with responsive design and dark mode
- **searchData.ts** - Data structure and sample data
- **Integration Examples** - Below

## Installation

### 1. Copy Files
Files are already in your workspace:
```
src/components/SearchBar.tsx
src/components/SearchBar.css
src/data/searchData.ts
```

### 2. Update SearchData (if needed)
Edit `src/data/searchData.ts` to add/modify your site content. Each item needs:
```typescript
{
  id: string;           // Unique identifier
  type: 'page' | 'event' | 'service';  // Content type
  title: string;        // Display name
  url: string;          // Navigation URL
  keywords: string[];   // Searchable terms (Hungarian)
  date?: string;        // Optional: event date (YYYY-MM-DD)
}
```

## Basic Usage

### Option 1: Header Integration
Add to your `site-header.tsx`:

```tsx
import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav>
        {/* Navigation items */}
      </nav>
      <SearchBar data={searchData} />
    </header>
  );
}
```

### Option 2: Standalone Page
Create a dedicated search page (`src/app/keresés/page.tsx`):

```tsx
'use client';

import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

export default function SearchPage() {
  return (
    <div className="search-page">
      <h1>Keresés</h1>
      <SearchBar 
        data={searchData}
        placeholder="Mit szeretnél keresni?"
        maxResults={10}
      />
    </div>
  );
}
```

### Option 3: Homepage Search Hero
Add prominent search on homepage (`src/app/page.tsx`):

```tsx
'use client';

import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Gárdony - Balaton-partjának Gyöngyszeme</h1>
        <p>Fedezd fel a várost</p>
        <SearchBar data={searchData} />
      </section>
      {/* Rest of page */}
    </main>
  );
}
```

## Component Props

```typescript
interface SearchBarProps {
  data: SearchData[];        // Required: Array of searchable items
  placeholder?: string;      // Default: "Keresés..."
  maxResults?: number;       // Default: 8 (max results to show)
  debounceMs?: number;       // Default: 150ms
}
```

## Styling Customization

### CSS Variables (add to your main CSS)
```css
:root {
  --search-primary-color: #3b82f6;
  --search-border-color: #e5e7eb;
  --search-bg-color: white;
  --search-text-color: #1f2937;
}
```

### Override Classes
```css
/* Custom styling */
.search-bar-container {
  max-width: 600px; /* Change max width */
}

.search-bar-input {
  font-size: 16px; /* Larger text */
  padding: 12px 16px; /* More padding */
}

.search-results {
  max-height: 500px; /* More results visible */
}

.result-type {
  background-color: #10b981; /* Green badges */
  color: white;
}
```

### Tailwind Integration
If you prefer Tailwind, you can convert the CSS:

```tsx
// In your component, replace className strings:
className="max-w-md mx-auto relative"  // search-bar-container
className="flex items-center bg-white border rounded-lg"  // search-bar-wrapper
className="flex-1 px-3 py-2 outline-none"  // search-bar-input
```

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| ↑ | Move up in results |
| ↓ | Move down in results |
| Enter | Select highlighted result |
| Esc | Close dropdown |

## Scoring Algorithm

Results are ranked by these criteria (highest score = first):
1. **Exact title match** - Score: 1000
2. **Title starts with query** - Score: 500
3. **Title contains query** - Score: 300
4. **Keyword exact match** - Score: 250
5. **Keyword contains query** - Score: 150
6. **Partial match** - Score: 100

Example: Searching "balaton" returns:
- "Balaton-Tudnivalók" (exact keyword match)
- "Balaton Borút Fesztivál" (title starts with)
- "Vízisport Festztiválja" (keyword "balaton" inside)

## Mobile Behavior

On mobile (< 640px):
- Results appear as fixed modal at bottom of screen
- Takes up 60% of viewport height
- Touch-friendly sizing
- 16px+ font size to prevent zoom

## Dark Mode
Automatically activates based on system preference (`prefers-color-scheme: dark`).
Works seamlessly with browser's dark mode setting.

## Accessibility

✅ ARIA attributes:
- `aria-label` on input
- `aria-expanded` for dropdown state
- `aria-autocomplete="list"` for search context
- `aria-controls` linking input to results

✅ Semantic HTML:
- Proper `<input>` element
- `<ul>` and `<li>` for results
- `<mark>` for highlighted text

✅ Keyboard navigation:
- Full keyboard support
- No mouse required
- Escape key works

## Performance Optimizations

1. **Debouncing** (default 150ms):
   - Prevents excessive filtering on every keystroke
   - Configurable via `debounceMs` prop

2. **Result limiting**:
   - Max 8 results by default
   - Prevents rendering huge lists

3. **Efficient scoring**:
   - O(n) complexity per search
   - No DOM manipulation on input

4. **Memoization**:
   - Uses `useCallback` for handlers
   - `useRef` for DOM elements
   - Proper dependency arrays

## Adding Custom Content

### Add a Blog Category
```typescript
{
  id: 'page-blog',
  type: 'page',
  title: 'Blogja',
  url: '/blog',
  keywords: ['blog', 'cikkek', 'sajtó', 'hírek'],
}
```

### Add a Seasonal Event
```typescript
{
  id: 'event-winter-market',
  type: 'event',
  title: 'Téli Vásár',
  url: '/hirek#winter-market',
  date: '2026-12-10',
  keywords: ['tél', 'vásár', 'karácsonyi', 'ünnep'],
}
```

### Add a Service Category
```typescript
{
  id: 'service-museum',
  type: 'service',
  title: 'Gárdony Múzeum',
  url: '/turizmus#museum',
  keywords: ['múzeum', 'történelem', 'kiállítás', 'kultúra'],
}
```

## Testing Search Results

Open browser DevTools and test these queries:

```javascript
// Hungarian keywords to try
"balaton"        // Beach/lake activities
"nyár"           // Summer events
"szállás"        // Accommodation
"étterem"        // Restaurants
"event"          // Shows only events
"turizmus"       // Tourism pages
```

## Browser Support
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Future Enhancements (Optional)

```typescript
// 1. Add filters
<SearchBar 
  data={searchData}
  filters={{ 
    type: ['event', 'service'],  // Show only these types
    date: '2026-06' // Filter by month
  }}
/>

// 2. Add analytics
<SearchBar 
  data={searchData}
  onSearch={(query) => trackSearch(query)}
  onSelect={(result) => trackClick(result.id)}
/>

// 3. Add favorites/recent searches
// 4. Add autocomplete suggestions
// 5. Integrate with Algolia for larger datasets
```

## Troubleshooting

**Problem**: Results not showing
- Check `searchData` is imported correctly
- Verify keywords are in lowercase
- Open DevTools to see if items are in the array

**Problem**: Navigation doesn't work
- Ensure URLs in searchData match your app's routes
- Check Next.js routing is set up correctly
- Use `useRouter` hook (already imported)

**Problem**: Styling looks off
- Check SearchBar.css is imported in the component
- Verify no conflicting global CSS
- Check dark mode isn't active

**Problem**: Slow performance with many items
- Increase `debounceMs` to 200+
- Reduce `maxResults` prop
- Consider pagination for 1000+ items

## License & Attribution
This component is custom-built for the Gárdony website. Reuse and modification are allowed.

---

**Need help?** Check the example implementations or modify `searchData.ts` to match your content.
