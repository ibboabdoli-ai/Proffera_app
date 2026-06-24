# Phase 0 Audit — Proffera App

**Date:** 2026-06-24  
**Auditor:** Claude (Senior React Native / Expo Engineer)  
**Branch:** work/phase-0-1  
**Status:** READ-ONLY — No code written, no API calls made

---

## 1. What Was Inspected

- Website repo: https://github.com/ibboabdoli-ai/Proffera (README, folder structure)
- Live site: https://proffera.se (homepage, /priser, /villkor)
- Developer skill: `/mnt/skills/user/proffera-developer/SKILL.md`
- App repo: https://github.com/ibboabdoli-ai/Proffera_app — **does not exist yet** (404)

---

## 2. API Endpoint Analysis

### Finding

No public REST API was found exposed by the website repo. The website is a Next.js App Router project using:
- Server Actions (not REST endpoints)
- Internal API routes under `/src/app/api/` (not publicly documented)
- Neon/Postgres via `@neondatabase/serverless` (server-side only)
- Brevo for email delivery (server-side only)

### Conclusion

**There is NO public API available for Phase 1.**

The booking flow (`/api/booking/route.ts` if it exists) is an internal Next.js API route protected behind the site's middleware. It is NOT a documented public API.

| Field | Value |
|---|---|
| Endpoint path | Unknown — not publicly documented |
| Request payload | Unknown — not publicly documented |
| Response shape | Unknown — not publicly documented |
| Auth requirements | Unknown — Better Auth installed but not active |
| Rate limits | Not visible |

### Live API call made? **NO**

---

## 3. Pricing / Calculator Logic

From the live `/priser` page:

| Plan | Price | Key features |
|---|---|---|
| Starter | Från 299 kr/mån | Bokningsflöde, e-postnotiser, kontaktformulär, grundläggande leadlista |
| Professional | Från 699 kr/mån | Allt i Starter + AI-chatt, CRM, analysöversikt, automatiska bekräftelser |
| Business | Offert | Allt i Professional + prioriterad support, flera platser, anpassade integrationer |

- **Source file:** Not found publicly (likely in `src/app/priser/page.tsx`)
- **Can it be copied safely?** Yes — pricing data is static/public. Can be hardcoded as constants in the app.
- **Dependencies:** None. It's static display data.

---

## 4. Legal / Copy Text (must be used as-is)

From https://proffera.se/villkor:

```
Obs: detta är preliminära MVP-villkor och bör juridiskt granskas 
innan större publik lansering.
```

This disclaimer MUST appear verbatim on any legal/villkor screen in the app.

Footer copyright: `© 2026 Proffera. Alla rättigheter förbehållna.`

---

## 5. Module Status (from live site + skill)

| Module | Status |
|---|---|
| Onlinebokning | Aktiv |
| Kund-CRM | Aktiv |
| AI-chattassistent | Planerad |
| Automatiska mejl | Planerad |
| QR-bokning | Låst |

---

## 6. Does Phase 1 Need a Backend?

**NO.** Phase 1 is a navigation prototype with:
- Static placeholder content
- No real API calls
- No auth
- Disabled booking submit button

No backend work is needed or permitted for Phase 1.

---

## 7. Risks Found

| Risk | Severity | Note |
|---|---|---|
| App repo does not exist on GitHub | Medium | Must be created manually or via GitHub UI before `git push` |
| No public API documented | Low for Phase 1 | Phase 2 must define API contract before connecting BookingScreen |
| Better Auth not yet active on website | Low | Phase 2 login flow blocked until auth is live on backend |
| Pricing marked "preliminary" in villkor | Low | App must show same disclaimer |

---

## 8. Recommendations for Phase 2

1. **Define a public API contract** — at minimum a `POST /api/demo-request` or `POST /api/booking` endpoint with documented payload/response before app connects
2. **Create GitHub repo** `ibboabdoli-ai/Proffera_app` before pushing
3. **Auth strategy** — decide if app uses same Better Auth session or a separate mobile token flow
4. **Do NOT connect BookingScreen submit** until API contract is approved

---

## Confirmation Checklist

- [x] Website repo inspected (read-only)
- [x] Live site inspected (read-only)
- [x] No API call made to production
- [x] No booking, order, or transaction created
- [x] No email or notification sent
- [x] Website repo NOT modified
- [x] Auth, payment, email logic NOT touched
