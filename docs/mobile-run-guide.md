# Proffera App Mobile Run Guide

Status: Active run guide
Last updated: 2026-06-24

## Purpose

This guide documents the safe local run flow for the Proffera mobile app after the Expo SDK 54 upgrade.

## Project path

Proffera app:
D:\HTML\Proffera_App\Proffera_app

Do not confuse this project with:
D:\HTML\Iboren_app

## Current baseline

- Main branch is the stable branch.
- Expo SDK 54 is installed.
- Expo Go device test has passed on iPhone.
- Booking submit remains disabled.
- No backend, API, auth, payment, or email functionality is enabled from the mobile app.

## Required checks before work

Run:
git checkout main
git pull origin main
git status --short

git status --short should be empty before starting a new phase.

## Node, npm, and npx

This machine uses nvm.

If node, npm, or npx are not found, add the active Node path in the current PowerShell session:
$env:Path = "C:\Users\IAI\AppData\Local\nvm\v22.23.1;$env:Path"

Use .cmd commands in PowerShell:
node -v
npm.cmd -v
npx.cmd -v

Avoid plain npm or npx if PowerShell blocks .ps1 scripts.

## Install and validation

Run:
npm.cmd ci
npx.cmd expo install --check
npx.cmd tsc --noEmit

Do not run:
npm audit fix
npm audit fix --force

Those commands can change Expo-compatible dependency versions and should be handled only in a separate approved maintenance phase.

## Start Expo

Preferred LAN command:
npx.cmd expo start --lan --clear --port 8082

If port 8081 is busy, use 8082 or 8083.

Tunnel fallback:
npx.cmd expo start --tunnel --clear

Tunnel can fail because of ngrok or network issues. That is not automatically a code problem.

## iPhone test checklist

- App opens in Expo Go.
- Home screen loads.
- Bottom navigation works.
- Booking screen opens.
- Submit remains disabled.
- No crash observed.
- Text and layout fit the screen.

## Safety rules

- Do not work directly on main.
- Use work/proffera-* branches.
- Keep each phase small.
- Do not change backend, API, auth, payment, email, or admin behavior without explicit approval.
- Do not mix Proffera_app with Iboren_app.
- Do not enable booking submit until explicitly approved.
