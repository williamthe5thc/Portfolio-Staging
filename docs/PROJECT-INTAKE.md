# Project Intake

Answer these per project and I can generate the case-study file directly. Rough notes are
fine — bullets, fragments, half-sentences. I will do the writing.

**Do not stall on a question you can't answer.** Every field below is optional except the
first four; its section simply disappears when omitted. A project with three good answers
beats a project you never added.

---

## Required

1. **Title** — what the project was called
2. **One-line description** — what it was and what it achieved
3. **When** — year or date range
4. **Category** — e-learning / instructional design / development / research / Photoshop / Premiere Pro

## Context (this is the part reviewers most often find missing)

5. **Your role** — be specific, especially if it was a team project
6. **Client or organization** — "Confidential — <sector>" is fine if you can't name them
7. **Audience** — who the learners were, how many, anything that constrained the design
   (low bandwidth, deskless workers, mandated compliance deadline, mixed literacy…)
8. **Timeline** — how long it took
9. **Team** — who else, and what they owned. "Solo" is a fine answer.

## The story

10. **The problem** — what was going wrong *for the organization*, and how you knew.
    Not the assignment you were handed.
    - ✗ "They needed a course on the new CRM."
    - ✓ "Ticket volume tripled after the CRM migration; reps were escalating things the
      tool could already do."

11. **What you built** — the solution, and the key design decisions behind it

12. **Your process** — 3–5 steps. For each: what you did, and *why you chose it over the
    alternative*. Name the model if you used one (ADDIE, SAM, backward design).

13. **Results** — the highest-value thing on this list. Push for numbers:
    - Assessment scores, pass rates, completion rates
    - Time-to-competency, time saved, error/ticket reduction
    - Satisfaction scores, NPS, adoption counts
    - For each: **how it was measured** (sample size, instrument, timeframe)

    If there's genuinely no number, give me a concrete outcome — "rolled out to all 12
    regional offices," "replaced the vendor course they'd paid $40k/yr for."

## Evidence

14. **Artifacts** — anything a reviewer can open. Storyboards, design docs, demo links,
    screenshots, video walkthroughs, repos. Send files or links; I'll wire them up.
15. **Testimonial** — anything a client, SME, or manager said about the work, with their
    name and role. Attributed quotes carry far more weight than anonymous ones.
16. **Hero image** — a screenshot or still. Tell me what's in it so I can write the alt text.

## Curation

17. **Is this one of your top 6–10?** Featured projects sort first and appear on the home
    page. Aim for 3–5 featured.

---

## The curation question I need you to answer

There are currently **22 projects** in `src/content/projects/`. The consistent advice is
6–10, chosen to match the roles you're targeting. Everything past that dilutes the strong
work rather than adding to it.

So, in the morning, alongside the new projects: **which of the existing 22 should stay?**

Current inventory, by the `category` field in each file:

| Category | Count | Projects |
|---|---|---|
| `development` | 11 | chili-cookoff, data-display, deal-or-no-deal, jeopardy-game, kathario, nacva-automation, sacrament-macro, sde-website, undergrad-programming, variable-timer, yahtzee-game |
| `photoshop` | 4 | art-commission-1, art-commission-2, photoshop-wedding, vegas-edit |
| `id` | 2 | napkin-design, waltz |
| `premier` | 2 | how-to-videos, object-tracking |
| `research` | 2 | ego-depletion, empathy-research |
| `elearning` | 1 | dating-course |

Notes from reading all 22:

- **The mix is off for the role you're targeting.** Half are `development`, while
  `elearning` — the category most relevant to an instructional design role — has exactly
  one entry. If ID roles are the goal, that ratio is working against you.
- **20 of 22 use the `coming_soon.png` placeholder.** Only `dating-course` and `waltz`
  have real images. A portfolio piece with a "Coming Soon" graphic reads as unfinished;
  it's weaker than not listing the piece at all.
- **Most are written at a generic altitude** — "Development Framework," "Modern Web
  Technologies," "Regular client communication," "Positive client feedback." These are
  the vague descriptions the research specifically flags. Whichever survive curation
  should be rewritten against the intake questions above.
- **None have a single quantified result.** Not one metric across 22 projects.
- **Several date to 2015** (kathario, undergrad-programming) and may now read as
  stagnation rather than range.
- **`vegas-edit` looks miscategorized** as `photoshop` — it appears to be video editing
  work. I left it alone since that's your call.

Three options, roughly in order of how well they match the research:

- **A — Cut to 8.** Strongest option. Delete the rest.
- **B — Feature 8, keep an "Additional Work" list.** Compromise: the good work leads, the
  rest is available as a compact list without images or detail pages.
- **C — Keep all 23, rewrite the top 8.** Weakest, but non-destructive.

Tell me A, B, or C and which ones make the cut, and I'll do it.
