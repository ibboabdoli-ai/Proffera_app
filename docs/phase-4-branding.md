# Phase 4 Branding

Status: planning-only, add-only.

This phase prepares Proffera App branding without connecting any production behavior.

## Goal

Make the app ready for proper icon, splash, and store-facing visual assets in a controlled way.

This document does not activate branding in `app.json` yet. It only records the safe asset plan.

## Safety rules

- No website repo changes.
- No production API calls.
- No booking submit activation.
- No auth changes.
- No payment, email, admin, or backend changes.
- No package/config changes in this PR.
- No real customer data.

## Current app status

The Expo prototype already has:

- Navigation prototype.
- UI components.
- Real-device test checklist.
- Disabled booking submit.
- No API connection.
- No real auth.

## Branding assets needed later

Future branding work should add real assets in a separate PR:

| Asset | Recommended path | Purpose |
| --- | --- | --- |
| App icon | `assets/icon.png` | Expo app icon |
| Adaptive foreground | `assets/adaptive-icon.png` | Android adaptive icon |
| Splash image | `assets/splash.png` | Expo splash screen |
| Source SVG | `assets/proffera-icon-source.svg` | Editable source asset |

## Recommended design direction

Use the existing Proffera visual language:

- Calm green primary color.
- Light neutral background.
- Clean card-based SaaS interface.
- High contrast for text and buttons.
- Simple mark that remains readable at small app-icon size.

## Implementation plan

Phase 4A, current PR:

- Add this branding plan document only.
- Do not modify runtime app configuration.

Phase 4B, next PR after approval:

- Add generated image assets.
- Update `app.json` to reference icon and splash assets.
- Keep booking submit disabled.
- Keep API/auth disconnected.
- Run TypeScript check.
- Test with Expo Go if environment allows.

## Acceptance criteria for the next branding PR

Before enabling assets in `app.json`, verify:

- Asset files exist at the exact referenced paths.
- Images are not placeholders.
- Icon is readable at small size.
- Splash screen is not visually noisy.
- App still starts locally.
- No API call is made.
- Booking submit remains disabled.

## What is intentionally not included

- No App Store submission.
- No native build.
- No EAS configuration.
- No API integration.
- No auth/login.
- No live booking flow.
- No production data.

## Next safest step

After this PR is reviewed and merged, create a small follow-up PR for real local image assets only. Do not update `app.json` until the asset paths are confirmed.
