# 🔍 Gárdony SearchBar - Gyorsindítási Útmutató

## Mit Kapunk?

✅ **SearchBar.tsx** - Teljes React komponens billentyűzet navigációval  
✅ **SearchBar.css** - Teljes stílus, sötét mód, mobil responsz  
✅ **searchData.ts** - Magyar tartalom, 20+ oldal/esemény/szolgáltatás  
✅ **Dokumentáció** - Teljes integrációs útmutató  
✅ **Példák** - SearchBarExample.tsx, SearchBarShowcase.tsx  

---

## 🚀 3 Lépéses Telepítés

### 1️⃣ Másolás (már megtörtént)
Fájlok már az alábbi helyeken vannak:
```
src/components/SearchBar.tsx      ← Fő komponens
src/components/SearchBar.css      ← Stílusok
src/data/searchData.ts            ← Tartalom adat
src/components/SearchBarExample.tsx
src/components/SearchBarShowcase.tsx
```

### 2️⃣ Importálás az alkalmazásba
Nyisd meg a **site-header.tsx** vagy **layout.tsx** fájlt:

```tsx
'use client';
import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

export function SiteHeader() {
  return (
    <header className="header">
      {/* Navigáció */}
      
      {/* KERESÉSI SÁV */}
      <SearchBar data={searchData} placeholder="Keresés..." />
    </header>
  );
}
```

### 3️⃣ Kész!
A keresés működik. Próbáld ki az alábbi szavakkal:
- `balaton` - Strand, tó, vízi sportok
- `nyár` - Nyári programok
- `szállás` - Szobák, hotel, kemping
- `étterem` - Vendéglátás
- `fesztivál` - Rendezvények

---

## 📍 Hol Helyezzük El?

### ✅ **Legális Helyek**

1. **Fejlécben (TOP)**
```tsx
export function SiteHeader() {
  return (
    <header>
      <Logo />
      <SearchBar data={searchData} />
      <NavMenu />
    </header>
  );
}
```

2. **Főoldal Középpontjában**
```tsx
export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Gárdony</h1>
        <SearchBar data={searchData} maxResults={10} />
      </section>
    </main>
  );
}
```

3. **Dedikált Keresés Oldal**
```tsx
// src/app/keresés/page.tsx
export default function SearchPage() {
  return (
    <div>
      <h1>Keresés</h1>
      <SearchBar data={searchData} />
    </div>
  );
}
```

---

## ⚙️ Konfigurálás (Opcionális)

### Placeholder Szöveg
```tsx
<SearchBar 
  data={searchData}
  placeholder="Mit szeretnél keresni?"
/>
```

### Több Eredmény Megjelenítése
```tsx
<SearchBar 
  data={searchData}
  maxResults={12}  // 8 helyett 12
/>
```

### Gyorsabb Válasz
```tsx
<SearchBar 
  data={searchData}
  debounceMs={100}  // 150ms helyett 100ms
/>
```

---

## 🎯 Keresési Funkcionalitás

### Hogyan Működik?

1. **Tipizalsz**: Az input mező rögzíti a szöveget
2. **Szűrés**: 150ms után az algoritmus szűr
3. **Pontszámítás**: Felhasználásra rendez (tökéletes match → részleges)
4. **Megjelenítés**: Max 8 eredményt jelenít meg
5. **Kiválasztás**: Kattintás vagy Enter → navigálás

### Pontszámítás (Mért számít)

| Egyezés | Pont | Példa |
|---------|------|--------|
| Tökéletes cím | 1000 | "Balaton" → "Balaton-Tudnivalók" |
| Cím kezdete | 500 | "Bal" → "Balaton Borút Fesztivál" |
| Cím tartalmazza | 300 | "Tó" → "Balaton-Tudnivalók" |
| Kulcsszó egyezés | 250 | "balaton" (kulcsszó) → "Vízi Sport" |
| Kulcsszó tartalmazza | 150 | "bal" → (kulcsszóban "balaton") |

---

## ⌨️ Billentyű Parancsok

| Billentyű | Mit Csinál |
|-----------|-----------|
| **↓** | Következő eredmény |
| **↑** | Előző eredmény |
| **Enter** | Kijelölt megnyitása |
| **Esc** | Lezárás |

---

## 🎨 Stílus Testreszabás

### Szín Megváltoztatása

Keress a **SearchBar.css** fájlban és módosítsd:

```css
.search-bar-wrapper:focus-within {
  border-color: #22c55e;  /* Zöld helyett kék */
}

.search-result-item.selected {
  background-color: #dcfce7;  /* Zöld highlight */
}

.result-type {
  background-color: #dcfce7;  /* Zöld badge */
  color: #166534;
}
```

