# Proffera App

Mobile prototype for [Proffera](https://proffera.se) — a Swedish SaaS platform for service businesses.

Built with **React Native / Expo** and **TypeScript**.

---

## ⚠️ Safety Notice

> **No API is connected. No real bookings, orders, transactions, emails, or notifications are created.**
>
> The booking submit button is intentionally disabled. Auth is not implemented.
> This is a UI prototype only.

---

## Requirements

- Node.js >= 20.9.0 (`.nvmrc` = Node 22 recommended)
- npm >= 9
- Expo CLI (installed locally via npm — no global install needed)
- A device or simulator with [Expo Go](https://expo.dev/client)

---

## Install

```bash
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install
```

---

## Run

```bash
npm start
# or
npx expo start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan the QR code with **Expo Go** on your phone

---

## TypeScript Check

```bash
npx tsc --noEmit
```

Must report **0 errors** before any commit.

---

## Project Structure

```
Proffera_app/
├── index.js                      ← Expo entry point
├── App.tsx                       ← Root component
├── app.json                      ← Expo config
├── src/
│   ├── theme/
│   │   └── colors.ts             ← Design tokens
│   ├── components/
│   │   ├── AppButton.tsx         ← Button (primary / outline / ghost / disabled)
│   │   ├── Card.tsx              ← Surface card with optional label
│   │   └── Screen.tsx            ← Scroll wrapper with optional title/subtitle
│   ├── navigation/
│   │   └── AppNavigator.tsx      ← Bottom tabs + stack navigators
│   └── screens/
│       ├── HomeScreen.tsx
│       ├── ServicesScreen.tsx
│       ├── ServiceDetailScreen.tsx
│       ├── PriceScreen.tsx
│       ├── BookingScreen.tsx     ← Submit DISABLED — no API
│       ├── ConfirmationScreen.tsx
│       ├── ContactScreen.tsx
│       ├── InfoScreen.tsx
│       ├── MyAccountScreen.tsx
│       └── SettingsScreen.tsx
└── docs/
    └── phase-0-audit.md          ← Phase 0 API + safety audit
```

---

## Navigation

5 bottom tabs, each with a stack navigator:

| Tab | Screens |
|-----|---------|
| Hem | Home → ServiceDetail → Booking → Confirmation |
| Tjänster | Services → ServiceDetail → Booking → Confirmation |
| Priser | Prices → Booking → Confirmation |
| Info | Info → Contact |
| Konto | MyAccount → Settings |

---

## What Is NOT Connected

| Feature | Status |
|---------|--------|
| Booking submit | ❌ Disabled — placeholder only |
| Auth / login | ❌ Not implemented |
| API calls | ❌ None — no fetch/axios calls exist |
| Real email | ❌ None |
| Payment | ❌ None |
| Push notifications | ❌ None |

---

## Related Repos

- **Website:** [ibboabdoli-ai/Proffera](https://github.com/ibboabdoli-ai/Proffera) — do NOT modify
- **App:** [ibboabdoli-ai/Proffera_app](https://github.com/ibboabdoli-ai/Proffera_app) — this repo

---

## Branch Convention

```
work/proffera-app-<description>
```

Always open a PR. Never merge without approval.
