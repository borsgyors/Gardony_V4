# 🔍 SearchBar - Telepítési Útmutató (Lépésről Lépésre)

## 1️⃣ ELŐKÉSZÍTÉS (2 perc)

### Olvasd el ezt előbb:
```
SEARCH_BAR_QUICKSTART.md (5 percig)
```

### Fájlok helye ellenőrzése:
```
✓ src/components/SearchBar.tsx (jelen van)
✓ src/components/SearchBar.css (jelen van)
✓ src/data/searchData.ts (jelen van)
```

---

## 2️⃣ TELEPÍTÉS (3 perc)

### A. Nyisd meg az `src/components/site-header.tsx` fájlt

### B. Importálj az alján (vagy tetején)
```tsx
import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';
```

### C. Add hozzá a komponensbe
```tsx
// Felveheted bárhol, például a fejlécben:
<header className="site-header">
  <Logo />
  
  {/* KERESÉSI SÁV */}
  <div className="header-search">
    <SearchBar data={searchData} />
  </div>
  
  <NavMenu />
</header>
```

### D. Opcionális CSS a headerhez
```css
.header-search {
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
}

@media (max-width: 768px) {
  .header-search {
    max-width: 100%;
    margin: 10px 0;
  }
}
```

---

## 3️⃣ TESZTELÉS (5 perc)

### Terminal megnyitása (Ctrl + `)
```bash
npm run dev
```

### Böngészőben (http://localhost:3000)
1. ✅ Megjelennek a keresési sáv?
2. ✅ Kattintható?
3. ✅ Begépelhetsz?

### Keresési szavak tesztelése
```
"balaton"    → Strand, tó, vízisportok
"nyár"       → Nyári programok
"szállás"    → Szobák, kemping, hotel
"étterem"    → Vendéglátás
"fesztivál"  → Rendezvények
```

### Billentyűzet tesztelése
```
1. Kattints a keresési sávra
2. Begépeled: "bal"
3. Megjelennek az eredmények
4. Nyomj ↓ → Kijelölődik az első
5. Nyomj ↓ → A másodikra kerül
6. Nyomj Enter → Navigálás az oldal URL-jére
7. Nyomj Esc → Bezáródik az eredménylista
```

### Mobil tesztelése
```
1. F12 DevTools
2. Ctrl+Shift+M (Responsive Mode)
3. Válassz "iPhone 12" vagy "iPad"
4. Tesztelj ugyanígy
```

---

## 4️⃣ TESTRESZABÁS (Opcionális, 10 perc)

### A. Szín megváltoztatása

Nyisd meg: `src/components/SearchBar.css`

Keress: `.search-bar-wrapper:focus-within`

Módosítsd:
```css
.search-bar-wrapper:focus-within {
  border-color: #10b981;  /* Zöld helyett kék */
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}
```

### B. Szélesség beállítása

Keress: `.search-bar-container`

Módosítsd:
```css
.search-bar-container {
  max-width: 600px;  /* 500px helyett */
}
```

### C. Placeholder szöveg

Módosítsd a komponensben:
```tsx
<SearchBar 
  data={searchData}
  placeholder="Mit szeretnél keresni?"  // Új szöveg
/>
```

### D. Max eredmények száma

Módosítsd a komponensben:
```tsx
<SearchBar 
  data={searchData}
  maxResults={12}  // 8 helyett 12
/>
```

---

## 5️⃣ TARTALOM FRISSÍTÉSE (Opcionális, 15 perc)

### Nyisd meg: `src/data/searchData.ts`

### Új oldal hozzáadása:
```typescript
{
  id: 'page-galeria',
  type: 'page',
  title: 'Fotógaléria',
  url: '/galeria',
  keywords: ['fotó', 'képek', 'galéria', 'szépség'],
}
```

### Új esemény hozzáadása:
```typescript
{
  id: 'event-karácsonyi',
  type: 'event',
  title: 'Karácsonyi Vásár',
  url: '/hirek#christmas',
  date: '2025-12-15',
  keywords: ['karácsony', 'vásár', 'ünnep', 'ajándék'],
}
```

### Új szolgáltatás hozzáadása:
```typescript
{
  id: 'service-fitnesz',
  type: 'service',
  title: 'Fitnessz Studio',
  url: '/szallas-vendeglatas#fitness',
  keywords: ['fitnesz', 'sport', 'edzés', 'mozgás'],
}
```

---

## 6️⃣ DEMO OLDAL MEGTEKINTÉSE (2 perc)

Böngészőben nyiss meg:
```
http://localhost:3000/search-demo
```

Meglátod:
- ✅ Működő keresési sáv
- ✅ Keresési tippek
- ✅ Billentyűzet parancsok
- ✅ Algoritmus magyarázat
- ✅ Kód példák

---

## ✅ VÉGCHECKLIST

