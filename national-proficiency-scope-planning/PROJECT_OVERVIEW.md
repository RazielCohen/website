# Project Overview — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Summary tab)_

## Project Name
National Proficiency Scope Planning

## Current Understanding
National Proficiency is a native mobile app (iOS + Android). Confirmed flow, per the client:

1. User opens the app on their Android or Apple device.
2. A branded launch animation displays "National Proficiency."
3. A login screen (username + password) follows — required to access an individual account.
4. On successful login, the app opens to the user's **individual profile page**: their photo on top, current rank, any medals/achievements earned, and information on where to go next to achieve their next accomplishment.
5. Selecting the **Home** tab shows updates, monthly challenges, and possibly a community aspect.
6. A **second tab, next to Home**, is a messaging/community-style communications section where members can keep each other updated on information or activities.

What proficiency the app is actually tracking (e.g. fitness, professional certification, military/first-responder training, or something else) has **not** been stated yet — see `OPEN_QUESTIONS.md` (Q-001).

## Business Goal
TBD — not yet stated by the client.

## Highest Priority Next
Resolve the P0 open questions blocking the core screens: business domain/goal (Q-001), the rank and medal/achievement system (Q-002, Q-003), and account provisioning/authentication rules (Q-005).

## Verification Required
Client confirmation of the full navigation structure, rank/medal rules, monthly-challenge mechanics, and whether the Home tab's "community aspect" is the same feature as the separate Messaging tab or a distinct one (Q-004).

## Open Decisions
Login mechanism (username/password, not SSO), profile page as the post-login landing screen, and tab order (Home, then Messaging second) — see `DECISIONS.md`.

## Proposal Notes
Initial app concept received: 5 workflows (onboarding animation, login, profile, home, messaging). Still not proposal-ready — multiple P0 items open. See `PROPOSAL_READINESS.md`.

---
This file mirrors the **Summary** tab of the companion spreadsheet. It is updated any time the spreadsheet's Summary tab changes, and vice versa.
