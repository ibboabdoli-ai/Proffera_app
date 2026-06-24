# Proffera App

Mobile prototype for [Proffera](https://proffera.se) -- a Swedish SaaS platform for service businesses.

Built with **React Native / Expo** and **TypeScript**.

---

## Safety Notice

**No API is connected.**
No real bookings, orders, transactions, emails, or notifications are created.
The booking submit button is intentionally disabled.
Auth is not implemented.
This is a UI prototype only.

---

## 1. Install

```bash
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install
```

**Requirements:**

- Node.js >= 20.9.0 (Node 22 recommended)
- npm >= 9
- [Expo Go](https://expo.dev/client) on your phone (iOS or Android)

---

## 2. Run

```bash
npx expo start
```

Scan the QR code with **Expo Go** on your phone.

- Press `i` -- iOS simulator
- Press `a` -- Android emulator

### Note on api.expo.dev error in CI/sandbox

When running in a restricted network, Expo CLI prints:

```
SyntaxError: Unexpected token 'H', "Host not i"... is not valid JSON
```

This is Expo's version-checker being blocked at `api.expo.dev`.
Metro still starts and the app works normally on a real device.
On a normal dev machine with internet this error does not appear.

---

## 3. TypeScript Check

```bash
npx tsc --noEmit
```

Expected: 0 errors.

---

## 4. Manual Device Test

See [docs/device-test-checklist.md](docs/device-test-checklist.md) for the full checklist.

Quick summary:

- All 5 tabs open: Hem, Tjänster, Priser, Info, Konto
- All flows reachable: Home, Services, Prices, Info, Konto
- BookingScreen submit is disabled -- not connected
- No API calls made

---

## 5. Project Structure

```
Proffera_app/
|-- index.js                      -- Expo entry point
|-- App.tsx                       -- Root component
|-- app.json                      -- Expo config
|-- docs/
|   |-- phase-0-audit.md          -- API and safety audit
|   \-- device-test-checklist.md -- Manual test checklist
\-- src/
    |-- theme/
    |   \-- colors.ts             -- Design tokens
    |-- components/
    |   |-- AppButton.tsx         -- primary / outline / ghost / disabled
    |   |-- Card.tsx              -- Surface card with optional label
    |   \-- Screen.tsx            -- Scroll wrapper with title and subtitle
    |-- navigation/
    |   \-- AppNavigator.tsx      -- 5 bottom tabs and stack navigators
    \-- screens/
        |-- HomeScreen.tsx
        |-- ServicesScreen.tsx
        |-- ServiceDetailScreen.tsx
        |-- PriceScreen.tsx
        |-- BookingScreen.tsx     -- Submit DISABLED, no API
        |-- ConfirmationScreen.tsx
        |-- ContactScreen.tsx
        |-- InfoScreen.tsx
        |-- MyAccountScreen.tsx
        \-- SettingsScreen.tsx
```

---

## 6. Navigation Map

```
Bottom Tabs
  Hem       -> Home -> ServiceDetail -> Booking -> Confirmation
  Tjänster  -> Services -> ServiceDetail -> Booking -> Confirmation
  Priser    -> Prices -> Booking -> Confirmation
  Info      -> Info -> Contact
  Konto     -> MyAccount -> Settings
```

---

## 7. Dependency Versions

All packages are pinned to Expo 52 bundled versions for maximum Expo Go compatibility.

Reference: https://github.com/expo/expo/blob/main/packages/expo/bundledNativeModules.json

---

## 8. What Is NOT Connected

| Feature           | Status                                      |
|-------------------|---------------------------------------------|
| Booking submit    | Disabled -- [Submit kopplas i nästa fas]    |
| Auth / login      | Not implemented                             |
| API calls         | None -- no fetch/axios anywhere             |
| Real email        | None                                        |
| Payment           | None                                        |
| Push notifications| None                                        |

---

## 9. Related Repos

- **Website:** https://github.com/ibboabdoli-ai/Proffera -- do NOT modify
- **App:** https://github.com/ibboabdoli-ai/Proffera_app -- this repo

---

## 10. Branch and PR Rules

Branch naming convention:

```
work/proffera-app-<description>
```

Always work on a feature branch.
Open a PR.
Never merge without approval.
