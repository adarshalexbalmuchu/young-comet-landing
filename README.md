# Young Comet Landing Page

A clean, responsive landing page recreated from the provided design reference.

## Project Structure

- index.html: semantic page structure
- style.css: all styling, responsive breakpoints, animations, color variables
- script.js: subtle reveal behavior using IntersectionObserver
- .vscode/settings.json: editor defaults for this workspace
- .vscode/extensions.json: recommended VS Code extensions

## Run In VS Code

### Option 1 (recommended): Live Server

1. Open this folder in VS Code.
2. Install the recommended extension "Live Server" if prompted.
3. Right-click index.html and choose "Open with Live Server".

### Option 2: Direct browser open

1. Open index.html in any browser.

## Quick Editing Guide

### Change text content

- Edit all section text directly in index.html.

### Change colors quickly

- Open style.css.
- Update color variables under :root:
  - --bg
  - --text
  - --muted
  - --orange
  - --blue

### Change spacing/layout quickly

- Hero spacing and structure:
  - .hero
  - .hero-content
  - .hero-glow
- Intro spacing and structure:
  - .intro
  - .intro-content
- Floating cards:
  - .info-card-left
  - .info-card-right

### Change typography

- Main heading/body font: Manrope (Google Fonts in index.html)
- Serif italic accent font: Cormorant Garamond (Google Fonts in index.html)

## Notes

- The layout is desktop-first and adapts for tablet/mobile through media queries.
- Decorative doodles are SVG paths in index.html and can be edited directly.
- Animations are subtle and disabled automatically for reduced-motion users.
