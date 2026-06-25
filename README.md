# Proffera App

Mobile prototype for Proffera, a Swedish SaaS platform for service businesses.

Built with React Native, Expo, and TypeScript.

## Safety Notice

No API is connected.
No real bookings, orders, transactions, emails, or notifications are created.
The booking submit button is intentionally disabled.
Auth is not implemented.
This is a UI prototype only.

## Current Baseline

- Expo SDK 54 is installed.
- Expo Go device test has passed on iPhone.
- Main branch is the stable branch.
- Booking submit remains disabled.
- No backend, API, auth, payment, or email functionality is enabled from the mobile app.

## Project Paths

Proffera app:
D:\HTML\Proffera_App\Proffera_app

Do not confuse this project with:
D:\HTML\Iboren_app

## Install

Run:
git clone https://github.com/ibboabdoli-ai/Proffera_app.git
cd Proffera_app
npm install

Requirements:
- Node.js >= 20.9.0, Node 22 recommended
- npm >= 9
- Expo Go on iOS or Android

## Local Run

Preferred PowerShell flow on this machine:
$env:Path = "C:\Users\IAI\AppData\Local\nvm\v22.23.1;$env:Path"
node -v
npm.cmd -v
npx.cmd -v
npx.cmd expo start --lan --clear --port 8082

If port 8081 is busy, use 8082 or 8083.

Tunnel fallback:
npx.cmd expo start --tunnel --clear

Tunnel can fail because of ngrok or network issues. That is not automatically a code problem.

More details: docs/mobile-run-guide.md

## Validation

Run:
npm.cmd ci
npx.cmd expo install --check
npx.cmd tsc --noEmit

Expected: 0 TypeScript errors.

Do not run npm audit fix or npm audit fix --force unless a separate dependency maintenance phase is approved.

## Manual Device Test

Latest recorded device test: docs/phase-7a-device-test.md

Quick checklist:
- App opens in Expo Go.
- Home screen loads.
- Bottom navigation works.
- Booking screen opens.
- Submit remains disabled.
- No crash observed.
- Text and layout fit the screen.

## Project Structure

Proffera_app/
|-- index.js
|-- App.tsx
|-- app.json
|-- README.md
|-- docs/
|   |-- mobile-run-guide.md
|   |-- phase-7a-device-test.md
|-- src/
|   |-- components/
|   |-- navigation/
|   |-- screens/
|   |-- theme/

## Navigation Map

Bottom tabs:
- Hem
- Tjänster
- Priser
- Info
- Konto

Main flows:
- Home -> Service detail -> Booking -> Confirmation
- Services -> Service detail -> Booking -> Confirmation
- Prices -> Booking -> Confirmation
- Info -> Contact
- Account -> Settings

## What Is Not Connected

| Feature | Status |
|---|---|
| Booking submit | Disabled |
| Auth / login | Not implemented |
| API calls | None |
| Real email | None |
| Payment | None |
| Push notifications | None |

## Related Repos

- Website: https://github.com/ibboabdoli-ai/Proffera -- do not modify from this app phase.
- App: https://github.com/ibboabdoli-ai/Proffera_app -- this repo.

## Branch and PR Rules

Use branch names like:
work/proffera-app-<description>

Always work on a feature branch.
Open a PR.
Never merge without approval.
