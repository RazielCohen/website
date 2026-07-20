# Requirements — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, S-### rows)_

This file tracks confirmed and proposed **feature / scope requirements** in plain language. It mirrors the `S-###` rows in the Scope Items tab. Every row here should have a matching row in the spreadsheet, and vice versa.

## User-Side Requirements

- **S-001** Branded App Launch Animation — P1, needs asset/skip details.
- **S-002** Account Required for All Access — P0, needs auth rules and how the serial number (S-019) relates to login (Q-022).
- **S-003** Individual Profile Page — P0, earning mechanism confirmed via instructor Pass (S-013); still needs the actual rank/medal list (Q-002, Q-003).
- **S-004** Home Tab (updates, challenges, community) — P1, needs tier-gating clarification (Q-011).
- **S-005** Messaging / Community Tab — P1, needs message model and Mid-tier access (Q-004, Q-009).
- **S-006** Media Hosting Tab (Premium only) — P1, needs exact video categories (Q-008).
- **S-007** Membership Tier System (Free/Mid/Premium) — P0, needs Mid-tier features and pricing (Q-009, Q-010).

## Instructor / Backend Requirements

- **S-008** Approved Instructor Role — P0, needs designation process (Q-015). Updated: the "+" button pre-registration entry point has moved to the student's profile (S-025).
- **S-010** Google Calendar Integration — P1, needs integration specifics (Q-016).
- **S-011** Qualification Standards Library ("course of fire") — P0, needs the actual standards content (Q-002, Q-003) — client has confirmed a source document is coming. New: Medical/Fitness standards are fully public; Firearms exact drills are confidential (public "skills needed" summary per tier only). Instructor access is scoped per S-026.
- **S-012** Shot Timer Integration ("Shooter's Global") — P1, needs partner/integration confirmation (Q-017); manual entry is the confirmed fallback.
- **S-013** Qualification Grading, Pass/Fail & Audit Trail — P0, needs checklist criteria and audit-trail format; on Pass, upgrades the student's tier. Instructors cannot lower a tier directly (S-018).
- **S-025** Student-Initiated Qualification Registration (**corrected flow**) — P0. From their own profile, a student selects "Register"/"Choose qualification day," picks a category, and the app — already knowing their current tier — only allows registering for the next eligible tier, then recommends nearby instructors. **Supersedes S-009** (see Removed section below). Remaining: full field/flow details, recommendation-engine logic (Q-031), approval step (Q-014).
- **S-026** Scoped Instructor Access to Qualification Standards — P0. An instructor can't browse standards for tiers generally ("scroll through tier ten") — only the specific course a specific student is actively registered for. Remaining: exact access-control mechanics, and the unclear boundary condition in Q-029.

## Role Hierarchy, Vetting & Legal (new)

### S-014 — Cofounder / Owner Role
**P0 · Needs Clarification · Admin dashboard / Security / compliance.** The two cofounders have full access to view/edit any instructor or student record. **Remaining:** whether cofounder edits are also audit-logged; whether cofounders approve instructor downgrade requests (Q-021).

### S-015 — Instructor Registration & Vetting
**P0 · Needs Clarification · Admin dashboard / User management / Public form.** Instructors register on a website, choose a specialty (Firearms/Fitness/Medical), and are individually vetted before approval. **Remaining:** whether the registration site is a separate build (Q-019), vetting criteria (Q-023), multi-category eligibility (Q-020).

### S-016 — Instructor Waiver & Universal Liability Waiver
**P0 · Needs Clarification · Security / compliance / User management.** Instructors sign a waiver to follow National Proficiency's standards; every user signs a liability waiver establishing National Proficiency as a records-keeping company only, with no responsibility for shooting/medical/fitness outcomes. **Remaining:** actual legal text (needs client's counsel), e-signature/storage, enforceability review (relates to R-002, R-003).

### S-017 — Instructor Locator Map (Zip Code)
**P1 · Needs Clarification · Client portal / External integration.** Search by zip code for nearby approved instructors by drill/qualification needed. **Remaining:** search/filter scope and tier availability (Q-024).

### S-018 — Tier Upgrade / Downgrade-Request Workflow
**P0 · Needs Clarification · Admin dashboard / Security / compliance.** Instructor can upgrade a tier directly on a Pass; cannot lower/remove a tier directly — only submit a downgrade request with a required reason. **Remaining:** approval authority and process (Q-021).

### S-019 — New Account Creation & Unique Serial Number
**P0 · Needs Clarification · User management / Security / compliance.** New users provide basic info and are issued a unique serial number/code to access their account. **Remaining:** whether this replaces or supplements username/password login (Q-022).

