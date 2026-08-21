# content/resources/

46 curated external learning resources — videos, articles, courses, books, and documentation. Shown
on the [`/resources`](../../src/pages/resources/index.astro) catalog (with client-side filtering by
type) and inside any skill page that references it by id.

## Schema

```yaml
title: Apache Airflow Documentation   # required
type: documentation                   # required — video | article | interactive | course | book | documentation
url: https://airflow.apache.org/docs/ # required — must be a valid URL, and must actually work
provider: Apache Airflow              # required — who publishes it
duration_minutes: 120                 # required — rough time to work through it
difficulty: intermediate              # required — beginner | intermediate | advanced
free: true                            # required — be honest; don't mark paid content as free
language: en                          # optional, defaults to 'en'
last_verified: '2026-08-18'           # required — the date YOU checked the link works, not a
                                       # copy-pasted old date. Quote it (YAML date, not a string,
                                       # but quoting avoids surprises with some YAML parsers).
quality_score: 4.3                    # optional, 0-5 — your honest assessment, not a popularity vote
recommended: true                     # optional, defaults to false — reserve for standout resources
```

## Before you submit one

- **Check the link actually works right now** — not "it worked when I found it." Dead links are the
  single most common content-quality problem in a resource catalog like this.
- **Prefer free.** If it's paid, set `free: false` — don't round up.
- **Skip anything you haven't actually gone through.** A resource you haven't read/watched yourself is
  a resource you can't honestly rate for `difficulty` or `quality_score`.
- **Search first.** Check whether a similar resource already exists for the same skill before adding a
  near-duplicate under a different id.

## Referencing a resource

A resource only shows up on a skill page if that skill's `resources:` list includes its id — adding a
resource file alone doesn't attach it anywhere. See
[content/skills/README.md](../skills/README.md#schema).

## Naming

Filename (minus `.yaml`) is the id, prefixed `r-` (`r-mode-sql-tutorial`, `r-airflow-docs`).
