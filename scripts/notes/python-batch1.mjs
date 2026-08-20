import { setNote } from './_lib.mjs';

setNote('python-fundamentals', `
## 🎯 What is it?

**Python Fundamentals** covers the core building blocks of the language — variables, data types, control flow (if/else, loops), functions, and reading/writing files — enough to write a script that transforms data on its own, without a spreadsheet or SQL editor.

## 💡 Why is it important?

Python is the connective tissue of a modern data workflow — it's what you reach for when a spreadsheet or a SQL query alone isn't enough: automating a repetitive cleaning task, pulling data from an API, or running a calculation too complex for a formula. Every later Python topic (pandas, NumPy, visualization) builds directly on these fundamentals.

## Core concept

### Variables & data types
Python's core types: \`int\`/\`float\` (numbers), \`str\` (text), \`bool\` (True/False), \`list\` (an ordered, changeable collection), and \`dict\` (key-value pairs — Python's version of a lookup table).

### Control flow
\`if\`/\`elif\`/\`else\` branches based on a condition; \`for\` loops iterate over a collection; \`while\` loops repeat until a condition becomes false.

### Functions
A reusable, named block of logic that takes inputs (parameters) and optionally returns a value — the way to avoid repeating the same code multiple times.

### Files & errors
Reading and writing files with \`open()\`, and handling exceptions gracefully with \`try\`/\`except\` so one bad row or missing file doesn't crash an entire script.

## Syntax

\`\`\`python
# Variables and types
name = "Ana"
orders = [120, 340, 210]
customer = {"name": "Ana", "region": "West"}

# Control flow
for order in orders:
    if order > 200:
        print(f"{order} is a large order")

# Function
def total_revenue(order_list):
    return sum(order_list)

# Files & errors
try:
    with open("orders.csv") as f:
        data = f.read()
except FileNotFoundError:
    print("File not found — check the path.")
\`\`\`

## 📊 Example

**Input data** (\`orders.csv\`):
\`\`\`
category,amount
Widgets,120
Gadgets,340
Widgets,90
\`\`\`

**Code:**

\`\`\`python
import csv

totals = {}
with open("orders.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        category = row["category"]
        amount = float(row["amount"])
        totals[category] = totals.get(category, 0) + amount

print(totals)
\`\`\`

**Output:**
\`\`\`
{'Widgets': 210.0, 'Gadgets': 340.0}
\`\`\`

**Explanation:** The loop reads each row, and \`totals.get(category, 0)\` safely handles a category seen for the first time (defaulting to 0) before adding the new amount — a common, idiomatic pattern for accumulating totals without a KeyError.

## Multiple examples

**Beginner:** A function that returns whether a number is even or odd.
**Intermediate:** A script that reads a list of customer dicts and returns only those in a specific region.
**Real-world:** A script that reads a raw CSV export, skips malformed rows (wrapped in try/except so one bad row doesn't crash the whole run), and writes a cleaned CSV — the exact shape of a lightweight, repeatable data-cleaning script.

## ⚠️ Common mistakes

- **Writing one long block of code instead of functions.** This makes a script hard to test, reuse, or debug — breaking logic into small, named functions is a core habit to build early.
- **Letting one bad row crash the entire script.** Real files always have some malformed data — wrapping the risky part in try/except (and logging what was skipped) keeps the script robust.
- **Confusing a list and a dict**, or using the wrong one for the job — a list is for an ordered sequence, a dict is for fast lookup by key.
- **Not closing a file** (or not using \`with\`, which closes it automatically) — this can leave data unwritten or the file locked on some systems.

## Real-world Data Analyst use cases

- **Any repetitive cleaning task:** a script that runs the same cleaning steps on every new weekly export.
- **Sales analysis:** a script that reads a raw transactions file and computes category totals without needing pandas for a simple case.
- **Data quality:** a script that scans a file and reports every row that doesn't match an expected format.

## Related concepts

\`\`\`
Python Fundamentals ← you are here
  ↓
Jupyter Notebooks & Exploratory Workflow
  ↓
NumPy
  ↓
Pandas
  ↓
Data Visualization with Python / Working with APIs / Regular Expressions
\`\`\`

## Practice questions

### Easy
1. Write a function that takes a list of numbers and returns their sum.

### Medium
2. Write a script that reads a list of dicts (each with a "category" and "amount" key) and returns a dict of total amount per category.

### Interview/Advanced
3. Why is wrapping file-reading logic in try/except considered a best practice rather than just letting the script fail on a bad file?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`def total(numbers): return sum(numbers)\`
2. \`def totals_by_category(rows): result = {}; [result.update({r["category"]: result.get(r["category"], 0) + r["amount"]}) for r in rows]; return result\` (a straightforward loop-based version is equally correct and often clearer).
3. A script that crashes outright on a missing/malformed file gives no useful information and stops any downstream processing entirely; catching the specific expected exception (e.g., FileNotFoundError) lets the script fail gracefully with a clear message, or skip/log the problem and continue, which is far more robust for a real, repeatable data pipeline.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between a list and a dictionary in Python?**
Short answer: A list is an ordered collection accessed by position (index); a dictionary is a collection of key-value pairs accessed by key, optimized for fast lookup.

### Conceptual questions
**Q: Why use a function instead of writing the same logic inline multiple times?**
Short answer: Functions make logic reusable, testable in isolation, and easier to read and maintain — changing the logic in one place updates every use, instead of hunting down every duplicated copy.

### Scenario-based questions
**Q: A script processing a 10,000-row CSV crashes on row 4,521 due to a malformed value. How would you make it more robust?**
Short answer: Wrap the row-processing logic in a try/except block that catches the specific expected error, logs or skips the bad row, and continues processing the rest of the file instead of stopping entirely.

### Practical questions
**Q: Write a function that reads a CSV and returns the average of a numeric column, skipping any row where that value is missing or invalid.**
Short answer: Iterate rows, attempt to convert the value with a try/except (or a check before converting), skip invalid ones, and compute sum/count only over the valid values.

## Interview traps / tricky points

- Mutable default arguments (e.g., \`def f(items=[])\`) are a classic Python gotcha — the same list object persists across calls unless a new one is created inside the function.
- Using \`==\` vs. \`is\` for comparison is commonly confused — \`==\` checks value equality, \`is\` checks object identity.

## Best practices

- Break logic into small, well-named functions rather than one long script.
- Always handle the specific exceptions you expect (FileNotFoundError, ValueError), rather than a bare \`except:\` that hides real bugs.
- Use \`with open(...)\` so files are always closed properly, even if an error occurs.

---

### ⚡ Quick Revision

**list** → ordered collection, indexed by position
**dict** → key-value pairs, indexed by key
**function** → reusable, named, testable logic block
**try/except** → handle expected errors gracefully instead of crashing
`);

