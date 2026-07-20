# Open Questions — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, Q-### rows)_

This file tracks open questions in plain language. It mirrors the `Q-###` rows in the Scope Items tab.

## Needs Answers Before a Proposal Can Be Written (P0)

1. **Q-001 — What is National Proficiency's core business/domain?**
   What proficiency is actually being tracked — fitness, martial arts, professional certification, military/first-responder training, or something else? This shapes the whole app's content model.
2. **Q-002 — What are the specific ranks/levels, and what are the criteria to advance?**
   Needed to build the profile page's "current rank" and "next accomplishment" logic (S-003).
3. **Q-003 — What are the specific medals/achievements, and how is each one earned?**
   Also needed for the profile page (S-003).
4. **Q-005 — How are accounts created, and what are the auth requirements?**
   Self-registration vs. admin/organization-issued vs. invite-only; is a password-reset flow required; is MFA required? Needed for login (S-002).

## Important, Not Yet Blocking (P1)

5. **Q-004 — Is the Home tab's "community aspect" the same as the Messaging tab, or distinct?**
   If distinct, what belongs on Home (S-004) vs. in Messaging (S-005)?
6. **Q-006 — How are monthly challenges created, tracked, and scored?**
   Are there prizes or recognition tied to completion? (S-004)

## Nice to Know (P2)

7. **Q-007 — What is the full tab-bar/navigation structure?**
   Beyond the profile page (post-login landing), Home, and Messaging (second tab) — are there additional tabs, e.g. Settings, Notifications?

---
**How this stays in sync:** any unclear requirement, missing decision, or ambiguous item is captured here **and** as a `Q-###` row in the Scope Items tab at the same time — never in only one place.
