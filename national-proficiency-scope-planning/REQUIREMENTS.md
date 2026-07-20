# Requirements — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, S-### rows)_

This file tracks confirmed and proposed **feature / scope requirements** in plain language. It mirrors the `S-###` rows in the Scope Items tab. Every row here should have a matching row in the spreadsheet, and vice versa.

## Confirmed Direction (details still needed — see Open Questions)

### S-001 — Branded App Launch Animation
**Priority:** P1 · **Status:** Confirmed (direction) · **Area:** Public form / Onboarding
On open (iOS or Android), the app shows a branded "National Proficiency" animation before login.
**What remains:** animation length/style, brand assets, whether it's skippable, cold-start behavior on slow networks.

### S-002 — Username/Password Login
**Priority:** P0 · **Status:** Needs Clarification · **Area:** User management
Users must log in with a username and password to access their individual account.
**What remains:** account provisioning model (self sign-up vs. admin-issued vs. invite-only), password-reset flow, session/MFA rules — see Q-005.

### S-003 — Individual Profile Page
**Priority:** P0 · **Status:** Needs Clarification · **Area:** Client portal
Post-login landing page: user photo on top, current rank, medals/achievements earned, and guidance on the next accomplishment to pursue.
**What remains:** full rank system and advancement criteria (Q-002), full medal/achievement list and earn criteria (Q-003), logic for "what's next," and photo source (user-uploaded vs. admin-assigned).

### S-004 — Home Tab
**Priority:** P1 · **Status:** Needs Clarification · **Area:** Client portal
Updates feed, monthly challenges, and a community aspect.
**What remains:** who authors "updates" (admin vs. system-generated), monthly-challenge structure/scoring (Q-006), and how the "community aspect" differs from the Messaging tab (Q-004).

### S-005 — Messaging / Community Communications Tab
**Priority:** P1 · **Status:** Needs Clarification · **Area:** Client portal
A second tab, positioned next to Home, where members keep each other updated on information or activities.
**What remains:** direct message vs. group chat vs. public feed (Q-004), moderation, push notifications, media/attachment support.

## Removed / Deferred Requirements
_None yet._

---
**How this stays in sync:** whenever a scope item (`S-###`) is added, confirmed, changed, or removed in the spreadsheet, this file is updated in the same pass. See `AI_INSTRUCTIONS.md` for the full sync rule.
