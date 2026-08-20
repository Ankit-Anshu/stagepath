// data_analyst_roadmap_curriculum.md — Section 03.1 "Database
// Fundamentals". Entirely new chapter — the existing SQL stage jumped
// straight into query syntax (sql-select etc.) without ever covering what
// a database/table/key actually is. All 13 topics here are new.
import { createSkill } from './_create.mjs';

createSkill('what-is-a-database', {
  title: 'What is a Database?',
  category: 'SQL',
  what_is_it: 'An organized collection of data stored electronically so it can be reliably added to, updated, and retrieved — the thing SQL queries actually run against.',
  why_it_matters: 'Every SQL query assumes a database underneath it — understanding what one actually is (and isn\'t) makes every later SQL topic click faster.',
  prerequisites: ['what-is-data'],
  objectives: [
    'Define a database in plain language',
    'Explain why a database is more reliable than a plain spreadsheet or file for large, shared data',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-what-is-a-database-1', title: 'Name your databases', description: 'List three apps or systems you use daily that are almost certainly backed by a database (banking app, social media, online store).' },
  ],
  verify: ['Can define a database in one sentence', 'Can explain one advantage a database has over a spreadsheet for large data'],
  note: `
## 🎯 What is it?

A **database** is an organized collection of data stored electronically so it can be reliably added to, updated, searched, and retrieved — typically by many people or programs at once. When you check a bank balance, search a store's product catalog, or log into a website, a database is almost always what's actually being queried behind the scenes.

## 💡 Why is it important?

- Every SQL query in this stage runs against a database — understanding what one actually is makes the syntax that follows much less abstract.
- Databases solve problems a plain spreadsheet or file can't: many people reading/writing at once safely, enforcing rules about what data is allowed, and staying fast even at millions of rows.

## Core concept

| | Spreadsheet/file | Database |
|---|---|---|
| Concurrent users | Struggles past a handful | Designed for many at once |
| Data integrity rules | Manual, easy to break | Enforced automatically (see Constraints) |
| Scale | Slows down at large sizes | Built for millions+ rows |
| Querying | Manual filtering/formulas | A dedicated query language (SQL) |

## 📊 Example

An online store's database holds its \`products\`, \`customers\`, and \`orders\` — thousands of people can browse products and place orders at the same second, and the database keeps every change consistent (e.g., it won't let two people simultaneously buy the last unit of stock without one of them being correctly rejected).

## ⚠️ Common mistakes

- **Assuming "database" means one specific software product.** It's a general concept — MySQL, PostgreSQL, SQL Server, and many others are all *database management systems* that implement it (see DBMS).
- **Confusing a database with a spreadsheet.** A spreadsheet can hold data too, but lacks the reliability, scale, and multi-user safety a real database provides.

## Related concepts

\`\`\`
What is a Database ← you are here
  ↓
Relational Database
  ↓
DBMS / RDBMS
\`\`\`

## 🎤 Interview preparation

**Q: Why would a company use a database instead of just storing everything in spreadsheets?**
Short answer: A database supports many concurrent users safely, enforces data integrity rules automatically, and stays performant at a scale (millions of rows) where spreadsheets become slow and error-prone.

---

### ⚡ Quick Revision

**Database** → an organized, reliable collection of data, built for many concurrent readers/writers at scale
Every SQL query in this roadmap runs against one.
`,
});

createSkill('relational-database', {
  title: 'Relational Database',
  category: 'SQL',
  what_is_it: 'A database that organizes data into tables of rows and columns, linked together by shared key values — the dominant style of database SQL was built for.',
  why_it_matters: 'SQL (Structured Query Language) was designed specifically for relational databases — understanding "relational" is what makes joins and keys make sense later.',
  prerequisites: ['what-is-a-database'],
  objectives: [
    'Define a relational database and explain what "relational" refers to',
    'Give an example of two related tables',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-relational-database-1', title: 'Sketch two related tables', description: 'Sketch a simple customers table and an orders table, and show which column links them.' },
  ],
  verify: ['Can define a relational database', 'Can identify the linking column between two example tables'],
  note: `
## 🎯 What is it?

A **relational database** organizes data into **tables** (rows and columns), where tables are linked — "related" — to each other through shared key values, rather than storing everything in one giant flat file. A \`customers\` table and an \`orders\` table are related through a shared \`customer_id\` column.

## 💡 Why is it important?

- SQL (Structured Query Language) was built specifically for relational databases — this is *why* SQL has joins, keys, and a table-based structure at all.
- Splitting data into related tables avoids storing the same information redundantly (a customer's name doesn't need to be repeated on every one of their orders).

## Core concept

\`\`\`
customers                    orders
+----+-------+       +----+-------------+--------+
| id | name  |        | id | customer_id | amount |
+----+-------+       +----+-------------+--------+
| 1  | Amir  |  ←───  | 101|      1      | 59.00  |
| 2  | Priya |  ←───  | 102|      2      | 120.00 |
+----+-------+        +----+-------------+--------+
\`\`\`

\`customer_id\` in \`orders\` "relates" back to \`id\` in \`customers\` — this is the relationship that lets you join the two tables together in a query.

## 📊 Example

Instead of repeating "Amir, amir@email.com, New York" on every single one of Amir's 50 orders, a relational database stores it once in \`customers\`, and each row in \`orders\` just references \`customer_id = 1\` — smaller, more consistent, and update-safe (change Amir's email once, every order automatically reflects it via the relationship).

## ⚠️ Common mistakes

- **Storing everything in one giant flat table** to avoid learning joins — this reintroduces the redundancy and inconsistency relational databases are specifically designed to prevent.
- **Assuming "relational" refers to a relationship in the everyday sense.** It specifically means tables linked by shared key columns.

## Related concepts

\`\`\`
What is a Database
  ↓
Relational Database ← you are here
  ↓
Tables → Primary Key → Foreign Key → Relationships
\`\`\`

## 🎤 Interview preparation

**Q: Why store customer info in a separate table instead of repeating it on every order row?**
Short answer: To avoid redundancy and keep data consistent — storing it once in a \`customers\` table and referencing it by \`customer_id\` means an update (like a changed email) only needs to happen in one place.

---

### ⚡ Quick Revision

**Relational database** → data split across linked tables, connected by shared key columns
This structure is exactly what SQL's joins and keys are built around.
`,
});

