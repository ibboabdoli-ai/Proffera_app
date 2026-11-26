# Phase 0 audit — Proffera mobile app

Updated 2026-11-26 against `ibboabdoli-ai/Proffera_app` main `8d9edd7fbcecd9fa96ce33fc6d6057389759bba3`. This is a source audit, not a production or device certification.

## Repository and history

| Repository | Role observed |
| --- | --- |
| `ibboabdoli-ai/Proffera_app` | Proffera Expo/React Native TypeScript prototype; the mobile source of truth. |
| `ibboabdoli-ai/iboren-app` | Separate Iboren Expo app with its own booking work. Do not reuse its identity or booking integration for Proffera. |
| `ibboabdoli-ai/Proffera` | Production Next.js website and backend. Read-only for this mobile phase. |

PR #1 in `Proffera_app` was merged and included an Expo app, navigation, screens, and the original audit. The earlier claim that it contained only a status file is false for this repository. Subsequent merged PRs reached Expo SDK 54 and an iPhone Expo Go smoke test. The old audit's statements that the app repository did not exist and Better Auth was inactive are obsolete.

## Architecture and Phase 1 inventory

`App.tsx` mounts `SafeAreaProvider` and `AppNavigator`. React Navigation has five tabs (Hem, Tjänster, Priser, Info, Konto) with native stacks. The ten implemented screen files are Home, Services, ServiceDetail, Price, Booking, Confirmation, Contact, Info, MyAccount, and Settings. Shared `Screen`, `Card`, and `AppButton` components and `src/theme/colors.ts` style the prototype.

The documented routes are Home/Services → ServiceDetail → Booking, Prices → Booking, Info → Contact, and Account → Settings. The Booking submit action remains disabled. Before this follow-up, Confirmation was registered but had no reachable action; the separate demo-confirmation link makes that screen reachable without submitting data. This is a demonstration route, not a booking result.

The supplied historical context mentions 11 planned screens. PR #1 explicitly described ten screens; current source and documentation also identify ten. A named eleventh screen or approved specification was not found in these repositories. Do not create one from a guess.

## Data, authentication, and tenant boundaries

- The mobile `src/` contains no `fetch`, API client, Better Auth integration, session manager, token store, or workspace selector. Displayed data and form state are local prototype data. There are no mobile production API calls or write actions to test.
- The website uses Better Auth at `/api/auth/[...all]` and derives workspace access server-side from the session and membership. Its selected-workspace cookie is `proffera_workspace_id`. Those web cookie/session contracts are not yet a reviewed native-app authentication contract.
- Do not copy web session cookies into unreviewed native storage, accept a client-supplied workspace as authority, put secrets in `app.json`/Expo public variables, or connect booking/contact/payment actions before a scoped API and mobile auth design are approved. A future session implementation needs OS-backed secure storage, logout/revocation handling, and server-side workspace membership checks.

## Android, iOS, dependencies, and CI

- `app.json` names `se.proffera.app` for both platforms. Expo SDK 54 is configured. The recorded iPhone Expo Go test is from 2026-06-24; no current device or Android runtime result is recorded here. Store builds are not configured or verified.
- `npm install --ignore-scripts` completed on 2026-11-26 and initially reported 34 dependency advisories. A later registry-backed `npm audit --json` identified `shell-quote` and `tar` as the two critical advisory package names. After the SDK 54 compatibility updates, install reported 26 advisories (12 moderate, 13 high, 1 critical). The remaining critical item is transitive `shell-quote@1.8.4` via `react-native → react-devtools-core`; its advisories are GHSA-395f-4hp3-45gv and GHSA-pqg4-j6r4-53mv. Reachability and remaining repairs need a separate verified dependency review; do not run automatic major upgrades.
- The baseline `npx tsc --noEmit` passed. The initial `npm run lint` lacked an ESLint config, and Expo Doctor initially failed four of 18 checks. This follow-up added SDK-compatible `expo-font`, aligned Expo patch versions, and configured Expo ESLint. `npm run typecheck` and `npm run lint` pass; Expo Doctor passes 18/18 checks. Metro started offline and served HTTP 200 bundles for both Android and iOS. No emulator or physical device was available in this session; tap-through navigation smoke and native runtime behavior were not verified. The only checked-in workflow is a Graphify cache workflow; there is no mobile test/build CI gate. There is no unit-test script or suite.

## Branding and current-content drift

The checked-in theme uses a dark navy/blue palette, while `app.json` and `docs/phase-4-branding.md` specify green and a light neutral background. A deliberate visual decision and device review are needed before changing the full theme. The app's old Professional price of 699 SEK/month differs from the website's canonical 599 SEK/month in `src/lib/billing-plans.ts`; this follow-up corrects the displayed prototype price. Mobile copy remains a snapshot and must be checked before any public release.

## Phase status and next gate

Phase 0 source/security audit is updated. Phase 1 Expo TypeScript foundation and navigation prototype exist, with all ten documented screens reachable after the demo link. Live authentication, API integration, real workspace data, booking submission, payment, email, and SMS remain out of scope. Before a functional customer release, define and review the mobile auth/API contract, prove tenant isolation in an isolated environment, resolve reachable dependency advisories, establish lint/test/CI, and run fresh iOS and Android device checks. Do not use a store build or production endpoint as the first test of these boundaries.
