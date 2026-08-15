# What Makes a Good Instructional Design Portfolio

Research notes behind the case-study changes on this branch. Gathered August 2026.
Sources are listed at the bottom.

---

## 1. The portfolio is a hiring gate, not a formality

About a quarter of instructional design hiring managers **require** a portfolio, and
another ~39% say it plays a significant role in the decision. Roughly two thirds of
hiring outcomes are influenced by it. It is also getting *more* scrutiny over time, not
less — reviewers are more selective, and AI tooling competency has quietly become a
baseline expectation rather than a differentiator.

**Implication:** the portfolio deserves more effort than the résumé.

## 2. Reviewers skim first, read second

A reviewer gives a portfolio somewhere around 6–7 seconds before deciding whether to
keep going. The first screen has to answer three questions immediately:

1. Who is this person?
2. What do they do?
3. Why should I keep scrolling?

Specific beats clever. "Senior React Developer — 8 Years Building Fintech Products"
works; "Creative Professional" does not. Headlines land best at roughly 6–10 words.

**Implication:** put the outcome in the project title and the metric near the top of
the case study. Do not make a reviewer scroll to find out whether the work worked.

## 3. Context is the most-cited red flag

The single most common complaint from reviewers is work posted **without context** — a
storyboard with no explanation, a module with no audience, a team project with no
statement of what was actually yours.

Every project needs:

- **Your role** — specifically, especially on team projects
- **The client / organization** — "Confidential — <sector>" is fine under NDA
- **The audience** — who the learners were, and what constrained the design
- **Timeline and team** — "Solo" is a good answer

**Implication:** this is why the case study opens with a facts bar rather than an image.

## 4. Process is what separates a portfolio from a gallery

Reviewers are not testing whether you can recite ADDIE. They are testing whether you can
**apply** a model to a real problem and **explain your decisions**. The expected evidence:

- Needs assessment / analysis showing you found the real problem
- Design documents built on a named model (ADDIE, SAM, backward design)
- Storyboards
- At least one finished, polished build

Crucially, the process section should say *why you chose this over the alternatives* —
that is the part that shows judgement rather than compliance.

**Implication:** the `process` field is an ordered list with a `description` that asks
for reasoning, not just activity.

## 5. Quantified results are close to non-negotiable

The most-repeated single piece of advice in the sources:

> Instead of "I helped improve a training," say "I designed and implemented a learning
> solution that increased learner comprehension by 30%."

Use percentages, deltas, counts, satisfaction scores. Where a hard number genuinely does
not exist, a *concrete* qualitative outcome ("adopted across all 12 regional offices")
still beats a vague one ("improved engagement").

Include how it was measured — instrument, sample size, timeframe. An unqualified "+30%"
invites skepticism; "+30%, pre/post across 142 learners at 90 days" does not.

**Implication:** `metrics` render as tiles high on the page, each with a `detail` field
for the measurement caveat.

## 6. Curate hard — best work, not all work

> The #1 mistake new instructional designers make is including all of their work instead
> of their best work. One polished project is better than ten mediocre ones.

The consistent recommendation is **six to ten** pieces, chosen to (a) match the roles
being targeted and (b) show different stages of the process, from analysis through
evaluation.

