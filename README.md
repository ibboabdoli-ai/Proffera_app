# Proffera App

Mobile prototype for [Proffera](https://proffera.se) — a Swedish SaaS platform for service businesses.

Built with **React Native / Expo** and **TypeScript**.

> ⚠️ **No API is connected.** No real bookings, orders, transactions, emails, or notifications are created. The booking submit button is intentionally disabled. Auth is not implemented. This is a UI prototype only.

---

## 1. Install

```bash
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install
```

**Requirements:** Node.js >= 20.9.0 · npm >= 9 · [Expo Go](https://expo.dev/client) on your phone

---

## 2. Run

```bash
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press `i` (iOS simulator) / `a` (Android emulator).

**Note on `api.expo.dev` error in CI/sandbox:** Expo CLI prints a `SyntaxError` when its version-checker can't reach `api.expo.dev`. This is a network restriction — not a code error. Metro still starts and the app runs normally on a real device.

---

## 3. TypeScript Check

```bash
npx tsc --noEmit
# Expected: 0 errors
```

---

## 4. Manual Device Test

See **[docs/device-test-checklist.md](docs/device-test-checklist.md)** for the full checklist.

Quick summary:
- All 5 tabs open: Hem, Tjänster, Priser, Info, Konto
- All flows reachable: Home→Booking, Services→Detail→Booking, Prices→Booking, Info→Contact, Konto→Settings
- BookingScreen submit is **disabled** — not connected
- No API calls made

---

## 5. Project Structure

```
Proffera_app/
├── index.js                         ← Expo entry point
├── App.tsx                          ← Root component
├── app.json                         ← Expo config
├── docs/
│   ├── phase-0-audit.md             ← API & safety audit
│   └── device-test-checklist.md    ← Manual test checklist
└── src/
    ├── theme/
    │   └── colors.ts                ← Design tokens
    ├── components/
    │   ├── AppButton.tsx            ← primary / outline / ghost / disabled
    │   ├── Card.tsx                 ← Surface card with optional label
    │   └── Screen.tsx               ← Scroll wrapper with title/subtitle
    ├── navigation/
    │   └── AppNavigator.tsx         ← 5 bottom tabs + stack navigators
    └── screens/
        ├── HomeScreen.tsx
        ├── ServicesScreen.tsx
        ├── ServiceDetailScreen.tsx
        ├── PriceScreen.tsx
        ├── BookingScreen.tsx        ← Submit DISABLED — no API
        ├── ConfirmationScreen.tsx
        ├── ContactScreen.tsx
        ├── InfoScreen.tsx
        ├── MyAccountScreen.tsx
        └── SettingsScreen.tsx
```

---

## 6. Navigation Map

```
Bottom Tabs
├── Hem        → Home → ServiceDetail → Booking → Confirmation
├── Tjänster   → Services → ServiceDetail → Booking → Confirmation
├── Priser     → Prices → Booking → Confirmation
├── Info       → Info → Contact
└── Konto      → MyAccount → Settings
```

---

## 7. Dependency Versions

All packages are pinned to [Expo 52 bundled versions](https://github.com/expo/expo/blob/main/packages/expo/bundledNativeModules.json) for maximum Expo Go compatibility.

---

## 8. What Is NOT Connected

| Feature | Status |
|---------|--------|
| Booking submit | ❌ Disabled — `[Submit kopplas i nästa fas]` |
| Auth / login | ❌ Not implemented |
| API calls | ❌ None — no fetch/axios anywhere |
| Real email | ❌ None |
| Payment | ❌ None |
| Push notifications | ❌ None |

---

## 9. Related Repos

- **Website:** [ibboabdoli-ai/Proffera](https://github.com/ibboabdoli-ai/Proffera) — do NOT modify
- **App:** [ibboabdoli-ai/Proffera_app](https://github.com/ibboabdoli-ai/Proffera_app) — this repo

---

## 10. Branch & PR Rules

```
work/proffera-app-<description>
```

Always work on a feature branch. Open a PR. Never merge without approval.