setNote('python-notebooks', `
## 🎯 What is it?

A **Jupyter notebook** is an interactive environment for writing and running Python in small, independent chunks called **cells** — mixing code, its output, and narrative markdown text in one document. It's the standard environment for exploratory data analysis in Python.

## 💡 Why is it important?

Notebooks let you explore data step by step, see results immediately, and iterate quickly — but using them well (not just as a place to paste code) is what makes a shared notebook actually readable and trustworthy by someone else, including future you.

## Core concept

### Cells & execution order
Cells can be run in *any* order, and Jupyter remembers each cell's output independently of the order they appear on the page. This means a notebook can be run "out of order" and still show old, stale, or misleading output for a cell that hasn't actually been re-run against the current state — a notorious and common source of hidden bugs.

### Markdown narration
Text cells (using Markdown formatting) let you explain *why* a step is being taken, not just what the code does — turning a notebook into a readable analysis narrative rather than a bare code dump.

### Reproducibility
The only way to be sure a notebook's results are trustworthy is to **Restart Kernel and Run All** — clearing all memory and re-running every cell from top to bottom in order. If it errors, or produces different output than before, the notebook wasn't actually reproducible.

## Syntax / Formula / Structure

A well-organized notebook typically follows this structure:

\`\`\`
1. Markdown cell   → title and purpose of the analysis
2. Code cell        → imports
3. Markdown cell    → "Step 1: Load and inspect the data"
4. Code cell        → load data, .head(), .info()
5. Markdown cell    → "Step 2: Clean the data"
6. Code cell        → cleaning steps
7. Markdown cell    → "Finding: ..."
8. Code cell        → the chart/result supporting that finding
\`\`\`

## 📊 Example

**The problem:** A notebook cell early on defines \`df = df[df["amount"] > 0]\` (filtering out invalid rows). Later, a cell higher up in the notebook is edited and re-run — but the filtering cell below it is never re-run again.

**What happens:** Every cell after the filtering cell still shows its *old* output from before the edit, silently disagreeing with the notebook's current top-to-bottom logic — anyone reading it top to bottom would draw the wrong conclusion.

**The fix:** Restart the kernel and "Run All" cells in order — if the notebook reproduces the same result cleanly, it's trustworthy; if it errors or changes, something in the analysis depended on stale, out-of-order execution.

## Multiple examples

**Beginner:** A single notebook with 3 cells: load data, inspect with \`.head()\`, and a basic chart.
**Intermediate:** A notebook with markdown headers dividing it into "Load," "Clean," "Analyze," and "Visualize" sections, matching the [Data Analytics Lifecycle](/skills/data-analytics-lifecycle).
**Real-world:** A notebook meant to be shared with a stakeholder — restarted and run top-to-bottom before sharing, with markdown cells explaining each finding in plain language, and exported as a PDF/HTML report for someone without a Python environment.

## ⚠️ Common mistakes

- **Trusting a notebook's current on-screen output without re-running it top to bottom.** Out-of-order execution is one of the most common sources of a wrong or misleading "finding" in a shared notebook.
- **Pasting code with no markdown narration.** A notebook full of unexplained code cells is hard for anyone else — or future you — to follow or trust.
- **Leaving debugging/exploration cells in a "final" notebook**, making it unclear which parts are the actual analysis versus leftover scratch work.
- **Not clearing outputs before committing to version control**, which bloats file size and creates noisy diffs unrelated to actual code changes.

## Real-world Data Analyst use cases

- **Any exploratory analysis:** the default environment for interactively investigating a new dataset before building a final report.
- **Sharing findings:** exporting a clean, narrated notebook as a readable report for a stakeholder or teammate.
- **Reproducible handoffs:** ensuring a notebook someone else inherits can actually be re-run and trusted, not just read.

## Related concepts

\`\`\`
Python Fundamentals
  ↓
Jupyter Notebooks & Exploratory Workflow ← you are here
  ↓
NumPy → Pandas
  ↓
Data Visualization with Python
\`\`\`

## Practice questions

### Easy
1. What does "Restart Kernel and Run All" do, and why is it useful?

### Medium
2. A colleague shares a notebook where a chart near the bottom doesn't match the data described in the markdown above it. What's the most likely cause?

### Interview/Advanced
3. Why can a notebook that "runs fine" as you're actively working in it still be untrustworthy once shared with someone else?

<details><summary><strong>Answer / Solution</strong></summary>

1. It clears all stored variables and re-runs every cell in top-to-bottom order from a clean state — the only reliable way to confirm the notebook's results are actually reproducible.
2. The chart cell likely wasn't re-run after an earlier cell (that the data depends on) was edited — its output is stale, from before the edit.
3. While actively working, cells are often run out of order, edited, and re-run selectively — this can leave stale output in some cells even though everything "looks" fine on screen; only a full top-to-bottom restart-and-run-all confirms the notebook is genuinely reproducible for someone starting fresh.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why are Jupyter notebooks popular for exploratory data analysis?**
Short answer: They let you run code in small steps, see results immediately, and mix explanation with code and output in one document — ideal for iterative, exploratory work.

### Conceptual questions
**Q: What's the risk of cells being run out of order?**
Short answer: A notebook's displayed output can silently become stale or inconsistent with the current code and data, misleading anyone reading it top to bottom — including the person who wrote it.

### Scenario-based questions
**Q: You're handed a notebook that "worked before" but now throws an error when run top to bottom. What's your first move?**
Short answer: Assume the previous author was likely relying on out-of-order execution or leftover state from earlier work; work through the error from the top, fixing each cell so the notebook genuinely runs cleanly start to finish.

### Practical questions
**Q: How would you prepare a notebook to share with a non-technical stakeholder?**
Short answer: Restart and run it top-to-bottom to confirm reproducibility, add markdown narration explaining findings in plain language, remove scratch/debug cells, and export it as a clean HTML/PDF report.

## Interview traps / tricky points

- "It runs on my machine" isn't the same as "it's reproducible" — a notebook can rely on hidden state from cells that were run and later deleted or reordered.
- Global variables from earlier, unrelated work in the same kernel session can silently leak into a notebook's results if the kernel isn't restarted.

## Best practices

- Restart and run top-to-bottom before considering any notebook "done" or ready to share.
- Use markdown cells to explain *why*, not just narrate *what* the code does.
- Keep exploratory/scratch cells separate from the final, clean analysis — or remove them before sharing.
- Clear cell outputs before committing a notebook to version control.

---

### ⚡ Quick Revision

**Cells** → can run out of order; always verify with Restart & Run All
**Markdown cells** → narrate the *why*, not just the code
**Reproducibility** → the notebook must run cleanly top-to-bottom from a fresh kernel
**Before sharing:** restart, run all, add narration, remove scratch cells
`);

