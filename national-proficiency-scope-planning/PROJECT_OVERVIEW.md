# Project Overview — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Summary tab)_

## Project Name
National Proficiency Scope Planning

## Current Understanding
National Proficiency is a native mobile app (iOS + Android), **account-required** (no guest access), and **completely unrelated to Tactical Rabbi** (no information crossover — client-confirmed).

**User-side flow (confirmed):**
1. Branded launch animation → account login (no guest access).
2. Lands on the **individual profile page**: photo, current rank, medals/achievements, next-accomplishment guidance.
3. Tab bar: **Home** (updates, monthly challenges, community aspect) → **Chat/Messaging** → **Media** (medical, fitness, and firearms & building training videos, Premium-only).
4. **Three membership tiers** gate access: Free (app + profile + Home only), Mid (still being defined by the client), Premium (everything, plus monthly raffles and personalized guidance).
5. **Three proficiency pillars are confirmed: Medical, Firearms, and Fitness.**

**Instructor/backend side (new):**
- **Approved Instructors** share the regular user's profile and access, plus an instructor-only **"+" button** (center bottom of the app) to pre-register a student for a qualification — selecting category (Medical/Firearms/Fitness), level/tier, and date.
- Submission produces an approval confirmation and a **Google Calendar** invite sent to the student.
- On qualification day, the instructor follows that tier's **qualification standard / course of fire**, records results via a **"Shooter's Global" shot-timer integration** or manual entry.
- Grading is **strictly pass/fail — no partial credit**. Any edit to recorded results must leave a **verifiable audit trail**.
- After the instructor checks off each qualification criterion to standard, a **Pass** button updates the student's profile with the new medal/badge/accomplishment — this is the confirmed mechanism behind the profile page's rank/medal display (S-003).

The target audience and business model (who takes this program, and how National Proficiency operates commercially) is still not explicitly stated — see `OPEN_QUESTIONS.md` (Q-001).

## Business Goal
TBD — not yet explicitly stated by the client.

## Highest Priority Next
Resolve P0 items: business audience/model (Q-001), the actual qualification standards content per category/tier (Q-002, Q-003, S-011), account/auth rules (Q-005), Mid-tier feature list and tier pricing (Q-009, Q-010), the raffle legal/compliance risk (R-001), and instructor designation process (Q-015).

## Verification Required
Client confirmation of navigation structure, monthly-challenge mechanics, Home-vs-Messaging community overlap and tier-gating (Q-004, Q-011), exact Media tab video categories (Q-008), the pre-registration approval workflow (Q-014), Google Calendar integration approach (Q-016), and Shooter's Global integration/partner status (Q-017).

## Open Decisions
Login mechanism, profile-page landing screen, tab order, account-required access, the three-tier structure, the three proficiency pillars, strict pass/fail grading, and the edit-audit-trail requirement are decided in direction — see `DECISIONS.md`. Mid tier, all pricing, and the full qualification standards content remain undecided.

## Proposal Notes
App concept, tier/paywall structure, and instructor/qualification workflow now captured. Still not proposal-ready — multiple P0 items open, plus legal/compliance risks (R-001 raffle, R-003 qualification record-keeping) that should be reviewed before proposing pricing or timelines. See `PROPOSAL_READINESS.md`.

## Repo Note
The client has asked for National Proficiency's docs to live in a separate repository from Tactical Rabbi, to guarantee no information crossover. This session's GitHub integration cannot create new repositories (permission error) — waiting on the client to create an empty repo so this content can be moved and this folder removed from `website`.

---
This file mirrors the **Summary** tab of the companion spreadsheet. It is updated any time the spreadsheet's Summary tab changes, and vice versa.