Related failure modes:
- Outdated work reads as stagnation
- Too much content buries the good pieces
- Tool lists that overshadow the design thinking ("don't turn your portfolio into a list
  of software you know")

**Implication:** `featured` and `order` fields, with featured projects sorting first and
driving the home page.

## 7. Structure the site minimally

The recommended layout is short: hero → featured projects → brief about → clear contact.
Reviewers came to see work; extra sections added for the sake of completeness dilute it.

Case studies themselves run roughly **800–1,500 words**, broken up with subheadings and
visuals. Two workable formats: the **outline** (scannable key points) and the **story**
(narrative arc). The outline format survives skimming better.

## 8. Social proof beats self-description

An attributed quote from a client, SME, or manager carries more weight than any amount of
self-assessment. Ask peers and former employers to endorse specific skills.

**Implication:** `testimonial` with a required `author` — an unattributed quote is worth
much less than an attributed one.

## 9. Show the artifacts, don't describe them

Reviewers want to open the real thing: the storyboard, the design doc, the working demo.
Descriptions of work products are a poor substitute for the work products.

**Implication:** `artifacts` renders openable links with type icons.

## 10. Accessibility and performance are now table stakes

WCAG 2.2 AA is the enforceable baseline in the US (ADA, Section 508) and EU (EAA), and it
shows up in corporate RFPs. For an instructional designer specifically, an inaccessible
portfolio is a credibility problem — accessible learning design is part of the job.

Concretely:
- Semantic HTML: real `<button>`, `<nav>`, `<main>`, `<section>`, ordered heading levels
- Alt text on every image — missing alt text is the second most common error on the web,
  found on 55.5% of pages analyzed
- Visible focus indicators; 24×24px minimum tap targets; no drag-only interactions
- Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS < 0.1

Accessibility improvements also feed SEO and AI-answer surfacing, since both rely on
semantic structure and readable text.

---

## How this maps to the code

| Research finding | Implementation |
|---|---|
| Context is the top red flag | `role`, `client`, `audience`, `duration`, `team` → `ProjectFacts` |
| Quantified results | `metrics: ProjectMetric[]` → `MetricGrid`, tiles near top |
| Process shows judgement | `process: ProcessStep[]` → `ProcessTimeline`, ordered `<ol>` |
| Problem ≠ assignment | `problem` field, documented to demand the business problem |
| Show real artifacts | `artifacts: ProjectArtifact[]` → `ArtifactList` with type icons |
| Social proof | `testimonial` → `TestimonialBlock`, attributed |
| Curate to 6–10 | `featured` / `order` → sorted grid + home page carousel |
| Alt text | `imageAlt` field, falls back to title |
| Semantic HTML | `<section>`/`<dl>`/`<ol>`/`<figure>`, `sr-only` new-tab cues, focus-visible rings |

---

## Sources

- [How to Create an Instructional Design Portfolio in 2026 — Devlin Peck](https://www.devlinpeck.com/content/create-instructional-design-portfolio)
- [How to Become an Instructional Designer in 2026 — Devlin Peck](https://www.devlinpeck.com/content/how-to-become-instructional-designer)
- [How to Create an Instructional Design Portfolio (2026) — Raccoon Gang](https://raccoongang.com/blog/create-instructional-design-portfolio/)
- [Red Flags And Not-So-Obvious Tips On Creating An Instructional Design Portfolio — eLearning Industry](https://elearningindustry.com/red-flags-and-not-so-obvious-tips-creating-instructional-design-portfolio)
- [Building An Instructional Designer's Portfolio: Layout, What To Include — eLearning Industry](https://elearningindustry.com/building-an-instructional-designers-portfolio-layout-what-to-include-3-useful-tips)
- [Best Practices for Creating an Instructional Design Portfolio — University of San Diego](https://onlinedegrees.sandiego.edu/instructional-design-portfolio/)
- [How to Create an Effective Instructional Design Portfolio — SNU](https://www.snu.edu/blog/how-to-create-an-effective-instructional-design-portfolio)
- [How to Write Instructional Design Case Studies for Your Portfolio — The eLearning Coach](https://theelearningcoach.com/career/how-to-write-instructional-design-case-studies-for-your-portfolio/)
- [Instructional Design Portfolio Checklist — WGU Career & Professional Development](https://careers.wgu.edu/resources/instructional-design-portfolio-checklist/)
- [Instructional Design Portfolios: 3 Common Challenges — ATD](https://www.td.org/content/atd-blog/instructional-design-portfolios-3-common-challenges-and-how-to-solve-them)
- [Instructional Design Portfolio Resources — Christy Tucker, Experiencing eLearning](https://christytuckerlearning.com/instructional-design-portfolio-resources/)
- [Crafting an Impressive Instructional Design Portfolio — TrainingPros](https://blog.trainingpros.com/instructional-design-portfolio/)
- [Portfolio Case Study Examples: Complete Guide — InfluenceFlow](https://influenceflow.io/resources/portfolio-case-study-examples-complete-guide-with-real-world-samples/)
- [Optimizing Your Portfolio for Recruiter Scan-ability — UX Dictionary](https://uxdictionary.io/article/optimizing-your-portfolio-for-recruiter-scan-ability)
- [Website Hero Section Best Practices — Prismic](https://prismic.io/blog/website-hero-section)
- [How to Optimize the Hero Section of Your Portfolio Website — Pixpa](https://www.pixpa.com/blog/how-to-optimize-the-hero-section-of-your-portfolio-website)
- [Website Accessibility Guide 2026 (WCAG 2.2) — WebAbility](https://www.webability.io/blog/what-is-website-accessibility-2026-guide)
- [Accessibility as a Ranking Factor: The Hidden SEO Benefit — SearchAtlas](https://searchatlas.com/blog/accessibility-a11y-seo-ranking-factor-2026/)
- [SEO Benefits of Accessible Websites in 2026 — Broworks](https://www.broworks.net/blog/seo-benefits-of-accessible-websites-in-2026)
