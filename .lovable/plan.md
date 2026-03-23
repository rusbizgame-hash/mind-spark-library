

## Plan: Generate embed code for GetCourse

### Problem
User needs a short code snippet to embed the MindLibrary site into GetCourse (Russian LMS platform).

### Approach
Generate a simple iframe embed code that points to the published site URL. GetCourse supports HTML blocks where iframe code can be pasted.

### What will be generated

A file `/mnt/documents/getcourse-embed.html` with two options:

1. **iframe embed** — short `<iframe>` tag pointing to `https://mind-spark-library.lovable.app` with responsive styling
2. **Full-page redirect** — a simple JS redirect snippet if user wants GetCourse page to fully redirect

### Technical details
- iframe with `width:100%`, responsive height via CSS
- No scrollbar on parent, allow scrolling inside iframe
- `allow` attributes for proper rendering
- Works in GetCourse HTML block (Текстовый блок → HTML mode, or custom code block)

### Output
- File: `/mnt/documents/getcourse-embed.html`

