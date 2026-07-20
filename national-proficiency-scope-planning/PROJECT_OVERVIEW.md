# Project Overview — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Summary tab)_

## Project Name
National Proficiency Scope Planning

## Current Understanding
National Proficiency is a native mobile app (iOS + Android), account-required (no guest access), completely unrelated to Tactical Rabbi. It is a **proficiency records-keeping platform** across three pillars — **Medical, Firearms, Fitness** — administered by vetted Approved Instructors. National Proficiency itself takes no responsibility for the underlying qualification standards or outcomes.

**User-side flow:** branded launch animation → account creation (basic info → issued a unique serial number/code) or login → individual profile page (photo, rank, medals, next-accomplishment guidance) → tab bar with Home, Chat/Messaging, and Media, tier-gated (Free / Mid TBD / Premium).

**Instructor/backend side:** Approved Instructors register and are vetted (via a website, or possibly in-app — not yet reconciled, see Q-019), choosing a specialty (Firearms, Fitness, or Medical), and sign a waiver.

**CORRECTED registration flow:** the client revised how qualification registration works. Instead of an instructor typing in a student's info and tier, **the student now initiates it from their own profile** — selecting "Register"/"Choose qualification day," picking a category (Medical, Firearms, or Fitness). The app already knows the student's current tier and **only allows registering for the next eligible tier** (no skipping ahead), then **recommends nearby instructors** to choose from (Google Calendar invite sent). The old instructor-initiated flow (S-009) is marked **Removed/superseded** by the new S-025, kept in the sheet for traceability rather than silently overwritten.

On test day, instructors access qualification standards **scoped only to the specific student registration in front of them** — they cannot browse other tiers freely (S-026). They record results (Shooter's Global or manual entry) and grade strictly pass/fail with a mandatory edit-audit-trail. An instructor can **upgrade** a tier on a Pass but **cannot lower one directly** — only request a downgrade with a reason.

**New content-visibility rules:** Medical and Fitness qualification standards are fully **public** (each has a defined ceiling, so there's nothing sensitive to hide). Firearms exact drills stay **confidential**, but each tier publicly shows the general skills needed to prepare, without revealing the exact test content.

**New profile feature:** a Pokémon-style progression visual (S-028) — earned tiers/medals in full color, the in-progress tier grayed out, and future tiers blacked-out/locked as a preview of what's ahead.

**New this round:**
- **Habit-reminder notifications** (S-029), Garmin-style: customizable daily reminders per pillar — Fitness (water intake, step count), Firearms (dry-fire practice), Medical (tourniquet practice). Users adjust which reminders they get.
- **Profile photo privacy toggle** (S-030): a user's name and unique code may be shown to others, but they could optionally hide their photo. Client's own phrasing was tentative ("might be worth integrating") — flagged (Q-033) to confirm this is committed scope rather than assumed.

**Role hierarchy:** two cofounders have full access to edit any record. A zip-code locator map helps users find nearby instructors.

**Legal/liability model:** every user signs a liability waiver — National Proficiency is a records-keeping company only, not responsible for outcomes.

**New this round:**
- **Home tab leaderboard** for Fitness and Firearms — most badges earned, fastest mile, longest distance, and similar metrics (S-021, supersedes the earlier tentative future idea F-001).
- **Wearable/fitness-platform integration** — users can connect a Garmin, Apple Watch, or Strava account (their choice) to sync personal activity data, feeding the leaderboard (S-022).
- **Future idea (client's own framing, "later"):** this wearable data could eventually support **virtual, remote qualifications** tied to specific events (F-002) — flagged with a fraud/verification risk (R-004) since qualifications are official pass/fail records.
- **Client confirmed a full qualifications/training standards document exists** and will be provided on a later date — this is expected to resolve the single biggest content gap (the actual rank list, medal list, and course-of-fire standards) once received.
- **ID verification during registration** (both students and instructors) — a third-party service (client mentioned "ID.me" or similar) confirms the person is 18+ and, per the client, "legally allowed to own a firearm," **without National Proficiency storing sensitive ID/legal documents itself** (S-023). This also enables **ban enforcement**: if a banned person tries to re-register under new information, the system can recognize their previously verified identity and block it (S-024).
- **Flagged risk (R-005, P0):** standard ID-verification vendors like ID.me typically confirm identity and age, not firearm-purchase eligibility — that's usually a separate NICS-style background check. Recommend confirming with the client/vendor exactly what's being verified before this is built, so it isn't assumed to cover more legal ground than it does.

## Business Goal
National Proficiency is a **records-keeping/tracking company**: it documents where people are qualifying (medical, firearms, fitness) and what they currently hold, via vetted Approved Instructors — it does not set or guarantee the underlying training standards and assumes no liability for outcomes. The exact target market/customer segment and any monetization beyond the three membership tiers is still not stated — see `OPEN_QUESTIONS.md` (Q-001, P2).

## Highest Priority Next
Receive the client's qualifications/training standards document (Q-002, Q-003, S-011) once available. Resolve the ID-verification vendor scope urgently (Q-025, R-005) — confirm whether the chosen vendor can actually verify firearm eligibility or only identity/age, since this is a real legal-exposure point. In parallel, resolve P0 items: account/auth rules including the serial number vs. login question (Q-005, Q-022), Mid-tier feature list and tier pricing (Q-009, Q-010), the raffle legal/compliance risk (R-001), instructor vetting criteria and downgrade-approval authority (Q-015, Q-021, Q-023), whether instructor registration/vetting is web or in-app (Q-019), and legal review/drafting of both waivers (S-016).

## Verification Required
Client confirmation of navigation structure, monthly-challenge mechanics, Home-vs-Messaging community overlap and tier-gating (Q-004, Q-011), exact Media tab video categories (Q-008), the pre-registration approval workflow (Q-014), Google Calendar and Shooter's Global integration details (Q-016, Q-017), leaderboard metric list and Medical inclusion (S-021), wearable-platform data points (S-022), and locator-map search/filter scope (Q-024).

## Open Decisions
Login mechanism, profile-page landing screen, tab order, account-required access, the three-tier structure, the three proficiency pillars, strict pass/fail grading, the edit-audit-trail requirement, the two-cofounder Owner role, instructor upgrade/no-unilateral-downgrade rule, and both required waivers are decided in direction — see `DECISIONS.md`. Mid tier, all pricing, the full qualification standards content (confirmed forthcoming), and the actual waiver legal text remain undecided.

## Proposal Notes
App concept, tier/paywall structure, instructor/qualification workflow, role hierarchy, liability model, leaderboard, and wearable integration now captured. Still not proposal-ready — multiple P0 items open, plus legal/compliance risks (R-001, R-002/R-003 partially mitigated, R-004 future-phase) that should be resolved before proposing pricing or timelines. See `PROPOSAL_READINESS.md`.

## Repo Note
The client has asked for National Proficiency's docs to live in a separate repository from Tactical Rabbi, to guarantee no information crossover. This session's GitHub integration cannot create new repositories (permission error) — waiting on the client to create an empty repo so this content can be moved and this folder removed from `website`.

---
This file mirrors the **Summary** tab of the companion spreadsheet. It is updated any time the spreadsheet's Summary tab changes, and vice versa.