createSkill('what-is-dbms', {
  title: 'DBMS',
  category: 'SQL',
  what_is_it: 'Database Management System — the software that actually stores, organizes, secures, and lets you query a database (e.g., PostgreSQL, MySQL, SQL Server).',
  why_it_matters: 'Job postings and tools reference specific DBMS products by name — knowing the term clarifies that "PostgreSQL" and "a database" aren\'t quite the same thing.',
  prerequisites: ['relational-database'],
  objectives: [
    'Define DBMS and name two examples',
    'Explain the difference between "a database" and "a DBMS"',
  ],
  estimated_minutes: 15,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-dbms-1', title: 'Name a DBMS', description: 'Look up which DBMS product a tool or app you use is built on (many open-source projects document this).' },
  ],
  verify: ['Can define DBMS', 'Can name two real DBMS products'],
  note: `
## 🎯 What is it?

A **DBMS (Database Management System)** is the actual software that stores, organizes, secures, and lets you query a database — PostgreSQL, MySQL, Microsoft SQL Server, and Oracle Database are all DBMS products. "The database" usually refers to the *data itself*; "the DBMS" refers to the *software managing it*.

## 💡 Why is it important?

- Job postings and tools name specific DBMS products ("3+ years with PostgreSQL") — knowing the term makes those postings and setup docs make sense.
- Nearly all SQL syntax an analyst learns is close to universal across DBMS products, with small differences (see RDBMS) — knowing this distinction sets the right expectation.

## Core concept

| DBMS | Common use |
|---|---|
| PostgreSQL | Popular open-source, widely used in analytics |
| MySQL | Popular open-source, common in web applications |
| Microsoft SQL Server | Common in enterprise/Windows environments |
| Oracle Database | Common in large, established enterprises |
| SQLite | Lightweight, embedded (no separate server) |

## 📊 Example

A company's "database" holds its customer and order data; PostgreSQL is the DBMS actually running on a server, managing that data, handling queries, and enforcing rules — the data and the software managing it are two different things people casually refer to with the same word.

## ⚠️ Common mistakes

- **Using "database" and "DBMS" interchangeably in a way that confuses which one you mean** — usually harmless in casual conversation, but worth knowing the precise distinction for interviews.
- **Assuming all DBMS products have wildly different SQL** — the core SQL taught in this roadmap (SELECT, WHERE, JOIN, GROUP BY) works almost identically across all of them.

## Related concepts

\`\`\`
Relational Database
  ↓
DBMS ← you are here
  ↓
RDBMS (a DBMS specifically for relational databases)
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between a database and a DBMS?**
Short answer: The database is the actual organized data; the DBMS (like PostgreSQL or MySQL) is the software that stores, secures, and lets you query that data.

---

### ⚡ Quick Revision

**DBMS** → the software managing a database — PostgreSQL, MySQL, SQL Server, Oracle
Core SQL syntax is nearly universal across DBMS products.
`,
});

