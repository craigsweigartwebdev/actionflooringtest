# Action Flooring 208 - Optional Modules

This folder contains optional feature modules that can be added to the website.

## Quick Start

### Using the Module Tester (Development)
The website includes a built-in module tester sidebar (🧪 icon on the right side of the page).
Click any module to load it dynamically and preview its functionality.

### Production Usage
Add the desired module script tags before `</body>` in your HTML:

```html
<script src="modules/scheduling-widget.js"></script>
<script src="modules/chatbot-widget.js"></script>
```

### Removing the Module Tester
Simply delete or comment out this line from your HTML files:
```html
<script src="modules/module-tester.js"></script>
```

---

## Available Modules

| # | Module | File | Description |
|---|--------|------|-------------|
| 1 | **Online Scheduling** | `scheduling-widget.js` | Appointment booking widget with calendar |
| 2 | **Flooring Visualizer** | `flooring-visualizer.js` | Interactive room + flooring preview |
| 3 | **Before/After Slider** | `before-after-slider.js` | Drag-to-compare project slider |
| 4 | **Newsletter Popup** | `newsletter-popup.js` | Email capture with exit intent |
| 5 | **Chatbot Widget** | `chatbot-widget.js` | FAQ bot with real-time responses |
| 6 | **Blog Section** | `blog-section.js` | Flooring tips & guides section |
| 7 | **Video Hero** | `video-hero.js` | Video background for hero |
| 8 | **Product Filters** | `product-filters.js` | Filter by color, style, price |
| 9 | **Multilingual** | `multilingual.js` | English/Spanish language switcher |
| 10 | **SEO & Analytics** | `seo-analytics.html` | Schema markup & tracking snippets |

---

## Module Details

### 1. Online Scheduling (`scheduling-widget.js`)
Adds a floating "Book Consultation" button that opens a booking modal.
- Service type selection
- Date & time picker
- Contact info collection

### 2. Flooring Visualizer (`flooring-visualizer.js`)
Interactive tool to preview different flooring options.
- Room selection (Living Room, Kitchen, Bedroom)
- Flooring color/type swatches
- Real-time preview

### 3. Before/After Slider (`before-after-slider.js`)
Showcases project transformations with a draggable slider.
- Touch & mouse support
- Multiple project examples

### 4. Newsletter Popup (`newsletter-popup.js`)
Email capture popup with special offer.
- Timed display (5 seconds)
- Exit intent trigger
- Session-based (won't repeat)

### 5. Chatbot Widget (`chatbot-widget.js`)
Floating chat assistant for FAQs.
- Pre-programmed responses
- Covers hours, services, pricing, areas

### 6. Blog Section (`blog-section.js`)
Adds a blog/guides section with sample articles.
- Flooring tips
- Care guides
- Trend articles

### 7. Video Hero (`video-hero.js`)
Replaces hero background image with video.
- Auto-play, muted, looped
- Pause when out of viewport

### 8. Product Filters (`product-filters.js`)
Adds filterable product catalog.
- Filter by type, color, price range
- Grid layout with product cards

### 9. Multilingual (`multilingual.js`)
Language switcher (English/Spanish).
- Floating language button
- LocalStorage persistence

### 10. SEO & Analytics (`seo-analytics.html`)
Copy-paste snippets for:
- Schema.org structured data
- Google Analytics 4
- Conversion tracking
- Meta tags

---

## File Structure

```
modules/
├── README.md                 # This file
├── module-tester.js          # Dev sidebar (remove for production)
├── scheduling-widget.js
├── flooring-visualizer.js
├── before-after-slider.js
├── newsletter-popup.js
├── chatbot-widget.js
├── blog-section.js
├── video-hero.js
├── product-filters.js
├── multilingual.js
└── seo-analytics.html
```

---

## Notes

- All modules are self-contained and inject their own HTML/CSS
- Modules can be combined without conflicts
- For production, minify JavaScript files for better performance
- Test thoroughly before deploying
