# Open Questions — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, Q-### and R-### rows)_

This file tracks open questions and risks in plain language. It mirrors the `Q-###` and `R-###` rows in the Scope Items tab.

## Needs Answers Before a Proposal Can Be Written (P0)

- **Q-002 / Q-003** — What is the actual rank/tier list and medal/achievement list? Mechanism confirmed; client has confirmed a full qualifications/training standards document exists and will be provided later — stays open until received and reviewed.
- **Q-005** — How are accounts created, and what are the auth requirements?
- **Q-009** — What features belong to the Mid tier?
- **Q-010** — What is the price of each tier, and what payment/billing platform should be used?
- **Q-015 / Q-023** — How are instructors vetted and designated "Approved Instructor"?
- **Q-021** — Who approves an instructor's tier-downgrade request, and what happens if denied?
- **Q-022** — Is the new-user unique serial number/code a replacement login credential or an additional ID?
- **Q-025** — Which ID-verification vendor will be used, and can it actually confirm firearm eligibility, not just identity/age? Real legal-exposure point — see risk R-005.

## Important, Not Yet Blocking (P1)

- **Q-004** — Is the Home tab's "community aspect" the same as the Messaging tab, or distinct? Now also needs to account for the new leaderboard (S-021) — three potentially overlapping "social" features on one tab.
- **Q-006** — How are monthly challenges created, tracked, and scored?
- **Q-008** — What exactly are the "firearms and building" videos on the Media tab?
- **Q-011** — How does tier-gating apply within the Home tab specifically?
- **Q-012** — How does the Premium-tier monthly raffle work?
- **Q-013** — What does "additional guidance based on things they're working on" mean concretely?
- **Q-014** — Does registration require a separate approval step, or is it an automatic confirmation?
- **Q-016** — What does the Google Calendar integration require in practice?
- **Q-017** — Is "Shooter's Global" a confirmed technical/partner integration?
- **Q-019** — Is instructor registration/vetting a separate website, or done in-app? Client's two statements on this haven't been reconciled.
- **Q-026** — What is the ban process (who decides, grounds, appeal)?
- **Q-027** — Does a failed ID verification block the whole app, or only firearms-related features?
- **Q-029 (new)** — Instructor visibility boundary was described unclearly (possible transcription issue): can an instructor ever view standards above what a specific active student registration requires, or is access always strictly limited to that one registration? Needs a plain confirmation rather than a guess at the garbled original phrasing.
- **Q-031 (new)** — Does the new automatic instructor-recommendation-on-registration (S-025) replace the standalone locator map (S-017), or do both exist separately?

## Nice to Know (P2)

- **Q-001** — What is National Proficiency's specific target market/customer segment? Business model is confirmed (records-keeping only); only the audience/segment remains unstated.
- **Q-007** — What is the full tab-bar/navigation structure?
- **Q-018** — Is there a retest/appeal policy after a failed qualification?
- **Q-020** — Can an instructor be certified in more than one specialty category?
- **Q-024** — What can a user search/filter by on the instructor locator map, and is it available to all tiers?
- **Q-028** — Does the ID-verification vendor's per-check cost factor into tier pricing (Q-010)?
- **Q-030 (new)** — For the profile progression visual (S-028): how many future tiers are shown locked, and is it one combined view or per-category?

## Future Idea Flagged

- **F-002** — Virtual/remote qualifications using wearable data, tied to specific events. Client explicitly framed this as a later possibility, not current scope. See risk R-004.

## Risks / Proposal-Impacting Concerns

- **R-001 (P0)** — The Premium tier's monthly raffle may implicate sweepstakes/lottery law.
- **R-002 (P1, partially mitigated)** — Media content liability, partially addressed by the universal waiver; enforceability still needs legal review.
- **R-003 (P1, partially mitigated)** — Qualification record-keeping compliance, partially addressed by the "records-keeping only" model and waiver; enforceability still needs legal review.
- **R-004 (P2)** — Virtual/remote qualifications (F-002) sourced from wearable data could be vulnerable to falsification (GPS spoofing, device-sharing) since a qualification is an official pass/fail record. Lower urgency since F-002 itself is future-phase.
- **R-005 (P0)** — Standard ID-verification vendors (e.g. ID.me) typically confirm identity and age, **not** firearm-purchase eligibility, which usually requires a separate NICS-style background check. Treating an identity-verification pass as confirmation of firearm eligibility (S-023) could create real liability exposure and a false sense of legal compliance. Recommend legal/compliance review and written confirmation from the chosen vendor of exactly what it certifies.

## Registration Flow Correction

The client corrected the qualification-registration flow: it is now **student-initiated** (from the student's own profile), not instructor-initiated. The original instructor-side design is preserved in the spreadsheet as `S-009`, marked **Removed**, superseded by `S-025` — see `DECISIONS.md` and `CHANGELOG.md` for the full correction.

---
**How this stays in sync:** any unclear requirement, missing decision, ambiguous item, or proposal-impacting risk is captured here **and** as a `Q-###`/`R-###` row in the Scope Items tab at the same time — never in only one place.