createSkill('what-is-rdbms', {
  title: 'RDBMS',
  category: 'SQL',
  what_is_it: 'Relational Database Management System — a DBMS built specifically to manage relational (table-based) databases, which is what SQL is designed for.',
  why_it_matters: 'It\'s the precise term for the category of tool this entire SQL stage is about — almost every DBMS an analyst will touch day to day is an RDBMS.',
  prerequisites: ['what-is-dbms'],
  objectives: [
    'Define RDBMS and explain how it relates to DBMS',
    'Name two RDBMS products',
  ],
  estimated_minutes: 15,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-rdbms-1', title: 'RDBMS vs. NoSQL', description: 'Look up one NoSQL database (MongoDB, for example) and note one way its data model differs from an RDBMS\'s tables.' },
  ],
  verify: ['Can define RDBMS', 'Can explain the relationship between DBMS and RDBMS'],
  note: `
## 🎯 What is it?

An **RDBMS (Relational Database Management System)** is a DBMS built specifically to manage *relational* (table-based) databases — enforcing keys, relationships, and constraints. PostgreSQL, MySQL, and SQL Server are all RDBMSs. It's a more specific term than DBMS: every RDBMS is a DBMS, but not every DBMS is an RDBMS (some, called NoSQL databases, manage non-relational data instead).

## 💡 Why is it important?

- It's the precise term for exactly what this SQL stage is about — nearly every tool an entry-level data analyst touches (PostgreSQL, MySQL, SQL Server, Snowflake, BigQuery) is an RDBMS.
- Distinguishing RDBMS from NoSQL databases (which store semi-structured/unstructured data — see Semi-Structured Data) helps place SQL in the wider data landscape.

## Core concept

| | RDBMS | NoSQL database |
|---|---|---|
| Data model | Tables, rows, columns | Documents, key-value, graphs |
| Structure | Fixed schema | Flexible/no fixed schema |
| Query language | SQL | Varies (e.g. MongoDB's query syntax) |
| Example | PostgreSQL, MySQL | MongoDB, DynamoDB |

## 📊 Example

An e-commerce company might use an RDBMS (PostgreSQL) for its core order and customer data — where structure and consistency matter — and a NoSQL database (like MongoDB) for something like flexible product catalog attributes that vary a lot between product types.

## ⚠️ Common mistakes

- **Assuming RDBMS and DBMS are interchangeable terms.** RDBMS is a specific type of DBMS — the one built for relational, table-based data.
- **Assuming every modern data tool is an RDBMS.** Many important tools (MongoDB, Redis, Cassandra) are NoSQL, not RDBMS — though RDBMSs remain dominant for the kind of structured business data an analyst works with most.

## Related concepts

\`\`\`
DBMS
  ↓
RDBMS ← you are here (a DBMS for relational/table data)
  ↓
Tables
\`\`\`

## 🎤 Interview preparation

**Q: Is MongoDB an RDBMS?**
Short answer: No — MongoDB is a NoSQL, document-based database. It's a DBMS, but not a *relational* one, since it doesn't organize data into fixed-schema tables linked by keys the way PostgreSQL or MySQL do.

---

### ⚡ Quick Revision

**RDBMS** → a DBMS specifically for relational (table-based) data — PostgreSQL, MySQL, SQL Server
Every RDBMS is a DBMS; not every DBMS is an RDBMS (see NoSQL).
`,
});

createSkill('database-tables', {
  title: 'Tables',
  category: 'SQL',
  what_is_it: 'The core structure a relational database stores data in — a grid of rows and columns, similar to a spreadsheet, where every row follows the same set of columns.',
  why_it_matters: 'Every SQL query reads from or writes to one or more tables — understanding what a table actually is is the ground floor for everything else in SQL.',
  prerequisites: ['what-is-rdbms'],
  objectives: [
    'Define a database table',
    'Explain the relationship between a table, a row, and a column',
  ],
  estimated_minutes: 15,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-database-tables-1', title: 'Design a table', description: 'Sketch out the columns you\'d expect in a products table for an online store.' },
  ],
  verify: ['Can define a table', 'Can name the columns a simple products table might have'],
  note: `
## 🎯 What is it?

A **table** is the core structure a relational database stores data in — a grid of **rows** and **columns**, much like a spreadsheet, where every row shares the same set of columns. A \`customers\` table might have columns \`id\`, \`name\`, \`email\`, and \`signup_date\`, with one row per customer.

## 💡 Why is it important?

- Every SQL query — \`SELECT\`, \`WHERE\`, \`JOIN\` — operates on tables. It's the foundational unit everything else in SQL builds on.
- A well-designed table (with the right columns and a clear grain — see Understand the Data) is what makes later querying straightforward instead of confusing.

## Core concept

\`\`\`
customers
+----+--------+------------------+-------------+
| id | name   | email            | signup_date |
+----+--------+------------------+-------------+
| 1  | Amir   | amir@email.com   | 2024-01-15  |
| 2  | Priya  | priya@email.com  | 2024-02-03  |
+----+--------+------------------+-------------+
\`\`\`

Each **row** = one customer. Each **column** = one attribute, shared by every row.

## 📊 Example

A database for an online store typically has separate tables for \`customers\`, \`products\`, and \`orders\` — each holding a different kind of "thing," linked together (see Relationships) rather than crammed into one giant table.

## ⚠️ Common mistakes

- **Assuming a table can only ever look like a spreadsheet tab you manually built.** Database tables are usually designed deliberately, with specific data types and constraints enforced on each column (see Constraints).
- **Not checking what one row in an unfamiliar table actually represents** before querying it — see the earlier Understand the Data topic on checking a table's "grain."

## Related concepts

\`\`\`
RDBMS
  ↓
Tables ← you are here
  ↓
Rows → Columns → Primary Key → Foreign Key
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between a table and a spreadsheet?**
Short answer: They look similar, but a database table enforces data types and rules (constraints) on every row automatically, supports many concurrent users safely, and is designed to relate to other tables via keys — a spreadsheet does none of this by default.

---

### ⚡ Quick Revision

**Table** → the core structure holding data: rows (records) × columns (attributes)
Every SQL query ultimately reads from or writes to tables.
`,
});

