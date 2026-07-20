# Changelog — National Proficiency Scope Planning

All notable changes to the scope worksheet and its companion Markdown files are logged here, most recent first.

## 2026-07-20 — Leaderboard, Wearable Integration, Standards Document Confirmed
- Logged the client's clarification that instructor vetting/approval could be done in-app (not yet reconciled with the earlier "register on the website" statement — updated `Q-019` and `S-015` to flag the open tension rather than assume either way).
- Added `S-021` (Home tab leaderboard for Fitness and Firearms — badges earned, fastest mile, longest distance) with concrete detail, **superseding** `F-001` (the earlier, more tentative leaderboard idea). Marked `F-001`'s Current Status as `Removed` with a note pointing to `S-021`, preserving the audit trail instead of silently overwriting it.
- Added `S-022` (Garmin/Apple Watch/Strava wearable integration) feeding the leaderboard.
- Added `F-002` (future idea: virtual/remote qualifications using wearable data, per the client's own "later" framing) and `R-004` (new risk: potential falsification of wearable-sourced qualification data — anti-fraud safeguards needed before this is ever built).
- Added `CAP-013` and `CAP-014` to the System Capability Map.
- **Major update:** client confirmed a full qualifications/training standards document exists and will be provided later. Updated `Q-002`, `Q-003`, and `S-011` to reflect that the biggest remaining content gap now has a committed source (just not yet a delivery date) — status changed to "Waiting on Client" rather than an open-ended unknown.
- Updated `S-004` to cross-reference the new leaderboard's overlap with Home's existing "community aspect" and monthly challenges.
- Added the raw client message to Raw Notes.
- Logged 3 new confirmed decisions in `DECISIONS.md`.
- Updated `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, `PROPOSAL_READINESS.md` to match.
- Proposal readiness unchanged: **NOT READY**, but the path is clearer — most remaining gaps are now specific deliverables/confirmations (a document, a few process decisions) rather than open-ended design questions.

## 2026-07-20 — Role Hierarchy, Vetting, Waivers, Locator Map, Media Badges
- Logged the client's description of: the two-cofounder Owner role (full record access/edit); instructor registration and vetting via a website with specialty selection (Firearms/Fitness/Medical); a zip-code-based instructor locator map; the instructor tier-upgrade-yes/downgrade-request-only rule; new-account creation issuing a unique serial number/code; two required waivers (instructor standards waiver, and a universal liability waiver establishing National Proficiency as a records-keeping-only company with no responsibility for outcomes); and Media-tab video-completion badges verified by an online quiz.
- Added 7 scope items (`S-014`–`S-020`), 1 future idea (`F-001`, leaderboard-style bonus badges — logged tentatively per the client's own phrasing), and 6 open questions (`Q-019`–`Q-024`).
- **Significant resolution:** the universal liability waiver and "records-keeping only" description substantially answers `Q-001`'s business-model question — downgraded from P0 to P2, since only the specific target market/segment remains unstated. This also partially mitigates `R-002` and `R-003`, though both still need a legal review of the waiver's actual enforceability.
- Updated `S-002` (serial-number/login relationship — Q-022) and `S-013` (tier-upgrade/no-unilateral-downgrade rule, ties to `S-018`).
- Added `CAP-009` through `CAP-012` to the System Capability Map.
- Added the raw client message to Raw Notes.
- Logged 8 new confirmed decisions in `DECISIONS.md`.
- Updated `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, `PROPOSAL_READINESS.md` to match.
- Proposal readiness unchanged: **NOT READY** — business model is now clear, but instructor vetting process, waiver legal text, pricing, and the actual qualification standards content are still outstanding P0 items.

## 2026-07-20 — Instructor / Backend Qualification Workflow
- Logged the client's description of the instructor/backend side: Approved Instructor role, a center "+" pre-registration button (category/tier/date), Google Calendar integration, an instructor-accessible qualification-standards library ("course of fire"), Shooter's Global shot-timer integration with manual-entry fallback, strict pass/fail grading with a mandatory edit-audit-trail, and automatic profile rank/medal updates on Pass.
- Added 6 scope items (`S-008`–`S-013`) and 5 open questions (`Q-014`–`Q-018`), plus 1 new risk (`R-003`, qualification record-keeping/compliance exposure — related to `R-001`, `R-002`).
- Updated `Q-001` (three pillars confirmed: Medical, Firearms, Fitness; audience/business model still open), `Q-002`/`Q-003` (earning mechanism now confirmed, actual standards content still needed), and `S-003` (rank/medal update mechanism now confirmed).
- Added `CAP-007` and `CAP-008` to the System Capability Map for the instructor workflow.
- Added the raw client message to Raw Notes.
- Logged 5 new confirmed decisions in `DECISIONS.md` (three pillars, instructor role definition, strict pass/fail, edit audit trail, auto profile update on Pass).
- Updated `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, `PROPOSAL_READINESS.md` to match.
- Proposal readiness unchanged: **NOT READY** — significant new detail captured, but P0 questions grew (business audience/model, actual qualification standards content, instructor designation process) and a second compliance risk (R-003) was flagged alongside R-001.

## 2026-07-20 — Brand Separation Confirmed
- Client confirmed National Proficiency and Tactical Rabbi (the other project already in this repo) are completely separate, unrelated brands/companies, with no crossover of information between the two.
- Closed the Tactical Rabbi sub-question inside `Q-001`; the core business-description/audience question remains open.
- Logged the decision in `DECISIONS.md` and updated `PROJECT_OVERVIEW.md`, `OPEN_QUESTIONS.md`, and the Scope Items/Raw Notes tabs to match.
- Raised a repo-hygiene question with the client: both projects currently live in the same git repository — asked whether National Proficiency's docs should move to a separate repo to guarantee no data crossover, given the explicit "no crossover" instruction.

## 2026-07-20 — Media Tab and Membership Tiers
- Logged the client's addition: a Premium-only Media tab (medical, fitness, and firearms & building training videos) placed after Home and Chat; the whole app requires an account (no guest access); a three-tier membership structure (Free / Mid / Premium) gates feature access, with Mid still undefined by the client.
- Added 2 scope items (`S-006` Media tab, `S-007` Membership tier system) and updated `S-002`, `S-004`, `S-005` "What Remains" to reflect account-required access and tier gating.
- Added 6 open questions (`Q-008`–`Q-013`): exact Media video categories, Mid-tier feature list, tier pricing/billing, Home-tab tier-gating overlap with challenges, raffle mechanics, and meaning of "additional guidance."
- Added 2 risks (`R-001` raffle sweepstakes/lottery law exposure, `R-002` firearms/medical content liability) — both proposal-impacting, flagged for legal/compliance review.
- Added `CAP-006` (Media tab) to the System Capability Map; updated `CAP-002`, `CAP-004`, `CAP-005` for account-required access and tier gating.
- Added the raw client message to Raw Notes.
- Updated `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, `DECISIONS.md`, `PROPOSAL_READINESS.md` to match.
- Proposal readiness unchanged: **NOT READY** — now 6 P0 items open, plus 1 P0 legal/compliance risk.

## 2026-07-20 — Initial App Concept
- Logged the client's first description of the app: branded launch animation → username/password login → individual profile page (photo, current rank, medals, next-accomplishment guidance) → Home tab (updates, monthly challenges, community aspect) → second tab, next to Home, for messaging/community communication.
- Added 5 scope items (`S-001`–`S-005`) to the Scope Items tab, one per workflow, all with "What Remains" detailing missing rules.
- Added 7 open questions (`Q-001`–`Q-007`) to the Scope Items tab, covering business domain, rank/medal system, account provisioning, monthly-challenge mechanics, Home-vs-Messaging overlap, and full navigation structure.
- Added 5 rows (`CAP-001`–`CAP-005`) to the System Capability Map tab, mapping each confirmed workflow.
- Added the raw client message to the Raw Notes tab and removed the example rows from Scope Items, System Capability Map, and Raw Notes (real data now populates them). Ready for Review's example row is unchanged — nothing is review-ready yet.
- Logged 4 confirmed decisions to `DECISIONS.md` (native iOS/Android, username/password login, profile page as post-login landing screen, partial tab order).
- Updated `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, and `PROPOSAL_READINESS.md` to match.
- Proposal readiness unchanged: **NOT READY** — 4 P0 questions still open.

## 2026-07-20
- Created `National_Proficiency_Scope_Planning_Worksheet.xlsx` with 5 tabs: Summary, Scope Items, Ready for Review, System Capability Map, Raw Notes — column structures match the spec exactly (Huisman Consultants internal roadmap format) so rows can be copied into the project tracker later.
- Created companion Markdown files: `PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `OPEN_QUESTIONS.md`, `WORKFLOWS.md`, `DECISIONS.md`, `CHANGELOG.md`, `PROPOSAL_READINESS.md`, `AI_INSTRUCTIONS.md`.
- No project-specific content entered yet — all tabs/files contain structure and example rows only, clearly marked. Nothing has been guessed.
- Established the sync rule: every meaningful update to the spreadsheet or a Markdown file triggers an update to the others, plus a refreshed `PROPOSAL_READINESS.md` review.
