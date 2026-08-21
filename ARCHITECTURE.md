# Architecture

A map of how StagePath's codebase fits together — for anyone contributing app/UI code, not just
content. If you're only adding a resource, project, dataset, or skill note, you don't need this file;
see [CONTRIBUTING.md](./CONTRIBUTING.md) and the `README.md` inside each `content/*` folder instead.

## The short version

Astro, static output, zero backend. Every page is pre-rendered at build time from YAML content files
via Astro's content collections. There is no database, no API, no client-side framework beyond a
handful of small `<script>` tags for interactivity (search filters, the homepage graph, accordion
toggles). `npm run build` is both the compiler and the content validator — a malformed YAML file fails
the build with the exact file and field at fault.

## Top-level layout

```text
content/            The content repository. See content/README.md.
public/             Static assets served as-is — favicon, OG image, public/datasets/*.csv.
src/
  content.config.ts   Zod schemas for every collection — the single source of truth for what a
                       valid resource/project/skill/roadmap/chapter/assessment YAML file looks like.
  layouts/Base.astro   The one shared page shell: <head>, header nav, footer, the global back
                        button, and the base-path link-rewriting script (see "Base path" below).
  lib/
    skill-roadmaps.ts        Defs + ordering logic for the *generic* skill-based roadmaps (the
                              ones derived from the shared `skills` collection).
    *-curriculum.ts (x8)     Hand-transcribed curriculum trees for SQL, Python, Power BI, Tableau,
                              Git & GitHub, Statistics, Spreadsheets, and Machine Learning — see
                              "Two kinds of skill-based roadmap" below.
  pages/               One file per route (or per dynamic route pattern). See "Routing" below.
  scripts/
    knowledge-graph.ts  Client-side module for the homepage's canvas visualization.
  styles/global.css     Site-wide tokens (--green, --ink, --line, ...), header/footer/nav, and any
                         class used by more than one page. Everything else is a page-scoped
                         <style> block at the bottom of its own .astro file.
scripts/             One-off Node scripts used to originally generate/expand the content set.
                     Not part of the build; see scripts/README.md before running any of them.
```

## Routing

Astro's file-based routing maps `src/pages/**` directly to URLs. The non-obvious ones:

| Route pattern | File | Notes |
|---|---|---|
| `/roadmaps/[id]` | `pages/roadmaps/[id].astro` | One per `content/roadmaps/*.yaml` entry. |
| `/roadmaps/[id]/[stageId]/[groupId]` | `pages/roadmaps/[id]/[stageId]/[groupId].astro` | Only exists for stages whose `groups` field references a chapter — see `content/chapters/README.md`. |
| `/skills/[id]` | `pages/skills/[id].astro` | One per `content/skills/*.yaml` entry — the knowledge-note "topic page". |
| `/skill-roadmaps/[id]` | `pages/skill-roadmaps/[id].astro` | Generic skill-based roadmaps only (see below) — NOT the 8 curriculum ones. |
| `/skill-roadmaps/sql`, `/python`, etc. | `pages/skill-roadmaps/sql.astro`, ... | 8 separate, hand-written static pages — one per curriculum technology. |
| `/projects/[id]` | `pages/projects/[id].astro` | One per `content/projects/*.yaml` entry. |

Every `getStaticPaths()` pulls from `astro:content` at build time; there's no runtime routing logic.

## Two kinds of skill-based roadmap

This is the one place the codebase deliberately has two different patterns for what looks like the
same feature, and it trips people up, so it's worth explaining once here rather than re-discovering it
per file:

1. **Generic roadmaps** (`src/lib/skill-roadmaps.ts` + `pages/skill-roadmaps/[id].astro`): built from
   the shared `skills` collection. A `match()` predicate picks which skills belong (e.g. everything
   whose id starts with `database-`), and `orderByPrerequisites()` topologically sorts them by their
   own `prerequisites` field. Each stop on the track is a real skill with its own note page, so the
   track links directly to `/skills/[id]`.
2. **Curriculum-tree roadmaps** (`src/lib/*-curriculum.ts` + 8 dedicated pages under
   `pages/skill-roadmaps/`): SQL, Python, Power BI, Tableau, Git & GitHub, Statistics, Spreadsheets,
   Machine Learning. These come from large external curriculum documents with far more granular
   topics than the `skills` collection has pages for. Rather than generate ~3,500 near-empty skill
   pages, each was hand-transcribed into a flat `{ id, title, topics: string[] }[]` array and rendered
   with plain, non-clickable topic tiles — a reference map, not a set of linked pages. If you're fixing
   a typo in one of these, you're editing the relevant `src/lib/*-curriculum.ts` array directly, not a
   YAML file.

