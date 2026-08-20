import { setNote } from './_lib.mjs';

setNote('sql-select', `
## 🎯 What is it?

**SELECT** is the SQL command that retrieves data from a table. It answers one question: *"which columns and rows do I want to see?"*

Think of a table like a spreadsheet with rows and columns. SELECT is how you tell the database "give me these columns" — nothing more, nothing less. It's the very first thing you write in almost every SQL query.

## 💡 Why is it important?

- Every SQL query a Data Analyst writes starts with SELECT — filtering (WHERE), grouping (GROUP BY), and joins all sit *around* a SELECT.
- It's how you pull raw data out of a database into something you can analyze, chart, or export.
- Choosing the right columns (instead of everything) keeps queries fast and results readable — critical once tables have millions of rows.
- It directly connects to real analysis: "show me customer name and signup date" is a SELECT before it's anything else.

## Core concept

A SELECT statement has two required parts:

| Clause | Purpose |
|---|---|
| \`SELECT\` | which columns to return |
| \`FROM\` | which table to read from |

You can select specific columns, all columns (\`*\`), or computed values (expressions). Column order in the output follows the order you list them — it does **not** have to match the table's physical column order.

### SELECT \\* vs. explicit columns

- \`SELECT *\` returns every column. Fast to write, but slow on wide tables, breaks if the table schema changes, and makes queries harder to read.
- \`SELECT column1, column2\` returns exactly what you need. This is the professional default.

## Syntax

\`\`\`sql
SELECT column1, column2, ...
FROM table_name;
\`\`\`

- **column1, column2** — the columns to return, comma-separated.
- **table_name** — the table to read from.
- The semicolon ends the statement (optional in many tools, required in scripts/chained queries).

## 📊 Example

Sample table \`customers\`:

| customer_id | first_name | last_name | signup_date | country |
|---|---|---|---|---|
| 1 | Ana | Silva | 2024-01-12 | Brazil |
| 2 | Wei | Chen | 2024-02-03 | China |
| 3 | Omar | Hassan | 2024-02-18 | Egypt |

**Query:**

\`\`\`sql
SELECT first_name, last_name, signup_date
FROM customers;
\`\`\`

**Output:**

| first_name | last_name | signup_date |
|---|---|---|
| Ana | Silva | 2024-01-12 |
| Wei | Chen | 2024-02-03 |
| Omar | Hassan | 2024-02-18 |

**Explanation:** Only the three requested columns come back, in the order requested — \`country\` and \`customer_id\` are left out entirely.

## Multiple examples

**Beginner — select all columns:**

\`\`\`sql
SELECT * FROM customers;
\`\`\`

**Intermediate — alias and a computed column:**

\`\`\`sql
SELECT
  first_name AS given_name,
  last_name  AS family_name,
  first_name || ' ' || last_name AS full_name
FROM customers;
\`\`\`

**Real-world — combined with sorting and a row limit (previewing the topics below):**

\`\`\`sql
SELECT first_name, last_name, signup_date
FROM customers
ORDER BY signup_date DESC
LIMIT 10;
\`\`\`
This is the exact shape of query an analyst runs to answer "who are our 10 most recent signups?"

## Types / Variations

| Form | What it returns |
|---|---|
| \`SELECT *\` | every column |
| \`SELECT col1, col2\` | specific columns |
| \`SELECT col AS alias\` | a column under a readable name |
| \`SELECT expr\` | a computed value (math, string concat, function result) |
| \`SELECT DISTINCT col\` | unique values only, duplicates removed |

## ⚠️ Common mistakes

- **Using \`SELECT *\` in production queries.** It's fine for a quick look, but it pulls unnecessary columns, breaks if the schema changes, and hides what a query actually depends on. → Always list the columns you need.
- **Assuming column order in output matches the table definition.** It matches the order in your SELECT list, not the table's stored order.
- **Forgetting that SELECT alone doesn't filter or sort.** Beginners sometimes expect \`SELECT\` to only bring back "important" rows — it returns every row in the table unless a WHERE clause is added.
- **Selecting a column that doesn't exist / a typo in a column name.** This throws an error, not a silent empty result — read the error message, it will name the exact unknown column.

## Real-world Data Analyst use cases

- **Sales analysis:** \`SELECT product_name, price, quantity FROM orders;\` — pulling exactly the fields needed for a revenue calculation, nothing extra.
- **Customer analysis:** \`SELECT customer_id, signup_date, country FROM customers;\` — a lightweight extract for a signups-by-country chart.
- **Marketing analysis:** \`SELECT campaign_name, clicks, conversions FROM campaigns;\` — the base pull before computing conversion rate.

## Related concepts

SELECT is the foundation everything else in SQL sits on top of:

\`\`\`
SELECT
  ↓
WHERE (filter rows)
  ↓
GROUP BY (create groups)
  ↓
HAVING (filter groups)
  ↓
JOIN (combine tables)
  ↓
SUBQUERY / CTE
  ↓
WINDOW FUNCTIONS
\`\`\`

Learn [SQL Filtering](/skills/sql-filtering) next to start narrowing down *which rows* SELECT returns.

## Practice questions

### Easy
1. Write a query that returns every column from a table called \`products\`.
2. Write a query that returns only \`product_name\` and \`price\` from \`products\`.

### Medium
3. Given a \`products\` table with columns \`product_name\`, \`price\`, and \`cost\`, write a query that returns \`product_name\` and a computed column \`profit\` (price − cost), aliased as \`profit\`.

### Interview/Advanced
4. Why would a senior analyst reject a pull request that uses \`SELECT *\` against a production table with 40 columns and 50 million rows?

<details>
<summary><strong>Answer / Solution</strong></summary>

1. \`SELECT * FROM products;\`
2. \`SELECT product_name, price FROM products;\`
3. \`SELECT product_name, price - cost AS profit FROM products;\`
4. It transfers far more data than needed (slower query, more network/memory usage), it silently changes behavior if columns are added/removed/reordered later, and it hides — from anyone reading the code — which columns the query actually depends on, making the codebase harder to maintain.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does SELECT do?**
Short answer: It retrieves specified columns (and, combined with FROM, specified rows) from a table.

### Conceptual questions
**Q: What's the difference between \`SELECT *\` and listing explicit columns?**
Short answer: \`SELECT *\` returns every column and is convenient for exploration but risky in production; explicit columns are precise, faster, and resilient to schema changes.

### Scenario-based questions
**Q: A dashboard query is timing out on a 100-column, 200-million-row table. The query is \`SELECT * FROM events;\` — what's the first thing you'd check?**
Short answer: Whether the query actually needs all 100 columns — switching to only the required columns is usually the single biggest, easiest performance win before touching indexes or filters.

### Practical questions
**Q: Write a query returning \`order_id\`, \`order_date\`, and a column \`order_year\` (just the year part) is a natural follow-up — but flag that it needs a date function, which is covered once WHERE/date functions are introduced.**

## Interview traps / tricky points

- Interviewers often ask "what's wrong with this query?" and show \`SELECT *\` — the expected answer is about performance and maintainability, not syntax.
- SELECT alone does **not** deduplicate rows — \`SELECT DISTINCT\` is a different, explicit choice.
- Column aliases created with \`AS\` in the SELECT list generally **cannot** be reused in the same query's WHERE clause — this trips up people coming from spreadsheet tools. (It's related to SQL's logical execution order, covered in later topics.)

## Best practices

- Always list explicit columns instead of \`SELECT *\` outside of quick, one-off exploration.
- Use clear, consistent aliases (\`AS full_name\`, not \`AS fn\`) so output is self-explanatory.
- Keep column lists on separate lines for anything beyond 3–4 columns — it's easier to read and diff.

---

### ⚡ Quick Revision

**SELECT** → chooses which columns come back
**FROM** → chooses which table to read
**\\*** → all columns (avoid in production)
**AS** → renames a column/expression in the output
**DISTINCT** → removes duplicate rows from the result

Remember: SELECT alone returns *every row* — filtering rows is WHERE's job, not SELECT's.
`);
