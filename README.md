# Verse Jersey - FIFA World Cup 2026 Jersey Store

Verse Jersey is a premium, cinematic e-commerce store built for high-performance football jerseys inspired by the FIFA World Cup 2026. The UI design incorporates stadium floodlight backdrops, glassmorphism panels, and "Electric Volt" neon accents.

## Features

1. **Cinematic Homepage (`index.html`)**:
   - Immersive hero section featuring World Cup 2026 drops.
   - Bento-grid featured collections.
   - Trending jerseys product carousel.
   - Quality tech spec cards and fan review sliders.
   - Interactive sliding cart drawer.

2. **Futuristic Jersey Customizer (`customize.html`)**:
   - Live preview studio with 3D-inspired workspace.
   - Front/Back interactive rotation.
   - Real-time SVG rendering of name plate and kit number.
   - Color and flag setups for Argentina, Brazil, France, Germany, Portugal, and Spain.
   - Option toggles for player/fan edition, patches, and sizes.
   - Live price calculation.

3. **Secure Checkout Flow (`checkout.html`)**:
   - Address verification and credit card inputs.
   - Dynamic price breakdown (subtotal, shipping discounts, estimated taxes).
   - Confirmation success panel displaying order number and shipping timeline.

## Tech Stack
- **HTML5**: Structured semantic markup.
- **Vanilla CSS3 (`styles.css`)**: Glassmorphism, animations, custom scrollbars, and neon glow effects.
- **Tailwind CSS (CDN)**: Modern utility layout structure.
- **Vanilla JavaScript (`app.js`)**: State engine, LocalStorage persistence, sliding drawer triggers, and dynamic SVG render vectors.

## How to Run Locally

You can run this project locally in two ways:

1. **Direct Browser**:
   Open [index.html](index.html) directly in any modern browser.

2. **Local HTTP Server (Recommended)**:
   Run a local web server from this directory to prevent CORS issues (if any) and ensure smooth routing:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```
   Then open `http://localhost:8000` or `http://localhost:3000` in your browser.