createSkill('database-rows', {
  title: 'Rows',
  category: 'SQL',
  what_is_it: 'A single record in a database table — one complete entry, with a value for every column, representing one "thing" (one customer, one order, one product).',
  why_it_matters: 'Knowing exactly what one row represents (a table\'s "grain") is required before writing any query that counts, sums, or joins that table correctly.',
  prerequisites: ['database-tables'],
  objectives: [
    'Define a row and explain what "the grain" of a table means',
    'Identify the row-level meaning of a simple example table',
  ],
  estimated_minutes: 15,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-database-rows-1', title: 'Identify the grain', description: 'Given an orders table with an order_id and a product_id on every row, determine whether one row is "one order" or "one item within an order."' },
  ],
  verify: ['Can define a row', 'Can explain what checking "the grain" means and why it matters'],
  note: `
## 🎯 What is it?

A **row** is a single record in a table — one complete entry with a value in every column, representing one instance of whatever the table tracks: one customer, one order, one product. What exactly one row represents is called the table's **grain**.

## 💡 Why is it important?

- Getting the grain wrong is one of the most common real SQL mistakes — summing a column assuming "one row = one order" when it's actually "one row = one item within an order" silently produces an inflated total.
- Every \`COUNT(*)\`, \`SUM()\`, and \`JOIN\` implicitly depends on correctly understanding what a row means.

## Core concept

\`\`\`sql
SELECT COUNT(*) FROM orders;
\`\`\`

This only correctly counts "number of orders" if one row in \`orders\` truly represents one order. If the table is actually at the order-*item* grain (multiple rows per order, one per product purchased), this query overcounts.

## 📊 Example

An \`order_items\` table with columns \`order_id\`, \`product_id\`, \`quantity\` has one row **per item within an order** — a single $50 order with 3 different products produces 3 rows, all sharing the same \`order_id\`. Counting rows here answers "how many items were ordered," not "how many orders were placed" — those require different queries.

## ⚠️ Common mistakes

- **Assuming a table's name reveals its grain.** Always verify by checking whether a key column (like \`order_id\`) repeats across multiple rows.
- **Double-counting after a join** — joining two tables can multiply rows if the relationship isn't one-to-one, changing what "one row" means in the joined result.

## Related concepts

\`\`\`
Tables
  ↓
Rows ← you are here
  ↓
Columns → Primary Key
\`\`\`
Directly connects to the earlier Understand the Data topic's concept of "the grain."

## 🎤 Interview preparation

**Q: You run \`SELECT COUNT(*) FROM orders\` and get 500 — does that mean 500 orders were placed?**
Short answer: Only if you've confirmed the table's grain is one row per order. If it's actually one row per item within an order, 500 rows could represent far fewer than 500 distinct orders — always verify the grain first, e.g. by checking \`COUNT(DISTINCT order_id)\`.

---

### ⚡ Quick Revision

**Row** → one record in a table, representing one instance of the thing the table tracks
**Grain** → what exactly one row represents — always verify it before counting or summing.
`,
});

createSkill('database-columns', {
  title: 'Columns',
  category: 'SQL',
  what_is_it: 'A single attribute tracked for every row in a table — each with its own name and data type, shared consistently across all rows.',
  why_it_matters: 'Columns are what you select, filter, and aggregate on in every SQL query — and their data type determines what operations are valid.',
  prerequisites: ['database-rows'],
  objectives: [
    'Define a column and explain its relationship to data type',
    'Name the columns you\'d expect in a simple example table',
  ],
  estimated_minutes: 15,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-database-columns-1', title: 'Assign data types', description: 'For a customers table, list its likely columns and assign each a sensible data type (text, integer, date, etc.).' },
  ],
  verify: ['Can define a column', 'Can assign a sensible data type to a few example columns'],
  note: `
## 🎯 What is it?

A **column** is a single attribute tracked for every row in a table — \`name\`, \`email\`, \`signup_date\` are each columns in a \`customers\` table. Every column has a name and a **data type** (text, integer, date, etc.) that every row's value in that column must match.

## 💡 Why is it important?

- Columns are exactly what you name in a \`SELECT\`, filter in a \`WHERE\`, and aggregate in a \`GROUP BY\` — nearly every SQL clause references columns directly.
- A column's data type determines what's valid: you can \`SUM()\` a numeric column, but not a text column; you can compare a date column with \`>\`, but that comparison means something different for a text column.

## Core concept

| Column | Data type | Valid operations |
|---|---|---|
| \`name\` | Text | Filter (\`WHERE name = ...\`), pattern match (\`LIKE\`) |
| \`amount\` | Numeric | Sum, average, compare with \`>\`/\`<\` |
| \`signup_date\` | Date | Compare, extract year/month, calculate differences |
| \`is_active\` | Boolean | Filter as true/false |

## 📊 Example

Attempting \`SUM(customer_name)\` fails or produces nonsense — \`customer_name\` is a text column, and summing text isn't a valid operation. \`SUM(order_amount)\` works because \`order_amount\` is numeric — matching the operation to the column's data type is a basic but essential check.

## ⚠️ Common mistakes

- **Trying to perform a numeric operation on a text or date column** without converting it first (see Conversion Functions later in this stage).
- **Assuming a column's name accurately describes its data type or contents** — always check with a quick \`SELECT\` or a schema lookup before assuming.

## Related concepts

\`\`\`
Rows
  ↓
Columns ← you are here
  ↓
Primary Key → Foreign Key
\`\`\`

## 🎤 Interview preparation

**Q: Why would \`SUM(customer_name)\` fail or produce a meaningless result?**
Short answer: \`customer_name\` is a text column — \`SUM\` is a numeric aggregation and isn't valid on text data. Checking a column's data type before aggregating it is a basic sanity check.

---

### ⚡ Quick Revision

**Column** → a named attribute with a data type, shared across every row in a table
Match your SQL operation (SUM, comparison, pattern match) to the column's actual data type.
`,
});

