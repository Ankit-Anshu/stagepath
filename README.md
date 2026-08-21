# StagePath

[![License: MIT](https://img.shields.io/badge/license-MIT-6bc58c.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-6bc58c.svg)](./CONTRIBUTING.md)
[![CI](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml/badge.svg)](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml)

An open-source, community-editable learning roadmap platform for data and tech careers. Ordered
career roadmaps, reusable skill notes written for both first-time learning and interview prep,
curated resources, and hands-on project briefs (with datasets) — rendered by a static Astro site with
no accounts, no backend, and no tracking of any kind.

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

No accounts, no backend, no environment variables, no analytics, no client-side progress tracking —
it's fully static. Every page is pre-rendered at build time from the YAML in `content/`.

## What's here

- **11 career roadmaps** (Data Analyst, Data Engineer, Data Scientist, AI Engineer, Backend Developer,
  and more) — each an interactive stage → skill → resource → project track.
- **8 skill-based roadmaps** (SQL, Python, Power BI, Tableau, Git & GitHub, Statistics, Spreadsheets,
  Machine Learning) — full curriculum reference trees you can follow independent of any career track.
- **~300 skills** in a reusable skill graph (`content/skills/`) — e.g. a topic like `sql-joins` is
  referenced by every roadmap that needs it, not duplicated per roadmap. Most have a full knowledge
  note: what it is, why it matters, examples, common mistakes, and a dedicated interview-prep section.
- **46 curated resources**, each with a type, provider, duration, difficulty, and `last_verified`
  date — and growing with community contributions.
- **16 project briefs** (mini / portfolio / capstone) with real problem statements, requirements,
  milestones, and review rubrics — several with their own datasets — plus checkpoint assessments.
- An interactive homepage knowledge-graph of every roadmap and skill, an "I'm not sure yet" quiz that
  points at a starting roadmap, a resource catalog, and a topic library.

## Project layout

```text
content/            The content repository — almost every contribution starts here.
                     See content/README.md for the full map and content/*/README.md for each
                     collection's schema (skills, roadmaps, chapters, resources, projects, assessments).
public/datasets/     CSV/JSON datasets referenced by project briefs. See public/datasets/README.md.
src/                 The Astro application. See src/README.md and, for the deep dive on how
                     everything fits together, ARCHITECTURE.md at the repo root.
scripts/             One-off scripts used to originally generate the content set — see
                     scripts/README.md before assuming you need to run any of them.
```

## Contributing

Content is plain YAML, not code — add a new skill by adding a file to `content/skills/`, then reference
its id from a roadmap's `stages[].skills` list. IDs are the reuse mechanism: the same skill, resource, or
project id can be referenced from as many places as makes sense.

Full guide, schema examples for every content type, and the PR process: **[CONTRIBUTING.md](./CONTRIBUTING.md)**.
Codebase architecture (for app/UI contributions): **[ARCHITECTURE.md](./ARCHITECTURE.md)**.
Governance / who can merge what: **[GOVERNANCE.md](./GOVERNANCE.md)**. Community standards:
**[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**.

Fastest ways to help right now:

- Add a resource, project, dataset, or skill note (see the schemas in `content/*/README.md`).
- Fix a broken link or a stale `last_verified` date.
- Improve an existing skill note's explanation or examples.
- Check the [issues](../../issues) for `good first issue` / `help wanted` labels.

## Deliberate scope decisions

- **No accounts, no progress tracking, no personal dashboard, no certificates.** StagePath doesn't
  pretend that checking a box creates competence — it's a public map, not a learning-management
  system. Use whatever notes/task system you already prefer alongside it.
- **Node granularity**: SQL and Python are split into meaningfully distinct sub-skills
  (`sql-select` → `sql-window-functions`); most other topics are one skill node each to keep the
  content set reviewable. Splitting further is just adding more YAML files.
- **Resource verification is manual, not automated.** Every resource has a `last_verified` date, but
  there's no scheduled job that re-checks links for rot — see
  [content/resources/README.md](./content/resources/README.md) for what's expected of contributors
  instead.
- **Two different patterns for skill-based roadmaps** (one derived from the shared skill graph, one a
  set of hand-transcribed curriculum trees) — this is intentional, not inconsistent; see
  [ARCHITECTURE.md](./ARCHITECTURE.md#two-kinds-of-skill-based-roadmap) for why.

## Stack

Astro (static output) + Tailwind v4 utilities, YAML content via Astro content collections. No backend,
no auth, no database — ready for GitHub Pages (see `.github/workflows/deploy.yml`).

## License

[MIT](./LICENSE) — free to use, fork, and reuse. See [GOVERNANCE.md](./GOVERNANCE.md) for how
decisions get made and who reviews/merges contributions.
