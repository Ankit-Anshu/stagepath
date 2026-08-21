# content/

This folder is the content repository — the part of StagePath almost every contribution touches.
Everything here is plain YAML, validated against the schemas in
[`src/content.config.ts`](../src/content.config.ts) at build time (`npm run build` fails loudly with
the exact file and field if something doesn't match).

For the full contribution guide (how to open a PR, quality bar, etc.), see
[CONTRIBUTING.md](../CONTRIBUTING.md). This file is just a map of what lives where.

## Collections

| Folder | What it holds | Read this first |
|---|---|---|
| [`skills/`](./skills/README.md) | ~300 reusable topic nodes — the "notes page" a learner spends most of their time on | [skills/README.md](./skills/README.md) |
| [`roadmaps/`](./roadmaps/README.md) | Career roadmaps — ordered stage → skill trees | [roadmaps/README.md](./roadmaps/README.md) |
| [`chapters/`](./chapters/README.md) | Reusable topic groupings referenced by roadmap stages | [chapters/README.md](./chapters/README.md) |
| [`resources/`](./resources/README.md) | Curated external learning resources | [resources/README.md](./resources/README.md) |
| [`projects/`](./projects/README.md) | Hands-on project briefs (mini / portfolio / capstone) | [projects/README.md](./projects/README.md) |
| [`assessments/`](./assessments/README.md) | Checkpoint self-checks | [assessments/README.md](./assessments/README.md) |

Datasets that projects use live outside `content/`, in [`public/datasets/`](../public/datasets/README.md).

## The reuse model

Every entry in every collection has an **id** — its filename without `.yaml`. IDs are how everything
connects: a `skills/pandas.yaml` file can be referenced by any number of `roadmaps/*.yaml` stages'
`skills:` lists, any number of `chapters/*.yaml` groupings, and its own `resources:`/`project:` fields
point at ids in the `resources/` and `projects/` collections. Nothing is duplicated per-roadmap — you
add a skill, resource, or project once, then reference its id from wherever it's relevant.

```text
roadmaps/data-analyst.yaml
  stages[].skills: [sql-select, sql-joins, ...]  ───────► skills/sql-select.yaml
  stages[].groups: [query-fundamentals]  ───────────────► chapters/query-fundamentals.yaml
                                                              chapters/query-fundamentals.yaml
                                                                .skills: [sql-select, sql-joins]

skills/sql-select.yaml
  .resources: [r-mode-sql-tutorial]  ────────────────────► resources/r-mode-sql-tutorial.yaml
  .project: project-clean-messy-sales-data  ─────────────► projects/project-clean-messy-sales-data.yaml
```

Before adding something new, search for whether it already exists — a duplicate resource/skill under
a slightly different id is harder to clean up later than checking first.

## Id conventions

- Skills, roadmaps, and chapters: plain kebab-case matching the title (`sql-window-functions`,
  `data-analyst`, `query-fundamentals`).
- Resources: prefixed `r-` (`r-mode-sql-tutorial`).
- Projects: prefixed `project-` (`project-clean-messy-sales-data`).
- Assessments: prefixed `assessment-` (`assessment-sql-foundations-checkpoint`).

Keep ids stable once published — other files reference them by id, and renaming one means finding and
updating every reference across the content set.
