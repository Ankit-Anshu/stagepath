# content/assessments/

3 checkpoint self-checks. The smallest, least-used collection — most roadmap progress checkpoints are
currently expressed inline via a stage's `checkpoint:` field (see
[content/roadmaps/README.md](../roadmaps/README.md)), not through this collection. An assessment here
is a standalone, referenceable checklist a skill can point to via its own `assessment:` field.

## Schema

```yaml
title: Portfolio Readiness Checkpoint      # required
type: checkpoint                           # optional, defaults to 'self-check' — self-check | checkpoint
skills: [portfolio-building, job-preparation]   # optional — skill ids this assessment covers
checklist:                                 # required — the actual self-check items
  - At least 3 portfolio projects published with a README
  - Can explain every published project's approach and findings out loud
  - Resume reflects verified skills, not just topics studied
  - Comfortable completing a mock interview
pass_criteria: All checklist items demonstrated.   # required — the bar for "done"
```

## Naming

Filename (minus `.yaml`) is the id, prefixed `assessment-` (`assessment-portfolio-readiness-checkpoint`).

## Should you add one?

This collection is small on purpose — most self-check needs are already covered by a skill's own
"Self-review before moving on" checklist (built from that skill's `objectives:`, see
[content/skills/README.md](../skills/README.md)) or a roadmap stage's `checkpoint:` field. Reach for a
standalone assessment file only for a checkpoint that spans multiple skills and doesn't naturally live
inside one roadmap stage — like the portfolio-readiness example above, which cuts across an entire
roadmap's worth of work.
