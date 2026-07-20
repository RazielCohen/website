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

### CAP-007 — Instructor Pre-Registration ("+" Button)
Approved Instructors only. From the tab bar, they tap a center "+" button to open a form: select category (Medical/Firearms/Fitness), tier, and date, then submit. This produces an approval confirmation and sends a Google Calendar invite to the student. *(Relates to S-008, S-009, S-010; approval workflow and calendar approach still open — Q-014, Q-016.)*

### CAP-008 — Qualification Administration & Grading
Approved Instructors only. On test day, the instructor opens the registered qualification, follows that tier's standard/course of fire, and records results — via the Shooter's Global shot-timer integration or manual entry. Grading is checklist-based and strictly pass/fail; any edit is logged in an audit trail. A Pass automatically updates the student's profile rank/medal (CAP-003). *(Relates to S-011, S-012, S-013; standards content, integration status, and retest policy still open — Q-002, Q-003, Q-017, Q-018.)*

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

## Proposed / Draft Workflows

### F-002 — Virtual Qualifications via Wearable Data
Client's own framing: a future possibility where certain qualifications could be completed remotely using wearable-sourced data tied to specific events, instead of in-person instructor administration. Explicitly described as a later-phase idea, not current scope. See risk R-004 for the fraud/verification concern this would raise.

---
**How this stays in sync:** any new workflow, user journey, or capability discussed is added here **and** as a row in the System Capability Map tab at the same time.
