# Architecture

This document explains the parts of StagePath that code contributors need to understand.

## Stack

- Astro with static output
- Tailwind CSS and scoped Astro styles
- YAML content collections
- Astro schema validation
- Marked for rendering skill-note Markdown
- GitHub Actions for validation and GitHub Pages deployment

## Repository map

```text
content/
  assessments/        Checkpoint assessments
  chapters/           Reusable groups of skills
  projects/           Project briefs and evaluation criteria
  resources/          Curated external resources
  roadmaps/           Career roadmap definitions
  skills/             Reusable skills and detailed notes
public/datasets/       Project datasets
src/
  content.config.ts   Content collection schemas
  layouts/            Shared page layouts
  lib/                Curriculum data and roadmap helpers
  pages/              Astro routes
  scripts/            Browser-side interactive code
  styles/             Global styles and design tokens
```

## Content relationships

Content is connected by stable IDs derived from filenames.

```text
roadmap -> stage -> skill or chapter
skill -> resources and optional project
chapter -> skills
project -> skills and optional dataset
assessment -> skills
```

Define shared content once and reference it wherever it is needed. Do not duplicate a skill, resource, or project for each roadmap.

Schemas in `src/content.config.ts` are the source of truth. `npm run build` validates the collections before generating pages.

## Routes

| Route | Source |
| --- | --- |
| `/roadmaps/` | `src/pages/roadmaps/index.astro` |
| `/roadmaps/[id]/` | `src/pages/roadmaps/[id].astro` |
| `/roadmaps/[id]/[stageId]/[groupId]/` | `src/pages/roadmaps/[id]/[stageId]/[groupId].astro` |
| `/skills/` | `src/pages/skills/index.astro` |
| `/skills/[id]/` | `src/pages/skills/[id].astro` |
| `/skill-roadmaps/` | `src/pages/skill-roadmaps/index.astro` |
| `/skill-roadmaps/[id]/` | `src/pages/skill-roadmaps/[id].astro` and dedicated curriculum pages |
| `/projects/` | `src/pages/projects/index.astro` |
| `/projects/[id]/` | `src/pages/projects/[id].astro` |
| `/resources/` | `src/pages/resources/index.astro` |

Dynamic routes use `getStaticPaths()` and are generated during the build.

## Skill roadmaps

StagePath has two rendering patterns:

1. Skill roadmaps select entries from `content/skills/`, order them by prerequisites, and link to detailed skill pages.
2. Technology curricula such as SQL, Python, and Power BI use detailed topic trees in `src/lib/*-curriculum.ts`.

Use the-skill pattern when every node should have its own learning page. Use a curriculum tree for a deeply nested reference outline whose small topics do not need separate pages.

## Skill notes

The `note` field in a skill YAML file contains Markdown. The skill page renders it with Marked and builds a table of contents from its headings. Follow the heading structure documented in [content/skills/README.md](./content/skills/README.md).

## Styling

- Global tokens and shared styles belong in `src/styles/global.css`.
- Page-specific styles stay in the relevant Astro component.
- Reuse existing colors, spacing, controls, and responsive patterns.
- Test keyboard navigation, focus states, contrast, and mobile layouts for interface changes.

## GitHub Pages

`astro.config.mjs` sets the site URL and repository base path in GitHub Actions. Internal links are written from the site root and adjusted for the GitHub Pages subpath by the shared layout.

## Validation and deployment

- `.github/workflows/ci.yml` builds every pull request and update to `main`.
- `.github/workflows/deploy.yml` publishes successful updates from `main` to GitHub Pages.
- Run `npm run build` locally before opening a pull request.
