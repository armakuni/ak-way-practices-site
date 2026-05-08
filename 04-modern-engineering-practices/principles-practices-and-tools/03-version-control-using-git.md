# 03 - Version Control Using Git

Version control, also known as source control or revision control, is a system that records changes to files over time. It allows developers to track modifications to code, documents, and other files, enabling collaboration, code review, and the management of different versions of a project.

## **Who is this useful for?**

Anyone who works with source control, eg, engineers, engineering managers, content authors.

## **How do I get started?**

**1. Get Access to a Git Hosting Environment**

Version control works by using a hosting platform (like GitHub or Azure DevOps) where your code or files are stored and managed. Depending on the organisation setup you may have to request access to the appropriate platform.

**2. Install Git on Your Local Machine**

Git is a command-line tool that you run locally to interact with your remote repository.

* Download Git:[ ](https://git-scm.com/downloads) <https://git-scm.com/downloads>
* Install Git with the default settings for your operating system.
* You can use the Git command line, or install a visual tool like:
* GitHub Desktop (for GitHub)
* SourceTree, GitKraken, or your IDE's Git integration (e.g. VS Code, IntelliJ)

**3. Learn the Basics of Git & GitHub**

You don't need to be a Git expert to get started—but learning a few key concepts will make your workflow much smoother:

* What is a repository?
* How to clone, commit, push, and pull
* What are branches, pull requests, and merge conflicts?

Recommended learning resource:[ ](https://www.freecodecamp.org/news/guide-to-git-github-for-beginners-and-experienced-devs/) [Git & GitHub for Beginners – FreeCodeCamp Guide](https://www.freecodecamp.org/news/guide-to-git-github-for-beginners-and-experienced-devs/)

**4. Try It Yourself**

Once you have access and Git installed:

* Clone a test repo or your project repo.
* Create a new branch.
* Make a small change and commit it with a descriptive message.

This hands-on practice is the best way to build confidence with version control.

## **Anti-Patterns**

* Lack of Commit Messages: Commit messages that lack meaningful information make it difficult to understand the purpose of changes. We encourage developers to write descriptive commit messages that explain the rationale behind each change. Practices like [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) can introduce consistency and build a habit of linking a commit with the related story or issue IDs.
* Large, Monolithic Commits: Large commits containing multiple unrelated changes make it difficult to review code and track down bugs. Developers are expected to make smaller, focused commits that address a single issue or feature.
* Ignoring Code Reviews: Failing to review code changes before committing them can lead to bugs and quality issues. Make code reviews a mandatory part of the development process to catch errors early and maintain code quality. For best results, introduce Pair Programming, which can make the process of getting a review a part of the development activity.