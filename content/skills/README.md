# content/skills/

~300 reusable topic nodes. This is the biggest collection and the one that drives the most learner
value — each file becomes a page at `/skills/<id>` (rendered by
[`src/pages/skills/[id].astro`](../../src/pages/skills/[id].astro)), the "notes page" a learner spends
most of their time on.

A skill is referenced by id from any roadmap stage's `skills:` list, any chapter's `skills:` list, and
can itself reference `resources:` and a `project:` by id (see [content/README.md](../README.md) for
how the pieces connect).

## Schema

```yaml
title: A/B Testing & Experimentation      # required
category: Business Analytics              # required — groups this skill on /skills and in stats
what_is_it: One or two sentences.         # required — shown in the hero and in search/index cards
why_it_matters: One or two sentences.     # required — shown in the "Why it matters" section
prerequisites: [stats-hypothesis-testing] # skill ids — used to order generic skill-based roadmaps
                                           # (src/lib/skill-roadmaps.ts) via topological sort
objectives:                               # required (at least implicitly — see note below)
  - Design a test with a clear control and variant
  - Choose a primary metric before running the test
subtopics:                                # optional, see "subtopics vs objectives" below
  - title: Test design
    description: Randomizing users into control and variant groups...
    outcomes:
      - Design a test with a valid control group
estimated_minutes: 210                    # optional — shown as "~Nh estimated effort"
resources: [r-grow-google-data-analytics] # optional — resource ids, rendered in the Resources section
project: project-ab-testing-analysis      # optional — a single project id
practice:                                 # optional — informal practice prompts (not currently
  - id: ex-ab-testing-1                   # rendered on the page; kept for future use / data
    title: Design an experiment           # completeness)
    description: 'Given a proposed product change, design an A/B test...'
note: |                                   # optional but high-value — see "Writing a note" below
  ## 🎯 What is it?
  ...
```

`verify:` also still exists in the schema (a legacy list of first-person self-check strings) but is no
longer rendered anywhere on the page — the "Self-review before moving on" section is now built purely
from `objectives:`. Leave `verify:` out of new skill files.

### subtopics vs objectives

`objectives:` is the one field every skill should have — it drives both the hero's "outcomes" stat and
the "Self-review before moving on" checklist. `subtopics:` used to drive a separate "What to learn"
syllabus accordion; that section was removed from the page because ~73% of skills never had real
`subtopics:` data and fell back to repeating a generic placeholder sentence per objective. **Don't add
`subtopics:` to new skills** — it's no longer rendered. `objectives:` alone is sufficient.

### Writing a `note:`

The `note:` field is a single multi-line markdown block — the actual teaching content, and where most
of a skill page's value lives. It's parsed with [`marked`](https://www.npmjs.com/package/marked) at
build time; every `##` heading is auto-anchored and listed in the page's sidebar table of contents
(see [ARCHITECTURE.md](../../ARCHITECTURE.md#the-knowledge-note-pipeline-skill-pages)), so a well-
structured note also gets free in-page navigation.

The convention used across the existing ~264 notes that have one (look at any for a full worked
example, e.g. `ab-testing.yaml`):

```markdown
## 🎯 What is it?
## 💡 Why is it important?
## Core concept
### <sub-concepts as needed>
## Syntax / Formula / Structure       (when applicable — SQL, formulas, code-based topics)
## 📊 Example
## Multiple examples                  (Beginner / Intermediate / Real-world)
## ⚠️ Common mistakes
## Real-world <role> use cases
## Related concepts
## Practice questions                 (Easy / Medium / Interview-Advanced, each with a
                                       <details><summary>Answer</summary>...</details> reveal)
## 🎤 Interview preparation           (Basic / Conceptual / Scenario-based / Practical questions)
## Interview traps / tricky points
## Best practices
---
### ⚡ Quick Revision                  (a short bolded-term recap list — this heading specifically
                                       gets picked up by the TOC even though it's an H3, via a
                                       "revision|cheat sheet|recap|summary" text match)
```

Not every note needs every section — this is the shape that's proven to work, not a strict template.
The two non-negotiables: it should be genuinely useful for first-time learning **and** stand alone as
interview prep (the site's explicit dual purpose for this content), and it should be accurate — verify
anything you're not confident about before submitting.

## Naming

Filename (minus `.yaml`) is the id, referenced everywhere else. Use plain kebab-case matching the
skill's natural name (`sql-window-functions`, not `sql_window_functions` or `SQLWindowFunctions`).
