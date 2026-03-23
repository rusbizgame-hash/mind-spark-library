

## MindLibrary — Recreate as React App

### Overview
Recreate the MindLibrary site (Russian-language book catalog for TRIZ, critical thinking, and logic) as a full React application with the following sections: sticky header, hero section, book catalog with category tabs, and footer with social links.

### Color Scheme & Design
- Dark theme with warm amber/gold accents
- Background: dark navy/charcoal (`hsl(220, 20%, 10%)`)
- Accent: amber/gold (`hsl(40, 90%, 55%)`)
- Cards: slightly lighter dark background with subtle borders
- Smooth scroll, modern typography using Inter font

### Components to Create

1. **`src/components/Header.tsx`** — Sticky navbar with "MindLibrary" logo/text and hamburger menu icon. Clean, minimal dark header.

2. **`src/components/Hero.tsx`** — Full-width hero with headline "Прокачай свое мышление", subtitle about the curated book collection (TRIZ, troubleshooting, critical thinking, logic, argumentation), and a CTA button "Смотреть подборку" that scrolls to catalog.

3. **`src/components/BookCatalog.tsx`** — Main catalog section with:
   - Category filter tabs (ТРИЗ, Траблшутинг, Критическое мышление, Логика, Аргументация)
   - Grid of book cards (responsive: 1-3 columns)
   - Each card: book cover image placeholder, title, author, short description, "Купить на Ozon" link button
   - Static data array of ~10-15 sample books across categories

4. **`src/components/BookCard.tsx`** — Individual book card component with hover effects.

5. **`src/components/Footer.tsx`** — Footer with "Сделано КОРИТМ центром" credit, disclaimer about Ozon links, and social media links (Telegram, Дзен, ВКонтакте, Рутуб, МАХ).

### Files Modified

- **`src/pages/Index.tsx`** — Compose all sections
- **`src/index.css`** — Update CSS variables for dark theme with amber accents
- **`index.html`** — Update title to "MindLibrary" and meta descriptions
- **`src/App.css`** — Remove unused default styles

### Data Structure
```text
Book {
  id, title, author, description,
  category, coverUrl, ozonUrl
}
```

Books stored as a static array in a `src/data/books.ts` file with sample entries for each category.

### Technical Notes
- Uses existing shadcn/ui components (Button, Card, Badge, Tabs)
- Lucide React icons for UI elements
- Smooth scroll via `scroll-smooth` class on html
- Fully responsive with Tailwind breakpoints
- All text in Russian matching the original