createSkill('primary-key', {
  title: 'Primary Key',
  category: 'SQL',
  what_is_it: 'A column (or set of columns) that uniquely identifies each row in a table — no two rows can share the same primary key value, and it can never be empty.',
  why_it_matters: 'It\'s what guarantees every row is uniquely identifiable — the foundation that foreign keys and joins are built on.',
  prerequisites: ['database-columns'],
  objectives: [
    'Define a primary key and explain its two core rules',
    'Identify a plausible primary key column in an example table',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-primary-key-1', title: 'Find the primary key', description: 'For a products table with columns id, name, price, and category, identify which column is the most likely primary key, and why.' },
  ],
  verify: ['Can define a primary key', 'Can explain why a primary key can\'t be null or duplicated'],
  note: `
## 🎯 What is it?

A **primary key** is a column (or combination of columns) that uniquely identifies every row in a table. Two rules define it: every value must be **unique** (no two rows share one), and it can **never be null** (every row must have one). A \`customers\` table's \`id\` column is a typical primary key.

## 💡 Why is it important?

- It guarantees every row can be unambiguously referenced — critical for updates, deletes, and especially joins.
- It's the anchor a **foreign key** in another table points back to, which is what makes relationships between tables work at all.

## Core concept

| Rule | Why |
|---|---|
| Unique | No two rows can be confused with each other |
| Not null | Every row must be identifiable — an unidentifiable row breaks the model |

Primary keys are often a simple auto-incrementing integer (\`id: 1, 2, 3, ...\`), but can also be a naturally unique value (like an email address) or a combination of columns (a **composite key**).

## 📊 Example

\`\`\`sql
customers
+----+--------+
| id | name   |   ← id is the primary key: unique, never null
+----+--------+
| 1  | Amir   |
| 2  | Priya  |
+----+--------+
\`\`\`

If two customers both had \`id = 1\`, or a row had a missing \`id\`, the database wouldn't be able to reliably tell rows apart — which is exactly what the primary key rule prevents.

## ⚠️ Common mistakes

- **Choosing a column that isn't guaranteed unique** as if it were a primary key (like a name) — two customers can easily share a name, but never a properly enforced primary key.
- **Assuming a primary key must be a single column.** A composite primary key (two or more columns together being unique) is common, e.g. an \`order_items\` table keyed on \`(order_id, product_id)\` together.

## Related concepts

\`\`\`
Columns
  ↓
Primary Key ← you are here
  ↓
Foreign Key → Relationships
\`\`\`

## 🎤 Interview preparation

**Q: Why can't a customer's name be used as a primary key?**
Short answer: A primary key must be unique for every row, and names aren't guaranteed unique — two different customers could easily share the same name, which would violate the primary key's uniqueness rule.

---

### ⚡ Quick Revision

**Primary key** → uniquely identifies every row: must be unique, must never be null
Foreign keys in other tables point back to it — the anchor relationships are built on.
`,
});