setNote('numpy', `
## 🎯 What is it?

**NumPy** is Python's core library for working with numeric arrays efficiently — it lets you perform math on entire collections of numbers at once (vectorized operations) instead of writing a manual loop, and it's the numeric foundation pandas and most of the Python data stack are built on.

## 💡 Why is it important?

Understanding NumPy arrays makes pandas' behavior far less mysterious, since a pandas DataFrame is essentially a labeled wrapper around NumPy arrays underneath. NumPy operations are also dramatically faster than an equivalent hand-written Python loop, which matters once datasets grow large.

## Core concept

### Arrays
A NumPy array (\`ndarray\`) is a grid of values, all the same type, that can be 1-dimensional (like a list) or multi-dimensional (like a table or matrix). Arrays support slicing similarly to Python lists, but extended to multiple dimensions at once.

### Vectorized operations
Instead of looping element by element, NumPy lets you apply an operation to an entire array in one step — this is both far more concise to write and much faster to run, since the looping happens in optimized, compiled code rather than in Python itself.

### Broadcasting
NumPy's rule for applying an operation between arrays of *different* shapes, by automatically "stretching" the smaller one — e.g., adding a single number to every element of an array, without writing a loop or manually resizing anything.

### Aggregations
Functions like \`sum\`, \`mean\`, \`min\`, \`max\` computed either over the whole array, or along a specific **axis** (e.g., column-wise vs. row-wise on a 2D array).

## Syntax

\`\`\`python
import numpy as np

# Create arrays
prices = np.array([10, 20, 30, 40])
matrix = np.array([[1, 2, 3], [4, 5, 6]])

# Vectorized operation (no loop needed)
discounted = prices * 0.9

# Broadcasting: adding a scalar to every element
adjusted = prices + 5

# Aggregation along an axis
column_sums = matrix.sum(axis=0)   # sum down each column
row_sums = matrix.sum(axis=1)      # sum across each row
\`\`\`

## 📊 Example

**Task:** Normalize a list of test scores to a 0–1 scale.

**Loop-based version:**

\`\`\`python
scores = [60, 75, 90, 45]
min_s, max_s = min(scores), max(scores)
normalized = [(s - min_s) / (max_s - min_s) for s in scores]
\`\`\`

**Vectorized NumPy version:**

\`\`\`python
import numpy as np
scores = np.array([60, 75, 90, 45])
normalized = (scores - scores.min()) / (scores.max() - scores.min())
\`\`\`

**Output (both):** \`[0.333, 0.667, 1.0, 0.0]\`

**Explanation:** The NumPy version computes the subtraction and division across the *entire* array in one expression — no explicit loop — and produces identical results, but scales far better to large arrays.

## Multiple examples

**Beginner:** \`prices * 1.1\` — apply a 10% increase to every price in an array at once.
**Intermediate:** \`matrix[:, 1]\` — slice out the entire second column of a 2D array.
**Real-world:** Computing a column-wise average across a 2D array of daily sales-by-region data with \`data.mean(axis=0)\`, the NumPy operation directly underlying a pandas \`.mean()\` call.

## ⚠️ Common mistakes

- **Writing a manual Python loop over a NumPy array** instead of using a vectorized operation — this defeats the entire performance purpose of using NumPy in the first place.
- **Confusing \`axis=0\` and \`axis=1\`.** \`axis=0\` operates *down* columns (collapsing rows); \`axis=1\` operates *across* rows (collapsing columns) — easy to mix up, and a common source of a subtly wrong aggregation.
- **Assuming broadcasting always works between any two shapes.** It only works when shapes are compatible by NumPy's broadcasting rules; mismatched shapes raise a clear error rather than silently producing a wrong result.

## Real-world Data Analyst use cases

- **Any large numeric transformation:** normalizing, scaling, or applying a formula across an entire column of data efficiently.
- **Pandas under the hood:** understanding why a pandas column operation like \`df["price"] * 1.1\` is fast — it's a NumPy vectorized operation underneath.
- **Statistics:** computing means, standard deviations, and other aggregates efficiently across large arrays as a foundation for [Descriptive Statistics](/skills/stats-descriptive).

## Related concepts

\`\`\`
Python Fundamentals → Jupyter Notebooks
  ↓
NumPy ← you are here
  ↓
Pandas (built on top of NumPy arrays)
  ↓
Data Visualization with Python
\`\`\`

## Practice questions

### Easy
1. Given \`arr = np.array([1, 2, 3, 4])\`, write a vectorized expression that doubles every value.

### Medium
2. Given a 2D array of shape (3 rows, 4 columns), write an expression that computes the sum of each column.

### Interview/Advanced
3. Rewrite this loop as a single vectorized NumPy expression: \`result = []; for x in values: result.append((x - mean) / std)\`

<details><summary><strong>Answer / Solution</strong></summary>

1. \`arr * 2\`
2. \`matrix.sum(axis=0)\`
3. \`result = (values - mean) / std\` (assuming \`values\` is a NumPy array) — this is the vectorized form of standardizing a set of values (subtracting the mean, dividing by the standard deviation), applied to the entire array in one step.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is a vectorized operation, and why is it faster than a loop?**
Short answer: It applies an operation to an entire array at once using NumPy's optimized, compiled internals, rather than looping element by element in plain Python — which avoids Python's per-iteration overhead and is dramatically faster on large arrays.

### Conceptual questions
**Q: What is broadcasting?**
Short answer: NumPy's rule for automatically applying an operation between arrays of different (but compatible) shapes, by conceptually "stretching" the smaller array to match — without writing an explicit loop or manually resizing anything.

### Scenario-based questions
**Q: A column-wise average on a sales-by-region matrix returns row averages instead of column averages. What's the likely bug?**
Short answer: The wrong axis was used — \`axis=0\` averages down columns, \`axis=1\` averages across rows; swapping them is a very common and easy mistake.

### Practical questions
**Q: How would you explain, to someone new to NumPy, why pandas operations are usually fast?**
Short answer: Pandas DataFrames are built on top of NumPy arrays, so most pandas operations are really vectorized NumPy operations underneath — that's why they run efficiently on large columns without an explicit Python loop.

## Interview traps / tricky points

- \`axis=0\` vs. \`axis=1\` is one of the most commonly mixed-up NumPy concepts — always sanity check the result's shape against expectations.
- Broadcasting failures raise a clear shape-mismatch error rather than silently producing a wrong result — but knowing *why* two shapes are incompatible is a common interview probe.

## Best practices

- Always prefer a vectorized operation over a manual Python loop on a NumPy array.
- Double-check the axis argument against a small test case when computing an aggregation on a 2D array.
- Use \`.shape\` liberally while debugging to confirm an array or the result of an operation has the dimensions you expect.

---

### ⚡ Quick Revision

**Vectorized operation** → apply math to a whole array at once, no loop, much faster
**Broadcasting** → automatically applies an operation across compatible mismatched shapes
**axis=0** → down columns · **axis=1** → across rows
**Remember:** pandas is built on NumPy arrays — this is why pandas operations are fast
`);
