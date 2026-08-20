# Security Policy

StagePath is a fully static site (Astro static output, no backend, no accounts, no user data
collected server-side — all learner progress lives in the visitor's own browser `localStorage`). The
realistic attack surface is small, but if you find something, please report it responsibly.

## Reporting a vulnerability

Please **do not** open a public issue for a security concern. Instead, email
**ankitanshu889@gmail.com** with:

- A description of the issue and its potential impact.
- Steps to reproduce, if applicable.

Report anything that could affect site visitors, such as a stored/reflected XSS via content
rendering, a dependency with a known exploit, or a way to inject arbitrary HTML through user-editable
storage. Please **do not** open a public issue for these — email instead.

Content quality issues (wrong info, broken links) are not security issues — please use a regular
[GitHub issue](../../issues/new/choose) for those instead.