### S-020 — Media Video-Completion Badges (Quiz-Verified)
**P1 · Needs Clarification · Client portal (Media) / Database / records.** Users earn a digital badge for a specific video by passing an online quiz. **Remaining:** quiz content/format, pass threshold, retake policy.

### S-021 — Home Tab Leaderboard (Fitness & Firearms)
**P1 · Needs Clarification · Client portal / Reporting.** Ranks users by badges earned, fastest mile, longest distance, and similar metrics. **Remaining:** whether Medical is intentionally excluded, full metric list, data source (S-022), privacy/opt-out. Supersedes F-001.

### S-022 — Wearable/Fitness Platform Integration (Garmin, Apple Watch, Strava)
**P1 · Needs Clarification · External integration.** Users connect a platform of choice to sync personal activity data, feeding the leaderboard. **Remaining:** data points per platform, OAuth, consent/privacy, no-connection fallback.

### S-023 — ID Verification During Registration
**P0 · Needs Clarification · Security / compliance / External integration / User management.** Third-party ID verification (e.g. ID.me) for both students and instructors, confirming 18+ and, per the client, firearm eligibility — without National Proficiency storing raw ID documents. **Remaining:** vendor selection and confirmation of what it actually verifies (Q-025; see risk R-005), failed-verification behavior (Q-027).

### S-024 — Ban Enforcement via Identity Verification
**P0 · Needs Clarification · Security / compliance / User management.** Uses the verified identity from S-023 to detect and block a banned user re-registering under new information. **Remaining:** ban criteria and approval authority (Q-026).

### S-028 — Profile Rank/Medal Progression Visual ("Skill Tree")
**P1 · Needs Clarification · Client portal.** Pokémon-style visual: earned tiers/medals in full color, in-progress tier grayed out, future tiers blacked-out/locked as a preview. **Remaining:** how many locked tiers to show, per-category vs. combined view (Q-030).

### S-029 — Customizable Habit-Reminder Notifications
**P1 · Needs Clarification · Notifications / Client portal.** Garmin-style daily reminders per pillar: Fitness (water/steps), Firearms (dry-fire), Medical (tourniquet practice). **Remaining:** full habit list and expandability (Q-032), whether completion is tracked/streaked, scheduling configurability.

### S-030 — Profile Photo Privacy Toggle
**P2 · Needs Clarification · Client portal / Security / compliance.** Option to hide a profile photo from other users while name/code remain visible. **Remaining:** confirm this is committed scope, not just a suggestion (Q-033); full list of surfaces affected (Q-034).

### S-031 — Minor/Dependent Account Creation (Parent-Linked) ⚠
**P1 · Needs Clarification · User management / Security / compliance.** Once an adult is registered, they can add a minor (under 18) who gets their own individual linked account. **DO NOT BUILD until the legal review in R-006 is complete.** **Remaining:** whether this is near-term or future-phase scope (Q-035), parent's data visibility into the minor's account (Q-038), minor account access model (Q-039), interaction with the 18+ ID-verification gate (S-023).

## Future Ideas

### F-003 — Full Minor Skill-Development Program ⚠
**P3 · Future Phase · Security / compliance / Client portal.** Client's own framing — "in the future" — a separate, deliberately less strictly vetted program for children under 18 with their own growth path, oversight left to parents. **Carries the highest legal/child-safety risk logged for this project (R-006)** given the firearms/medical context. Legal review required before any design work — see Q-036 (pillar eligibility for minors), Q-037 (vetting standard), Q-038 (COPPA-adjacent data/consent).

### F-002 — Virtual Qualifications via Wearable Data
**P3 · Future Phase · Admin dashboard / External integration.** Client's own framing: "could also be used later" to complete certain qualifications remotely using wearable data tied to specific events. Not proposal-blocking now. See risk R-004 (anti-fraud/verification).

## Removed / Deferred Requirements
- **F-001** — Leaderboard-style bonus badges (superseded by S-021 once the client gave concrete details).
- **S-009** — Instructor-initiated pre-registration ("+" button, instructor types in student's category/tier/date). The client corrected this: registration is now student-initiated. **Superseded by S-025.** Kept in the tracker, marked Removed, rather than silently deleted, so the correction stays traceable.

---
**How this stays in sync:** whenever a scope item (`S-###`) is added, confirmed, changed, or removed in the spreadsheet, this file is updated in the same pass. See `AI_INSTRUCTIONS.md` for the full sync rule.
