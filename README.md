# StagePath

[![License: MIT](https://img.shields.io/badge/license-MIT-6bc58c.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-6bc58c.svg)](./CONTRIBUTING.md)
[![CI](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml/badge.svg)](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml)

An open-source, community-editable learning roadmap platform for data and tech careers — built from
[`data-career-roadmap-prd.md`](./data-career-roadmap-prd.md). Ordered roadmaps, reusable skill notes,
curated resources, and hands-on projects (with datasets), rendered by a static Astro app that tracks
progress locally and turns finished projects into portfolio evidence.

**This is a community project.** Anyone can suggest or submit a new resource, project, dataset, or
skill note — see [CONTRIBUTING.md](./CONTRIBUTING.md) to get started. It's maintainer-reviewed
(see [GOVERNANCE.md](./GOVERNANCE.md)): every pull request is reviewed and merged by
[@Ankit-Anshu](https://github.com/Ankit-Anshu), which keeps the content consistent as more people
contribute, while staying fully open to anyone who wants to help make it better.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to /dist
npm run preview   # serve the production build locally
```

No accounts, no backend, no environment variables — it's fully static. Your progress lives only in your
browser's `localStorage`; use **My Roadmap → Export JSON** to back it up or move it to another device.

## What's here

- **11 career roadmaps** (Data Analyst, Data Engineer, Data Scientist, AI Engineer, Backend Developer,
  and more) — each a stage → skill → resource → practice → project → assessment tree.
- **8 skill-based roadmaps** (SQL, Python, Power BI, Tableau, Git & GitHub, Statistics, Spreadsheets,
  Machine Learning) — full curriculum trees you can follow independent of any career track.
- **~300 skills** in a reusable skill graph (`/content/skills`) — e.g. `pandas` and `sql-joins` are each
  referenced by more than one career roadmap, not duplicated per roadmap.
- **46 curated resources**, each with a type, provider, duration, difficulty, and `last_verified` date
  (PRD §22–24's content quality/freshness model) — and growing with community contributions.
- **16 projects** (mini / portfolio / capstone), several with their own datasets, and checkpoint
  assessments.
- A full app: landing + career picker + "I'm not sure" quiz, visual interactive roadmap pages, skill
  pages (What is it / Why it matters / Learn / Practice / Build / Verify / Reflect), project pages,
  a resource catalog, a dashboard (5 questions + job-readiness), a portfolio builder, a personalization
  page (skip/defer/add skills + export/import), and an external course tracker.

## Project layout

```text
content/                 # the content repository — edit these to change what learners see
  roadmaps/               data-analyst.yaml, data-engineer.yaml, data-scientist.yaml
  skills/                 24 reusable skill nodes
  resources/               35 curated resources
  projects/                6 projects
  assessments/              3 checkpoint assessments
scripts/seed-content.mjs  # one-time content generator that produced the YAML above (safe to re-run)
src/
  content.config.ts       # zod schemas for every collection
  lib/types.ts             # shared TS types (SkillStatus, ProgressState, ...)
  lib/progress.ts          # the local progress engine — every page reads/writes state through this
  layouts/Base.astro
  pages/                   # one route per PRD §21 information architecture
```

## Contributing

Content is plain YAML, not code — add a new skill by adding a file to `content/skills/`, then reference
its id from a roadmap's `stages[].skills` list. IDs are the reuse mechanism: the same skill, resource, or
project id can be referenced from as many places as makes sense (PRD §10, §33).

Full guide, schema examples for every content type, and the PR process: **[CONTRIBUTING.md](./CONTRIBUTING.md)**.
Governance / who can merge what: **[GOVERNANCE.md](./GOVERNANCE.md)**. Community standards:
**[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**.

Fastest ways to help right now:

- Add a resource, project, dataset, or skill note (see the templates in CONTRIBUTING.md).
- Fix a broken link or a stale `last_verified` date.
- Improve an existing skill note's explanation or examples.
- Check the [issues](../../issues) for `good first issue` / `help wanted` labels.

## Deliberate scope decisions

- **Node granularity**: SQL and Python are split into the sub-skills the PRD calls out explicitly
  (`sql-select` → `sql-window-functions`); most other stages are one skill node each to keep the initial
  content set reviewable. Splitting further is just adding more YAML files.
- **Resource verification**: every resource has `last_verified: 2026-08-18`, but PRD §24's automated
  freshness checker (a scheduled CI job that detects broken links/redirects) isn't built — verify links
  before treating this content as final.
- **IA deviations from PRD §21**: `/skills/sql` and `/projects/sql` (category-only paths) became
  `/skills` and `/projects` index pages with grouped sections instead, since individual skill/project ids
  are more specific than their category. `/guides` wasn't built — it's not in the PRD's MVP feature list.
- **Not built** (all correctly out of scope per PRD §28–31, §36): accounts, cloud sync, in-app resource
  freshness automation, in-app community feedback/review widgets, and anything AI. (GitHub-based
  content contribution — this file, CONTRIBUTING.md, GOVERNANCE.md — is a separate, repo-level layer
  and is very much in scope.)

## Stack

Astro (static output) + Tailwind v4, YAML content via Astro content collections, `localStorage` for all
learner state. Matches PRD §32's "initial technology" table exactly — no backend, no auth, ready for
GitHub Pages.

## License

[MIT](./LICENSE) — free to use, fork, and reuse. See [GOVERNANCE.md](./GOVERNANCE.md) for how
decisions get made and who reviews/merges contributions.
