import { setNote } from './_lib.mjs';

setNote('pandas', `
## 🎯 What is it?

**Pandas** is Python's library for loading, cleaning, transforming, and summarizing tabular data using **DataFrames** — essentially a supercharged, programmable spreadsheet. It's the default tool for real-world data cleaning and exploratory analysis in Python.

## 💡 Why is it important?

Pandas is the bridge between raw data and every downstream step — modeling, visualization, or reporting. It handles the messy, repetitive parts of real analysis (loading, cleaning, merging, grouping) far more powerfully and reproducibly than a spreadsheet once data gets large or the cleaning steps get complex.

## Core concept

### DataFrames & Series
A **DataFrame** is a 2D table (rows and columns), like a spreadsheet or a SQL table. A **Series** is a single column of a DataFrame — a 1D labeled array. \`.head()\`, \`.info()\`, and \`.shape\` are the standard first commands to inspect any new DataFrame.

### Selecting & filtering
\`.loc[]\` selects by **label** (row/column name); \`.iloc[]\` selects by **integer position**. A **boolean mask** (\`df[df["amount"] > 100]\`) filters rows based on a condition — the pandas equivalent of SQL's WHERE.

### Missing data
Pandas represents missing values as \`NaN\`. \`.isna()\` detects them; \`.dropna()\` removes rows/columns with them; \`.fillna()\` fills them with a chosen value — the choice should always be deliberate and justified (see [Data Cleaning & Quality](/skills/data-cleaning)), never a silent default.

### GroupBy
\`.groupby()\` splits data into groups (like SQL's GROUP BY), applies a calculation to each group, and combines the results — the pandas equivalent of aggregation.

### Merging
\`.merge()\` combines two DataFrames by a shared key — the pandas equivalent of a SQL JOIN, with the same \`how="inner"/"left"/"right"/"outer"\` options and the same row-multiplication risk if the key isn't unique.

## Syntax

\`\`\`python
import pandas as pd

df = pd.read_csv("orders.csv")
df.head()                                  # first 5 rows
df.info()                                  # column types and non-null counts

# Filtering (boolean mask)
large_orders = df[df["amount"] > 200]

# Missing data
df["region"] = df["region"].fillna("Unknown")

# GroupBy
region_totals = df.groupby("region")["amount"].sum()

# Merging
merged = orders_df.merge(customers_df, on="customer_id", how="left")
\`\`\`

## 📊 Example

\`orders\` DataFrame:

| order_id | customer_id | amount |
|---|---|---|
| 1 | 101 | 200 |
| 2 | 102 | 150 |
| 3 | 101 | 300 |

**Code:**

\`\`\`python
totals = df.groupby("customer_id")["amount"].sum().reset_index()
\`\`\`

**Output:**

| customer_id | amount |
|---|---|
| 101 | 500 |
| 102 | 150 |

**Explanation:** \`groupby("customer_id")\` splits the DataFrame into groups by customer, \`["amount"].sum()\` sums each group, and \`.reset_index()\` turns the grouped result back into a normal, flat DataFrame.

## Multiple examples

**Beginner:** \`df[df["status"] == "completed"]\` — filter to only completed orders.
**Intermediate:** \`df.groupby(["region", "month"])["revenue"].sum()\` — a two-level grouped summary, the pandas equivalent of a pivot table.
**Real-world:** Loading a customers DataFrame and an orders DataFrame, deliberately deciding how to handle missing \`signup_date\` values, merging them with \`how="left"\` (keeping all customers, even those without orders), and confirming the merged shape matches expectations — the full clean-and-merge workflow.

## ⚠️ Common mistakes

- **Silently dropping rows with \`.dropna()\`** without checking how many rows were removed or whether the missingness was random — see [Data Cleaning & Quality](/skills/data-cleaning) for the same principle applied at scale.
- **Using the wrong merge type**, accidentally dropping rows that should have been kept (e.g., using \`how="inner"\` when \`how="left"\` was actually needed to preserve unmatched customers).
- **Not checking the merged DataFrame's shape** after a merge — a silent row-multiplication (from a non-unique key) is one of the most common real pandas bugs, directly analogous to SQL's join row-explosion problem.
- **Chained indexing** (e.g., \`df[df["x"]>0]["y"] = 1\`) which can trigger pandas' \`SettingWithCopyWarning\` and may silently fail to update the original DataFrame — use \`.loc[]\` for both selecting and assigning in one step instead.

## Real-world Data Analyst use cases

- **Customer analysis:** cleaning and merging a customers table with an orders table to compute customer lifetime value.
- **Sales analysis:** grouping transactions by region and month to build a summary table, feeding directly into a chart.
- **Any recurring analysis:** replacing a manual spreadsheet cleaning routine with a reproducible pandas script that runs identically every time.

## Related concepts

\`\`\`
NumPy (the foundation pandas is built on)
  ↓
Pandas ← you are here
  ↓
Data Visualization with Python
  ↓
Working with APIs / Regular Expressions for Data Cleaning
\`\`\`
Pandas' \`.groupby()\`, boolean filtering, and \`.merge()\` map directly onto SQL's GROUP BY, WHERE, and JOIN — if you've learned the SQL stage first, most of pandas' logic will already feel familiar.

## Practice questions

### Easy
1. Write pandas code to filter a DataFrame \`df\` to rows where \`amount > 100\`.

### Medium
2. Write pandas code that groups \`df\` by \`region\` and returns the average \`amount\` per region.

### Interview/Advanced
3. After merging two DataFrames, the result has more rows than either original DataFrame. What's the likely cause, and how would you confirm it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`df[df["amount"] > 100]\`
2. \`df.groupby("region")["amount"].mean()\`
3. The merge key is likely not unique on at least one side, causing a one-to-many (or many-to-many) match that multiplies rows — the same "row explosion" issue as a SQL join. Confirm by checking \`df["key_column"].duplicated().sum()\` on each side before merging, and compare the merged result's row count against expectations.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between \`.loc[]\` and \`.iloc[]\`?**
Short answer: \`.loc[]\` selects by label (row/column name), while \`.iloc[]\` selects by integer position — they can return different results if the DataFrame's index isn't a simple 0-based range.

### Conceptual questions
**Q: How would you decide whether to drop, fill, or flag missing values in a pandas DataFrame?**
Short answer: The same principle as data cleaning generally — it depends on whether the missingness is random and rare (often safe to drop), has a reasonable default (fill), or is itself meaningful (flag and keep) — never drop silently without checking how much data is affected.

### Scenario-based questions
**Q: A groupby().sum() on revenue returns a number much higher than the actual total. What would you check?**
Short answer: Whether the DataFrame was joined/merged before the groupby in a way that duplicated rows — check the DataFrame's row count against the expected raw data count before trusting the aggregation.

### Practical questions
**Q: Write pandas code to merge an \`orders\` DataFrame with a \`customers\` DataFrame on \`customer_id\`, keeping all orders even if the customer record is missing.**
Short answer: \`orders.merge(customers, on="customer_id", how="left")\`

## Interview traps / tricky points

- \`SettingWithCopyWarning\` from chained indexing is a very common real-world pandas gotcha — always use \`.loc[]\` for combined selecting-and-assigning.
- \`NaN\` in pandas is not equal to itself (\`NaN == NaN\` is False) — always use \`.isna()\` to check for missing values, never \`== NaN\`, mirroring the SQL \`IS NULL\` vs. \`= NULL\` issue.
- A merge's default \`how="inner"\` silently drops unmatched rows on both sides — always choose the merge type deliberately, not by default.

## Best practices

- Always inspect a DataFrame's shape and a few rows (\`.head()\`, \`.shape\`) immediately after loading, filtering, and merging.
- Choose and justify a specific missing-data strategy — never let \`.dropna()\` run silently without checking its impact.
- Use \`.loc[]\` for any operation that both selects and assigns, to avoid chained-indexing warnings and silent no-op bugs.

---

### ⚡ Quick Revision

**DataFrame** → 2D table; **Series** → single column
**.loc[]** → label-based selection · **.iloc[]** → position-based selection
**.groupby()** → pandas' GROUP BY equivalent
**.merge()** → pandas' JOIN equivalent — check for row-multiplication after
**NaN** → pandas' missing value; use \`.isna()\`, never \`== NaN\`
`);