### Max Szélesség

```css
.search-bar-container {
  max-width: 600px;  /* 500px helyett 600px */
}
```

---

## 📱 Mobilnézetben Automatikusan

- Kis képernyőkön (`< 640px`) az eredmények alul jelennek meg
- 16px+ betűméret az iOS zoom megakadályozásához
- Teljes képernyő magasság használata
- Touch-friendly tapasztatok

---

## 🔧 Tartalom Módosítása

### Új Oldal Hozzáadása

Szerkeszd a `src/data/searchData.ts` fájlt:

```typescript
{
  id: 'page-sports',
  type: 'page',
  title: 'Sport Lehetőségek',
  url: '/sports',
  keywords: ['sport', 'fitnesz', 'edzés', 'mozgás'],
}
```

### Új Esemény Hozzáadása

```typescript
{
  id: 'event-yoga',
  type: 'event',
  title: 'Jóga a Parton',
  url: '/hirek#yoga',
  date: '2026-06-21',
  keywords: ['jóga', 'wellness', 'balaton', 'nyár'],
}
```

### Új Szolgáltatás Hozzáadása

```typescript
{
  id: 'service-massage',
  type: 'service',
  title: 'Masszázs Szolgáltatás',
  url: '/szallas-vendeglatas#massage',
  keywords: ['masszázs', 'wellness', 'relaxáció'],
}
```

---

## 🧪 Tesztelés

### Chrome DevTools Console

Nyisd meg az F12 DevTools-t és tesztelj:

```javascript
// Keressek ezekkel:
"balaton"      // Strand, tó, vízisportok
"nyár"         // Nyári rendezvények
"szállás"      // Szállások
"étterem"      // Vendéglátás
"event"        // Csak események
"2026"         // Dátum alapon
```

### Funkcionalitás Ellenőrzése

- ✅ Írj `ba` → Bal-stöm eredmények
- ✅ Nyomj ↓ → Kijelölés mozog
- ✅ Nyomj Enter → Navigálás
- ✅ Nyomj Esc → Lezárul
- ✅ Kattints kívülre → Lezárul

---

## 🐛 Hibaelhárítás

### Nincs eredmény
**Probléma**: Keresés nem működik  
**Megoldás**: Ellenőrizd, hogy `searchData` importálva van-e és tartalmaz-e elemeket

```typescript
import { searchData } from '@/data/searchData';  // ✓
<SearchBar data={searchData} />                   // ✓
```

### Stílus nem jó
**Probléma**: Szín vagy layout furcsán néz ki  
**Megoldás**: Ellenőrizd, hogy SearchBar.css importálva van-e:

```tsx
import './SearchBar.css';  // A komponensben legyen
```

### Navigálás nem működik
**Probléma**: Kattintás nem visz máshová  
**Megoldás**: Ellenőrizd az URL-ek:

```typescript
// URL-nek az alkalmazásod útvonalainak kell lennie
url: '/turizmus'  // ✓ Van ilyen route
url: '/szallas'   // ❌ Nincs szallas route (szallas-vendeglatas)
```

---

## 📚 Teljes Dokumentáció

Részletes útmutató: **SEARCH_BAR_INTEGRATION.md**

Tartalmaz:
- Fejlett konfigurálást
- CSS testreszabást
- Teljesítményt optimalizálást
- Hozzáférhetőségi funkciókat
- Jövőbeli bővítéseket

---

## 💡 Pro Tippek

1. **Kulcsszavak**: Adj hozzá magyar szinonimákat!
   ```typescript
   keywords: ['strand', 'fürdő', 'vízpart', 'balaton']
   ```

2. **Dátumok**: Eseményeknek add meg a dátumot!
   ```typescript
   date: '2026-06-14'  // YYYY-MM-DD formátum
   ```

3. **Mobilnézet**: Az eredmények automatikusan alul jelennek meg
   (nem kell külön dolgozni)

4. **Sötét mód**: Automatikus, nem kell testedezni

---

## 🎉 Kész!

A keresési sáv teljes funkcionalitással működik. Nincs további beállítás szükséges.

**Következő lépések:**
1. ✅ Integrálás a site-header.tsx-be
2. ✅ Tesztelés (írj "balaton")
3. ✅ Stílus testreszabása (opcionális)
4. ✅ Tartalom frissítése (opcionális)

---

**Kérdések?** Nézd meg az **SEARCH_BAR_INTEGRATION.md** dokumentumot!
