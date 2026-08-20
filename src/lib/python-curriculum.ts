// Full Python curriculum tree, transcribed from the user-supplied
// "python.md" folder structure. Same treatment as the SQL, Power BI,
// Git & GitHub, and Tableau curricula: a reference map only, not
// individually authored topic pages. Topic names come straight from the
// source file names with the ordering prefix stripped and remaining
// hyphens turned into spaces (aside from compound terms like "f-Strings",
// "K-Means", "E-Commerce", and "To-Do", kept as written); section titles
// are lightly cleaned up for readability but map 1:1 to the source's
// numbered folders. Python keywords and module names (for, while, os,
// sys, __init__, etc.) are kept exactly as written, lowercase, since
// that's their real spelling. The nested 38-CLOUD-PYTHON folder (AWS /
// Azure / GCP, each with its own services) is flattened with the provider
// name prefixed onto each service so the topics stay unambiguous outside
// their folder context.
export interface PythonSection {
  id: string;
  title: string;
  topics: string[];
}

export const PYTHON_CURRICULUM: PythonSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Python', 'Python Use Cases', 'Python Installation', 'Python Versions', 'Python Interpreter', 'VS Code Setup', 'Jupyter Notebook', 'Python Syntax', 'Indentation', 'Comments', 'Python PEP8'] },
  { id: 'python-basics', title: 'Python Basics', topics: ['Variables', 'Constants', 'Keywords', 'Identifiers', 'Data Types', 'Type Checking', 'Type Conversion', 'Input', 'Output', 'Print'] },
  { id: 'operators', title: 'Operators', topics: ['Arithmetic Operators', 'Assignment Operators', 'Comparison Operators', 'Logical Operators', 'Identity Operators', 'Membership Operators', 'Bitwise Operators', 'Operator Precedence'] },
  { id: 'strings', title: 'Strings', topics: ['String Basics', 'Indexing', 'Slicing', 'String Methods', 'String Formatting', 'f-Strings', 'Escape Characters', 'Regular Expressions', 'Advanced String Processing'] },
  { id: 'conditionals', title: 'Conditionals', topics: ['if', 'elif', 'else', 'Nested Conditions', 'Conditional Expressions', 'Match Case'] },
  { id: 'loops', title: 'Loops', topics: ['for', 'while', 'range', 'Nested Loops', 'break', 'continue', 'pass', 'Loop Patterns'] },
  { id: 'lists', title: 'Lists', topics: ['List Basics', 'Indexing', 'Slicing', 'Add Elements', 'Remove Elements', 'Sort', 'Reverse', 'List Methods', 'Nested Lists', 'List Comprehensions'] },
  { id: 'tuples', title: 'Tuples', topics: ['Tuple Basics', 'Indexing', 'Slicing', 'Tuple Methods', 'Packing', 'Unpacking', 'Nested Tuples'] },
  { id: 'sets', title: 'Sets', topics: ['Set Basics', 'Add Remove', 'Union', 'Intersection', 'Difference', 'Symmetric Difference', 'Set Comprehensions'] },
  { id: 'dictionaries', title: 'Dictionaries', topics: ['Dictionary Basics', 'Keys and Values', 'Add Update Delete', 'Dictionary Methods', 'Nested Dictionaries', 'Dictionary Comprehensions', 'Advanced Dictionaries'] },
  { id: 'functions', title: 'Functions', topics: ['Function Basics', 'Parameters', 'Arguments', 'Return', 'Default Arguments', 'Keyword Arguments', 'Positional Arguments', 'args', 'kwargs', 'Scope', 'Local vs Global', 'Nested Functions', 'Lambda Functions', 'Recursion'] },
  { id: 'modules-packages', title: 'Modules & Packages', topics: ['import', 'from import', 'Built in Modules', 'Creating Modules', 'Packages', '__init__', '__name__', 'Module Structure'] },
  { id: 'file-handling', title: 'File Handling', topics: ['File Basics', 'Open', 'Read', 'Write', 'Append', 'with Statement', 'TXT Files', 'CSV Files', 'JSON Files', 'Excel Files', 'File System Operations'] },
  { id: 'error-handling', title: 'Error Handling', topics: ['Errors vs Exceptions', 'try', 'except', 'else', 'finally', 'Multiple Exceptions', 'raise', 'Custom Exceptions', 'Exception Design'] },
  { id: 'oop', title: 'OOP', topics: ['What is OOP', 'Classes', 'Objects', 'Attributes', 'Methods', '__init__', 'Instance Methods', 'Class Methods', 'Static Methods', 'Inheritance', 'Multiple Inheritance', 'Encapsulation', 'Abstraction', 'Polymorphism', 'Magic Methods', 'Composition'] },
  { id: 'data-structures', title: 'Data Structures', topics: ['Arrays', 'Stack', 'Queue', 'Deque', 'Linked List', 'Hash Table', 'Trees', 'Binary Tree', 'Binary Search Tree', 'Heap', 'Graph'] },
  { id: 'algorithms', title: 'Algorithms', topics: ['Algorithm Basics', 'Searching', 'Linear Search', 'Binary Search', 'Sorting', 'Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Recursion', 'Greedy', 'Backtracking', 'Dynamic Programming', 'Complexity'] },
  { id: 'comprehensions-generators', title: 'Comprehensions & Generators', topics: ['List Comprehension', 'Set Comprehension', 'Dictionary Comprehension', 'Generator Expressions', 'yield', 'Generators', 'Iterators'] },
  { id: 'iterators-decorators', title: 'Iterators & Decorators', topics: ['Iterable vs Iterator', 'iter', 'next', 'Custom Iterators', 'Decorators', 'Function Decorators', 'Class Decorators', 'Decorator Patterns'] },
  { id: 'date-time', title: 'Date & Time', topics: ['datetime', 'date', 'time', 'timedelta', 'Timezones', 'Date Formatting', 'Date Parsing', 'Time Series Basics'] },
  { id: 'regex', title: 'Regex', topics: ['Regex Basics', 'Patterns', 'Character Classes', 'Quantifiers', 'Groups', 'Search', 'Match', 'Findall', 'Replace', 'Advanced Regex'] },
  { id: 'standard-library', title: 'Standard Library', topics: ['os', 'sys', 'pathlib', 'math', 'statistics', 'random', 'collections', 'itertools', 'functools', 'operator', 'json', 'csv', 'sqlite3', 'logging'] },
  { id: 'virtual-environments', title: 'Virtual Environments', topics: ['venv', 'pip', 'requirements', 'Dependency Management', 'Virtual Environment Structure', 'Package Installation'] },
  { id: 'testing', title: 'Testing', topics: ['Testing Basics', 'unittest', 'pytest', 'Assertions', 'Fixtures', 'Mocking', 'Test Coverage', 'Test Driven Development'] },
  { id: 'debugging-logging', title: 'Debugging & Logging', topics: ['Debugging Basics', 'Debugger', 'Breakpoints', 'Logging Basics', 'Log Levels', 'Logging Configuration', 'Production Logging'] },
  { id: 'database-sql', title: 'Databases & SQL', topics: ['SQL Basics', 'SQLite', 'PostgreSQL', 'MySQL', 'SQL Connections', 'SQLAlchemy', 'PyODBC', 'CRUD', 'Transactions', 'Python SQL Projects'] },
  { id: 'numpy', title: 'NumPy', topics: ['NumPy Basics', 'Arrays', 'Indexing', 'Slicing', 'Reshaping', 'Broadcasting', 'Vectorization', 'Mathematical Operations', 'Statistics', 'NumPy Performance'] },
  { id: 'pandas', title: 'Pandas', topics: ['Pandas Basics', 'Series', 'DataFrames', 'Reading Data', 'Writing Data', 'Selection', 'Filtering', 'Sorting', 'GroupBy', 'Aggregation', 'Merge', 'Join', 'Concat', 'Pivot', 'Melt', 'Apply', 'Map', 'Missing Values', 'Duplicates', 'Data Types', 'Date Time', 'Pandas Optimization'] },
  { id: 'data-cleaning', title: 'Data Cleaning', topics: ['Missing Values', 'Duplicates', 'Outliers', 'Data Types', 'Text Cleaning', 'Date Cleaning', 'Standardization', 'Validation', 'Transformation', 'Data Quality'] },
  { id: 'data-visualization', title: 'Data Visualization', topics: ['Matplotlib', 'Plotly', 'Seaborn', 'Line Charts', 'Bar Charts', 'Scatter Plots', 'Histograms', 'Box Plots', 'Heatmaps', 'Subplots', 'Annotations', 'Visualization Best Practices'] },
  { id: 'exploratory-data-analysis', title: 'Exploratory Data Analysis', topics: ['EDA Basics', 'Data Profiling', 'Descriptive Statistics', 'Distribution Analysis', 'Correlation', 'Outlier Analysis', 'Trend Analysis', 'Segmentation', 'EDA Workflow'] },
  { id: 'statistics', title: 'Statistics', topics: ['Descriptive Statistics', 'Mean', 'Median', 'Mode', 'Variance', 'Standard Deviation', 'Probability', 'Distributions', 'Normal Distribution', 'Sampling', 'Confidence Intervals', 'Hypothesis Testing', 'P-Value', 'T-Test', 'Chi-Square', 'ANOVA', 'Correlation and Regression'] },
  { id: 'scikit-learn', title: 'Scikit-learn', topics: ['ML Basics', 'Train Test Split', 'Preprocessing', 'Feature Engineering', 'Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'KNN', 'SVM', 'Clustering', 'K-Means', 'Model Evaluation', 'Cross Validation', 'Hyperparameter Tuning', 'Pipelines'] },
  { id: 'apis', title: 'APIs', topics: ['API Basics', 'HTTP', 'GET', 'POST', 'PUT', 'DELETE', 'Requests', 'JSON APIs', 'Authentication', 'Pagination', 'Rate Limits', 'API Projects'] },
  { id: 'web-scraping', title: 'Web Scraping', topics: ['Web Scraping Basics', 'Requests', 'BeautifulSoup', 'HTML', 'CSS Selectors', 'XPath', 'Selenium', 'Dynamic Websites', 'Pagination', 'Scraping Projects'] },
  { id: 'data-engineering', title: 'Data Engineering', topics: ['ETL', 'ELT', 'Data Pipelines', 'Batch Processing', 'Incremental Processing', 'Data Validation', 'Data Quality', 'Logging', 'Error Handling', 'Workflow Automation', 'Production Pipelines'] },
  { id: 'pyspark', title: 'PySpark', topics: ['Spark Basics', 'Spark Architecture', 'SparkSession', 'RDD', 'DataFrames', 'Schemas', 'Select', 'Filter', 'GroupBy', 'Aggregations', 'Joins', 'Window Functions', 'UDFs', 'Partitioning', 'Caching', 'Optimization', 'PySpark Projects'] },
  { id: 'databricks', title: 'Databricks', topics: ['Databricks Basics', 'Notebooks', 'Clusters', 'Delta Lake', 'Medallion Architecture', 'Bronze', 'Silver', 'Gold', 'Unity Catalog', 'Workflows', 'Jobs', 'Databricks Projects'] },
  { id: 'cloud-python', title: 'Cloud Python', topics: ['AWS S3', 'AWS Lambda', 'AWS Glue', 'AWS DynamoDB', 'AWS Boto3', 'Azure Blob Storage', 'Azure Functions', 'Azure Data Factory', 'GCP Cloud Storage', 'GCP Cloud Functions', 'GCP BigQuery'] },
  { id: 'web-development', title: 'Web Development', topics: ['Flask', 'FastAPI', 'REST APIs', 'Authentication', 'Middleware', 'Database Integration', 'API Documentation', 'Deployment'] },
  { id: 'automation', title: 'Automation', topics: ['File Automation', 'Excel Automation', 'PDF Automation', 'Email Automation', 'Report Automation', 'Web Automation', 'Scheduled Jobs', 'Workflow Automation'] },
  { id: 'concurrency', title: 'Concurrency', topics: ['Processes', 'Threads', 'Multiprocessing', 'AsyncIO', 'Async Await', 'Concurrent Futures', 'Parallel Processing'] },
  { id: 'performance', title: 'Performance', topics: ['Time Complexity', 'Memory Optimization', 'Profiling', 'Benchmarking', 'Generators', 'Vectorization', 'Caching', 'Multiprocessing', 'Performance Optimization'] },
  { id: 'python-security', title: 'Python Security', topics: ['Secure Coding', 'Input Validation', 'Secrets Management', 'Environment Variables', 'SQL Injection', 'Authentication', 'Authorization', 'Dependency Security'] },
  { id: 'git-github', title: 'Git & GitHub', topics: ['Git Basics', 'Repository', 'Commit', 'Branch', 'Merge', 'Pull Request', 'GitHub', 'README', 'Python Project Structure'] },
  { id: 'data-analyst-python', title: 'Python for Data Analysts', topics: ['NumPy', 'Pandas', 'Data Cleaning', 'EDA', 'Statistics', 'Visualization', 'SQL with Python', 'Excel with Python', 'Automated Reporting'] },
  { id: 'data-engineer-python', title: 'Python for Data Engineers', topics: ['ETL Pipelines', 'APIs', 'Databases', 'Batch Processing', 'PySpark', 'Databricks', 'AWS', 'Azure', 'Data Quality', 'Production Pipelines'] },
  { id: 'machine-learning', title: 'Machine Learning', topics: ['Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Model Evaluation', 'Ensemble Learning', 'XGBoost', 'LightGBM', 'ML Projects'] },
  { id: 'ai', title: 'AI', topics: ['AI Basics', 'LLMs', 'Prompt Engineering', 'OpenAI APIs', 'Embeddings', 'Vector Databases', 'RAG', 'AI Agents', 'AI Projects'] },
  { id: 'production-python', title: 'Production Python', topics: ['Project Architecture', 'Configuration', 'Environment Variables', 'Logging', 'Error Handling', 'Testing', 'CI-CD', 'Docker', 'Deployment', 'Monitoring', 'Documentation'] },
  { id: 'projects', title: 'Projects', topics: ['Calculator', 'Number Guessing Game', 'To-Do App', 'Expense Tracker', 'Contact Book', 'Web Scraper', 'Weather App', 'API Data Collector', 'Excel Automation', 'Data Cleaning Project', 'E-Commerce Analytics', 'Customer Analytics', 'ETL Pipeline', 'Data Engineering Pipeline', 'ML Project', 'Production Data Pipeline', 'End to End Data Platform', 'Real-Time Data Pipeline', 'AI Application', 'Production ML System'] },
  { id: 'practice', title: 'Practice', topics: ['Basics', 'Conditions', 'Loops', 'Functions', 'Data Structures', 'OOP', 'Algorithms', 'Pandas', 'NumPy', 'Data Analysis', 'Data Engineering', 'Interview Problems'] },
  { id: 'interview', title: 'Interview Practice', topics: ['Python Basics', 'Data Types', 'Functions', 'OOP', 'Data Structures', 'Algorithms', 'Pandas', 'NumPy', 'SQL Python', 'Data Analysis', 'Data Engineering', 'Scenario Based', 'Coding Problems'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Python Syntax', 'Built in Functions', 'String Methods', 'List Methods', 'Dictionary Methods', 'OOP', 'Pandas', 'NumPy', 'Regex', 'PySpark', 'Interview Patterns'] },
];
