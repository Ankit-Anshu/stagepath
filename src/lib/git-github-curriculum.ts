// Full Git & GitHub curriculum tree, transcribed from the user-supplied
// "git and github.md" folder structure. Same treatment as the SQL and
// Power BI curricula: a reference map only, not individually authored
// topic pages. Topic names come straight from the source file names with
// the ordering prefix stripped and remaining hyphens turned into spaces
// (aside from compound terms like "CI-CD", kept as written); section
// titles are lightly cleaned up for readability but map 1:1 to the
// source's numbered folders. Several topics (e.g. "HEAD", "Git Workflow",
// "Merge Conflicts") intentionally appear in more than one section, same
// as the source doc — that's the curriculum revisiting a concept from a
// different angle, not a transcription error.
export interface GitGithubSection {
  id: string;
  title: string;
  topics: string[];
}

export const GIT_GITHUB_CURRICULUM: GitGithubSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Git', 'What is GitHub', 'Git vs GitHub', 'Version Control', 'Distributed Version Control', 'Repository', 'Local Repository', 'Remote Repository', 'Working Directory', 'Staging Area', 'Commit History', 'Git Workflow'] },
  { id: 'setup', title: 'Setup', topics: ['Install Git', 'Check Git Version', 'Git Config', 'Username', 'Email', 'Default Branch', 'Git Editor', 'Credential Manager', 'Git Bash', 'Terminal', 'VS Code Git'] },
  { id: 'git-basics', title: 'Git Basics', topics: ['git init', 'git status', 'git add', 'git commit', 'git log', 'git diff', 'git show', 'git help', 'git version', 'Git Workflow'] },
  { id: 'repositories', title: 'Repositories', topics: ['Create Repository', 'Initialize Repository', 'Clone Repository', 'Repository Structure', '.git Folder', 'Working Tree', 'Staging Area', 'HEAD', 'Index', 'Repository States'] },
  { id: 'commits', title: 'Commits', topics: ['Commit Basics', 'Commit Messages', 'Atomic Commits', 'Commit History', 'Amend Commit', 'Revert Commit', 'Reset Commit', 'Cherry Pick', 'Commit Diff', 'Good Commit Practices'] },
  { id: 'branching', title: 'Branching', topics: ['Branch Basics', 'Create Branch', 'Delete Branch', 'Rename Branch', 'Switch Branch', 'Checkout', 'Main Branch', 'Feature Branches', 'Bugfix Branches', 'Release Branches', 'Branch Naming'] },
  { id: 'merging', title: 'Merging', topics: ['Merge Basics', 'Fast Forward Merge', 'Three Way Merge', 'Merge Commit', 'Merge Conflicts', 'Conflict Resolution', 'Abort Merge', 'Merge Strategies', 'Merge Best Practices'] },
  { id: 'remote-repositories', title: 'Remote Repositories', topics: ['Remote Basics', 'git remote', 'Add Remote', 'Remove Remote', 'Rename Remote', 'Origin', 'Upstream', 'Remote Branches', 'Remote Tracking'] },
  { id: 'github-basics', title: 'GitHub Basics', topics: ['GitHub Account', 'GitHub Profile', 'Create Repository', 'Public vs Private', 'README', 'Repository Description', 'Topics', 'Releases', 'Tags', 'Repository Settings'] },
  { id: 'push-pull-fetch', title: 'Push, Pull & Fetch', topics: ['git push', 'git pull', 'git fetch', 'Fetch vs Pull', 'Push Branches', 'Pull Branches', 'Tracking Branches', 'Set Upstream', 'Remote Sync Workflow'] },
  { id: 'github-flow', title: 'GitHub Flow', topics: ['Create Branch', 'Make Changes', 'Commit', 'Push', 'Pull Request', 'Code Review', 'Merge', 'Delete Branch', 'GitHub Flow'] },
  { id: 'pull-requests', title: 'Pull Requests', topics: ['Pull Request Basics', 'Create PR', 'Draft PR', 'PR Description', 'PR Templates', 'Reviewers', 'Review Comments', 'Suggested Changes', 'Approvals', 'Merge PR', 'Close PR', 'PR Best Practices'] },
  { id: 'code-review', title: 'Code Review', topics: ['Review Basics', 'Reviewing Diffs', 'Review Comments', 'Approval', 'Change Requests', 'Review Checklist', 'Code Quality', 'Review Best Practices'] },
  { id: 'conflict-resolution', title: 'Conflict Resolution', topics: ['Why Conflicts Happen', 'Merge Conflicts', 'Pull Conflicts', 'Conflict Markers', 'VS Code Conflict Resolution', 'Manual Resolution', 'Abort Conflict', 'Continue Merge', 'Conflict Prevention'] },
  { id: 'gitignore', title: '.gitignore', topics: ['What is gitignore', '.gitignore', 'File Patterns', 'Folder Patterns', 'Wildcards', 'Global gitignore', 'Python gitignore', 'Node gitignore', 'Data Project gitignore', 'Secrets Protection'] },
  { id: 'undoing-changes', title: 'Undoing Changes', topics: ['git restore', 'git reset', 'git revert', 'Soft Reset', 'Mixed Reset', 'Hard Reset', 'Undo Last Commit', 'Unstage Files', 'Discard Changes', 'Recovery Strategies'] },
  { id: 'stash', title: 'Stash', topics: ['git stash', 'Stash Changes', 'Stash Pop', 'Stash Apply', 'Stash List', 'Stash Drop', 'Stash Clear', 'Stash Workflows'] },
  { id: 'tags-releases', title: 'Tags & Releases', topics: ['Tags', 'Lightweight Tags', 'Annotated Tags', 'Create Tag', 'Push Tags', 'Delete Tags', 'Semantic Versioning', 'GitHub Releases', 'Release Management'] },
  { id: 'git-history', title: 'Git History', topics: ['git log', 'git show', 'git diff', 'git blame', 'git reflog', 'Search History', 'Commit Graph', 'HEAD', 'History Analysis'] },
  { id: 'rebase', title: 'Rebase', topics: ['Rebase Basics', 'Interactive Rebase', 'Rebase onto', 'Squash', 'Reword', 'Edit Commit', 'Reorder Commits', 'Rebase Conflicts', 'Rebase vs Merge', 'Rebase Best Practices'] },
  { id: 'cherry-pick', title: 'Cherry-Pick', topics: ['Cherry Pick Basics', 'Single Commit', 'Multiple Commits', 'Cherry Pick Conflicts', 'Abort Cherry Pick', 'Practical Use Cases'] },
  { id: 'forks', title: 'Forks', topics: ['What is a Fork', 'Fork a Repository', 'Clone Fork', 'Upstream Remote', 'Sync Fork', 'Contribute to Open Source', 'Fork Workflow'] },
  { id: 'open-source', title: 'Open Source', topics: ['Open Source Basics', 'Find Projects', 'Read Contributing Guide', 'Issues', 'Fork', 'Branch', 'Pull Request', 'Code Review', 'Contribution Guidelines', 'Good First Issue', 'Open Source Workflow'] },
  { id: 'github-issues', title: 'GitHub Issues', topics: ['Issues Basics', 'Create Issue', 'Issue Templates', 'Labels', 'Milestones', 'Assignees', 'Comments', 'Issue References', 'Linking PRs', 'Issue Management'] },
  { id: 'github-projects', title: 'GitHub Projects', topics: ['Project Basics', 'Boards', 'Tables', 'Views', 'Custom Fields', 'Filters', 'Automation', 'Roadmaps', 'Project Management'] },
  { id: 'markdown', title: 'Markdown', topics: ['Markdown Basics', 'Headings', 'Paragraphs', 'Lists', 'Tables', 'Links', 'Images', 'Code Blocks', 'Checklists', 'Badges', 'README Design'] },
  { id: 'github-profile', title: 'GitHub Profile', topics: ['Profile Setup', 'Profile README', 'Bio', 'Skills', 'Pinned Repositories', 'Contribution Graph', 'Achievements', 'Developer Portfolio'] },
  { id: 'ssh-authentication', title: 'SSH Authentication', topics: ['SSH Basics', 'Generate SSH Key', 'Public Key', 'Private Key', 'SSH Agent', 'Add Key to GitHub', 'Test SSH Connection', 'SSH Best Practices'] },
  { id: 'github-authentication', title: 'GitHub Authentication', topics: ['HTTPS', 'SSH', 'Personal Access Tokens', 'Fine Grained Tokens', 'Credential Management', 'Two Factor Authentication', 'Authentication Best Practices'] },
  { id: 'git-advanced', title: 'Git Internals', topics: ['Git Objects', 'Blobs', 'Trees', 'Commits', 'References', 'HEAD', 'Index', 'Plumbing Commands', 'Porcelain Commands', 'Git Internals'] },
  { id: 'advanced-branching', title: 'Advanced Branching', topics: ['Branch Strategies', 'Git Flow', 'GitHub Flow', 'Trunk Based Development', 'Feature Branches', 'Release Branches', 'Hotfix Branches', 'Branch Management'] },
  { id: 'submodules-worktrees', title: 'Submodules & Worktrees', topics: ['Git Submodules', 'Add Submodule', 'Update Submodule', 'Nested Repositories', 'Git Worktree', 'Multiple Worktrees', 'Advanced Repository Workflows'] },
  { id: 'large-repositories', title: 'Large Repositories', topics: ['Large Files', 'Git LFS', 'Large Repository Optimization', 'Partial Clone', 'Shallow Clone', 'Repository Maintenance'] },
  { id: 'github-actions', title: 'GitHub Actions', topics: ['Actions Basics', 'Workflows', 'YAML', 'Events', 'Jobs', 'Steps', 'Actions', 'Runners', 'Secrets', 'Variables', 'Artifacts', 'Caching', 'Matrix Strategy', 'Environments', 'CI', 'CD', 'Workflow Optimization'] },
  { id: 'ci-cd', title: 'CI/CD', topics: ['Continuous Integration', 'Continuous Delivery', 'Continuous Deployment', 'Automated Testing', 'Build Pipelines', 'Deployment Pipelines', 'Pull Request Checks', 'Branch Protection', 'Production Workflow'] },
  { id: 'github-pages', title: 'GitHub Pages', topics: ['GitHub Pages Basics', 'Static Websites', 'Repository Setup', 'Custom Domain', 'Jekyll', 'HTML CSS JS', 'Deployment', 'Portfolio Website'] },
  { id: 'github-security', title: 'GitHub Security', topics: ['Security Basics', 'Secrets', 'Dependabot', 'Code Scanning', 'Secret Scanning', 'Dependency Management', 'Security Policies', 'Branch Protection', 'Secure Development'] },
  { id: 'github-packages', title: 'GitHub Packages', topics: ['Package Registry', 'Container Registry', 'Publish Packages', 'Versioning', 'Package Management'] },
  { id: 'github-cli', title: 'GitHub CLI', topics: ['GitHub CLI Basics', 'Authentication', 'Repositories', 'Issues', 'Pull Requests', 'Releases', 'Actions', 'CLI Automation'] },
  { id: 'github-api', title: 'GitHub API', topics: ['REST API', 'GraphQL', 'Authentication', 'API Requests', 'Repository API', 'Issues API', 'Pull Request API', 'Automation'] },
  { id: 'team-collaboration', title: 'Team Collaboration', topics: ['Organizations', 'Teams', 'Repository Permissions', 'Collaborators', 'Code Owners', 'Protected Branches', 'Rulesets', 'Review Policies', 'Team Workflow'] },
  { id: 'data-analyst-git-github', title: 'Git & GitHub for Data Analysts', topics: ['SQL Projects', 'Python Projects', 'Excel Projects', 'Power BI Projects', 'Tableau Projects', 'Jupyter Notebooks', 'Data Files', 'README Documentation', 'Project Structure', 'Version Control', 'Portfolio Management'] },
  { id: 'projects', title: 'Projects', topics: ['Git Basics Project', 'Branching Project', 'Merge Conflict Project', 'Team Collaboration', 'Pull Request Workflow', 'Open Source Contribution', 'GitHub Pages Portfolio', 'CI-CD Pipeline', 'GitHub Actions', 'Automated Testing', 'Deployment Automation', 'Enterprise Git Workflow', 'Security Workflow', 'Advanced CI-CD', 'Open Source Maintainer Workflow'] },
  { id: 'practice', title: 'Practice', topics: ['Git Commands', 'Commit Challenges', 'Branch Challenges', 'Merge Challenges', 'Conflict Challenges', 'Rebase Challenges', 'GitHub Challenges', 'Pull Request Challenges', 'Actions Challenges', 'Real World Scenarios'] },
  { id: 'interview', title: 'Interview Practice', topics: ['Git Basics', 'Git Commands', 'Branching', 'Merging', 'Rebase', 'Reset vs Revert', 'Cherry Pick', 'Stash', 'Conflicts', 'GitHub', 'Pull Requests', 'CI-CD', 'GitHub Actions', 'Scenario Based Questions'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Git Basics', 'Git Commands', 'Branching', 'Merging', 'Rebase', 'Reset Revert', 'Stash', 'Remote Commands', 'GitHub Flow', 'Pull Requests', 'GitHub Actions', 'Troubleshooting'] },
];
