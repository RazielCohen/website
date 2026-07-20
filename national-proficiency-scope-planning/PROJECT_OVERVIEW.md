# Project Overview — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Summary tab)_

## Project Name
National Proficiency Scope Planning

## Current Understanding
National Proficiency is a native mobile app (iOS + Android), account-required (no guest access), completely unrelated to Tactical Rabbi. It is a **proficiency records-keeping platform** across three pillars — **Medical, Firearms, Fitness** — administered by vetted Approved Instructors. National Proficiency itself takes no responsibility for the underlying qualification standards or outcomes (see Business Goal, and risks R-002/R-003).

**User-side flow:** branded launch animation → account creation (basic info → issued a unique serial number/code to access the account) or login → individual profile page (photo, rank, medals, next-accomplishment guidance) → tab bar with Home, Chat/Messaging, and Media, tier-gated (Free / Mid TBD / Premium).

**Instructor/backend side:** Approved Instructors register and are vetted via a website (choosing a specialty — Firearms, Fitness, or Medical), sign a waiver to follow National Proficiency's standards, and get an instructor-only "+" button to pre-register students for qualifications (Google Calendar invite sent), access qualification standards on test day, record results (Shooter's Global shot timer or manual entry), and grade strictly pass/fail with a mandatory edit-audit-trail. An instructor can **upgrade** a student's tier on a Pass, but **cannot lower/remove** a tier directly — only submit a downgrade request with a required reason.

**Role hierarchy:** Two **cofounders** sit above instructors with full access to view/edit any student or instructor record. A **zip-code-based locator map** lets users find nearby instructors.

**Legal/liability model:** every user signs a liability waiver stating National Proficiency is solely a records-keeping company, not responsible for shooting/medical/fitness outcomes — that liability, and legal compliance, is the individual's own.

**Media tab:** also awards quiz-verified badges for watching specific training videos (e.g. a "How to Build an AR-15" video + quiz = badge). The client also mentioned, more tentatively, additional leaderboard-style badges for peer ranking/camaraderie (logged as a future idea, F-001).

## Business Goal
National Proficiency is a **records-keeping/tracking company**: it documents where people are qualifying (medical, firearms, fitness) and what they currently hold, via vetted Approved Instructors — it does not set or guarantee the underlying training standards and assumes no liability for outcomes (client's own description). The exact target market/customer segment and any monetization beyond the three membership tiers is still not stated — see `OPEN_QUESTIONS.md` (Q-001, now P2).

## Highest Priority Next
Resolve P0 items: the actual qualification standards content per category/tier (Q-002, Q-003, S-011), account/auth rules including how the unique serial number relates to login (Q-005, Q-022), Mid-tier feature list and tier pricing (Q-009, Q-010), the raffle legal/compliance risk (R-001), instructor vetting criteria and downgrade-approval authority (Q-015, Q-021, Q-023), and legal review/drafting of both waivers (S-016).

## Verification Required
Client confirmation of navigation structure, monthly-challenge mechanics, Home-vs-Messaging community overlap and tier-gating (Q-004, Q-011), exact Media tab video categories (Q-008), the pre-registration approval workflow (Q-014), Google Calendar and Shooter's Global integration details (Q-016, Q-017), whether the instructor registration website is a separate build from the app (Q-019), and locator-map search/filter scope (Q-024).

## Open Decisions
Login mechanism, profile-page landing screen, tab order, account-required access, the three-tier structure, the three proficiency pillars, strict pass/fail grading, the edit-audit-trail requirement, the two-cofounder Owner role, instructor upgrade/no-unilateral-downgrade rule, and both required waivers are decided in direction — see `DECISIONS.md`. Mid tier, all pricing, the full qualification standards content, and the actual waiver legal text remain undecided.

## Proposal Notes
App concept, tier/paywall structure, instructor/qualification workflow, role hierarchy, and liability model now captured. Still not proposal-ready — multiple P0 items open, plus legal/compliance risks (R-001 raffle, R-002/R-003 now partially mitigated by the liability waiver but still need enforceability review) that should be resolved before proposing pricing or timelines. See `PROPOSAL_READINESS.md`.

## Repo Note
The client has asked for National Proficiency's docs to live in a separate repository from Tactical Rabbi, to guarantee no information crossover. This session's GitHub integration cannot create new repositories (permission error) — waiting on the client to create an empty repo so this content can be moved and this folder removed from `website`.

---
This file mirrors the **Summary** tab of the companion spreadsheet. It is updated any time the spreadsheet's Summary tab changes, and vice versa.
