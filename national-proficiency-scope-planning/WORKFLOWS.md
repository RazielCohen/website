# Workflows — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (System Capability Map tab)_

This file describes known/confirmed workflows in plain language — who does what, where, and how it's confirmed. It mirrors the System Capability Map tab (`CAP-###` rows).

## Confirmed Workflows (direction confirmed; details pending — see Open Questions)

### CAP-001 — App Launch → Branded Animation
Any user, before logging in, opens the app on iOS or Android and sees a "National Proficiency" branded launch animation. *(Relates to S-001.)*

### CAP-002 — Account Creation / Login
The whole app requires an account — there is no guest/anonymous access. New users create an account (and, per S-007, will need to select a membership tier); returning users log in. *(Relates to S-002, S-007; account provisioning still open — Q-005.)*

### CAP-003 — Individual Profile Page
Immediately after login, the member lands on their own profile page: photo on top, current rank, medals/achievements earned, and guidance on their next accomplishment. Available to all tiers. *(Relates to S-003; rank/medal system still open — Q-002, Q-003.)*

### CAP-004 — Home Tab
From the tab bar, a logged-in member can open Home to see updates, monthly challenges, and a community aspect. Available to all tiers, though challenges may be gated to Mid/Premium — see Q-011. *(Relates to S-004.)*

### CAP-005 — Chat / Messaging Tab
A tab next to Home lets members send/receive messages or updates with other members. Confirmed for Premium; excluded for Free; Mid tier not yet defined. *(Relates to S-005; messaging model still open — Q-004.)*

### CAP-006 — Media Tab
A tab after Home and Chat hosts medical, fitness, and firearms/building training videos. **Premium tier only** — Free and Mid (TBD) are excluded. *(Relates to S-006; video categories and hosting approach still open — Q-008; content liability risk — R-002.)*

### CAP-007 — Student-Initiated Qualification Registration (CORRECTED)
**Corrected from an earlier instructor-initiated design.** A student, from their own profile, selects "Register"/"Choose qualification day," picks a category (Medical/Firearms/Fitness). The app already knows their current tier and only allows registering for the next eligible one, then recommends nearby instructors. This produces an approval confirmation and sends a Google Calendar invite. *(Relates to S-025, S-010; supersedes the original S-009, now Removed. Approval workflow, calendar approach, and recommendation-engine logic still open — Q-014, Q-016, Q-031.)*

### CAP-008 — Qualification Administration & Grading
Approved Instructors only, **scoped to the specific student registration in front of them** — not a free browse of every tier (S-026). On test day, the instructor opens the registered qualification, follows that tier's standard/course of fire, and records results — via the Shooter's Global shot-timer integration or manual entry. Grading is checklist-based and strictly pass/fail; any edit is logged in an audit trail. A Pass automatically updates the student's profile rank/medal (CAP-003). *(Relates to S-011, S-012, S-013, S-026; standards content, integration status, and retest policy still open — Q-002, Q-003, Q-017, Q-018, Q-029.)*

### CAP-009 — Owner-Level Record Access & Edit
The two cofounders only, with full access to view/edit any instructor or student record. *(Relates to S-014; whether cofounder edits are audit-logged like instructor edits still open.)*

### CAP-010 — Instructor Registration & Vetting
Prospective instructors register (on a website — separate build unconfirmed, Q-019), choose a specialty, go through vetting, sign the instructor waiver, and become an Approved Instructor. *(Relates to S-015, S-016; vetting criteria still open — Q-023.)*

### CAP-011 — Instructor Locator Map
All users (tier availability unconfirmed) search by zip code to find nearby approved instructors. *(Relates to S-017; search/filter scope still open — Q-024.)*

### CAP-012 — Video-Completion Badge
Premium-tier members (Media tab access) watch a specific video, pass a quiz, and earn a badge on their profile — distinct from qualification-based medals. *(Relates to S-020.)*

### CAP-013 — Home Tab Leaderboard
Logged-in members (tier availability TBD) view a Fitness/Firearms leaderboard on Home — ranked by badges earned, fastest mile, longest distance, and similar metrics. *(Relates to S-021, supersedes F-001; metric list and Medical inclusion still open.)*

### CAP-014 — Wearable/Fitness Platform Connection
Logged-in members can connect a Garmin, Apple Watch, or Strava account to sync personal activity data, feeding the leaderboard and potentially future virtual qualifications. *(Relates to S-022; data points and consent handling still open.)*

### CAP-015 — ID Verification During Registration
All new registrants — students and instructors — go through a third-party ID-verification step (vendor TBD, client mentioned ID.me) confirming age 18+ and, per the client, firearm eligibility, without National Proficiency storing raw ID documents. *(Relates to S-023; vendor scope and what it actually verifies still open — Q-025, R-005.)*

### CAP-016 — Ban Enforcement / Re-Registration Block
When someone banned from the platform attempts to re-register under new account information, the system matches against their previously verified identity and blocks or flags the attempt. *(Relates to S-024; ban criteria and approval authority still open — Q-026.)*

### CAP-017 — Scoped Instructor Access to Qualification Standards
An instructor opens a student's active registration and sees only that course's standard — not other tiers. *(Relates to S-026, S-011; exact access mechanics and the unclear boundary in Q-029 still open.)*

### CAP-018 — Profile Rank/Medal Progression Visual
Every user, viewing their own profile, sees a Pokémon-style progression view: earned tiers in full color, the in-progress tier grayed out, future tiers blacked-out/locked as a preview. *(Relates to S-028, S-003; locked-tier depth and per-category vs. combined view still open — Q-030.)*

### CAP-019 — Customizable Habit-Reminder Notifications
Any logged-in user can enable/disable daily reminders per pillar — Fitness, Firearms, Medical — from settings/preferences. *(Relates to S-029; full habit list and completion-tracking scope still open — Q-032.)*

### CAP-020 — Profile Photo Privacy Toggle
Any logged-in user can opt to hide their profile photo from other users, while name and unique code remain visible. *(Relates to S-030; client's own phrasing was tentative — confirm scope via Q-033, and affected surfaces via Q-034.)*

### CAP-021 — Minor/Dependent Account Creation ⚠ DO NOT BUILD YET
An adult account can add a linked minor (under-18) account, which gets its own individual profile. **Blocked pending legal review (R-006)** — the highest-risk item logged for this project, given minors + firearms/medical content + explicitly reduced vetting. *(Relates to S-031, F-003.)*

## Proposed / Draft Workflows

### F-002 — Virtual Qualifications via Wearable Data
Client's own framing: a future possibility where certain qualifications could be completed remotely using wearable-sourced data tied to specific events, instead of in-person instructor administration. Explicitly described as a later-phase idea, not current scope. See risk R-004 for the fraud/verification concern this would raise.

### F-003 — Full Minor Skill-Development Program ⚠
Client's own framing — "in the future" — a separate program for children under 18 with their own growth path, deliberately less strictly vetted than the adult program, oversight left to parents. Explicitly not current scope, but flagged as the project's highest-priority legal/child-safety risk (R-006) given the firearms/medical context. Legal review required before any design work.

---
**How this stays in sync:** any new workflow, user journey, or capability discussed is added here **and** as a row in the System Capability Map tab at the same time.
