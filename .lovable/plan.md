

## Plan: Generate updated Tilda HTML file with cover images and all resources

### Problem
The previously generated HTML for Tilda used emoji placeholders instead of real book cover images, and needs all current resources included.

### Approach
Since Vite hashes cover image filenames during build (making published URLs unpredictable), we'll generate **inline SVG covers** in Kandinsky style — unique abstract geometric art per book using CSS/SVG. This eliminates dependency on external image hosting entirely.

### What will be generated

A single file `/mnt/documents/mindlibrary-tilda.html` containing:

1. **Full dark theme** matching current site (HSL vars from `index.css`)
2. **Header** with MindLibrary logo (SVG BookOpen icon)
3. **Hero section** with "Библиотека мышления" headline and scroll button
4. **15 unique inline SVG covers** — each book gets a distinct abstract geometric composition using circles, lines, triangles in Kandinsky palette (matching the book's category color)
5. **Category filter tabs** with vanilla JS (all 7 categories)
6. **Book cards grid** — responsive 3-column layout with covers, titles, authors, descriptions, Ozon links
7. **All 8 resources** in a 2-column grid (Центр дизайн-мышления, ТРИЗ ассоциация, Анна Обухова, 5 тестов)
8. **Footer** with social links (Telegram, Дзен, ВК, Рутуб, МАХ)
9. **Inter font** from Google Fonts

### Technical details
- All CSS inlined in `<style>` tag
- All data and logic inlined in `<script>` tag
- SVG covers generated as data URIs or inline elements
- Zero external dependencies (no JS libraries)
- Works in Tilda T123 block

### Output
- File: `/mnt/documents/mindlibrary-tilda.html`