setNote('python-visualization', `
## 🎯 What is it?

**Data Visualization with Python** covers building charts directly from pandas data using **Matplotlib** (the foundational plotting library) and **Seaborn** (a higher-level library built on top of it, specialized for statistical charts) — for both quick exploratory looks and polished, report-ready output.

## 💡 Why is it important?

Python-native visualization lets you explore data and produce report-ready charts inside the same workflow as your cleaning and analysis — no switching to a separate tool, and every chart stays reproducible as code rather than a one-off manual export.

## Core concept

### Matplotlib basics
The core plotting API, built around **figures** (the whole chart canvas) and **axes** (an individual plot within it). Matplotlib gives you full manual control over every chart element — useful, but more verbose than Seaborn for common statistical chart types.

### Seaborn statistical plots
A higher-level library (built on Matplotlib) purpose-built for statistical visualization — distribution plots, box plots, and category comparisons — that produces attractive, well-labeled charts with far less code than raw Matplotlib.

### Customizing and labeling
Titles, axis labels, legends, and deliberate color choices are what make a chart understandable **on its own**, without a verbal explanation standing next to it — a core requirement for any chart going into a report or dashboard.

### Exporting for reports
Saving a chart at the correct resolution and file format (commonly PNG for slides, SVG/PDF for print) so it looks sharp wherever it's placed, not stretched or pixelated.

## Syntax

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Matplotlib — a basic bar chart from a DataFrame
df.groupby("region")["revenue"].sum().plot(kind="bar")
plt.title("Total Revenue by Region")
plt.xlabel("Region")
plt.ylabel("Revenue ($)")
plt.savefig("revenue_by_region.png", dpi=300, bbox_inches="tight")

# Seaborn — a distribution plot in one line
sns.histplot(data=df, x="order_amount", bins=30)
plt.title("Distribution of Order Amounts")
\`\`\`

## 📊 Example

**Task:** Compare order-amount distributions across two customer segments.

\`\`\`python
sns.boxplot(data=df, x="segment", y="order_amount")
plt.title("Order Amount by Customer Segment")
plt.xlabel("Segment")
plt.ylabel("Order Amount ($)")
plt.savefig("segment_comparison.png", dpi=300, bbox_inches="tight")
\`\`\`

**Explanation:** A box plot is the right chart type here specifically because it shows the median, spread, and outliers of each segment side by side — a bar chart of *averages* alone would hide whether one segment's high average is driven by a typical customer or a few large outliers (see [Descriptive Statistics](/skills/stats-descriptive)).

## Multiple examples

**Beginner:** A single line chart of monthly revenue over time using Matplotlib.
**Intermediate:** A Seaborn box plot comparing a metric across categories, fully labeled with a title and axis labels.
**Real-world:** Three labeled charts answering three specific questions for a stakeholder report — a trend line (is revenue growing?), a box plot (how does order value vary by segment?), and a bar chart (which category drives the most revenue?) — each exported as a high-resolution PNG ready to drop into a slide.

## ⚠️ Common mistakes

- **Choosing a chart type that doesn't fit the question**, e.g., a line chart for unordered categories, or a pie chart with too many slices. (See [Charts & Chart Selection](/skills/charts) for the full decision framework.)
- **Shipping an unlabeled chart** — no title, no axis labels — that only makes sense if someone explains it verbally alongside it.
- **Exporting at too low a resolution** for its intended use, resulting in a blurry chart once placed in a slide or printed document.
- **Choosing Matplotlib for a task Seaborn handles better in one line** (like a distribution or box plot), leading to unnecessarily verbose code for a standard chart type.

## Real-world Data Analyst use cases

- **Sales analysis:** a revenue trend line chart for a monthly business review.
- **Product analysis:** a box plot comparing session duration across user segments.
- **Marketing analysis:** a bar chart of conversion rate by channel, exported for a stakeholder deck.

## Related concepts

\`\`\`
NumPy → Pandas
  ↓
Data Visualization with Python ← you are here
  ↓
Visualization stage (Charts, Dashboard Design, Storytelling — chart-selection theory)
\`\`\`

## Practice questions

### Easy
1. Write code to create a bar chart of total revenue by region from a pandas DataFrame.

### Medium
2. You need to compare the distribution (not just the average) of order amounts across 4 product categories. Which chart type and library feature fits best?

### Interview/Advanced
3. Why might a box plot reveal something a bar chart of category averages hides entirely?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`df.groupby("region")["revenue"].sum().plot(kind="bar"); plt.title("Total Revenue by Region")\`
2. A Seaborn box plot (\`sns.boxplot(data=df, x="category", y="order_amount")\`) — it shows median, spread, and outliers per category in one chart, which a simple bar chart of averages cannot.
3. A bar chart of averages collapses each category to a single number, hiding whether that average reflects a typical, consistent value or is being pulled by a few extreme outliers — a box plot exposes the underlying spread and outliers directly, which can completely change how the comparison should be interpreted.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between Matplotlib and Seaborn?**
Short answer: Matplotlib is the foundational, low-level plotting library with full manual control; Seaborn is built on top of it and provides higher-level, statistically-focused chart types with much less code for common use cases.

### Conceptual questions
**Q: Why does a chart need axis labels and a title even if you'll be presenting it live?**
Short answer: A chart should be understandable on its own, since it may be viewed later, forwarded, or included in a written report without you present to explain it — labels remove ambiguity about what's being shown.

### Scenario-based questions
**Q: A stakeholder says a chart you sent "doesn't make sense" without more context. What likely went wrong?**
Short answer: The chart probably lacked a clear title, axis labels, or a chart type that matched the underlying question — a chart requiring verbal explanation to be understood isn't finished yet.

### Practical questions
**Q: How would you export a chart so it looks sharp in a printed report, not just on screen?**
Short answer: Save at a high resolution (e.g., \`dpi=300\`) and, if the report supports it, a vector format like SVG or PDF instead of a low-resolution raster image.

## Interview traps / tricky points

- Choosing Seaborn vs. Matplotlib isn't about one being "better" — it's about matching the tool to the task: Seaborn for quick, well-styled statistical charts; Matplotlib when you need fine-grained custom control.
- A chart that looks fine on a laptop screen can be blurry or oddly cropped once placed in a slide deck — always export deliberately, not via a screenshot.

## Best practices

- Always add a title and labeled axes before considering a chart "done."
- Choose the chart type based on the question being answered, not habit or what's fastest to code.
- Export at a resolution appropriate for the chart's final destination (slide, print, dashboard).

---

### ⚡ Quick Revision

**Matplotlib** → low-level, full control · **Seaborn** → high-level, statistical charts, less code
**Every chart needs:** a title, labeled axes, and a chart type that matches the question
**Export:** high resolution (\`dpi=300\`+) for anything going into a report or slide
`);

