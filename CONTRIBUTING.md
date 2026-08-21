# Contributing to StagePath

Thanks for wanting to help. StagePath is learner-facing content first, app second — the highest-value
contributions are usually **a new resource, project, dataset, or a better-written skill note**, not
new code. You don't need to know Astro to contribute something useful here.

This project is maintainer-reviewed (see [GOVERNANCE.md](./GOVERNANCE.md)): anyone can open a pull
request, every pull request is reviewed and merged by [@Ankit-Anshu](https://github.com/Ankit-Anshu).
That keeps quality and tone consistent — it doesn't mean contributions aren't welcome, quite the
opposite.

## Quick links

- Found a broken link, a typo, or an outdated `last_verified` date? → smallest possible PR, very
  welcome, usually merged fast.
- Want to add a resource, project, dataset, or skill note? → read [What you can contribute](#what-you-can-contribute) below.
- Want to change how the site works (a page, a component, a new collection)? → open an issue first,
  see [Code changes](#code-changes).
- Not sure where to start? → look for issues labeled [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
  or [`help wanted`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).

## Getting set up

```bash
git clone https://github.com/Ankit-Anshu/stagepath.git
cd stagepath
npm install
npm run dev       # http://localhost:4321
```

Requires Node 22.12+. No accounts, no API keys, no backend — it's a fully static Astro site, so if
`npm run dev` starts, you're set up correctly.

Before opening a pull request, always run:

```bash
npm run build
```

This type-checks every content file against its schema (`src/content.config.ts`) — most content
mistakes (a missing required field, wrong type, bad enum value) show up here as a build error with
the exact file and field. A PR that doesn't build won't be merged.

## What's in scope

- Adding a **resource** (video, article, course, book, docs) for an existing skill.
- Adding a **project** (mini / portfolio / capstone), with or without a dataset.
- Adding a **dataset** used by a project.
- Adding or improving a **skill note** (the "Learn" content on a skill page — what it is, why it
  matters, examples, practice questions, interview prep).
- Adding a new **skill** to fill a real gap in an existing roadmap or skill-based roadmap.
- Adding a **chapter** to group related skills within a stage, once a stage's skill list gets long
  (see [content/chapters/README.md](./content/chapters/README.md)), or a standalone **assessment**
  that spans multiple skills (see [content/assessments/README.md](./content/assessments/README.md)).
- Fixing incorrect, outdated, or broken content (dead links, wrong `last_verified` dates, stale
  info).
- Small app/UI fixes: typos in copy, broken styling, accessibility issues, small bugs.

Larger structural changes — a new content collection, a new page type, a visual redesign, a new
dependency — are welcome as **ideas**, but open an issue to discuss the approach before writing the
pull request, so you don't spend time on something that doesn't fit. See
[GOVERNANCE.md](./GOVERNANCE.md#how-decisions-get-made).

## Project layout

```text
content/            The content repository — almost all contributions live here.
                     Full map + per-collection schemas: content/README.md and content/*/README.md.
public/datasets/     CSV/JSON data files referenced by project YAML. See public/datasets/README.md.
src/                 The Astro application. See src/README.md, and for the deep dive on how
                     everything fits together (routing, the curriculum-tree pattern, the
                     knowledge-note pipeline, styling conventions), ARCHITECTURE.md.
scripts/             One-off scripts used to originally generate the content set — you almost
                     certainly don't need these. See scripts/README.md.
```

## What you can contribute

All content is plain YAML — no code required. Add a file, follow the shape below, open a PR.
IDs are the reuse mechanism: any resource/project/skill id can be referenced from as many roadmaps or
skills as makes sense, so check whether something similar already exists before adding a duplicate.

### Adding a resource

New file in `content/resources/`, filename becomes the id (e.g. `r-my-new-resource.yaml`). Full
schema and quality checklist: [content/resources/README.md](./content/resources/README.md).

```yaml
title: Apache Airflow Documentation
type: documentation        # video | article | interactive | course | book | documentation
url: https://airflow.apache.org/docs/
provider: Apache Airflow
duration_minutes: 120
difficulty: intermediate    # beginner | intermediate | advanced
free: true
language: en
last_verified: '2026-08-18' # the date YOU checked the link works — always update this
quality_score: 4.3          # optional, 0-5
recommended: true           # optional, only for standout resources
```

Then reference its id from a skill's `resources:` list (see below) so it's actually reachable.
Only submit resources you've personally checked are live, free (or clearly marked otherwise), and
genuinely good — not just the first search result.

### Adding a project

New file in `content/projects/`. Full schema (including the `milestones` vs `tasks` and `rubric` vs
`artifacts` fallback behavior): [content/projects/README.md](./content/projects/README.md).

```yaml
title: A/B Testing Analysis
level: portfolio             # mini | portfolio | capstone
duration: 4-6 hours
description: 'Analyze the results of an A/B test end to end: hypothesis, significance test, and recommendation.'
problem_statement: A short realistic scenario the learner is solving.
scenario: Who the learner is playing (e.g. "You are the product analyst...").
skills: [statistics, business-analytics, stats-hypothesis-testing]  # skill ids used
tasks:
  - State a clear hypothesis
  - Test for statistical significance
requirements:
  - Check sample balance and missing values before testing the outcome
milestones:
  - title: Validate the experiment
    description: Confirm assignment quality, sample sizes, and metric definitions.
rubric:
  - criterion: Statistical correctness
    definition: The test, assumptions, confidence interval, and interpretation are appropriate.
artifacts:
  - Notebook or report
dataset:                     # optional, only if the project ships its own dataset
  name: Signup experiment results
  description: Synthetic user-level CSV containing assignment, conversion, device, country.
  source_url: /datasets/ab-test-signup.csv
  format: CSV
  size: 60 observations
  files: [ab-test-signup.csv]
```

### Adding a dataset

If a project needs data, put the file in `public/datasets/` (CSV preferred, keep it small — a few
hundred rows is plenty for a learning project) and point the project's `dataset.source_url` at
`/datasets/your-file.csv`. Please only submit **synthetic or clearly-licensed-for-reuse** data —
never real personal data, and never a dataset you don't have the right to redistribute. Full
guidance: [public/datasets/README.md](./public/datasets/README.md).

### Adding or improving a skill note

Skill files in `content/skills/` are the biggest lever for learner quality — full schema, the
`note:` markdown structure, and the "subtopics vs objectives" gotcha (short version: don't add
`subtopics:` to new skills, it's no longer rendered) are in
**[content/skills/README.md](./content/skills/README.md)**. A minimal skill:

```yaml
title: A/B Testing & Experimentation
category: Business Analytics
what_is_it: One or two sentences.
why_it_matters: One or two sentences on why a learner should care.
prerequisites: [stats-hypothesis-testing]   # skill ids, used to order roadmaps
objectives:
  - Design a test with a clear control and variant
resources: [r-grow-google-data-analytics]   # resource ids
project: project-ab-testing-analysis        # optional, a project id
```

The optional `note:` field (multi-line YAML block) is the full "Learn" page content and is where
most of the learner value lives — see `content/skills/README.md` for the expected structure (What is
it? / Why it matters / core concepts / a worked example / common mistakes / practice questions with
a collapsible answer / interview prep / a short quick-revision summary at the end), or any existing
skill file with a `note:` for a full worked example. Improving an existing `note:` — clearer
explanations, a better example, fixing something inaccurate — is one of the most valuable
contributions you can make, and doesn't require adding anything new.

### Curriculum-tree skill roadmaps (SQL, Python, Power BI, Tableau, Git & GitHub, Statistics,
### Spreadsheets, Machine Learning)

These are intentionally **not** YAML content — they're large hand-transcribed section/topic trees in
`src/lib/*-curriculum.ts`, rendered without individual detail pages per topic (by design — hundreds
of granular topics, no per-topic note). To fix or extend one of these, edit the relevant array
directly; keep the existing naming conventions (no numeric prefixes, no `.md` extensions, hyphens
normalized except for standard hyphenated terms like `P-Value` or `K-Means` — see the header comment
in each file for the exact whitelist).

## Content quality bar

- Links must work and go to genuinely useful, currently-accurate material.
- Prefer free resources; if something is paid, make sure `free: false` is set — don't mark paid
  content as free.
- `last_verified` should be the date you actually checked the link, not a copy-pasted old date.
- Skill notes should be accurate and reasonably beginner-friendly — assume the learner is meeting the
  topic for the first time.
- No AI-generated filler. If you use an assistant to help draft something, read it, verify it, and
  make sure it's actually correct before submitting — content quality here directly affects people
  trying to learn a real skill.

## Code changes

For app/UI changes: this is an Astro (static output) project with plain scoped `<style>` blocks per
component — no CSS framework beyond Tailwind utilities where already used. Match the existing style
of whatever file you're editing rather than introducing a new pattern. Run `npm run build` before
opening a PR — it's the fastest way to catch a broken route or type error.

Read **[ARCHITECTURE.md](./ARCHITECTURE.md)** first — it covers routing conventions, the two
different skill-based-roadmap patterns, the knowledge-note markdown/TOC pipeline, the shared `Base`
layout's props, and why the page-scoped `<style>` blocks are written dense/single-line by convention
rather than reformatted.

## Pull request process

1. Fork the repo, create a branch (`git checkout -b add-resource-xyz`).
2. Make your change. Keep PRs focused — one resource/project/skill/fix per PR is easier to review
   and merge quickly than one PR bundling ten unrelated changes.
3. Run `npm run build` and confirm it succeeds.
4. Open the PR and fill in the template — what changed and why is usually enough for content PRs.
5. A maintainer will review. Expect requested changes on anything content-related (accuracy, tone,
   consistency with the rest of the site) — that's normal, not a rejection.
6. Once approved, the maintainer merges. You'll be credited in the commit/PR history.

## Reporting issues

Use the issue templates — there's one for bugs, one for suggesting new content (resource, project,
dataset, skill), and one for general feature ideas. Include enough detail to act on: a URL/skill id
for content issues, steps to reproduce for bugs.

## Code of Conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md). Be kind — a lot of the people
using this site are just starting out.
