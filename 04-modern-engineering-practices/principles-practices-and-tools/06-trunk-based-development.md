# 06 - Trunk-Based Development

Trunk-Based Development (TBD) is a software development approach where all developers work on a single branch, known as the "trunk" or "mainline." Instead of creating feature branches that diverge from the main codebase for an extended period, developers work on short-lived branches and merge their changes back into the trunk frequently. This approach facilitates rapid integration and early detection of conflicts, promotes collaboration and reduces integration issues.

## **Who is this useful for?**

Engineering teams who are struggling with long running pull requests that are hard to merge and require constant re-work.

## **How do I get started?**

Before you get started with trunk-based development, your team needs to establish a code review protocol, because this will replace Pull Requests in your system. The best way to get started is to start pair programming as that gives your team instant code reviews as two developers are working simultaneously.

The second thing you need for trunk-based development to work is CI / CD pipelines that can run your tests as soon as you push your code to the main branch, and the build terminates at broken tests and skips deploying a broken build to any environment.

The third thing to focus on is pushing small sized changes. Small changes are more likely to pass the build and will have lower chances of any bugs. If possible, run the test suite locally to avoid revert commits.

 ![](img/trunk-based-development.png)

## **Anti-Patterns**

* Lack of Continuous Integration: failing to integrate changes into the mainline frequently can lead to integration issues and delays in the release process.
* Ignoring Code Reviews: failing to conduct code reviews on changes before merging them into the trunk can lead to quality issues and bugs.
* Ignoring Automated Tests: failing to run automated tests on changes before integrating them into the trunk can lead to regressions and bugs.
* Creating long-lived branches: as it gets harder to make changes smaller and unrelated, the developers fall back on creating branches and avoid merging them. This practice can cause delays and merge problems.

<https://trunkbaseddevelopment.com/>