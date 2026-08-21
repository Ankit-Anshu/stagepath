# content/roadmaps/

11 career roadmaps (Data Analyst, Data Engineer, Data Scientist, AI Engineer, Backend Developer, and
more). Each file becomes a page at `/roadmaps/<id>` (rendered by
[`src/pages/roadmaps/[id].astro`](../../src/pages/roadmaps/[id].astro)) — the winding "stage track"
visualization that's the site's signature page.

## Schema

```yaml
title: Data Analyst                       # required
category: Data                            # required — one of the fixed categories the roadmaps
                                           # index page groups by: Software Development,
                                           # Cybersecurity, Design, Data
difficulty: beginner                      # required — beginner | intermediate | advanced
estimated_hours: 420                      # required — shown on the roadmap card
description: Go from not knowing where to start...   # required
audience: People who...                   # optional — shown as extra context in the hero
stages:                                   # required — the ordered path itself
  - id: foundations                       # required, unique within this roadmap — used for
                                           # #stage-<id> anchors and by group pages
    title: Foundations                    # required
    description: The baseline thinking...  # optional
    skills:                               # required — an ordered list of skill ids (see
      - what-is-data                      # content/skills/README.md). Rendered as one tile per
      - what-is-data-analytics            # skill UNLESS `groups` (below) is also set.
      - ...
    groups:                               # optional — a list of chapter ids (see
      - query-fundamentals                # content/chapters/README.md). When present, the stage
                                           # renders one tile per CHAPTER instead of one tile per
                                           # skill — use this once a stage's skill list gets long
                                           # enough that one-tile-per-skill is too crowded.
    checkpoint:                           # optional — a milestone marker shown at the end of a stage
      id: sql-foundations                 # required, unique — used for anchors
      title: SQL Foundations Checkpoint   # required
      requires:                           # required — skill ids that must appear earlier in this
        - sql-select                      # roadmap (used as the checkpoint's completion criteria)
        - sql-joins
      unlock_message: SQL Foundations unlocked.   # required — shown once the checkpoint is reached
```

## `skills` vs `groups`

Every stage always has `skills:` — the authoritative, ordered list of what that stage covers. `groups`
is purely a *display* optimization: when a stage has many skills, listing them as one chapter tile
each (via `groups`) is more readable than one skill tile each. If you add `groups` to a stage, every
skill in that stage's `skills:` list should be accounted for by the chapters referenced in `groups` —
see [content/chapters/README.md](../chapters/README.md) for how a chapter's own `skills:` list works
and how group detail pages are generated.

## Naming

Filename (minus `.yaml`) is the id (`data-analyst`, `backend-developer`). Plain kebab-case matching
the roadmap's title.

## Adding a new career roadmap

If you're proposing a whole new career roadmap (not editing an existing one), open an issue first as
described in [CONTRIBUTING.md](../../CONTRIBUTING.md#adding-or-improving-a-roadmap). It is a bigger
content investment than a single resource or project, so agree on scope before writing 5-10 stages. One more
thing to update if you do: `src/pages/start.astro`'s "I'm not sure" quiz hardcodes a small map of
roadmap id → interest weights (see the comment at the top of that file) — a new roadmap won't show up
as a quiz result unless you add it there too.