- [ ] SearchBar.tsx & CSS jelen van
- [ ] Importálva site-header.tsx (vagy más) fájlban
- [ ] Komponens hozzáadva a JSX-hez
- [ ] Tesztelve a keresés ("balaton" szó)
- [ ] Tesztelve billentyűzet navigáció (↑↓Enter)
- [ ] Tesztelve mobil nézetben
- [ ] Tesztelve sötét módban (ha van)
- [ ] Tesztelve kattintás egy eredményre
- [ ] Tesztelve Esc gomb (bezárás)
- [ ] Tesztelve kívül kattintás (bezárás)

---

## 🎯 GYAKORI HIBÁK & MEGOLDÁSOK

### Hiba #1: "SearchBar nem található"
```
❌ Hibaüzenet: Cannot find module 'SearchBar'
✅ Megoldás: Ellenőrizd az import útvonalát:
   import SearchBar from '@/components/SearchBar';
```

### Hiba #2: "Nincs CSS"
```
❌ Hibaüzenet: Stílus nem jelenik meg / szín hiányzik
✅ Megoldás: Ellenőrizd, SearchBar.tsx tartalmazza:
   import './SearchBar.css';
```

### Hiba #3: "Nincs eredmény"
```
❌ Hibaüzenet: Semmit sem talál
✅ Megoldás: Ellenőrizd:
   1. searchData importálva van-e
   2. searchData tartalmaz-e elemeket
   3. Kulcsszavak magyar nyelvűek-e
```

### Hiba #4: "Navigálás nem működik"
```
❌ Hibaüzenet: Kattintás után semmi nem történik
✅ Megoldás: Ellenőrizd az URL-eket searchData.ts-ben:
   ✓ url: '/turizmus' (létezik az útvonal)
   ❌ url: '/invalid' (nem létezik)
```

### Hiba #5: "Mobil furcsán néz ki"
```
❌ Hibaüzenet: Mobil nézetben hiba van
✅ Megoldás: Frissítsd az oldalt (Ctrl+F5)
   vagy töröld a böngésző cache-t
```

---

## 📞 SEGÍTSÉG KERESÉSE

### 1. Gyors Megoldások
→ **SEARCH_BAR_QUICKSTART.md**

### 2. Részletes Útmutató
→ **SEARCH_BAR_INTEGRATION.md**

### 3. API Dokumentáció
→ **SEARCH_BAR_README.md**

### 4. UI/UX Útmutató
→ **SEARCH_BAR_VISUAL_GUIDE.md**

### 5. Működő Demo
→ `/search-demo` route

---

## 🎉 GRATULÁLUNK!

Ha mindent követtél, akkor:
- ✅ A SearchBar működik
- ✅ Kereshetsz a webhelyén
- ✅ Billentyűzet navigáció működik
- ✅ Mobil-responsz
- ✅ Sötét mód támogatott

**Kész vagy! 🚀**

---

## 📊 IDŐBECSLÉS

| Lépés | Idő |
|-------|-----|
| 1. Előkészítés | 2 perc |
| 2. Telepítés | 3 perc |
| 3. Tesztelés | 5 perc |
| 4. Testreszabás | 10 perc (opcionális) |
| 5. Tartalom frissítés | 15 perc (opcionális) |
| 6. Demo megtekintése | 2 perc |
| **Összesen** | **~15-30 perc** |

---

## 🔄 TOVÁBBI DOKUMENTÁCIÓ

Teljes dokumentáció:
```
├── SEARCH_BAR_QUICKSTART.md       (Ezt most olvasod)
├── SEARCH_BAR_INTEGRATION.md      (Teljes utmutato)
├── SEARCH_BAR_README.md           (Referencia)
├── SEARCH_BAR_VISUAL_GUIDE.md     (UI/UX)
├── SEARCH_BAR_SUMMARY.md          (Összegzés)
└── SEARCH_BAR_MANIFEST.md         (Fájllista)
```

---

## 💡 PRO TIPPEK

1. **Kulcsszavak**: Adj hozzá magyar szinonimákat
   ```typescript
   keywords: ['strand', 'fürdő', 'vízpart', 'balaton']
   ```

2. **Keresés a fejlécben**: Tegyük középpontba
   ```tsx
   <div style={{ flex: 1, maxWidth: '500px', margin: '0 auto' }}>
     <SearchBar data={searchData} />
   </div>
   ```

3. **Fő oldal hero**: Nagyobb keresés
   ```tsx
   <section className="hero">
     <h1>Gárdony - Fedezd Fel</h1>
     <SearchBar 
       data={searchData}
       maxResults={10}
       placeholder="Mit szeretnél megtudni?"
     />
   </section>
   ```

4. **Analitika** (később): Követheted a kereséseket
   ```tsx
   <SearchBar 
     data={searchData}
     onSearch={(q) => console.log('Search:', q)}
   />
   ```

---

## ❓ KÉRDÉSEK?

1. Nézd meg a dokumentációkat
2. Szerkeszd a kódot
3. Tesztelj
4. Ismételd meg (2-3)

**Győztes vagy! 🏆**

---

*Utolsó frissítés: 2025. december 12.*  
*SearchBar komponens v1.0*  
*Gárdony Város Webhelye*
