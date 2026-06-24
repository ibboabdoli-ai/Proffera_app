# Device Test Checklist -- Proffera App

Use this checklist when testing on a real phone with Expo Go or a simulator.

---

## Setup

```bash
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS or Android).

Note (sandbox/CI only): `npx expo start` will print a SyntaxError about `api.expo.dev`
being blocked. This is Expo CLI hitting a network restriction in CI.
Metro still starts. On a real dev machine with internet access, this error does not appear.

---

## Tab Navigation

Confirm each tab opens:

| Tab       | Expected screen                          | Pass |
|-----------|------------------------------------------|------|
| Hem       | HomeScreen with module list              | [ ]  |
| Tjänster  | ServicesScreen with 6 services           | [ ]  |
| Priser    | PriceScreen with 3 plans                 | [ ]  |
| Info      | InfoScreen with FAQ and Villkor          | [ ]  |
| Konto     | MyAccountScreen with placeholder profile | [ ]  |

---

## Navigation Flows

Confirm each flow is reachable:

| Flow                              | Steps                                   | Pass |
|-----------------------------------|-----------------------------------------|------|
| Home -> Service detail            | Tap module row in Hem tab               | [ ]  |
| Home -> Booking                   | Tap "Boka demo" on HomeScreen           | [ ]  |
| Services -> Service detail        | Tap any service card in Tjänster        | [ ]  |
| Services -> Service detail -> Booking | Tap "Boka demo" on detail screen   | [ ]  |
| Prices -> Booking                 | Tap "Kontakta oss" on any plan          | [ ]  |
| Info -> Contact                   | Tap "Kontakta oss" on InfoScreen        | [ ]  |
| Konto -> Settings                 | Tap "Inställningar" on MyAccountScreen  | [ ]  |
| Back navigation                   | Hardware back / swipe back on all screens | [ ] |

---

## Safety Checks

All of these must pass:

| Check                   | Expected                                          | Pass |
|-------------------------|---------------------------------------------------|------|
| BookingScreen submit    | Shows [Submit kopplas i nästa fas] -- not tappable | [ ] |
| No API call fired       | No network request on any button tap              | [ ]  |
| No booking created      | Nothing sent to server                            | [ ]  |
| Logout button           | Shows [Logga ut -- kopplas i nästa fas] -- disabled | [ ] |
| Settings toggles        | All switches disabled and non-interactive         | [ ]  |

---

## Layout Checks

Confirm on small screen (iPhone SE or Android compact):

| Check                                          | Pass |
|------------------------------------------------|------|
| HomeScreen hero card not cut off               | [ ]  |
| Module rows fit without overflow               | [ ]  |
| ServicesScreen description text readable       | [ ]  |
| PriceScreen plan cards fully visible           | [ ]  |
| BookingScreen form fields scroll properly      | [ ]  |
| MyAccountScreen avatar row fits                | [ ]  |
| Tab bar labels visible and not clipped         | [ ]  |

---

## TypeScript

```bash
npx tsc --noEmit
```

Expected: 0 errors.

---

## What Is NOT Connected

| Feature           | Status          |
|-------------------|-----------------|
| Booking submit    | Disabled        |
| Auth / login      | Not implemented |
| API calls         | None            |
| Real email        | None            |
| Payment           | None            |

---

## Phase

Phase 3 -- device test readiness.

Next phase: API contract definition and BookingScreen submit connection.
Requires explicit approval before starting.
