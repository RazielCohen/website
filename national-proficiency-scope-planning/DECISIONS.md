# Decisions — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, Current Status = "Confirmed")_

This file is a running log of **confirmed decisions** — things that are no longer open questions. Each entry references the scope item ID it relates to.

| Date | Decision | Related ID | Notes / Source |
|---|---|---|---|
| 2026-07-20 | App is a native experience on both iOS and Android. | S-001 | Client description ("Android or Apple device"). |
| 2026-07-20 | Login uses username + password (not SSO/social login), described as required to access an individual account. | S-002 | Client description. |
| 2026-07-20 | The individual profile page — not the Home feed — is the landing screen immediately after login. | S-003 | Client description. |
| 2026-07-20 | Tab bar includes at least: profile page (post-login landing) → Home → Messaging/Community (second, positioned next to Home) → Media. | S-004, S-005, S-006 | Client description. Full tab list still open — see Q-007. |
| 2026-07-20 | The entire app requires an account — no guest/anonymous browsing beyond the launch animation. | S-002 | Client description. |
| 2026-07-20 | There will be three membership tiers: Free, Mid, and Premium. | S-007 | Client description. Mid tier's feature set is explicitly not yet defined by the client — see Q-009. |
| 2026-07-20 | Free tier includes app access, profile page, and Home page; excludes chats, media, and monthly challenges. | S-007 | Client description. |
| 2026-07-20 | Premium tier includes all features, plus monthly raffles tied to challenges, media access, chats, and additional personalized guidance. | S-007 | Client description. |
| 2026-07-20 | Media tab is Premium-tier only. | S-006 | Client description. |
| 2026-07-20 | National Proficiency and Tactical Rabbi (the other project in this repo) are completely separate, unrelated brands/companies — no crossover of information between the two. | Q-001 | Client confirmation, in response to a direct question. |
| 2026-07-20 | The three proficiency pillars are Medical, Firearms, and Fitness. | Q-001, S-009, S-011 | Client description. |
| 2026-07-20 | Approved Instructors have the same profile/access as regular users, plus an instructor-only "+" registration/administration capability. | S-008 | Client description. |
| 2026-07-20 | All qualifications are graded strictly pass/fail — no partial or leniency option. | S-013 | Client description. |
| 2026-07-20 | Any edit to recorded qualification results must leave a verifiable record that an edit was made. | S-013 | Client description. |
| 2026-07-20 | Passing a qualification automatically updates the student's profile with the corresponding new medal/badge/accomplishment. | S-013, S-003 | Client description. |
| 2026-07-20 | Two cofounders hold the top permission level, with full access to view/edit any instructor or student record. | S-014 | Client description. |
| 2026-07-20 | Instructors register via a website, choose a specialty (Firearms, Fitness, or Medical), and are individually vetted before being listed as an Approved Instructor. | S-015 | Client description. |
| 2026-07-20 | An instructor can upgrade a student's tier on a qualification Pass, but cannot lower/remove a tier directly — only submit a downgrade request with a required reason. | S-018, S-013 | Client description. |
| 2026-07-20 | New users provide basic information and are issued a unique serial number/code to access their account. | S-019 | Client description. Relationship to username/password login still open — Q-022. |
| 2026-07-20 | Instructors must sign a waiver agreeing to follow National Proficiency's standards. | S-016 | Client description. |
| 2026-07-20 | Every user must sign a liability waiver: National Proficiency is solely a records-keeping company, takes no responsibility for shooting/medical/fitness qualification outcomes, and all liability — including compliance with local, state, and federal law — rests with the individual. | S-016 | Client description. Business-model clarification also resolves most of Q-001. |
| 2026-07-20 | A zip-code-based map lets users find nearby approved instructors. | S-017 | Client description. |
| 2026-07-20 | Users can earn a digital badge for a specific Media video by passing an online quiz. | S-020 | Client description. |
| 2026-07-20 | The Home tab includes a leaderboard for Fitness and Firearms, ranking by badges earned, fastest mile, longest distance, and similar metrics. | S-021 | Client description. Supersedes the earlier, more tentative F-001. |
| 2026-07-20 | Users can connect a Garmin, Apple Watch, or Strava account (their choice) to sync personal activity data into the app. | S-022 | Client description. |
| 2026-07-20 | A full qualifications/training standards document exists and will be provided by the client at a later date. | Q-002, Q-003, S-011 | Client confirmation; document not yet received. |
| 2026-07-20 | Registration (students and instructors) will include third-party ID verification to confirm age 18+ and firearm eligibility, without National Proficiency storing sensitive ID/legal documents itself. | S-023 | Client description. Whether the chosen vendor can actually confirm firearm eligibility (vs. just identity/age) still needs legal/vendor confirmation — see R-005. |
| 2026-07-20 | If a banned user tries to re-register under new information, the system will use their verified identity to detect and prevent it. | S-024 | Client description. |
| 2026-07-20 | **CORRECTION:** qualification registration is student-initiated (from their own profile), not instructor-initiated. The app auto-restricts a student to their next eligible tier and recommends nearby instructors. | S-025 | Client correction, replacing the earlier direction logged for S-009 (now marked Removed). |
| 2026-07-20 | An instructor's access to qualification standards is scoped to the specific student registration in front of them — not an open browse of every tier. | S-026 | Client description. |
| 2026-07-20 | Medical and Fitness qualification standards are fully public; Firearms exact drills are confidential, but each tier publicly shows the general skills needed to prepare. | S-011 | Client description. |
| 2026-07-20 | The profile page will include a Pokémon-style progression visual: earned tiers in full color, in-progress tier grayed out, future tiers blacked-out/locked as a preview. | S-028 | Client description. |
| 2026-07-20 | The app will include customizable daily habit-reminder notifications per pillar (Fitness, Firearms, Medical), similar to Garmin. | S-029 | Client description. |
| 2026-07-20 | Adult accounts will have the option to add a linked minor (under-18) account, each with its own individual profile/program. | S-031 | Client description. **Not yet cleared for build — see R-006; requires legal review given the firearms/medical context and the client's own description of reduced vetting for this program.** |

---
**How this stays in sync:** whenever a scope item's status changes to `Confirmed`, or an open decision is settled, a row is added here in the same pass, dated and attributed to its source.