createSkill('foreign-key', {
  title: 'Foreign Key',
  category: 'SQL',
  what_is_it: 'A column in one table that references a primary key in another table — this is the actual mechanism that creates a relationship between two tables.',
  why_it_matters: 'Foreign keys are what a JOIN is built on — understanding them makes every join query intuitive instead of memorized syntax.',
  prerequisites: ['primary-key'],
  objectives: [
    'Define a foreign key and explain what it references',
    'Identify the foreign key in a simple two-table example',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-foreign-key-1', title: 'Find the foreign key', description: 'In an orders table with a customer_id column, explain what customer_id references and why it\'s a foreign key.' },
  ],
  verify: ['Can define a foreign key', 'Can identify a foreign key/primary key pair across two tables'],
  note: `
## 🎯 What is it?

A **foreign key** is a column in one table that references a **primary key** in another table, creating a link between them. In an \`orders\` table, a \`customer_id\` column that points back to \`customers.id\` is a foreign key — it's how a database knows which customer placed which order.

## 💡 Why is it important?

- It's the actual mechanism that makes a "relational" database relational — without foreign keys, tables would just be isolated, unconnected grids of data.
- It's exactly what a SQL \`JOIN\` uses to combine tables — understanding foreign keys makes join syntax feel logical instead of arbitrary.

## Core concept

\`\`\`
customers (primary key: id)          orders (foreign key: customer_id)
+----+-------+                       +-----+-------------+--------+
| id | name  |                       | id  | customer_id | amount |
+----+-------+                       +-----+-------------+--------+
| 1  | Amir  |  ←──────────────────  | 101 |      1      | 59.00  |
| 2  | Priya |  ←──────────────────  | 102 |      2      | 120.00 |
+----+-------+                       +-----+-------------+--------+
\`\`\`

\`orders.customer_id\` is a foreign key referencing \`customers.id\` — this relationship is exactly what a later \`JOIN\` query uses to combine order and customer data.

## 📊 Example

\`\`\`sql
SELECT orders.id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;
\`\`\`

This join works specifically because \`customer_id\` (foreign key) matches values in \`customers.id\` (primary key) — the foreign key relationship is what makes this query meaningful rather than arbitrary.

## ⚠️ Common mistakes

- **Assuming a foreign key must have the exact same column name as the primary key it references.** It commonly does (\`customer_id\` → \`id\`), but isn't required to.
- **Not checking for "orphaned" foreign key values** — a \`customer_id\` in \`orders\` that doesn't match any row in \`customers\` (e.g., a deleted customer) can silently drop rows from an inner join — see Duplicate Rows from Joins and Join Conditions later in this stage.

## Related concepts

\`\`\`
Primary Key
  ↓
Foreign Key ← you are here
  ↓
Relationships → Constraints
\`\`\`
Directly sets up the Joins chapter later in this stage.

## 🎤 Interview preparation

**Q: What does a foreign key actually do?**
Short answer: It's a column in one table whose values reference a primary key in another table — creating a relationship between the two tables that a JOIN query uses to combine matching rows.

---

### ⚡ Quick Revision

**Foreign key** → a column referencing another table's primary key
This is the exact mechanism a SQL JOIN relies on to combine tables.
`,
});

createSkill('database-relationships', {
  title: 'Relationships',
  category: 'SQL',
  what_is_it: 'The way tables connect to each other via primary and foreign keys — categorized as one-to-one, one-to-many, or many-to-many depending on how many rows on each side can match.',
  why_it_matters: 'Knowing a relationship\'s type in advance tells you whether a join is likely to multiply rows unexpectedly — a common source of inflated totals.',
  prerequisites: ['foreign-key'],
  objectives: [
    'Define the three types of table relationships',
    'Identify the relationship type between two example tables',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-relationships-1', title: 'Classify a relationship', description: 'For customers and orders (one customer can have many orders), identify the relationship type and explain why.' },
  ],
  verify: ['Can define one-to-many, one-to-one, and many-to-many', 'Can classify the relationship in a simple example'],
  note: `
## 🎯 What is it?

A **relationship** describes how two tables connect via primary/foreign keys, and how many rows on each side can match:

- **One-to-one** — one row in Table A matches exactly one row in Table B (e.g., one \`user\` and one \`user_profile\`).
- **One-to-many** — one row in Table A can match many rows in Table B (e.g., one \`customer\` can have many \`orders\`).
- **Many-to-many** — many rows in Table A can match many rows in Table B, usually via a third "junction" table (e.g., many \`students\` enroll in many \`courses\`, linked through an \`enrollments\` table).

## 💡 Why is it important?

- Knowing a relationship's type before joining tells you whether the join is likely to multiply rows — joining a one-to-many relationship the wrong direction, or a many-to-many without care, silently inflates row counts and totals.
- It's a common interview and design topic — being able to say "this is one-to-many" precisely, and why, signals real understanding of the data model.

## Core concept

| Relationship | Example | Risk if mishandled |
|---|---|---|
| One-to-one | \`user\` ↔ \`user_profile\` | Low — rare to accidentally multiply |
| One-to-many | \`customer\` → \`orders\` | Joining \`orders\` to \`customers\` is safe; joining the other way multiplies each customer row by their order count |
| Many-to-many | \`students\` ↔ \`courses\` | Requires a junction table; a naive direct join can multiply rows dramatically |

## 📊 Example

One customer can place many orders (one-to-many). Joining \`customers\` to \`orders\` produces one row *per order*, not per customer — if you then \`COUNT(*)\` on the joined result expecting "number of customers," you'll actually get "number of orders," which is usually a bigger, wrong number.

## ⚠️ Common mistakes

- **Not checking the relationship type before joining and aggregating** — this is one of the most common causes of a mysteriously inflated total in a report.
- **Treating a many-to-many relationship as one-to-many** by skipping the junction table, which can produce a cross-product-like row explosion.

## Related concepts

\`\`\`
Foreign Key
  ↓
Relationships ← you are here
  ↓
Constraints
\`\`\`
Directly sets up Duplicate Rows from Joins later in this stage's Joins chapter.

## 🎤 Interview preparation

**Q: You join customers to orders and get more rows than there are customers. Why?**
Short answer: The relationship is one-to-many (one customer can have many orders) — joining produces one row per order, not per customer, so the row count reflects orders, not customers. This is expected, not a bug, but needs to be accounted for in any aggregation afterward.

---

### ⚡ Quick Revision

**Relationships** → one-to-one, one-to-many, many-to-many
Know the type before joining — it predicts whether row counts will multiply.
`,
});

