# PRD — Shared Content Architecture for Multi-Role Roadmaps

## 1. Objective

Refactor the application's **internal content/data architecture** so multiple career roadmaps can reuse the same Skills, Chapters, Topics, Notes, and Projects.

### Critical requirement

**DO NOT CHANGE THE CURRENT ROADMAP UI OR DESIGN.**

The existing roadmap visual design is already good and should remain exactly as it is.

Do not redesign:
- Roadmap layout
- Roadmap cards
- Stage cards
- Topic cards
- Colors
- Typography
- Spacing
- Visual hierarchy
- Existing navigation
- Existing note page design
- Existing interactions unless required for the new data relationships

This task is primarily an **internal architecture/data-model refactor**.

---

# 2. Problem

The application contains multiple career roadmaps, for example:

- Data Analyst
- Data Scientist
- Data Engineer
- AI Engineer
- Business Analyst
- Software Engineer
- Cybersecurity
- Cloud Engineering

Many of these roadmaps use the same skills and topics.

Examples:

- SQL → Data Analyst, Data Scientist, Data Engineer, Business Analyst
- Python → Data Analyst, Data Scientist, AI Engineer, Data Engineer
- Statistics → Data Analyst, Data Scientist, Business Analyst
- Git → Software Engineer, Data Engineer, AI Engineer, Data Scientist
- Linux → Data Engineer, Cloud Engineering, Software Engineer, Cybersecurity
- Databases → Data Analyst, Data Engineer, Software Engineer, Data Scientist

Do NOT create separate copies of these for every roadmap.

The application must use a **single reusable content library**.

---

# 3. Core Product Principle

## Create content once. Reuse it everywhere.

A Skill, Topic, Note, or Project must have one canonical record.

Roadmaps should reference that record.

The roadmap determines:

- What is relevant
- What order it appears in
- Whether it is required or optional
- Which topics are included
- Which projects are recommended

The roadmap should NOT own duplicate copies of the actual learning content.

---

# 4. Conceptual Architecture

Use this structure:

```text
                    GLOBAL CONTENT LIBRARY
                             |
              +--------------+--------------+
              |              |              |
            SKILLS         TOPICS         PROJECTS
              |              |
          CHAPTERS         NOTES
              |
              +--------------+
                             |
                             v
                         ROADMAPS
                             |
             +---------------+---------------+
             |               |               |
        Data Analyst   Data Engineer   Data Scientist
             |               |               |
             +------- references ------------+
```

A roadmap is essentially a **learning path/view over shared content**.

---

# 5. Global Content Library

Create one central library containing:

```text
Skills
Chapters
Topics
Notes
Projects
```

Each entity must have a stable unique ID.

Do not identify content only by display name.

For example:

```text
skill:
  id: sql
  name: SQL
```

```text
chapter:
  id: sql-fundamentals
  skillId: sql
  name: Fundamentals
```

```text
topic:
  id: sql-joins
  chapterId: sql-querying
  name: JOINs
```

```text
note:
  id: note-sql-joins
  topicId: sql-joins
  content: ...
```

---

# 6. Skill

A Skill is a reusable high-level capability/tool.

Examples:

```text
SQL
Python
Excel
Statistics
Power BI
Tableau
Git
Linux
Databases
Cloud
Machine Learning
Data Visualization
Data Cleaning
```

A skill exists only once globally.

Do NOT create:

```text
Data Analyst SQL
Data Engineer SQL
Data Scientist SQL
Business Analyst SQL
```

Instead create:

```text
SQL
```

and connect it to multiple roadmaps.

---

# 7. Chapter

A Chapter groups related topics within a Skill.

Example:

```text
SQL
├── Fundamentals
├── Query Basics
├── Filtering
├── Aggregation
├── JOINs
├── Subqueries
├── CTEs
└── Window Functions
```

Chapters should also be reusable.

A chapter belongs to a Skill.

---

# 8. Topic

A Topic is an individual learning unit.

Example:

