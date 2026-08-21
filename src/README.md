# src/

The Astro application — routes, layout, shared logic, and styles. If you're here to add or edit
content (a resource, project, skill, roadmap, dataset), you almost certainly want
[`content/`](../content/README.md) instead, not this folder.

For a full map of how these pieces fit together — routing conventions, the two different
skill-based-roadmap patterns, the knowledge-note markdown pipeline, the `Base` layout's props, the
base-path link-rewriting trick, and styling conventions — see **[ARCHITECTURE.md](../ARCHITECTURE.md)**
at the repo root. This file is just the folder index:

```text
content.config.ts   Zod schemas for every content collection — the source of truth for valid YAML.
layouts/Base.astro   The shared page shell (header, footer, global back button, base-path script).
lib/                 Shared TS logic: skill-roadmaps.ts (generic roadmap ordering) and the 8
                      *-curriculum.ts hand-transcribed curriculum trees (SQL, Python, ...).
pages/                One file per route — see ARCHITECTURE.md's routing table for the dynamic ones.
scripts/              Client-side modules loaded via <script src="..."> (currently just the
                      homepage's knowledge-graph visualization).
styles/global.css     Site-wide tokens and the few classes shared across more than one page.
```
