# Smartphone UI Showcase Hub (`itsmyapp.co.uk`)

A flagship website showcase hub designed to simulate the look, tactile interactions, and responsiveness of a physical smartphone. Built for [itsmyapp.co.uk](https://itsmyapp.co.uk) with strict compliance under UK GDPR, the Data (Use and Access) Act 2025 (DUAA), and the Digital Markets, Competition and Consumers Act 2024 (DMCCA).

Repository: [https://github.com/itsmyapp-code/its_my_launcher](https://github.com/itsmyapp-code/its_my_launcher)  
Organisation: [https://github.com/itsmyapp-code](https://github.com/itsmyapp-code)

---

## 📱 Core Features

### 1. Realistic Smartphone Chassis & Responsive Viewports
- **Desktop Viewport (`md:` and above):** Centered realistic smartphone mockup (~390px × 820px, 19.5:9 aspect ratio) with titanium frame, side hardware buttons (Action, Volume Up/Down, Power), interactive Dynamic Island notch, speaker ear-piece, and deep drop-shadow (`shadow-2xl`).
- **Mobile Viewport (`< md`):** Outer hardware bezel disappears seamlessly; content fluidly fills `100dvh` for an edge-to-edge native smartphone experience across Safari and Chrome mobile address bars.
- **Dynamic Status Bar:** Minimalistic top status bar featuring live system clock, 4-bar SVG signal indicator, Wi-Fi icon, and interactive battery gauge with charging toggle.
- **Interactive Dynamic Island:** Pill expands on tap to display security audit status, background audio controls, or notification badges.

### 2. Dual-Mode Dynamic Navigation Matrix
Configured cleanly via `src/config/apps.config.ts`:
- **Mode 1: Business 9-Grid (3×3):** Showcases 9 core company divisions (`Services`, `Portfolio`, `Pricing`, `Booking`, `Reviews`, `About Us`, `Gallery`, `FAQ`, `Contact`) with custom gradients, badges, and tap depression (`active:scale-95`).
- **Mode 2: Software Directory (4×N):** Showcases an ecosystem of client apps and subdomains (`CRM Studio`, `PayNexus`, `VaultDrive`, `PulseAnalytics`, `CalFlow`, `TeamSync`, `StockFlow`, etc.) with iOS/Android squircle icons and micro-labels.
- **Instant Switcher:** Switch modes dynamically from the top studio toolbar or virtual phone settings.

### 3. Persistent Glassmorphism Bottom Dock
Fixed floating dock (`backdrop-blur-xl bg-white/15 dark:bg-black/40 border border-white/20`) featuring 4 primary quick-action utility icons:
1. **Phone:** Direct `tel:+442080000000` link to launch the native dialer.
2. **Email:** Direct `mailto:hello@itsmyapp.co.uk` link for instant project enquiries.
3. **Location / Maps:** Direct Google Maps pin to the London office.
4. **WhatsApp:** Instant messaging link (`wa.me`) directly to the technical lead.

### 4. Mini-OS Modal Layer (Embedded Preview)
Grid apps with `openInModal: true` slide up an internal full-height OS window inside the phone bezel:
- **Services:** Interactive service breakdown with scope request action.
- **Anti-Drip Pricing:** DMCCA-compliant upfront pricing, statutory 14-day cooling-off indicator, and a "Same-Channel" 1-click cancellation simulator.
- **Booking:** Interactive 30-minute discovery session calendar with slot picker.
- **Reviews & Testimonials:** 4.9/5 star verified UK client audits.
- **FAQ:** Collapsible accordions detailing IP assignment, timeline estimates, and security policies.
- **Contact:** Real-time form with direct email dispatch.
- **Home Bar & Back Chevron:** Swipe-up home bar pill and header chevron to return smoothly to the home grid.

---

## ⚖️ UK GDPR & Regulatory Compliance Architecture

Built with privacy-by-design under certified DUAA 2025 and DMCCA 2024 frameworks:
1. **Cookie & Consent Management:**
   - **Equal Prominence:** "Reject All" and "Accept All" buttons feature identical sizing, background color, font weight, and contrast ratios. Zero dark patterns.
   - **First-Layer Rejection:** Users can reject all non-essential trackers directly on the primary banner without visiting submenus.
   - **Script Interception:** Marketing trackers are blocked by default until explicit affirmative opt-in.
   - **DUAA First-Party Optimization:** Single-click client-side toggle for first-party performance tracking.
2. **Statutory Static Routes:**
   - [`/terms`](file:///src/app/terms/page.tsx) — Terms of Service, liability limitations, and prohibited conduct.
   - [`/privacy`](file:///src/app/privacy/page.tsx) — Privacy Policy, Article 6 Recognized Legitimate Interests, AI decision transparency, and interactive Subject Access Request (SAR) portal.
   - [`/cookies`](file:///src/app/cookies/page.tsx) — Cookie Policy with live client-side opt-out toggles.
   - [`/accessibility`](file:///src/app/accessibility/page.tsx) — WCAG 2.1 Level AA & AAA contrast statement with live 7:1 contrast mode toggle.
3. **Public Transparency Callout:**
   > **Data Privacy & Compliance Queries:**  
   > For any questions regarding your data rights, or to submit an inquiry, please contact our Data Privacy Lead directly at [hello@itsmyapp.co.uk](mailto:hello@itsmyapp.co.uk). We formally acknowledge all compliance submissions within 30 days.
4. **Internal Governance Logs:**
   - [`docs/governance/LOG_A_DPO_ASSESSMENT.md`](file:///docs/governance/LOG_A_DPO_ASSESSMENT.md) — Statutory evaluation under UK GDPR Article 37(1).
   - [`docs/governance/LOG_B_DATA_PRIVACY_LEAD.md`](file:///docs/governance/LOG_B_DATA_PRIVACY_LEAD.md) — Official internal designation of Data Privacy Lead & Compliance Owner.
5. **Client Persistence & Offline Cache:**
   - Persistence scoped to `users/{uid}/preferences` via Firebase Client SDK and local storage fallback. Zero persistent cookies required.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation
```bash
git clone https://github.com/itsmyapp-code/its_my_launcher.git
cd its_my_launcher
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the showcase hub.

### Production Build
```bash
npm run build
npm run start
```

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router, Client Components)
- **UI & Styling:** Tailwind CSS v4, Glassmorphism, CSS Variables
- **Icons:** Lucide React
- **Persistence:** Firebase Client SDK (Firestore local cache scoped under `users/{uid}/`)
- **Typography:** JetBrains Mono / ui-monospace
- **Compliance:** UK GDPR / DUAA 2025 / DMCCA 2024 / WCAG 2.1 AA & AAA (7:1 contrast)

---

## 📄 License & Intellectual Property
All code and rights owned by itsmyapp.co.uk. Licensed for production deployment under proprietary enterprise terms.
