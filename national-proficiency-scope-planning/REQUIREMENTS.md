# Requirements — National Proficiency Scope Planning

_Last updated: 2026-07-20_
_Companion file: `National_Proficiency_Scope_Planning_Worksheet.xlsx` (Scope Items tab, S-### rows)_

This file tracks confirmed and proposed **feature / scope requirements** in plain language. It mirrors the `S-###` rows in the Scope Items tab. Every row here should have a matching row in the spreadsheet, and vice versa.

## User-Side Requirements

### S-001 — Branded App Launch Animation
**P1 · Needs detail · Public form / Onboarding.** Branded "National Proficiency" animation on open, before login. **Remaining:** animation assets, skippability, cold-start behavior.

### S-002 — Account Required for All Access
**P0 · Needs Clarification · User management.** No guest access; new users create an account and select a tier. **Remaining:** provisioning model, password reset, MFA (Q-005).

### S-003 — Individual Profile Page
**P0 · Needs Clarification · Client portal.** Photo, current rank, medals/achievements, next-accomplishment guidance. Earning mechanism now confirmed: updates automatically when an instructor marks a qualification Pass (S-013). **Remaining:** full rank/medal list (Q-002, Q-003), photo source.

### S-004 — Home Tab
**P1 · Needs Clarification · Client portal.** Updates, monthly challenges, community aspect; Free tier excludes challenges. **Remaining:** content sources, challenge mechanics (Q-006), tier-gating within the tab (Q-011).

### S-005 — Messaging / Community Communications Tab
**P1 · Needs Clarification · Client portal.** Free excludes chats; Premium includes them; Mid TBD. **Remaining:** message model (Q-004), moderation, Mid-tier access (Q-009).

### S-006 — Media Hosting Tab (Premium Only)
**P1 · Needs Clarification · Client portal (Media).** Medical, fitness, and firearms & building training videos. **Remaining:** exact categories (Q-008), hosting approach, content liability review (R-002).

### S-007 — Membership Tier System (Free / Mid / Premium)
**P0 · Needs Clarification · Payments.** Free: app + profile + Home only. Mid: undefined by client. Premium: everything + raffles + media + chats + guidance. **Remaining:** Mid-tier features (Q-009), pricing/billing (Q-010), raffle legal review (R-001).

## Instructor / Backend Requirements (new)

### S-008 — Approved Instructor Role
**P0 · Needs Clarification · Admin dashboard / User management.** Same profile/access as a regular user, plus an instructor-only "+" button (center bottom) opening qualification-administration tools. **Remaining:** instructor designation process, per-category certification (Q-015).

### S-009 — Student Pre-Registration Form
**P0 · Needs Clarification · Admin dashboard.** Via the "+" button: instructor selects category (Medical/Firearms/Fitness), tier, and date; submits for approval. **Remaining:** full field list, approval-step definition (Q-014).

### S-010 — Google Calendar Integration
**P1 · Needs Clarification · External integration.** Sends the qualification date to the student on submission. **Remaining:** personal vs. org calendar, no-Google-account fallback (Q-016).

### S-011 — Qualification Standards Library
**P0 · Needs Clarification · Admin dashboard / Database / records.** Instructor accesses the tier's qualification standard/course of fire on test day. **Remaining:** the actual standards content per category × tier (Q-002, Q-003) — likely needs source documents from the client.

### S-012 — Shot Timer Integration ("Shooter's Global")
**P1 · Needs Clarification · External integration.** Drill times recorded directly into the app. **Remaining:** partner/integration status and interface (Q-017); manual entry is the confirmed fallback.

### S-013 — Qualification Grading, Pass/Fail & Audit Trail
**P0 · Needs Clarification · Admin dashboard / Database / records / Security / compliance.** Checklist grading, strictly pass/fail, manual notes supported, all edits logged with an audit trail. A Pass auto-updates the student's profile (S-003). **Remaining:** checklist criteria per category/tier, audit-trail format, retest policy (Q-018).

## Removed / Deferred Requirements
_None yet._

---
**How this stays in sync:** whenever a scope item (`S-###`) is added, confirmed, changed, or removed in the spreadsheet, this file is updated in the same pass. See `AI_INSTRUCTIONS.md` for the full sync rule.
