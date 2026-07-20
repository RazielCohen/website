# Requirements — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, S-### rows)_

This file tracks confirmed and proposed **feature / scope requirements** in plain language. It mirrors the `S-###` rows in the Scope Items tab. Every row here should have a matching row in the spreadsheet, and vice versa.

## Confirmed Direction (details still needed — see Open Questions)

### S-001 — Branded App Launch Animation
**Priority:** P1 · **Status:** Confirmed (direction) · **Area:** Public form / Onboarding
On open (iOS or Android), the app shows a branded "National Proficiency" animation before login.
**What remains:** animation length/style, brand assets, whether it's skippable, cold-start behavior on slow networks.

### S-002 — Account Required for All Access
**Priority:** P0 · **Status:** Needs Clarification · **Area:** User management
Account required for all app access — no guest/anonymous use. New users create an account and select a membership tier; existing users log in with username/password.
**What remains:** account provisioning model, password-reset flow, session/MFA rules (Q-005); confirm tier selection happens at sign-up (S-007).

### S-003 — Individual Profile Page
**Priority:** P0 · **Status:** Needs Clarification · **Area:** Client portal
Post-login landing page: user photo on top, current rank, medals/achievements earned, and guidance on the next accomplishment to pursue.
**What remains:** full rank system and advancement criteria (Q-002), full medal/achievement list and earn criteria (Q-003), logic for "what's next," and photo source.

### S-004 — Home Tab
**Priority:** P1 · **Status:** Needs Clarification · **Area:** Client portal
Updates feed, monthly challenges, and a community aspect. Free tier is described as excluding challenges.
**What remains:** who authors "updates," monthly-challenge structure/scoring (Q-006), how "community aspect" differs from Messaging (Q-004), and how tier-gating applies within this one tab (Q-011).

### S-005 — Messaging / Community Communications Tab
**Priority:** P1 · **Status:** Needs Clarification · **Area:** Client portal
Second tab, next to Home, where members keep each other updated. Free tier excludes chats; Premium includes them; Mid tier TBD.
**What remains:** direct message vs. group chat vs. public feed (Q-004), moderation, push notifications, media/attachment support, Mid-tier access level (Q-009).

### S-006 — Media Hosting Tab (Premium Only)
**Priority:** P1 · **Status:** Needs Clarification · **Area:** Client portal (Media)
A tab after Home and Chat, accessible only to Premium subscribers, hosting medical training videos, fitness training videos, and firearms & building training videos.
**What remains:** exact video category definitions (Q-008), hosting/CDN/storage approach, upload ownership, streaming vs. download, accessibility/captioning, content liability review (R-002).

### S-007 — Membership Tier System (Free / Mid / Premium)
**Priority:** P0 · **Status:** Needs Clarification · **Area:** Payments
Three tiers gate feature access:
- **Free:** app, profile page, Home page only — no chats, media, or monthly challenges.
- **Mid:** feature set still being defined by the client.
- **Premium:** all features, plus monthly raffles tied to challenges, media access, chats, and additional personalized guidance.

**What remains:** full Mid-tier feature list (Q-009), pricing per tier and billing platform (Q-010), upgrade/downgrade flow, legal review of the raffle mechanic (R-001). This gates the build of nearly every other feature via entitlement/paywall logic.

## Removed / Deferred Requirements
_None yet._

---
**How this stays in sync:** whenever a scope item (`S-###`) is added, confirmed, changed, or removed in the spreadsheet, this file is updated in the same pass. See `AI_INSTRUCTIONS.md` for the full sync rule.