```text
SQL
└── JOINs
    ├── INNER JOIN
    ├── LEFT JOIN
    ├── RIGHT JOIN
    ├── FULL OUTER JOIN
    └── SELF JOIN
```

Each topic has one canonical record.

If four roadmaps need `SQL JOINs`, they all reference the same topic.

---

# 9. Detailed Notes

The existing detailed learning notes must remain.

A note belongs to the canonical Topic.

Example:

```text
SQL
  -> JOINs
      -> Detailed Note
```

The note must NOT be duplicated per roadmap.

If the SQL JOIN note is updated, all roadmaps automatically see the updated note.

Do not create:

```text
Data Analyst SQL JOIN Note
Data Engineer SQL JOIN Note
Data Scientist SQL JOIN Note
```

Create:

```text
SQL JOIN Note
```

once.

---

# 10. Projects

Projects must also be globally reusable.

Example:

```text
Project:
E-commerce Customer Analysis

Skills:
- SQL
- Python
- Statistics
- Power BI
```

This single project can be associated with:

```text
Data Analyst
Data Scientist
Business Analyst
```

Do not duplicate the project.

A project can have many skills and many roadmap associations.

---

# 11. Roadmap Structure

A roadmap should contain references, not copies.

Example:

```text
Data Analyst Roadmap
|
+-- Excel
|    +-- selected topics
|
+-- SQL
|    +-- selected topics
|
+-- Statistics
|    +-- selected topics
|
+-- Python
|    +-- selected topics
|
+-- Power BI
     +-- selected topics
```

The roadmap does not store a second copy of SQL or its notes.

---

# 12. Roadmap-to-Skill Mapping

Create a relationship between Roadmap and Skill.

Conceptually:

```text
roadmap_skill
------------------------
roadmapId
skillId
order
required
```

Example:

```text
data-analyst | sql | 3 | true
data-engineer | sql | 2 | true
business-analyst | sql | 4 | false
```

This means SQL is one shared Skill but can appear differently in different roadmaps.

---

# 13. Roadmap-to-Topic Mapping

A roadmap can select specific topics from a shared Skill.

Conceptually:

```text
roadmap_topic
------------------------
roadmapId
topicId
order
required
```

Example:

```text
data-analyst | sql-fundamentals | 1 | true
data-analyst | sql-joins | 5 | true
data-analyst | sql-window-functions | 8 | true

data-engineer | sql-fundamentals | 1 | true
data-engineer | sql-joins | 4 | true
data-engineer | sql-window-functions | 7 | true
```

The topics remain shared.

Only their roadmap placement differs.

---

# 14. Different Roles Can Have Different Depth

Do not duplicate a Skill just because different roles need different levels.

Example:

## Data Analyst → SQL

```text
Fundamentals
SELECT
WHERE
GROUP BY
JOINs
Subqueries
CTEs
Window Functions
```

## Data Engineer → SQL

```text
Fundamentals
JOINs
CTEs
Window Functions
Advanced SQL
Query Optimization
Database Concepts
```

## Business Analyst → SQL

```text
Fundamentals
SELECT
WHERE
GROUP BY
Basic JOINs
```

All three use the same SQL content library.

The roadmap simply selects different topics.

---

# 15. Roadmap-to-Project Mapping

Projects should also be mapped instead of duplicated.

Conceptually:

```text
roadmap_project
------------------------
roadmapId
projectId
order
required
```

Example:

```text
data-analyst | ecommerce-analysis | 4 | true
data-scientist | ecommerce-analysis | 8 | false
business-analyst | ecommerce-analysis | 5 | false
```

---

# 16. Keep the Existing Roadmap UI

The existing UI should continue to render the same way.

For example, if the current UI shows:

```text
SQL

[Fundamentals]
[JOINs]
[Subqueries]
[CTEs]
```

keep it visually identical.

The difference is only internal:

```text
Roadmap
  ↓
roadmap_skill
  ↓
shared SQL skill
  ↓
roadmap_topic
  ↓
shared topic
  ↓
existing note
```

