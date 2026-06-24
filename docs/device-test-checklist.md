# Device Test Checklist — Proffera App

Use this checklist when testing on a real phone with **Expo Go** or a simulator.

---

## Setup

```bash
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install
npx expo start
```

Scan the QR code with **Expo Go** (iOS or Android).

> **Note (sandbox/CI only):** `npx expo start` will print a `SyntaxError` about `api.expo.dev`
> being blocked. This is an Expo CLI version-check hitting a blocked domain in CI.
> **Metro still starts.** On a real dev machine with internet access, this error does not appear.

---

## Tab Navigation — confirm each tab opens

| Tab | Expected screen | Pass |
|-----|----------------|------|
| Hem | HomeScreen with module list | ☐ |
| Tjänster | ServicesScreen with 6 services | ☐ |
| Priser | PriceScreen with 3 plans | ☐ |
| Info | InfoScreen with FAQ + Villkor | ☐ |
| Konto | MyAccountScreen with placeholder profile | ☐ |

---

## Navigation Flows — confirm each flow is reachable

| Flow | Steps | Pass |
|------|-------|------|
| Home → Service detail | Tap module row in Hem tab | ☐ |
| Home → Booking | Tap "Boka demo" on HomeScreen | ☐ |
| Services → Service detail | Tap any service card in Tjänster | ☐ |
| Services → Service detail → Booking | Tap "Boka demo" on detail screen | ☐ |
| Prices → Booking | Tap "Kontakta oss" on any plan | ☐ |
| Info → Contact | Tap "Kontakta oss →" on InfoScreen | ☐ |
| Konto → Settings | Tap "Inställningar" on MyAccountScreen | ☐ |
| Any Booking → Confirmation | N/A — submit disabled (see below) | — |
| Back navigation | Hardware back / swipe back on all screens | ☐ |

---

## Safety Checks — must all pass

| Check | Expected | Pass |
|-------|----------|------|
| BookingScreen submit button | Shows `[Submit kopplas i nästa fas]` — grey, not tappable | ☐ |
| No API call fired | No network request when tapping any button | ☐ |
| No booking/order created | Nothing sent to server | ☐ |
| Logout button | Shows `[Logga ut — kopplas i nästa fas]` — disabled | ☐ |
| Settings toggles | All switches disabled (non-interactive) | ☐ |

---

## Layout Checks — confirm on small screen (iPhone SE / Android compact)

| Check | Pass |
|-------|------|
| HomeScreen hero card not cut off | ☐ |
| Module rows fit without overflow | ☐ |
| ServicesScreen description text readable | ☐ |
| PriceScreen plan cards fully visible | ☐ |
| BookingScreen form fields scroll properly | ☐ |
| MyAccountScreen avatar row fits | ☐ |
| Tab bar labels visible (not clipped) | ☐ |

---

## TypeScript

```bash
npx tsc --noEmit
# Expected: 0 errors
```

---

## What Is NOT Connected

| Feature | Status |
|---------|--------|
| Booking submit | ❌ Disabled |
| Auth / login | ❌ Not implemented |
| API calls | ❌ None |
| Real email | ❌ None |
| Payment | ❌ None |

---

## Phase

Phase 3 — device test readiness.
Next phase: API contract definition + BookingScreen submit (requires approval).