setNote('python-apis', `
## 🎯 What is it?

**Working with APIs** means fetching data from a web service using Python's \`requests\` library, and turning the response (usually JSON) into a usable pandas DataFrame. Not all data comes as a clean CSV — a huge amount of real-world data (weather, finance, product catalogs, internal company services) is only available this way.

## 💡 Why is it important?

Pulling data from an API yourself is a core, practical skill — it's how you get data that isn't handed to you as a file, and it's a standard task in real analyst and data-engineering-adjacent work: pulling marketing platform data, enriching a dataset with external information, or building a recurring automated pull.

## Core concept

### Making a request
\`requests.get(url)\` sends an HTTP GET request and returns a response object. **Always check the status code** before trusting the response — \`200\` means success, but \`4xx\`/\`5xx\` codes mean something went wrong (bad request, unauthorized, server error), and blindly parsing a failed response as if it succeeded is a common beginner mistake.

### Parsing JSON
Most APIs return data as JSON — a nested structure of objects and lists. \`response.json()\` converts this into Python dicts/lists; \`pd.json_normalize()\` (or manual restructuring) flattens nested JSON into a proper, analysis-ready DataFrame.

### Handling failures
Real APIs fail sometimes — timeouts, rate limits (too many requests too fast), and error responses are normal, expected conditions, not edge cases to ignore. A production-quality script handles them explicitly rather than crashing or silently producing incomplete data.

## Syntax

\`\`\`python
import requests
import pandas as pd

response = requests.get("https://api.example.com/orders", timeout=10)

if response.status_code == 200:
    data = response.json()
    df = pd.json_normalize(data["results"])
else:
    print(f"Request failed: {response.status_code}")
\`\`\`

## 📊 Example

**API response (JSON):**

\`\`\`json
{
  "results": [
    {"id": 1, "customer": {"name": "Ana", "region": "West"}, "amount": 200},
    {"id": 2, "customer": {"name": "Wei", "region": "East"}, "amount": 340}
  ]
}
\`\`\`

**Code:**

\`\`\`python
data = response.json()
df = pd.json_normalize(data["results"])
\`\`\`

**Output (DataFrame):**

| id | customer.name | customer.region | amount |
|---|---|---|---|
| 1 | Ana | West | 200 |
| 2 | Wei | East | 340 |

**Explanation:** \`json_normalize\` automatically flattens the nested \`customer\` object into separate \`customer.name\`/\`customer.region\` columns, producing a clean, table-shaped DataFrame ready for analysis.

## Multiple examples

**Beginner:** A GET request to a free public API, checking the status code before printing the response.
**Intermediate:** Parsing a nested JSON response with \`json_normalize\` into a flat DataFrame.
**Real-world:** A script that pulls data from a paginated API (looping through multiple pages of results), handles a rate-limit response by pausing and retrying, and combines every page into one final DataFrame — a realistic production data-pull pattern.

## ⚠️ Common mistakes

- **Not checking the status code before parsing the response.** A failed request (e.g., a 404 or 500 error) often still returns *some* body — parsing it as if it succeeded produces confusing downstream errors or silently wrong/empty data.
- **Not setting a timeout.** Without one, a hung request can block a script indefinitely — always pass \`timeout=...\`.
- **Ignoring rate limits.** Sending requests too fast can get you temporarily or permanently blocked by the API — real scripts should respect documented rate limits and handle a 429 ("Too Many Requests") response gracefully.
- **Hardcoding an API key directly in a script** that might be shared or committed to version control — a real security risk, not just a style issue.

## Real-world Data Analyst use cases

- **Marketing analysis:** pulling campaign performance data from an ad platform's API.
- **Finance analysis:** pulling live currency exchange rates from a financial data API to enrich a report.
- **Product analysis:** pulling usage data from an internal analytics service's API for a custom report not available in the standard dashboard.

## Related concepts

\`\`\`
Python Fundamentals
  ↓
Pandas
  ↓
Working with APIs ← you are here
  ↓
Regular Expressions for Data Cleaning (often needed after parsing messy API text fields)
\`\`\`

## Practice questions

### Easy
1. Write code to make a GET request and check whether it succeeded.

### Medium
2. Given a JSON response with a nested "customer" object per record, write code to flatten it into a DataFrame.

### Interview/Advanced
3. A script pulling from an API works fine in testing but starts failing intermittently in production with a 429 status code. What's happening, and how would you fix it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`response = requests.get(url, timeout=10); if response.status_code == 200: ... else: print("failed")\`
2. \`df = pd.json_normalize(data["results"])\` (assuming the JSON structure matches the example above).
3. A 429 status code means "Too Many Requests" — the script is hitting the API's rate limit. Fix: add a delay between requests, respect any \`Retry-After\` header the API provides, and implement retry logic with backoff instead of firing requests as fast as possible.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why should you always check the response status code before parsing an API response?**
Short answer: A failed request can still return a response body, and parsing it as if it succeeded can produce misleading downstream results or confusing errors — checking the status code first lets the script handle failure explicitly.

### Conceptual questions
**Q: What does it mean for an API to be "rate limited," and why does it matter for a script?**
Short answer: The API restricts how many requests can be made in a given time window; a script that ignores this can get temporarily or permanently blocked, so production scripts should pace requests and handle rate-limit responses gracefully.

### Scenario-based questions
**Q: You need to pull all records from an API that returns results in pages of 100. How would you approach it?**
Short answer: Loop through pages using the API's pagination parameter (e.g., a page number or cursor token), collecting and combining each page's results, until the API signals there are no more pages left.

### Practical questions
**Q: How would you securely handle an API key in a script that might be shared with others?**
Short answer: Store it in an environment variable (or a config file excluded from version control) rather than hardcoding it directly in the script.

## Interview traps / tricky points

- A "successful" 200 status code doesn't guarantee the response body contains the expected data structure — always validate the shape of the parsed JSON before assuming it matches expectations.
- Deeply nested or inconsistent JSON (e.g., a field that's sometimes a list, sometimes a single object) can break a naive \`json_normalize\` call — real-world API responses often need extra handling for this kind of inconsistency.

## Best practices

- Always check the status code, and set an explicit timeout, on every request.
- Handle expected failure modes (timeouts, rate limits, error responses) explicitly rather than letting the script crash.
- Never hardcode credentials/API keys directly in a script; use environment variables or a secrets manager.

---

### ⚡ Quick Revision

**requests.get(url, timeout=...)** → always set a timeout, always check status_code
**response.json()** → parses the response body into Python dicts/lists
**pd.json_normalize()** → flattens nested JSON into a table-shaped DataFrame
**429 status code** → rate limited; add delay/backoff, don't just retry immediately
`);