The learner should not see an architectural difference.

---

# 17. Keep Current Topic/Note Experience

When a learner clicks a topic:

```text
Roadmap
  → SQL
  → JOINs
  → Note
```

open the existing note experience.

Do not create a new note design.

The shared architecture should be invisible to the learner.

---

# 18. Global Skills Section

The existing Skills section should become a global library.

Example:

```text
Skills

SQL
Python
Excel
Statistics
Power BI
Tableau
Git
Linux
Databases
Cloud
Machine Learning
...
```

Clicking a Skill should use the canonical Skill content.

---

# 19. Global Topics Section

The Topics section should show globally available topics.

Example:

```text
SQL
  Fundamentals
  SELECT
  WHERE
  JOINs
  Subqueries
  CTEs
  Window Functions
```

Do not show duplicate versions simply because multiple roadmaps use them.

---

# 20. Global Projects Section

The Projects section should show the canonical project library.

Example:

```text
E-commerce Customer Analysis

Skills:
SQL
Python
Statistics
Power BI

Relevant Roadmaps:
Data Analyst
Data Scientist
Business Analyst
```

A project can be reused across multiple roles.

---

# 21. Deduplication Rules

Before creating any new Skill, Chapter, Topic, Note, or Project:

1. Check whether the entity already exists.
2. Reuse the existing entity if it exists.
3. Only create a new entity if it is genuinely different.
4. Use stable unique IDs.
5. Never create role-specific copies of shared learning content.

Examples of entities that should normally be shared:

```text
SQL
Python
Excel
Statistics
Git
Linux
Databases
APIs
Data Cleaning
Data Visualization
Cloud
```

---

# 22. Existing Data Migration

There may already be duplicated content in the application.

Refactor existing data into the shared model.

For example, if the current data contains:

```text
Data Analyst → SQL
Data Engineer → SQL
Data Scientist → SQL
Business Analyst → SQL
```

convert this to:

```text
Global Skill:
SQL
```

and create mappings:

```text
Data Analyst → SQL
Data Engineer → SQL
Data Scientist → SQL
Business Analyst → SQL
```

Do the same for duplicated Topics, Notes, and Projects.

---

# 23. Do Not Lose Existing Content

During migration:

- Preserve existing detailed notes.
- Preserve topic descriptions.
- Preserve examples.
- Preserve projects.
- Preserve roadmap ordering.
- Preserve required/optional status where possible.
- Preserve existing IDs where safe.
- Consolidate duplicate content carefully.

If duplicate notes contain useful information, merge the useful information into the canonical note rather than silently deleting it.

---

# 24. Important UI Constraint

This is NOT a UI redesign task.

Do NOT:

- Add a new roadmap layout.
- Replace the current cards.
- Add new navigation.
- Add new dashboard sections unless already present.
- Change the roadmap visual hierarchy.
- Change the current topic-card style.
- Change colors.
- Change spacing.
- Change typography.
- Add progress bars.
- Add chapter summaries.
- Add unnecessary subtitles.
- Add new roadmap UI components.

Only make the minimum UI changes required to correctly consume the new shared data model.

---

# 25. Functional Requirements

The final implementation must support:

### Shared Skill

One Skill can belong to many roadmaps.

### Shared Chapter

One Chapter belongs to a Skill and can be used by many roadmaps.

### Shared Topic

One Topic can appear in many roadmaps.

### Shared Note

One Note belongs to one canonical Topic and is reusable everywhere.

### Shared Project

One Project can appear in many roadmaps.

### Roadmap Customization

Each roadmap can choose:

- Skill order
- Topic order
- Required/optional
- Selected topics
- Recommended projects

without copying the content.

---

# 26. Example End-to-End Flow

A learner opens:

```text
Data Analyst
```

The current UI loads the Data Analyst roadmap.

The roadmap references:

```text
SQL
```

The system loads the global SQL Skill.

The roadmap requests its selected SQL topics:

