// Full Spreadsheet curriculum tree, transcribed from the user-supplied
// "spreadsheet.md" folder structure. Same treatment as the SQL, Power BI,
// Git & GitHub, Tableau, Python, and Statistics curricula: a reference map
// only, not individually authored topic pages. Topic names come straight
// from the source file names with the ordering prefix stripped and
// remaining hyphens turned into spaces (aside from standard hyphenated
// terms like "Two-Way", "Multi-Level", "One-Variable"/"Two-Variable", and
// "What-If", kept as written); section titles are lightly cleaned up for
// readability but map 1:1 to the source's numbered folders. Function
// names (SUM, VLOOKUP, XLOOKUP, etc.) are kept exactly as written, in
// caps, since that's their real spelling. Some topics (e.g. "Slicers",
// "Power Pivot", "Data Cleaning") intentionally appear in more than one
// section, same as the source doc.
export interface SpreadsheetSection {
  id: string;
  title: string;
  topics: string[];
}

export const SPREADSHEET_CURRICULUM: SpreadsheetSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is a Spreadsheet', 'Spreadsheet Interface', 'Workbook', 'Worksheets', 'Rows and Columns', 'Cells and Ranges', 'Cell References', 'Data Types', 'Formula Bar', 'Spreadsheet Shortcuts'] },
  { id: 'basic-operations', title: 'Basic Operations', topics: ['Entering Data', 'Editing Data', 'Copy Paste', 'Fill Handle', 'AutoFill', 'Insert Rows', 'Insert Columns', 'Delete Rows', 'Delete Columns', 'Hide Unhide', 'Freeze Panes', 'Find and Replace'] },
  { id: 'formatting', title: 'Formatting', topics: ['Number Formatting', 'Currency', 'Percentage', 'Date Formatting', 'Text Formatting', 'Borders', 'Alignment', 'Fonts', 'Cell Colors', 'Custom Formats', 'Format Painter', 'Conditional Formatting'] },
  { id: 'formulas-foundations', title: 'Formulas Foundations', topics: ['Formula Basics', 'Operators', 'Arithmetic Formulas', 'Relative References', 'Absolute References', 'Mixed References', 'Formula Copying', 'Formula Evaluation', 'Formula Errors'] },
  { id: 'basic-functions', title: 'Basic Functions', topics: ['SUM', 'AVERAGE', 'MIN', 'MAX', 'COUNT', 'COUNTA', 'COUNTBLANK', 'SUBTOTAL'] },
  { id: 'logical-functions', title: 'Logical Functions', topics: ['IF', 'IFS', 'AND', 'OR', 'NOT', 'IFERROR', 'IFNA', 'SWITCH'] },
  { id: 'conditional-functions', title: 'Conditional Functions', topics: ['SUMIF', 'SUMIFS', 'COUNTIF', 'COUNTIFS', 'AVERAGEIF', 'AVERAGEIFS', 'Conditional Aggregation'] },
  { id: 'text-functions', title: 'Text Functions', topics: ['LEFT', 'RIGHT', 'MID', 'LEN', 'TRIM', 'CLEAN', 'UPPER', 'LOWER', 'PROPER', 'CONCAT', 'TEXTJOIN', 'SUBSTITUTE', 'REPLACE', 'FIND', 'SEARCH', 'TEXT'] },
  { id: 'date-time', title: 'Date & Time', topics: ['TODAY', 'NOW', 'DATE', 'DAY', 'MONTH', 'YEAR', 'WEEKDAY', 'WEEKNUM', 'EDATE', 'EOMONTH', 'DATEDIF', 'NETWORKDAYS', 'WORKDAY', 'Date Calculations'] },
  { id: 'lookup-reference', title: 'Lookup & Reference', topics: ['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'LOOKUP', 'INDEX', 'MATCH', 'XMATCH', 'INDEX MATCH', 'Two-Way Lookup', 'Approximate Match', 'Multiple Criteria Lookup'] },
  { id: 'dynamic-arrays', title: 'Dynamic Arrays', topics: ['Dynamic Arrays', 'FILTER', 'SORT', 'SORTBY', 'UNIQUE', 'SEQUENCE', 'TRANSPOSE', 'TAKE', 'DROP', 'CHOOSECOLS', 'CHOOSEROWS', 'Dynamic Array Patterns'] },
  { id: 'advanced-formulas', title: 'Advanced Formulas', topics: ['Nested Functions', 'Array Formulas', 'LET', 'LAMBDA', 'MAP', 'REDUCE', 'SCAN', 'BYROW', 'BYCOL', 'MAKEARRAY', 'Advanced Formula Patterns'] },
  { id: 'data-cleaning', title: 'Data Cleaning', topics: ['Remove Duplicates', 'Missing Values', 'Blank Cells', 'Error Values', 'Text Cleaning', 'Number Cleaning', 'Date Cleaning', 'Standardization', 'Data Type Conversion', 'Split Data', 'Merge Data', 'Data Validation'] },
  { id: 'tables', title: 'Tables', topics: ['Create Tables', 'Table Structure', 'Structured References', 'Calculated Columns', 'Total Rows', 'Table Styles', 'Table Filtering', 'Dynamic Tables'] },
  { id: 'sorting-filtering', title: 'Sorting & Filtering', topics: ['Basic Sort', 'Multi-Level Sort', 'Custom Sort', 'Basic Filters', 'Advanced Filters', 'Filter by Color', 'Filter by Condition', 'Dynamic Filters', 'Filter Logic'] },
  { id: 'pivot-tables', title: 'Pivot Tables', topics: ['Pivot Table Basics', 'Rows', 'Columns', 'Values', 'Filters', 'Grouping', 'Date Grouping', 'Calculated Fields', 'Show Values As', 'Slicers', 'Timelines', 'Pivot Table Optimization'] },
  { id: 'pivot-charts', title: 'Pivot Charts', topics: ['Pivot Charts', 'Chart Types', 'Pivot Chart Filters', 'Slicers', 'Dynamic Charts', 'Interactive Reports'] },
  { id: 'charts-visualization', title: 'Charts & Visualization', topics: ['Column Charts', 'Bar Charts', 'Line Charts', 'Area Charts', 'Pie Charts', 'Donut Charts', 'Scatter Charts', 'Combo Charts', 'Waterfall Charts', 'Histogram', 'Box Plot', 'Funnel Charts', 'Sparklines', 'Chart Selection'] },
  { id: 'dashboard-design', title: 'Dashboard Design', topics: ['Dashboard Structure', 'Layout', 'Visual Hierarchy', 'KPI Cards', 'Navigation', 'Interactive Filters', 'Slicers', 'Dynamic Charts', 'Conditional Formatting', 'Themes', 'Colors', 'Typography', 'Dashboard UX'] },
  { id: 'data-validation', title: 'Data Validation', topics: ['Dropdown Lists', 'Input Rules', 'Number Validation', 'Date Validation', 'Text Length', 'Custom Validation', 'Dependent Dropdowns', 'Error Messages'] },
  { id: 'import-export', title: 'Import & Export', topics: ['CSV', 'TXT', 'Excel Files', 'PDF Import', 'Web Import', 'Export to CSV', 'Export to PDF', 'External Data'] },
  { id: 'power-query', title: 'Power Query', topics: ['Power Query Basics', 'Data Connections', 'Data Cleaning', 'Data Transformation', 'Merge Queries', 'Append Queries', 'Group By', 'Pivot', 'Unpivot', 'Parameters', 'Custom Functions', 'M Language'] },
  { id: 'data-modeling', title: 'Data Modeling', topics: ['Relational Data', 'Primary Keys', 'Foreign Keys', 'Relationships', 'Fact Tables', 'Dimension Tables', 'Star Schema', 'Data Model Design'] },
  { id: 'financial-modeling', title: 'Financial Modeling', topics: ['Financial Statements', 'Income Statement', 'Balance Sheet', 'Cash Flow', 'Revenue Forecast', 'Expense Forecast', 'Budgeting', 'Variance Analysis', 'Financial Ratios', 'DCF', 'Scenario Modeling'] },
  { id: 'business-analytics', title: 'Business Analytics', topics: ['Sales Analytics', 'Marketing Analytics', 'Customer Analytics', 'Product Analytics', 'Financial Analytics', 'HR Analytics', 'Operations Analytics', 'Supply Chain Analytics'] },
  { id: 'kpi-analytics', title: 'KPI Analytics', topics: ['Revenue', 'Profit', 'Gross Margin', 'AOV', 'Conversion Rate', 'Customer Acquisition Cost', 'Customer Lifetime Value', 'Retention', 'Churn', 'Growth', 'MoM', 'QoQ', 'YoY'] },
  { id: 'what-if-analysis', title: 'What-If Analysis', topics: ['Goal Seek', 'Scenario Manager', 'Data Tables', 'One-Variable Analysis', 'Two-Variable Analysis', 'Sensitivity Analysis', 'Scenario Modeling'] },
  { id: 'solver-optimization', title: 'Solver & Optimization', topics: ['Solver Basics', 'Objective Functions', 'Constraints', 'Optimization', 'Resource Allocation', 'Business Optimization'] },
  { id: 'automation', title: 'Automation', topics: ['Macros', 'VBA Basics', 'VBA Variables', 'VBA Loops', 'VBA Conditions', 'VBA Functions', 'VBA Workbook Automation', 'VBA Report Automation', 'Office Scripts', 'Automated Workflows'] },
  { id: 'advanced-excel', title: 'Advanced Excel', topics: ['Power Pivot', 'Data Model', 'DAX Basics', 'Relationships', 'Measures', 'Calculated Columns', 'KPIs', 'Advanced Data Models'] },
  { id: 'google-sheets', title: 'Google Sheets', topics: ['Google Sheets Basics', 'Google Sheets Functions', 'QUERY', 'FILTER', 'ARRAYFORMULA', 'IMPORTRANGE', 'GOOGLEFINANCE', 'Apps Script', 'Automation'] },
  { id: 'spreadsheet-with-sql', title: 'Spreadsheets with SQL', topics: ['SQL to Spreadsheet', 'Database Connections', 'Import SQL Data', 'SQL Queries', 'Spreadsheet Analytics'] },
  { id: 'spreadsheet-with-power-bi', title: 'Spreadsheets with Power BI', topics: ['Excel to Power BI', 'Power Query', 'Data Models', 'Power Pivot', 'DAX', 'Excel to Power BI Workflow'] },
  { id: 'productivity', title: 'Productivity', topics: ['Keyboard Shortcuts', 'Named Ranges', 'Templates', 'Reusable Formulas', 'Dynamic Templates', 'Workbook Organization', 'Best Practices'] },
  { id: 'best-practices', title: 'Best Practices', topics: ['Workbook Structure', 'Formula Design', 'Error Handling', 'Data Integrity', 'Documentation', 'Version Control', 'Auditability', 'Maintainability'] },
  { id: 'real-world-dashboards', title: 'Real-World Dashboards', topics: ['Sales Dashboard', 'Finance Dashboard', 'Marketing Dashboard', 'HR Dashboard', 'Operations Dashboard', 'Inventory Dashboard', 'Customer Dashboard', 'Executive Dashboard'] },
  { id: 'projects', title: 'Projects', topics: ['Student Gradebook', 'Personal Budget', 'Employee Tracker', 'Sales Analysis', 'Inventory Analysis', 'Customer Analysis', 'Financial Model', 'Sales Dashboard', 'Marketing Dashboard', 'HR Dashboard', 'Automated Reporting System', 'Financial Forecasting Model', 'Enterprise Dashboard', 'End to End Analytics System'] },
  { id: 'practice', title: 'Practice', topics: ['Formulas', 'Functions', 'Data Cleaning', 'Lookups', 'Pivot Tables', 'Dashboards', 'Data Analysis', 'Real World Scenarios', 'Case Studies'] },
  { id: 'interview', title: 'Interview Practice', topics: ['Beginner', 'Intermediate', 'Advanced', 'Formula Problems', 'Data Cleaning', 'Pivot Table', 'Dashboard', 'Business Case Studies', 'Scenario Based'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Formula Cheatsheet', 'Function Cheatsheet', 'Lookup Cheatsheet', 'Text Functions', 'Date Functions', 'Keyboard Shortcuts', 'Pivot Table Guide', 'Dashboard Guide', 'Data Cleaning Guide'] },
];
