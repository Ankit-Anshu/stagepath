# content/chapters/

33 reusable topic groupings. A chapter is a named cluster of skills (e.g. "SQL / Joins & Combining
Data", "Spreadsheets / Fundamentals") that a roadmap stage can reference instead of listing every
skill tile individually — see [content/roadmaps/README.md](../roadmaps/README.md#skills-vs-groups) for
when to use one.

Like every other collection, chapters are global and reusable: the same chapter id can be referenced
by more than one roadmap stage's `groups:` list without duplicating its title or skill list.

## Schema

```yaml
title: Advanced Excel     # required
skills:                   # required — an ordered list of skill ids (content/skills/README.md)
  - dynamic-arrays
  - filter-function
  - sort-function
  - ...
```

That's the whole schema — a chapter is deliberately just a title plus an ordered list of skill ids.

## What referencing a chapter does

When a roadmap stage's `groups:` includes a chapter id, two things happen automatically:

1. The roadmap page (`/roadmaps/<id>`) renders one tile for the chapter instead of one tile per skill.
2. A dedicated group page is generated at `/roadmaps/<roadmapId>/<stageId>/<chapterId>` (built by
   [`src/pages/roadmaps/[id]/[stageId]/[groupId].astro`](../../src/pages/roadmaps/[id]/[stageId]/[groupId].astro)),
   listing just the chapter's topic names — no descriptions, progress, or estimates, by design (it's
   meant to be a quick scannable list, not a second copy of the skill page). Each topic links to its
   real `/skills/<id>` page.

## Naming

Filename (minus `.yaml`) is the id, plain kebab-case (`advanced-excel`, `query-fundamentals`).
