# Governance

StagePath is a **maintainer-led open-source project**. In plain terms: everyone is welcome to
propose changes, but one person — the project maintainer — has final say on what actually ships.
This document exists so that's explicit up front rather than a surprise.

## Roles

**Maintainer** ([@Ankit-Anshu](https://github.com/Ankit-Anshu))
The maintainer owns the project's direction, reviews and merges every pull request, cuts releases,
and has the final word on any disagreement. This isn't a committee — it's a benevolent-dictator
model, chosen deliberately so the roadmap content stays consistent in tone, accuracy, and quality
as the project grows. `.github/CODEOWNERS` enforces this technically: no change can merge without
the maintainer's review, no matter who opens the pull request.

**Contributors**
Anyone who opens an issue, submits a pull request, reviews someone else's pull request, or helps
triage issues. No special access is required to contribute — see [CONTRIBUTING.md](./CONTRIBUTING.md)
to get started. Contributors are credited in the pull request/commit history; there is no separate
CLA or copyright assignment — your contributions remain under the project's [MIT license](./LICENSE).

**Trusted contributors** (informal, may grow over time)
Contributors who've sent several solid, well-scoped pull requests may be invited to help triage
issues, label things, and do first-pass reviews. This doesn't grant merge rights — the maintainer
still reviews and merges everything — but it does speed up the process for everyone.

## How decisions get made

- **Content changes** (new resource, project, dataset, skill note, roadmap edit, typo fix): open a
  pull request. If it follows the schema and content guidelines in
  [CONTRIBUTING.md](./CONTRIBUTING.md), it's usually a fast, low-drama merge.
- **Structural or design changes** (new page type, new content collection, visual redesign, new
  dependency): open an issue first to discuss the approach before investing time in a pull request.
  This avoids wasted work on something that doesn't fit the project's direction.
- **Disagreements**: discussed in the issue or pull request thread. If no consensus emerges, the
  maintainer makes the final call. This is the tradeoff of the benevolent-dictator model — fast,
  consistent decisions, at the cost of not being a pure democracy.

## Why not a flatter model?

A flatter, multi-maintainer model is a reasonable thing to grow into once there's a track record of
regular, trusted contributors. Until then, one maintainer reviewing everything keeps the roadmap
content coherent (consistent depth, tone, and accuracy across hundreds of skill notes) and keeps the
barrier to contributing low — you don't need write access or a vote to make the project better, just
a good pull request.

## Scope of "full control"

To be concrete about what the maintainer retains control over:

- Merging to `main` (enforced by required reviews + CODEOWNERS on GitHub's branch protection).
- Repository settings, GitHub Actions secrets, and the deploy pipeline.
- The final wording/structure of any merged content, even if a contributor's PR needed edits first.
- Deciding what's in scope for the project (see [CONTRIBUTING.md](./CONTRIBUTING.md#whats-in-scope)).

And what's genuinely open:

- Anyone can open issues and pull requests, no permission needed.
- All content and code is MIT-licensed — fork it, run your own version, reuse the content elsewhere.
- The backlog of "good first issue" / "help wanted" items is public and first-come, first-served.
