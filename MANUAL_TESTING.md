# 🧪 Manual Testing & Quality Assurance Plan

This document outlines the manual verification procedures to ensure the **PranshulOS Landing Page** remains responsive, accessible, interactive, and visually flawless across all resolutions and devices.

---

## 📱 1. Mobile & Touch Screen Usability Testing

Open Chrome DevTools (`F12`), toggle the Device Toolbar (`Ctrl + Shift + M`), and test across these viewports:

| Device Viewport | Dimensions | What to Verify | Status |
| :--- | :--- | :--- | :--- |
| **iPhone SE / Small Android** | `375 × 667` | No horizontal page overflow; headline wraps cleanly; nav bar compact; touch targets $\ge 44\text{px}$. | [ ] |
| **iPhone 14 / 15 / Galaxy S24** | `390 × 844` / `412 × 915` | Hero window frame scales proportionally; status badge centered; mobile drawer opens without jerkiness. | [ ] |
| **iPad / Tablet Portrait** | `768 × 1024` | 2-column grids collapse or display with adequate spacing; marquee animation flows smoothly. | [ ] |
| **Laptop Standard** | `1280 × 800` | Sticky navigation appears translucent on scroll; desktop links visible; spotlight cards hover correctly. | [ ] |
| **Desktop High-Res** | `1440 × 900` / `1920 × 1080` | Max content bounds constrained to `max-w-7xl`; glow effects centered; no stretched images. | [ ] |

### Mobile-Specific Test Cases:
1. **Hamburger Menu Drawer:**
   - Tap the hamburger icon (`☰`).
   - Verify the drawer slides down smoothly with a blurred dark backdrop.
   - Verify page background scrolling is disabled while the menu is open.
   - Tap any link (e.g. `Features` or `Evolution`). Verify the drawer closes and the page scrolls smoothly to the target section.
2. **Touch Scrolling & Horizontal Chips:**
   - On the **"See it in action"** section, swipe horizontally across module buttons (`Agenda`, `Plan Mode`, `Blueprints`, `Docs`).
   - Verify swipe momentum is fluid (`-webkit-overflow-scrolling: touch`) and does not drag the entire page horizontally.
3. **Cursor Behavior on Touch Screens:**
   - On a phone or simulated mobile device with touch enabled, verify that the desktop magnetic ring cursor is hidden so it doesn't cause phantom taps or obscure user taps.

---

## 🖱️ 2. Desktop Micro-Interactions & Animation Verification

1. **Top Gradient Scrollbar (`ScrollProgress`):**
   - Scroll slowly down the page.
   - Verify the 3px gradient line (amber $\rightarrow$ gold $\rightarrow$ emerald) at the top of the viewport scales from $0\%$ to $100\%$ smoothly without stutter.
2. **Dynamic Spotlight Glow Cards (`spotlight-card`):**
   - Move your cursor across the cards in **Core Features**, **Philosophy**, and **Architecture**.
   - Verify a subtle, radial amber/gold light tracks your pointer, illuminating card borders and surface textures.
3. **Dual-Row Marquee Ticker:**
   - Verify Row 1 scrolls left and Row 2 scrolls right seamlessly.
   - Hover your mouse over any pill. Verify the marquee pauses on hover and resumes on mouse leave.
4. **Interactive Hero Window Frame:**
   - Click each module tab in the window titlebar: `Agenda`, `AI Plan Mode`, `Blueprints`, `Docs Studio`.
   - Verify the screenshot updates instantly, the active tab receives the gold highlight, and the floating bottom context pill displays the correct module tag.

---

## 🔗 3. Pointing Variables & Action Link Testing

Verify that all interactive buttons point to the correct URLs defined in [`config/site.ts`](file:///c:/Users/Pranshul%20Chopra/OneDrive/Desktop/Project/PranshulOS-/config/site.ts):

| Button Location | Target URL | Expected Result |
| :--- | :--- | :--- |
| **Topbar "Download"** | `SITE_CONFIG.downloadUrl` | Starts download of `PranshulOS-Setup-*.exe` |
| **Topbar "Feedback"** | `SITE_CONFIG.feedbackUrl` | Opens Google Feedback Form in new tab (`_blank`) |
| **Topbar "GitHub"** | `SITE_CONFIG.githubRepoUrl` | Navigates to GitHub repository |
| **Hero "Download"** | `SITE_CONFIG.downloadUrl` | Starts `.exe` download |
| **Hero "Feedback"** | `SITE_CONFIG.feedbackUrl` | Opens Google Feedback Form in new tab |
| **Showcase Module Tabs** | Component state | Switches active feature preview |
| **Architecture Layers** | Component state | Updates active layer inspector |
| **Timeline Filter Pills** | Component state | Filters between All, Current, Shipped, Future |
| **Final CTA "Download"** | `SITE_CONFIG.downloadUrl` | Starts download |
| **Final CTA "Feedback"** | `SITE_CONFIG.feedbackUrl` | Opens Google Feedback Form in new tab |
| **Footer "Back to Top"** | Window scroll | Smoothly animates viewport back to top (`0, 0`) |

---

## 🎬 4. Video & Fallback Image Resilience Testing

1. **Missing Video Graceful Fallback:**
   - In `ProductShowcase` and `CoreFeatures`, video elements check for `.mp4` sources.
   - Verify that when video files have not yet been placed in `public/`, no broken media icon appears, and the matching high-res screenshot (`.jpg`/`.png`) renders crisply.
2. **Video Detection (When Files Added):**
   - Place a test clip named `demo-plan-mode.mp4` into `public/`.
   - Refresh the page and click the `AI PLAN MODE` tab.
   - Verify the video plays on loop, muted, and inline without requiring user interaction.

---

## ♿ 5. Accessibility & Performance Checklist

1. **Keyboard Navigation:**
   - Press `Tab` repeatedly from the top of the page.
   - Verify focus rings are clearly visible on all interactive buttons, links, and tab selectors.
   - Press `Enter` or `Space` on any tab or button to trigger its action.
2. **Contrast & Readability:**
   - Check that all body text is crisp off-white (`#f0f0f4`) against near-black backgrounds (`#09090b`), satisfying WCAG AA contrast standards.
3. **Lighthouse / Core Web Vitals:**
   - Run Chrome DevTools Lighthouse audit in Production mode (`npm run build && npm run start`).
   - Confirm Performance $>90$, Accessibility $>95$, Best Practices $>95$, SEO $= 100$.
