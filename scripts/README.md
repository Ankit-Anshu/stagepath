# scripts/

One-off Node scripts used to originally generate, expand, and reorganize the `content/` collections
during StagePath's initial build-out. **You almost certainly don't need to run any of these** to make
a normal contribution — adding a single resource, project, dataset, or skill note is just adding one
YAML file by hand (see [CONTRIBUTING.md](../CONTRIBUTING.md)).

## Why they're still here

They're kept for transparency and as a reference for the conventions the content set was built with
(id formats, note structure, YAML field ordering) — not because they're meant to be re-run casually.
None of them are wired into `package.json` or the build; each is invoked directly with
`node scripts/<file>.mjs`.

- **`seed-content.mjs`** — the original one-time generator that produced the initial content set.
  Safe to re-run in the sense that it won't corrupt anything by existing, but re-running it against a
  content set that's since been hand-edited will very likely produce results you don't want.
- **`add-*.mjs`, `expand-*.mjs`, `rewire-*.mjs`, `split-*.mjs`, `ungroup-*.mjs`, `extract-chapters.mjs`,
  `fix-backticks.mjs`** — later one-off passes that expanded specific stages, split content, or fixed
  a specific formatting issue across many files at once. Each was written for a single historical
  change and isn't meant to be reusable for a different one.
- **`notes/`** — batch scripts (`notes/*.mjs`) that generated the `note:` markdown field for specific
  batches of skills (e.g. `notes/spreadsheets-fundamentals.mjs`, `notes/sql-batch1.mjs`), plus two
  shared helpers: `notes/_lib.mjs` (shared note-writing utilities) and `notes/_create.mjs` (the
  template/scaffold a batch script starts from).

## If you're adding many skills/resources at once

If you're contributing a large batch of similar content (not a one-off addition), it's reasonable to
write your own throwaway script following the pattern in an existing one under `notes/` rather than
hand-writing dozens of near-identical YAML files — just don't check the script itself into this folder
unless you think a future contributor doing the same kind of batch would genuinely benefit from it as
a reusable reference, the way the existing ones are kept for that reason rather than out of habit.
