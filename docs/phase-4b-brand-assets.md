# Phase 4B - Brand asset sources

Status: draft assets added for review.

## Goal

Add safe, reviewable source assets for the Proffera mobile prototype without connecting them to runtime config yet.

This phase is intentionally add-only.

## Files added

- `assets/proffera-icon.svg`
- `assets/proffera-splash.svg`

## What these files are for

### `assets/proffera-icon.svg`

Source SVG for the future app icon.

It uses:

- Proffera dark green background
- lighter green inner surface
- simple `P` mark
- rounded app-icon style shape

### `assets/proffera-splash.svg`

Source SVG for the future splash screen.

It uses:

- off-white background
- Proffera green mark
- Swedish prototype subtitle

## What is not connected yet

These files are not connected to Expo runtime config yet.

Not changed in this phase:

- `app.json`
- `package.json`
- `package-lock.json`
- `src/`
- navigation
- screens
- API
- auth
- booking submit

## Why `app.json` was not changed

Expo app icons and splash images normally need PNG files with correct dimensions.

This PR only adds SVG source assets first. A later phase can generate PNG files and then update `app.json` in a small separate PR.

## Recommended next phase

Phase 4C should be:

1. Generate PNG assets from the SVG sources.
2. Add only the required PNG files.
3. Update `app.json` to reference those PNG files.
4. Run `npx tsc --noEmit`.
5. Run `npx expo start` if the environment allows it.

## Safety confirmation

No production API is called.
No real booking, order, transaction, email, or notification is created.
The website repository is not touched.
