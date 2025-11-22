## 1. Basic Git Commands

Git is a distributed version control system that helps you track and manage changes to your code. Follow these steps to set up a Git repository and push your code to a remote service like GitHub.

### 1. Initialize a Git Repository

In your project directory, initialize a new Git repository:

```bash
git init
```

### 2. Add Files to the Staging Area

Stage all changes by running:

```bash
git add .
```

Or add individual files:

```bash
git add path/to/your/file
```

### 3. Commit Your Changes

After staging your files, create a commit with a descriptive message:

```bash
git commit -m "Initial commit"
```

### 4. Add a Remote Repository

Link your local repository to a remote repository:

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

```bash
git remote -v
```

### 5. Push to the Remote Repository

Push your commits to the remote repository’s main branch:

```bash
git push -u origin main
```

Adjust the branch name if you're using a different branch.

### 6. Check the Status of Your Repository

To see the current state of your working directory and staging area, use:

```bash
git status
```

**Explanation:**  
This command shows which files have been modified, staged, or are untracked. It's useful for reviewing changes before committing or pushing to a remote repository.

### 7. Clone the Remote Repository

To copy a remote repository to your local machine, use the `git clone` command:

```bash
git clone https://github.com/your-username/your-repo.git
```

**Explanation:**  
This command downloads the entire repository, including its history, to your computer. Replace the URL with the actual address of the repository you want to clone.