createSkill('database-constraints', {
  title: 'Constraints',
  category: 'SQL',
  what_is_it: 'Rules enforced by the database itself on a column or table — like "must be unique" or "can\'t be empty" — that keep bad data from ever being stored in the first place.',
  why_it_matters: 'Constraints are the database\'s own line of defense against bad data — an analyst who understands them can reason about what data is (and isn\'t) possible in a table before even querying it.',
  prerequisites: ['database-relationships'],
  objectives: [
    'Name common types of database constraints',
    'Explain what a constraint prevents from happening',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-constraints-1', title: 'Match constraints to columns', description: 'For an orders table, decide which constraint(s) — NOT NULL, UNIQUE, primary key, foreign key — would make sense for each column.' },
  ],
  verify: ['Can name three types of constraints', 'Can explain what NOT NULL and UNIQUE each prevent'],
  note: `
## 🎯 What is it?

A **constraint** is a rule the database itself enforces on a column or table — rejecting any insert or update that would violate it. Common constraints: **NOT NULL** (a column can never be empty), **UNIQUE** (no two rows can share a value), **PRIMARY KEY** (unique + not null, identifying each row), **FOREIGN KEY** (a value must exist in the referenced table), and **CHECK** (a custom rule, like "amount must be positive").

## 💡 Why is it important?

- Constraints are the database's own defense against bad data — they prevent invalid data from ever being stored, rather than relying on every application or analyst to always get it right.
- Understanding them helps an analyst reason about what's actually *possible* in a table before writing a query — e.g., a NOT NULL column never needs a null-check in a \`WHERE\` clause.

## Core concept

| Constraint | Rule enforced |
|---|---|
| NOT NULL | Column can never be empty |
| UNIQUE | No two rows can share this value |
| PRIMARY KEY | Unique + not null; identifies each row |
| FOREIGN KEY | Value must exist in the referenced table |
| CHECK | A custom condition (e.g., \`amount > 0\`) |

## 📊 Example

An \`orders.amount\` column with a \`CHECK (amount > 0)\` constraint means the database will reject any attempt to insert a negative or zero order amount — bad data is stopped at the source, rather than an analyst having to catch it later during cleaning.

## ⚠️ Common mistakes

- **Assuming a column is always populated just because it "should" be**, without checking whether a NOT NULL constraint actually enforces that.
- **Confusing an application-level validation rule with a database constraint.** An app might validate input before saving, but only a real database constraint guarantees the rule holds no matter what inserted the data (including a bug, a script, or a different application).

## Related concepts

\`\`\`
Relationships
  ↓
Constraints ← you are here
  ↓
NULL → Database Schemas
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between an application checking input and a database constraint?**
Short answer: An application-level check only applies if that specific application is the one inserting the data; a database constraint is enforced by the database itself for *any* insert, from any source — a much stronger guarantee.

---

### ⚡ Quick Revision

**Constraints** → rules the database enforces automatically: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK
They stop bad data from being stored in the first place.
`,
});

