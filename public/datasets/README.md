# public/datasets/

Data files referenced by project briefs in [`content/projects/`](../../content/projects/README.md).
Served as static files at `/datasets/<filename>` — anything placed here is publicly downloadable by
anyone visiting the site, with no processing or validation applied to it at build time.

## Formats in use

Mostly CSV (27 files currently, a couple of `.json` for projects that need structured/nested data).
CSV is preferred unless a project genuinely needs nested structure a flat file can't represent.

## Adding a dataset

1. Add the file here, named clearly and matching the project it belongs to (e.g.
   `ab-test-signup.csv` for `project-ab-testing-analysis.yaml`).
2. Reference it from the project's YAML `dataset:` object:
   ```yaml
   dataset:
     name: Signup experiment results
     description: Synthetic user-level CSV containing assignment, conversion, device, country.
     source_url: /datasets/ab-test-signup.csv
     format: CSV
     size: 60 observations
     files: [ab-test-signup.csv]
   ```
   See [content/projects/README.md](../../content/projects/README.md) for the full project schema.

## Rules

- **Synthetic or clearly-licensed-for-reuse data only.** Never real personal data (even anonymized —
  err on the side of generating synthetic data instead), and never a dataset you don't have the right
  to redistribute publicly under this project's MIT license.
- **Keep it small.** A few hundred rows is plenty for a learning project — this isn't a data
  warehouse, and large files bloat every clone of the repo.
- **One dataset, one clear purpose.** If you're tempted to add a huge multi-purpose dataset "for
  future projects," don't — add exactly what the project you're writing needs.
