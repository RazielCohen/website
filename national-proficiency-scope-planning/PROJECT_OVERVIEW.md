# Project Overview — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Summary tab)_

## Project Name
National Proficiency Scope Planning

## Current Understanding
National Proficiency is a native mobile app (iOS + Android), **account-required** — no guest/anonymous access. Confirmed flow, per the client:

1. User opens the app on their Android or Apple device.
2. A branded launch animation displays "National Proficiency."
3. All access requires an account. New users create one; existing users log in.
4. On successful login, the app opens to the user's **individual profile page**: photo on top, current rank, medals/achievements earned, and guidance on the next accomplishment.
5. A tab bar provides access to:
   - **Home** — updates, monthly challenges, possibly a community aspect
   - **Chat / Messaging** — second tab, next to Home, for members to keep each other updated
   - **Media** — a video hosting platform (medical training, fitness training, and firearms & building training videos — exact meaning of "building" videos not yet confirmed, see Q-008)

**Three membership tiers gate feature access:**
- **Free** — app access, profile page, Home page only. No chats, media, or monthly challenges.
- **Mid** — feature set still being worked out by the client (not yet defined).
- **Premium** — all features, plus monthly raffles tied to challenges, media access, chats, and additional personalized guidance based on what the user is working on.

**National Proficiency is a completely separate brand/company from Tactical Rabbi (the other project in this repo), with no crossover of information between the two** — confirmed by the client. What proficiency the app is tracking and its target audience is still not explicitly confirmed. The Media tab's content categories (medical, fitness, firearms/building training) are a strong hint toward a tactical/safety/professional-training domain, but this hasn't been stated outright — see `OPEN_QUESTIONS.md` (Q-001).

## Business Goal
TBD — not yet explicitly stated by the client.

## Highest Priority Next
Resolve P0 items: business domain/audience (Q-001), rank system (Q-002), medal system (Q-003), account/auth rules (Q-005), Mid-tier feature list and tier pricing (Q-009, Q-010), and the raffle legal/compliance risk (R-001).

## Verification Required
Client confirmation of navigation structure, rank/medal rules, monthly-challenge mechanics, Home-vs-Messaging community overlap and whether challenges are tier-gated (Q-004, Q-011), exact Media tab video categories (Q-008), and what "additional guidance" means in practice (Q-013).

## Open Decisions
Login mechanism, profile-page landing screen, tab order, account-required access, and the three-tier structure and its Free/Premium boundaries are decided in direction — see `DECISIONS.md`. Mid tier and all pricing remain undecided.

## Proposal Notes
App concept and tier/paywall structure now captured. Still not proposal-ready — multiple P0 items open, plus one legal/compliance risk (R-001) around the premium raffle that should be reviewed before proposing pricing or timelines. See `PROPOSAL_READINESS.md`.

---
This file mirrors the **Summary** tab of the companion spreadsheet. It is updated any time the spreadsheet's Summary tab changes, and vice versa.