createSkill('sql-null', {
  title: 'NULL',
  category: 'SQL',
  what_is_it: 'A special marker in SQL representing "no value" or "unknown" — distinct from zero, an empty string, or any actual value.',
  why_it_matters: 'NULL behaves differently from every other value in comparisons and calculations — misunderstanding it is one of the most common sources of subtly wrong SQL queries.',
  prerequisites: ['database-constraints'],
  objectives: [
    'Define NULL and explain how it differs from zero or an empty string',
    'Explain why standard comparisons don\'t work with NULL',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-sql-null-1', title: 'Spot the NULL trap', description: 'Explain why `WHERE column = NULL` doesn\'t work the way a beginner might expect, and what to use instead.' },
  ],
  verify: ['Can define NULL', 'Can explain why NULL requires special comparison syntax'],
  note: `
## 🎯 What is it?

**NULL** is a special marker in SQL meaning "no value" or "unknown" — it is *not* the same as zero, an empty string \`''\`, or any actual value. A customer's \`middle_name\` column might be NULL because they simply don't have one, not because it's blank text.

## 💡 Why is it important?

- NULL behaves differently from every other value: standard comparisons (\`=\`, \`!=\`) don't work with it, which trips up nearly every SQL beginner at least once.
- Handling NULL correctly is essential for accurate counts, joins, and filters — mishandled NULLs are a common source of subtly wrong query results (see \`IS NULL\` / \`IS NOT NULL\` later in this stage's Filtering chapter).

## Core concept

\`\`\`sql
WHERE middle_name = NULL     -- ❌ never matches, even for NULL rows
WHERE middle_name IS NULL    -- ✅ correctly matches NULL rows
\`\`\`

NULL represents "unknown," so \`NULL = NULL\` doesn't evaluate to true — it evaluates to *unknown*, which SQL treats as not matching. This is why \`IS NULL\` / \`IS NOT NULL\` exist as their own special syntax.

## 📊 Example

A \`phone_number\` column is NULL for customers who never provided one — different from an empty string \`''\` (which would mean they were asked and explicitly submitted nothing) or \`0\` (which isn't a valid phone number at all). Treating all three the same in an analysis can quietly misrepresent how many customers are actually missing a phone number.

## ⚠️ Common mistakes

- **Writing \`WHERE column = NULL\`** expecting it to match NULL rows — it never does; \`IS NULL\` is required.
- **Confusing NULL, empty string, and zero** as if they always mean the same thing — they represent three different situations and should usually be handled differently in cleaning and analysis.
- **Forgetting NULLs are excluded by default from most aggregations** — \`AVG()\` and \`SUM()\` skip NULLs automatically, which can be correct or misleading depending on what the NULL actually represents.

## Related concepts

\`\`\`
Constraints
  ↓
NULL ← you are here
  ↓
Database Schemas
\`\`\`
Sets up IS NULL / IS NOT NULL and NULL Functions (COALESCE, NULLIF) later in this stage.

## 🎤 Interview preparation

**Q: Why doesn't \`WHERE middle_name = NULL\` return rows where middle_name is NULL?**
Short answer: NULL represents "unknown," so any comparison against it (including \`= NULL\`) evaluates to unknown rather than true — SQL requires the special \`IS NULL\` syntax specifically to test for NULL correctly.

---

### ⚡ Quick Revision

**NULL** → "no value" / "unknown" — not the same as zero or an empty string
Always test with \`IS NULL\` / \`IS NOT NULL\`, never \`= NULL\`.
`,
});

createSkill('database-schemas', {
  title: 'Database Schemas',
  category: 'SQL',
  what_is_it: "A schema is the overall blueprint of a database — which tables exist, their columns, data types, and how they relate to each other.",
  why_it_matters: "Reading a schema (or a diagram of one) before writing any query is what turns an unfamiliar database from a guessing game into something navigable.",
  prerequisites: ['sql-null'],
  objectives: [
    'Define a database schema',
    'Explain why reviewing a schema before querying saves time',
  ],
  estimated_minutes: 20,
  resources: ['r-postgres-tutorial'],
  practice: [
    { id: 'ex-database-schemas-1', title: 'Sketch a schema', description: 'Sketch a simple schema (tables, key columns, relationships) for a small blog: users, posts, comments.' },
  ],
  verify: ['Can define a database schema', 'Can sketch a simple 2-3 table schema for a familiar scenario'],
  note: `
## 🎯 What is it?

A **database schema** is the overall blueprint of a database — every table, its columns and data types, its keys, and how it relates to other tables. Where a single table shows one grid, a schema shows the whole structure at once, often as a diagram (an ER diagram — covered later in Data Modeling).

## 💡 Why is it important?

- Reviewing a schema before writing a query turns an unfamiliar database from a guessing game into something navigable — you can see what tables exist and how they connect before running a single \`SELECT\`.
- Most real analyst work starts with an unfamiliar schema, not a table you already know well — this is a genuinely practical, frequently-used skill.

## Core concept

\`\`\`
Schema: ecommerce
├── customers (id, name, email, signup_date)
├── products  (id, name, price, category)
├── orders    (id, customer_id → customers.id, order_date)
└── order_items (order_id → orders.id, product_id → products.id, quantity)
\`\`\`

A schema shows every table and every relationship at once — the arrows are foreign keys pointing to primary keys.

## 📊 Example

Given a new, unfamiliar database, an analyst's first move is usually to pull up its schema (a diagram, or a query against the database's own metadata tables) to see what tables exist and how they connect — before attempting to answer any real business question with it.

## ⚠️ Common mistakes

- **Diving straight into writing queries against an unfamiliar database** without first reviewing its schema — this often leads to wrong joins or misunderstood table grains.
- **Assuming a schema never changes.** Real schemas evolve — a column or table that existed last month may have moved or been renamed; worth a quick sanity check on an important, recurring query.

## Related concepts

\`\`\`
NULL
  ↓
Database Schemas ← you are here
\`\`\`
This closes the Database Fundamentals chapter. Builds directly toward SQL Fundamentals (next chapter) and ER Diagrams (Data Modeling stage, later in this roadmap).

## 🎤 Interview preparation

**Q: You're handed access to an unfamiliar company database. What's your first step before writing any queries?**
Short answer: Review its schema — what tables exist, their key columns, and how they relate — either from documentation, a diagram, or the database's own metadata, rather than guessing at table structure while writing a query.

---

### ⚡ Quick Revision

**Database schema** → the full blueprint: every table, column, data type, and relationship
Always worth reviewing before querying an unfamiliar database.
`,
});

console.log('Created 13 Database Fundamentals skills.');
