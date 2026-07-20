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

## Proposed / Draft Workflows
_None yet beyond the above, aside from F-001 (leaderboard-style bonus badges) — logged as a future idea, not yet confirmed for v1._

---
**How this stays in sync:** any new workflow, user journey, or capability discussed is added here **and** as a row in the System Capability Map tab at the same time.