The 8 curriculum pages themselves are near-identical copies of the same template (shared "winding
track" SVG-drawing script and scoped CSS), copied rather than extracted into a shared component. A
rendering bug found on one almost certainly exists on all 8 — `src/pages/skill-roadmaps/sql.astro` is
as good a starting point as any to see the shared shape.

## The knowledge-note pipeline (skill pages)

Each skill's optional `note:` field is one long hand-written markdown block (see
`content/skills/README.md`). `src/pages/skills/[id].astro` runs it through `marked.parse()` at build
time, then does one extra pass: every `<h2>` (plus any `<h3>` whose text matches
`/revision|cheat.?sheet|recap|summary/i`) gets a slugified `id` attribute injected via string
replacement, and the resulting `{id, text}` pairs are collected into a table of contents rendered in
the page's sticky sidebar — so a learner can jump straight to "Interview preparation" instead of
scrolling the whole note. If you're wondering why heading anchors "just work" without a markdown
plugin: this is why, and it's specific to this one file.

## The `Base` layout

`src/layouts/Base.astro` wraps every page. A few props worth knowing about:

- `wide` — widens the `<main>` shell for pages with a lot of horizontal content (roadmap tracks,
  card grids). Most index/listing pages set this; most single-column pages don't.
- `backLink` — controls the small "← Back" link rendered at the top-left of `<main>`, which calls
  `history.back()` (falling back to the homepage if there's no history to go back to). Defaults to
  `true` everywhere except `/`. Pages that render their own more specific contextual back-link inside
  their own hero (e.g. a roadmap detail page's "← Browse all roadmaps") pass `backLink={false}` so the
  two don't stack.

`Base.astro` also carries the base-path link-rewriting script — see below.

## Base path (GitHub Pages subpath deploys)

If `astro.config.mjs`'s `base` is set to a subpath (e.g. deploying to
`username.github.io/stagepath`), every absolute `href="/..."` in the app needs that prefix. Rather
than manually prefix every link across every page, `Base.astro` ships a small inline script that
walks the DOM (and any nodes added later, via a `MutationObserver`) rewriting `href="/..."` to
`href="{base}/..."`, and intercepts same-origin clicks to do the same at navigation time. Write links
normally (`href="/skills"`, `withBase('/skills')` in `.astro` frontmatter where already used) — you
don't need to think about the base path when adding a page or a link.

## Styling conventions

- **Global** (`src/styles/global.css`): CSS custom properties (`--green`, `--ink`, `--line`, `--muted`,
  ...), the site header/nav/footer, and the couple of classes shared across many pages (`.page-shell`,
  `.back-link`). Change something here and it affects every page — be sure that's what you want.
- **Page-scoped** (`<style>` at the bottom of a `.astro` file): everything else. Astro auto-scopes
  these to the component via a generated `data-astro-cid-*` attribute, so class names don't need to be
  globally unique. Note-body content (parsed markdown, injected via `set:html`) is the one exception —
  its styles live in a `<style is:global>` block in `skills/[id].astro`, because injected HTML never
  receives the scoping attribute.
- These blocks are written dense/single-line by convention in this codebase (not auto-minified — that
  is the actual authored style), to keep each page's full CSS visible in one scroll without a huge
  file. It's unusual, but consistent; match it rather than reformatting a file into multi-line CSS
  as a drive-by change.

## A note on inline `<script>` type errors

A few pages' editor/IDE may flag "Type annotations can only be used in TypeScript files" inside an
inline `<script>` block. This happens because a `<script>` tag with certain attributes (`define:vars`,
etc.) is compiled by Astro as `is:inline`, which skips TypeScript processing — so you can't use
TS-only syntax (type annotations, `as` assertions) inside those specific blocks, only inside actual
`.ts` files or `<script>` tags without such attributes. It's a real constraint, not a false positive;
just write those particular inline blocks in plain JS.

## Content validation

There's no separate lint/validate script — `npm run build` **is** the validator. Astro runs every
YAML file in `content/*` through its collection's Zod schema (`src/content.config.ts`) before
rendering anything; a missing required field, wrong type, or invalid enum value fails the build
immediately with the offending file and field named. This is also what `.github/workflows/ci.yml`
runs on every pull request.

## Historical note: PRD references

Some comments in this codebase (including in `content.config.ts`) cite section numbers from an
internal PRD document (e.g. "PRD §32") that predates this repository's public history and isn't
included here. Treat those citations as historical rationale for a decision, not as a live,
dereferenceable spec — if a comment's reasoning is unclear without the source document, ask rather
than assume.
