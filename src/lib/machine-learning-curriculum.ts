// Full Machine Learning curriculum tree, transcribed from the user-supplied
// "Machine Learning.md" folder structure. Same treatment as the other
// curriculum roadmaps: a reference map only, not individually authored
// topic pages. Topic names come straight from the source file names with
// the ordering prefix stripped and remaining hyphens turned into spaces
// (aside from standard hyphenated ML/stats terms like "R-Squared",
// "K-Means", "K-Fold", "K-Nearest", "t-SNE", "TF-IDF", "N-Grams",
// "F1-Score", "ROC-AUC", "PR-AUC", "Q-Learning", "Bias-Variance", and
// "Real-Time", kept as written); section titles are lightly cleaned up for
// readability but map 1:1 to the source's numbered folders. "A-B-Testing"
// is rendered as "A/B Testing" for readability, matching the same call
// made in the Statistics curriculum. Some topics (e.g. "Regression",
// "Classification", "Feature Importance", "Cross-Validation") intentionally
// appear in more than one section, same as the source doc.
export interface MachineLearningSection {
  id: string;
  title: string;
  topics: string[];
}

export const MACHINE_LEARNING_CURRICULUM: MachineLearningSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Machine Learning', 'AI vs ML vs DL', 'Types of Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Semi-Supervised Learning', 'Reinforcement Learning', 'Machine Learning Workflow', 'Features', 'Labels', 'Training Data', 'Validation Data', 'Test Data', 'ML Use Cases'] },
  { id: 'python-for-ml', title: 'Python for ML', topics: ['Python Basics', 'Functions', 'Data Structures', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'Virtual Environments'] },
  { id: 'mathematics-for-ml', title: 'Mathematics for ML', topics: ['Arithmetic', 'Algebra', 'Functions', 'Equations', 'Logarithms', 'Exponents', 'Summation', 'Mathematical Notation'] },
  { id: 'linear-algebra', title: 'Linear Algebra', topics: ['Scalars', 'Vectors', 'Matrices', 'Matrix Operations', 'Matrix Multiplication', 'Transpose', 'Inverse', 'Determinant', 'Identity Matrix', 'Rank', 'Linear Transformations', 'Eigenvalues', 'Eigenvectors', 'Dot Product', 'Norms', 'Singular Value Decomposition'] },
  { id: 'calculus-for-ml', title: 'Calculus for ML', topics: ['Functions', 'Limits', 'Derivatives', 'Partial Derivatives', 'Gradients', 'Chain Rule', 'Optimization', 'Local Minimum', 'Local Maximum', 'Gradient', 'Hessian'] },
  { id: 'probability', title: 'Probability', topics: ['Probability Basics', 'Sample Space', 'Events', 'Conditional Probability', 'Bayes Theorem', 'Random Variables', 'Expected Value', 'Variance', 'Covariance', 'Probability Distributions', 'Normal Distribution', 'Bernoulli', 'Binomial', 'Poisson'] },
  { id: 'statistics-for-ml', title: 'Statistics for ML', topics: ['Mean', 'Median', 'Mode', 'Variance', 'Standard Deviation', 'Percentiles', 'Correlation', 'Sampling', 'Sampling Distribution', 'Central Limit Theorem', 'Confidence Intervals', 'Hypothesis Testing', 'P-Values', 'Statistical Significance', 'Bias'] },
  { id: 'data-preprocessing', title: 'Data Preprocessing', topics: ['Data Collection', 'Data Inspection', 'Data Cleaning', 'Missing Values', 'Duplicates', 'Invalid Values', 'Outliers', 'Data Types', 'Encoding', 'Scaling', 'Normalization', 'Standardization', 'Data Quality'] },
  { id: 'exploratory-data-analysis', title: 'Exploratory Data Analysis', topics: ['Univariate Analysis', 'Bivariate Analysis', 'Multivariate Analysis', 'Distribution Analysis', 'Correlation Analysis', 'Outlier Analysis', 'Feature Relationships', 'Pattern Detection', 'EDA Workflow'] },
  { id: 'feature-engineering', title: 'Feature Engineering', topics: ['Feature Creation', 'Feature Transformation', 'Feature Scaling', 'Feature Encoding', 'Binning', 'Log Transformation', 'Polynomial Features', 'Date Time Features', 'Text Features', 'Interaction Features', 'Feature Pipelines'] },
  { id: 'feature-selection', title: 'Feature Selection', topics: ['Why Feature Selection', 'Filter Methods', 'Wrapper Methods', 'Embedded Methods', 'Correlation Based Selection', 'Variance Threshold', 'Mutual Information', 'Recursive Feature Elimination', 'Feature Importance'] },
  { id: 'train-validation-test', title: 'Train, Validation & Test', topics: ['Training Set', 'Validation Set', 'Test Set', 'Train Test Split', 'Random Splitting', 'Stratified Splitting', 'Data Leakage', 'Time Based Splitting', 'Cross-Validation'] },
  { id: 'supervised-learning', title: 'Supervised Learning', topics: ['Supervised Learning Concept', 'Regression', 'Classification', 'Features and Labels', 'Model Training', 'Predictions', 'Model Parameters', 'Model Evaluation'] },
  { id: 'linear-regression', title: 'Linear Regression', topics: ['Simple Linear Regression', 'Multiple Linear Regression', 'Least Squares', 'Cost Function', 'Gradient Descent', 'Coefficients', 'Intercept', 'R-Squared', 'Adjusted R-Squared', 'Residuals', 'Regression Assumptions'] },
  { id: 'regularization', title: 'Regularization', topics: ['Overfitting', 'Underfitting', 'Bias-Variance Tradeoff', 'L1 Regularization', 'Lasso', 'L2 Regularization', 'Ridge', 'Elastic Net', 'Regularization Selection'] },
  { id: 'logistic-regression', title: 'Logistic Regression', topics: ['Classification Basics', 'Binary Classification', 'Sigmoid Function', 'Log Odds', 'Decision Boundary', 'Probability Prediction', 'Multiclass Classification', 'Regularization', 'Logistic Regression Applications'] },
  { id: 'nearest-neighbors', title: 'Nearest Neighbors', topics: ['K-Nearest Neighbors', 'Distance Metrics', 'Euclidean Distance', 'Manhattan Distance', 'Choosing K', 'Classification', 'Regression', 'Feature Scaling', 'KNN Limitations'] },
  { id: 'decision-trees', title: 'Decision Trees', topics: ['Tree Concept', 'Root Node', 'Internal Nodes', 'Leaf Nodes', 'Splitting', 'Entropy', 'Information Gain', 'Gini Impurity', 'Tree Depth', 'Pruning', 'Decision Tree Applications'] },
  { id: 'ensemble-learning', title: 'Ensemble Learning', topics: ['Ensemble Concept', 'Bagging', 'Boosting', 'Voting', 'Stacking', 'Random Forest', 'Extra Trees', 'AdaBoost', 'Gradient Boosting', 'Ensemble Strategies'] },
  { id: 'random-forest', title: 'Random Forest', topics: ['Random Forest Concept', 'Bootstrap Sampling', 'Random Feature Selection', 'Classification', 'Regression', 'Feature Importance', 'Hyperparameters', 'Random Forest Tuning'] },
  { id: 'gradient-boosting', title: 'Gradient Boosting', topics: ['Boosting Concept', 'Gradient Boosting', 'Weak Learners', 'Learning Rate', 'Number of Trees', 'Tree Depth', 'XGBoost', 'LightGBM', 'CatBoost', 'Boosting Comparison'] },
  { id: 'support-vector-machines', title: 'Support Vector Machines', topics: ['SVM Concept', 'Hyperplane', 'Margin', 'Support Vectors', 'Hard Margin', 'Soft Margin', 'Kernel Trick', 'Linear Kernel', 'Polynomial Kernel', 'RBF Kernel', 'SVM Tuning'] },
  { id: 'naive-bayes', title: 'Naive Bayes', topics: ['Bayes Theorem', 'Conditional Independence', 'Gaussian Naive Bayes', 'Multinomial Naive Bayes', 'Bernoulli Naive Bayes', 'Text Classification'] },
  { id: 'unsupervised-learning', title: 'Unsupervised Learning', topics: ['Unsupervised Learning Concept', 'Clustering', 'Dimensionality Reduction', 'Density Estimation', 'Unsupervised Applications'] },
  { id: 'k-means', title: 'K-Means', topics: ['K-Means Concept', 'Centroids', 'Initialization', 'Distance', 'Iterations', 'Inertia', 'Elbow Method', 'Silhouette Score', 'K-Means Limitations'] },
  { id: 'hierarchical-clustering', title: 'Hierarchical Clustering', topics: ['Hierarchical Clustering', 'Agglomerative Clustering', 'Divisive Clustering', 'Linkage', 'Dendrograms', 'Cluster Selection'] },
  { id: 'dbscan', title: 'DBSCAN', topics: ['Density Based Clustering', 'Core Points', 'Border Points', 'Noise', 'Epsilon', 'MinPts', 'DBSCAN Limitations'] },
  { id: 'dimensionality-reduction', title: 'Dimensionality Reduction', topics: ['Why Dimensionality Reduction', 'Curse of Dimensionality', 'PCA', 'Principal Components', 'Explained Variance', 'Eigenvectors', 'Eigenvalues', 'SVD', 't-SNE', 'UMAP'] },
  { id: 'model-evaluation', title: 'Model Evaluation', topics: ['Regression Metrics', 'Classification Metrics', 'Clustering Metrics', 'MAE', 'MSE', 'RMSE', 'R-Squared', 'Accuracy', 'Precision', 'Recall', 'F1-Score', 'ROC-AUC', 'PR-AUC', 'Log Loss', 'Confusion Matrix', 'Silhouette Score', 'Metric Selection'] },
  { id: 'cross-validation', title: 'Cross-Validation', topics: ['Cross Validation Concept', 'K-Fold', 'Stratified K-Fold', 'Leave One Out', 'Repeated Cross Validation', 'Time Series Cross Validation', 'Cross Validation Best Practices'] },
  { id: 'hyperparameter-tuning', title: 'Hyperparameter Tuning', topics: ['Parameters vs Hyperparameters', 'Grid Search', 'Random Search', 'Bayesian Optimization', 'Search Space', 'Early Stopping', 'Optuna', 'Hyperparameter Strategies'] },
  { id: 'model-selection', title: 'Model Selection', topics: ['Baseline Model', 'Model Comparison', 'Cross-Validation', 'Metric Comparison', 'Complexity', 'Interpretability', 'Training Time', 'Inference Time', 'Business Constraints'] },
  { id: 'overfitting-underfitting', title: 'Overfitting & Underfitting', topics: ['Overfitting', 'Underfitting', 'Bias', 'Variance', 'Bias-Variance Tradeoff', 'Regularization', 'Cross-Validation', 'Early Stopping', 'Model Complexity'] },
  { id: 'imbalanced-data', title: 'Imbalanced Data', topics: ['Class Imbalance', 'Imbalance Detection', 'Class Weights', 'Random Oversampling', 'Random Undersampling', 'SMOTE', 'Threshold Tuning', 'Precision Recall', 'Imbalanced Learning'] },
  { id: 'explainable-ai', title: 'Explainable AI', topics: ['Model Interpretability', 'Feature Importance', 'Permutation Importance', 'Partial Dependence', 'SHAP', 'LIME', 'Global Interpretation', 'Local Interpretation', 'Explainability Limitations'] },
  { id: 'model-interpretation', title: 'Model Interpretation', topics: ['Linear Models', 'Tree Models', 'Black Box Models', 'Feature Effects', 'Prediction Explanation', 'Business Interpretation'] },
  { id: 'time-series-machine-learning', title: 'Time Series Machine Learning', topics: ['Time Series Data', 'Time Based Features', 'Lag Features', 'Rolling Features', 'Train Test Time Split', 'Forecasting', 'Regression for Forecasting', 'ARIMA', 'Prophet', 'ML Forecasting'] },
  { id: 'natural-language-processing', title: 'Natural Language Processing', topics: ['NLP Foundations', 'Text Cleaning', 'Tokenization', 'Stopwords', 'Stemming', 'Lemmatization', 'Bag of Words', 'TF-IDF', 'N-Grams', 'Word Embeddings', 'Text Classification', 'Sentiment Analysis'] },
  { id: 'recommender-systems', title: 'Recommender Systems', topics: ['Recommendation Systems', 'Content Based', 'Collaborative Filtering', 'User Based', 'Item Based', 'Matrix Factorization', 'Cold Start', 'Ranking', 'Recommendation Evaluation'] },
  { id: 'neural-network-foundations', title: 'Neural Network Foundations', topics: ['Neural Network Concept', 'Perceptron', 'Neurons', 'Layers', 'Weights', 'Bias', 'Activation Functions', 'Forward Propagation', 'Loss Functions', 'Backpropagation', 'Gradient Descent'] },
  { id: 'deep-learning', title: 'Deep Learning', topics: ['Deep Learning Concept', 'MLP', 'CNN', 'RNN', 'LSTM', 'GRU', 'Autoencoders', 'Transfer Learning', 'Batch Normalization', 'Dropout', 'Deep Learning Workflow'] },
  { id: 'computer-vision', title: 'Computer Vision', topics: ['Image Data', 'Image Preprocessing', 'CNN', 'Image Classification', 'Object Detection', 'Image Segmentation', 'Transfer Learning', 'Computer Vision Projects'] },
  { id: 'reinforcement-learning', title: 'Reinforcement Learning', topics: ['RL Foundations', 'Agent', 'Environment', 'State', 'Action', 'Reward', 'Policy', 'Value Function', 'Q-Learning', 'Exploration vs Exploitation', 'Reinforcement Learning Applications'] },
  { id: 'generative-ai-foundations', title: 'Generative AI Foundations', topics: ['Generative Models', 'LLM Foundations', 'Transformers', 'Attention', 'Embeddings', 'Vector Databases', 'Retrieval Augmented Generation', 'Generative AI Applications'] },
  { id: 'mlops-foundations', title: 'MLOps Foundations', topics: ['What is MLOps', 'ML Lifecycle', 'Experiment Tracking', 'Model Versioning', 'Data Versioning', 'Model Registry', 'Reproducibility', 'Model Deployment', 'Monitoring'] },
  { id: 'ml-tools', title: 'ML Tools', topics: ['Scikit-Learn', 'SciPy', 'Statsmodels', 'XGBoost', 'LightGBM', 'CatBoost', 'TensorFlow', 'Keras', 'PyTorch', 'MLflow', 'Optuna', 'SHAP'] },
  { id: 'model-deployment', title: 'Model Deployment', topics: ['Save Models', 'Pickle', 'Joblib', 'Model Serialization', 'REST API', 'FastAPI', 'Flask', 'Docker', 'Cloud Deployment', 'Production Deployment'] },
  { id: 'model-monitoring', title: 'Model Monitoring', topics: ['Model Monitoring', 'Data Drift', 'Concept Drift', 'Prediction Drift', 'Model Performance', 'Data Quality', 'Monitoring Metrics', 'Alerts', 'Retraining'] },
  { id: 'machine-learning-system-design', title: 'Machine Learning System Design', topics: ['ML System Architecture', 'Data Pipeline', 'Feature Pipeline', 'Training Pipeline', 'Model Serving', 'Batch Prediction', 'Real-Time Prediction', 'Scalability', 'Reliability', 'Cost Optimization'] },
  { id: 'ethics-and-responsible-ml', title: 'Ethics & Responsible ML', topics: ['ML Ethics', 'Bias', 'Fairness', 'Privacy', 'Security', 'Transparency', 'Explainability', 'Responsible AI', 'Regulatory Considerations'] },
  { id: 'data-analyst-to-ml', title: 'Data Analyst to ML', topics: ['Statistics Foundation', 'Python Foundation', 'SQL', 'Pandas', 'EDA', 'Feature Engineering', 'Regression', 'Classification', 'Clustering', 'Model Evaluation', 'Business Problem Solving', 'ML Project Workflow'] },
  { id: 'beginner-projects', title: 'Beginner Projects', topics: ['House Price Prediction', 'Titanic Survival', 'Iris Classification', 'Student Score Prediction', 'Customer Churn', 'Sales Prediction'] },
  { id: 'intermediate-projects', title: 'Intermediate Projects', topics: ['Customer Segmentation', 'Loan Default Prediction', 'Credit Risk Analysis', 'Marketing Response Prediction', 'Employee Churn', 'Demand Forecasting', 'Recommendation System'] },
  { id: 'advanced-projects', title: 'Advanced Projects', topics: ['Fraud Detection', 'Customer Lifetime Value', 'Advanced Churn Prediction', 'Sales Forecasting', 'NLP Classification', 'Recommendation Engine', 'Anomaly Detection'] },
  { id: 'end-to-end-projects', title: 'End-to-End Projects', topics: ['Business Problem', 'Data Collection', 'Data Cleaning', 'EDA', 'Feature Engineering', 'Model Training', 'Model Evaluation', 'Hyperparameter Tuning', 'Model Interpretation', 'Deployment', 'Monitoring', 'Business Recommendations'] },
  { id: 'practice', title: 'Practice', topics: ['Mathematics Problems', 'Statistics Problems', 'Python Problems', 'Data Cleaning', 'Feature Engineering', 'Regression', 'Classification', 'Clustering', 'Model Evaluation', 'Hyperparameter Tuning', 'Case Studies', 'Real World Problems'] },
  { id: 'interview', title: 'Interview Practice', topics: ['ML Basics', 'Mathematics', 'Statistics', 'Regression', 'Classification', 'Decision Trees', 'Ensemble Methods', 'Clustering', 'Dimensionality Reduction', 'Model Evaluation', 'Feature Engineering', 'Overfitting', 'Bias-Variance', 'A/B Testing', 'ML System Design', 'Case Studies', 'Mock Interviews'] },
  { id: 'portfolio', title: 'Portfolio', topics: ['GitHub Projects', 'Kaggle Projects', 'Jupyter Notebooks', 'ML Case Studies', 'Model Deployment', 'ML APIs', 'Project READMEs', 'Portfolio Website'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['ML Concepts', 'Mathematics', 'Statistics', 'Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'Model Metrics', 'Feature Engineering', 'Hyperparameter Tuning', 'XGBoost', 'Deep Learning', 'Interview Questions'] },
];