```text
SQL Fundamentals
JOINs
Subqueries
CTEs
Window Functions
```

The UI displays them exactly as it currently does.

The learner clicks:

```text
JOINs
```

The system loads:

```text
topic: sql-joins
```

Then loads its shared detailed note.

A Data Engineer learner doing the same thing uses the same:

```text
sql-joins
```

topic and the same note.

No duplicate content exists.

---

# 27. Data Relationship Summary

Use this relationship model:

```text
Roadmap
   |
   +---- many-to-many ---- Skills
   |
   +---- many-to-many ---- Topics
   |
   +---- many-to-many ---- Projects


Skill
   |
   +---- one-to-many ---- Chapters
                              |
                              +---- one-to-many ---- Topics
                                                        |
                                                        +---- one-to-one ---- Note
```

If the current application's data layer uses another suitable relational/document structure, adapt this concept to the existing technology instead of unnecessarily rewriting the entire application.

---

# 28. Performance Goal

This architecture should reduce:

- Duplicate data
- Duplicate notes
- Duplicate projects
- Database/storage size
- Content maintenance
- Update inconsistencies
- Unnecessary rendering/data fetching

Prefer fetching canonical shared content and roadmap mappings rather than maintaining multiple copies.

Use appropriate caching/memoization if the existing application architecture supports it.

Do not introduce premature complexity.

---

# 29. Acceptance Criteria

The implementation is complete when all of the following are true:

### Architecture

- [ ] Skills are globally reusable.
- [ ] Chapters are globally reusable.
- [ ] Topics are globally reusable.
- [ ] Notes are globally reusable.
- [ ] Projects are globally reusable.
- [ ] Roadmaps reference shared content.
- [ ] No unnecessary role-specific duplicates remain.

### Roadmaps

- [ ] Existing roadmaps still work.
- [ ] Data Analyst roadmap still shows the same content.
- [ ] Data Engineer roadmap can reuse SQL.
- [ ] Data Scientist roadmap can reuse SQL.
- [ ] Business Analyst roadmap can reuse SQL.
- [ ] Different roadmaps can select different SQL topics.
- [ ] Ordering remains roadmap-specific.

### Notes

- [ ] Clicking a topic opens the existing note.
- [ ] One shared note can serve multiple roadmaps.
- [ ] Updating a shared note updates it everywhere.

### Projects

- [ ] Projects can be reused by multiple roadmaps.
- [ ] Project content is not duplicated.

### UI

- [ ] Current roadmap UI remains visually unchanged.
- [ ] Current cards remain unchanged.
- [ ] Existing note UI remains unchanged.
- [ ] No unnecessary UI redesign is introduced.

---

# 30. Implementation Instruction for Claude Code

Before changing code:

1. Inspect the existing project structure.
2. Identify where roadmaps are stored.
3. Identify where Skills, Topics, Notes, and Projects are stored.
4. Identify existing duplicate content.
5. Understand the current relationships.
6. Determine the smallest safe architectural change.
7. Reuse the existing technology and patterns where possible.

Then:

1. Design the shared entity relationships.
2. Refactor/migrate existing duplicated content.
3. Add roadmap-to-content mappings.
4. Update data fetching to resolve shared content.
5. Keep the existing UI unchanged.
6. Verify every existing roadmap still renders correctly.
7. Verify shared topics open the correct existing notes.
8. Verify projects can be reused.
9. Verify there are no unnecessary duplicate records.
10. Test the complete flow.

### Important

**Do not rebuild the application from scratch.**

**Do not redesign the UI.**

**Do not replace working components unnecessarily.**

Work with the existing codebase and make the minimum architectural changes required to implement a clean, reusable, maintainable content system.

---

# Final Principle

```text
CONTENT IS GLOBAL.
ROADMAPS ARE REFERENCES.
UI STAYS THE SAME.
```

One SQL.

One Python.

One Excel.

One JOIN topic.

One JOIN note.

One project.

Many roadmaps can reference them.
