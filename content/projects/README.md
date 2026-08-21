# content/projects/

16 hands-on project briefs across three levels: mini, portfolio, and capstone. Each file becomes a
page at `/projects/<id>` (rendered by
[`src/pages/projects/[id].astro`](../../src/pages/projects/[id].astro)) — a full brief, not a vague
"build something" prompt.

## Schema

```yaml
title: A/B Testing Analysis                # required
level: portfolio                           # required — mini | portfolio | capstone
duration: 4-6 hours                        # required — free-text estimate shown on the brief
description: 'Analyze the results of an A/B test end to end...'   # required
problem_statement: >-                      # optional — falls back to `description` if omitted
  An onboarding team tested a shorter signup flow...
scenario: You are the product analyst...   # optional — who the learner is "playing"
skills: [statistics, business-analytics]   # optional — skill ids this project exercises; shown on
                                            # the skill page's "Related projects" section too
tasks:                                     # optional — falls back to nothing if `milestones` is set
  - State a clear hypothesis                # instead; see "milestones vs tasks" below
  - Test for statistical significance
requirements:                              # optional — concrete "must include" bullets
  - Report absolute lift, relative lift, confidence interval, and p-value
milestones:                                # optional — see "milestones vs tasks" below
  - title: Validate the experiment
    description: Confirm assignment quality, sample sizes, and metric definitions.
rubric:                                    # optional — see "rubric vs artifacts" below
  - criterion: Statistical correctness
    definition: The test, assumptions, confidence interval, and interpretation are appropriate.
artifacts:                                 # optional — what the learner should end up with
  - Notebook or report
  - README
dataset:                                   # optional — only if this project ships its own dataset;
  name: Signup experiment results          # see public/datasets/README.md for where the file goes
  description: Synthetic user-level CSV...
  source_url: /datasets/ab-test-signup.csv
  format: CSV
  size: 60 observations
  files: [ab-test-signup.csv]
datasets: []                               # optional — free-text dataset names, distinct from the
                                            # single structured `dataset:` object above (legacy field,
                                            # prefer the structured `dataset:` for new projects)
```

### `milestones` vs `tasks`

`milestones:` (title + description pairs) is the richer, preferred field — it's what actually renders
as the brief's step-by-step plan. If a project only has `tasks:` (a flat list of strings) and no
`milestones:`, the page synthesizes one milestone per task with a generic "Step N" title. Write real
`milestones:` for anything beyond a trivial project.

### `rubric` vs `artifacts`

Same relationship: `rubric:` (criterion + definition pairs) is what renders as the review rubric. If a
project only lists `artifacts:` (deliverable names) with no `rubric:`, the page synthesizes one
generic rubric line per artifact ("includes a clear, usable <artifact>"). Write a real `rubric:` for
anything beyond a trivial project — it's the actual bar a learner is building toward.

## Naming

Filename (minus `.yaml`) is the id, prefixed `project-` (`project-ab-testing-analysis`).

## Adding a dataset

See [public/datasets/README.md](../../public/datasets/README.md) — the short version is: CSV, small,
synthetic or clearly licensed for reuse, placed in `public/datasets/`, referenced from this file's
`dataset.source_url`.