setNote('python-regex', `
## 🎯 What is it?

**Regular expressions (regex)** are patterns used to find, extract, and validate text that doesn't follow a simple, fixed format — like pulling a phone number out of a free-text field, or checking whether every value in a column looks like a valid email address.

## 💡 Why is it important?

Some cleaning problems — extracting a code embedded in inconsistent text, validating a format, splitting a messy free-text field — genuinely can't be solved with simple string functions (like \`.replace()\` or \`.split()\`) alone. Regex is the general-purpose tool for exactly this class of problem, and it appears constantly in real-world data cleaning.

## Core concept

### Pattern basics
A regex pattern is built from **character classes** (what kind of character to match), **quantifiers** (how many times), and **anchors** (position in the string).

| Symbol | Meaning |
|---|---|
| \`\\d\` | Any digit (0–9) |
| \`\\w\` | Any word character (letter, digit, underscore) |
| \`\\s\` | Any whitespace |
| \`.\` | Any character (except newline) |
| \`*\` | Zero or more of the previous element |
| \`+\` | One or more of the previous element |
| \`?\` | Zero or one (optional) of the previous element |
| \`{n}\` | Exactly n of the previous element |
| \`^\` / \`$\` | Start / end of the string |
| \`[...]\` | A character class — any one of the listed characters |

### Extracting matches
Once a pattern is defined, functions like \`re.search()\`, \`re.findall()\`, or pandas' \`.str.extract()\` pull out the matching text (or a specific captured group within it) from a larger string.

### Validating format
Checking whether an *entire* string matches a pattern (using anchors \`^\` and \`$\`, or \`re.fullmatch()\`) — useful for flagging rows where a value doesn't conform to an expected format, like an email or a phone number.

## Syntax

\`\`\`python
import re
import pandas as pd

# Extract an order ID embedded in free text
text = "Order #A1234 shipped on 2024-01-05"
match = re.search(r"#([A-Z]\\d{4})", text)
order_id = match.group(1) if match else None   # "A1234"

# Apply across a pandas column
df["order_id"] = df["notes"].str.extract(r"#([A-Z]\\d{4})")

# Validate a format (does the whole value look like an email?)
df["valid_email"] = df["email"].str.fullmatch(r"[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}")
\`\`\`

## 📊 Example

**Input column** (\`notes\`):

| notes |
|---|
| "Order #A1234 shipped" |
| "See order B5678 for details" |
| "no order reference here" |

**Code:**

\`\`\`python
df["order_id"] = df["notes"].str.extract(r"([A-Z]\\d{4})")
\`\`\`

**Output:**

| notes | order_id |
|---|---|
| "Order #A1234 shipped" | A1234 |
| "See order B5678 for details" | B5678 |
| "no order reference here" | NaN |

**Explanation:** The pattern \`[A-Z]\\d{4}\` matches one uppercase letter followed by exactly 4 digits, wherever it appears in the text; rows with no match correctly return \`NaN\` rather than an error.

## Multiple examples

**Beginner:** \`r"\\d+"\` — match one or more digits anywhere in a string.
**Intermediate:** \`r"^[A-Z]{2}\\d{6}$"\` — validate that an entire string is exactly 2 uppercase letters followed by 6 digits (e.g., a specific ID format).
**Real-world:** Extracting a US phone number from an inconsistently-formatted free-text field with a pattern like \`r"\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}"\`, which tolerates optional parentheses and different separator characters (spaces, dots, dashes) between digit groups.

## Types / Variations

| Use case | Approach |
|---|---|
| Find first match | \`re.search()\` |
| Find all matches | \`re.findall()\` |
| Extract into a pandas column | \`.str.extract()\` |
| Check if an entire string matches | \`re.fullmatch()\` or \`.str.fullmatch()\` |
| Check if a pattern appears anywhere | \`.str.contains()\` |

## ⚠️ Common mistakes

- **Writing a pattern that matches the example but not the general case.** A pattern tested on one row can easily be too narrow (or too permissive) for the full range of real, messy data — always test against a representative sample, not just the first example.
- **Forgetting to anchor a validation pattern** (\`^\`/\`$\` or \`fullmatch\`), which lets a pattern match a *substring* when the intent was to validate the *entire* value — a common source of false positives.
- **Silently dropping non-matching rows** instead of flagging them — per the [Data Cleaning](/skills/data-cleaning) principle, non-matches should be surfaced and reviewed, not quietly discarded.
- **Over-relying on regex for genuinely structured data.** If a field can be reliably split with \`.split()\` or parsed with a dedicated function (like a real date parser), plain string functions or a proper parser are usually simpler and more robust than a regex.

## Real-world Data Analyst use cases

- **Data cleaning (any domain):** extracting a consistent ID or code from a free-text notes field.
- **Marketing analysis:** validating email formats before an email campaign send.
- **Operations analysis:** extracting and standardizing phone numbers from an inconsistently-formatted contacts export.

## Related concepts

\`\`\`
Pandas
  ↓
Regular Expressions for Data Cleaning ← you are here
\`\`\`
This closes the Python stage — the next stage, Visualization, builds on cleaned, analysis-ready data like this to produce charts and dashboards.

## Practice questions

### Easy
1. Write a regex pattern that matches any sequence of digits.

### Medium
2. Write a pandas expression that extracts a 4-digit year from a "notes" column containing free text.

### Interview/Advanced
3. A regex intended to validate emails is flagging valid addresses as invalid. What's a likely cause?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`r"\\d+"\`
2. \`df["notes"].str.extract(r"(\\d{4})")\` (with the caveat that this would also match any other 4-digit number in the text — a more specific pattern anchored to a year range or context would be more robust for real data).
3. The pattern is likely too strict/narrow for the real variety of valid email formats (e.g., not accounting for \`+\` in addresses, multi-part domains, or certain valid special characters) — regex-based email validation is famously hard to get perfectly right, and it's worth testing against a representative sample of real, valid addresses rather than assuming a simple pattern covers every case.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: When would you reach for regex instead of a simple string function like \`.replace()\`?**
Short answer: When the text to find or validate follows a *pattern* rather than an exact, fixed string — e.g., "any sequence of digits" or "a specific format" — which simple string functions can't express.

### Conceptual questions
**Q: Why is it important to anchor a validation pattern with \`^\`/\`$\` (or use fullmatch)?**
Short answer: Without anchors, a pattern can match just part of a string, meaning a value like "abc123xyz" could pass a validation intended to require the *entire* string be purely digits — anchoring ensures the whole value conforms, not just a substring of it.

### Scenario-based questions
**Q: You extract IDs from a notes column and get a lot of NaN results. How do you investigate?**
Short answer: Sample some of the non-matching rows directly and inspect their actual text — the pattern is likely too narrow for a format variation present in the real data (different casing, spacing, or an extra character) that wasn't in the original test example.

### Practical questions
**Q: Write a regex to flag rows where a "product_code" column does NOT match the expected format of 2 letters followed by 4 digits (e.g., "AB1234").**
Short answer: \`~df["product_code"].str.fullmatch(r"[A-Z]{2}\\d{4}")\` — the \`~\` negates the boolean mask, flagging non-matching rows.

## Interview traps / tricky points

- A pattern that works on the one example you tested it against is not proof it works on the whole dataset — always validate against a representative sample.
- Un-anchored patterns silently allow partial matches, which is a very common, subtle validation bug.
- Regex email/phone validation is notoriously imperfect — acknowledging this limitation (rather than presenting a naive pattern as bulletproof) is itself a signal of experience in an interview.

## Best practices

- Test a new pattern against several real, varied examples from the actual dataset, not just one.
- Anchor validation patterns explicitly, or use \`fullmatch\`, when the intent is to validate an entire value.
- Flag and report non-matching rows rather than silently dropping them.

---

### ⚡ Quick Revision

**\\d / \\w / \\s** → digit / word character / whitespace
**\\* / + / ?** → zero-or-more / one-or-more / optional
**^ / $** → anchors — start / end of string (needed for full-value validation)
**.str.extract() / .str.fullmatch() / .str.contains()** → pandas' regex tools
`);
