# Proposal Readiness — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_This file is regenerated after every meaningful change — see `AI_INSTRUCTIONS.md`._

## Status: NOT READY

The business model, role hierarchy, and legal/liability framing are now clear. What remains is mostly *content* (the actual qualification standards, rank/medal list) and a handful of process/legal confirmations — not open-ended concept questions.

## P0 Blockers (must be answered before a proposal can be written)
- **Q-002 / Q-003** — Actual rank/tier list and medal/achievement list (mechanism confirmed).
- **Q-005** — Account provisioning model, password-reset, and MFA requirements.
- **Q-009** — Full Mid-tier feature list.
- **Q-010** — Pricing per tier and payment/billing platform.
- **Q-015 / Q-023** — Instructor vetting criteria and process.
- **Q-021** — Downgrade-request approval authority and process.
- **Q-022** — Whether the new-user serial number/code replaces or supplements login credentials.
- **R-001** — Legal/compliance review of the Premium-tier monthly raffle.
- **S-016** — Actual legal text for both waivers, from the client's counsel.

## What's Confirmed
- App is native, iOS + Android, account-required, unrelated to Tactical Rabbi.
- **Business model:** National Proficiency is a records-keeping company for proficiency qualifications across three pillars (Medical, Firearms, Fitness); it takes no responsibility for the underlying training outcomes.
- User-side: launch → account/login → profile → Home / Chat / Media, tier-gated (Free / Mid TBD / Premium).
- Instructor side: registration + vetting (website), specialty selection, instructor waiver, "+" pre-registration, Google Calendar notice, qualification standards access, shot-timer/manual grading, strict pass/fail, mandatory audit trail.
- **Role hierarchy:** two cofounders (full record access/edit) > Approved Instructors (can upgrade a tier on Pass, can only *request* a downgrade) > students (tier-gated access).
- New accounts get a unique serial number/code; every user signs a liability waiver.
- Zip-code-based instructor locator map.
- Media tab awards quiz-verified video-completion badges.

## What's Still Open
- All P0 items above.
- P1: Media video categories (`Q-008`), Home-vs-Messaging overlap (`Q-004`, `Q-011`), monthly-challenge mechanics (`Q-006`), raffle mechanics (`Q-012`), "additional guidance" meaning (`Q-013`), pre-registration approval workflow (`Q-014`), Google Calendar and Shooter's Global specifics (`Q-016`, `Q-017`), whether the instructor site is a separate build (`Q-019`), Media content liability and qualification record-keeping enforceability review (`R-002`, `R-003`).
- P2: specific target market/segment (`Q-001`), full navigation structure (`Q-007`), retest policy (`Q-018`), multi-category instructor certification (`Q-020`), locator map search scope (`Q-024`).
- F-001 (leaderboard badges) needs a scope/timing decision before any design work — client described it tentatively.

## Recommendation
Do not draft a proposal yet, but the path to one is now much clearer. Two parallel tracks: (1) get the client to provide the actual qualification standards/course-of-fire documents (the core content gap), and (2) get legal counsel to draft the two waivers and review R-001/R-002/R-003 — these gate both the build and any liability language in the proposal itself.
