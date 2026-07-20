# AI Operating Instructions — National Proficiency Scope Planning

These rules govern how any AI assistant (Claude or otherwise) works with this project's spreadsheet (`National_Proficiency_Scope_Planning_Worksheet.xlsx`) and its companion Markdown files. They apply to every session, not just the one that created this structure.

## Access Requirement
The assistant must have direct access to the spreadsheet (or this repo) before making updates. It must not describe changes it cannot actually make.

## Before Adding Anything New
1. Read the existing spreadsheet and Markdown files.
2. Search for related rows/sections.
3. Check whether the idea already exists.
4. Surface existing related rows instead of creating duplicates.
5. Ask whether to update, merge, or keep separate if something overlaps.
6. Ask follow-up questions when information is missing.
7. Never guess facts, business rules, timelines, pricing, integrations, user roles, permissions, or requirements.
8. Clearly mark any assumption as an assumption — never present a guess as confirmed.
9. Put unclear items into the Scope Items tab as `Q-###` rows (and into `OPEN_QUESTIONS.md`).
10. Keep the sheet and Markdown files continuously, consistently updated as new information comes in.

## Markdown Files Kept in Sync With the Spreadsheet
- `PROJECT_OVERVIEW.md` ↔ Summary tab
- `REQUIREMENTS.md` ↔ Scope Items tab (`S-###` rows)
- `OPEN_QUESTIONS.md` ↔ Scope Items tab (`Q-###` rows)
- `WORKFLOWS.md` ↔ System Capability Map tab
- `DECISIONS.md` ↔ Scope Items tab (rows moving to `Confirmed`)
- `CHANGELOG.md` — running log of every change to the sheet or these files
- `PROPOSAL_READINESS.md` — regenerated after every meaningful change (see below)
- `AI_INSTRUCTIONS.md` — this file

**Every meaningful change automatically triggers an updated `PROPOSAL_READINESS.md` review.** A meaningful change includes:
- New feature request
- New workflow
- New open question
- Confirmed decision
- Changed priority
- Changed status
- Removed or deferred item
- New integration
- New user role or permission
- New report requirement
- New automation requirement
- New security, compliance, billing, budget, or timeline concern
- Any clarification that changes the project scope

This project's owner has also asked that **any update, change, or new information they provide — in any form (chat message, meeting notes, screenshot description, etc.) — updates the relevant Markdown file(s) and the spreadsheet in the same pass**, not just tracked-changed items from the list above. When in doubt about whether something is "meaningful," treat it as meaningful and update.

## End-of-Update Summary
At the end of every update, the assistant should summarize:
- What changed
- What was added
- What was updated
- What already existed
- What is still unclear
- What questions need answers next
- Whether the project is ready for a proposal

## Notes on This Structure
- The spreadsheet was delivered as an `.xlsx` file (not a live Google Sheet) because the session that created it had no Google Sheets/Drive write access. Import it into Google Sheets via **File → Import** to continue working in Sheets; re-export/re-sync as needed if edits happen in the .xlsx instead.
- Tab names are client-friendly; column structure is fixed to stay compatible with Huisman Consultants' internal roadmap format so rows can be copied into the project tracker later. Do not rename or reorder columns.
- Each data tab (Scope Items, Ready for Review, System Capability Map, Raw Notes) currently has one italic gray **EXAMPLE** row directly under the header — delete each example row once real rows are added; never delete the header row.
