# 08 - Code Review Guidelines

# **Purpose**

Code reviews help us:

* Improve code quality
* Share knowledge
* Spot bugs early
* Maintain consistency
* Encourage learning

# **Principles**

* **Be Kind, Not Clever**
* Assume good intent
* Offer suggestions, not demands
* Keep feedback constructive
* **Focus On The Code, Not The Coder**
* Review what's written, not who wrote it
* Avoid nitpicks unless they impact clarity or correctness
* **Small Is Beautiful**
* Prefer small, focused pull requests
* Review them promptly (ideally within 1 working day)
* **Automate What Can Be Automated**
* Linting, formatting, and tests should be handled by tools, not humans
* **Use Comments for Clarity, Not Excuses**
* Code should be self-explanatory where possible
* Comments should explain *why*, not *what*

# **What to Look For**

* Does the code solve the problem it claims to?
* Is it easy to understand?
* Are names (functions, variables) clear and meaningful?
* Are edge cases and failure paths handled?
* Are tests present and meaningful?
* Could it be simpler?

# **When Approving**

* You've understood what the code is doing
* Tests pass, and the app behaves as expected
* Any issues raised have been addressed
* You'd be happy to maintain it

# **When Requesting Changes**

* Be specific and clear
* Explain *why* something is a concern
* Offer examples if possible
* Prioritise: what's a blocker vs. a nice-to-have?

# **Optional Extras**

* Pair on tricky PRs to speed up review
* Tag domain experts if you're unsure
* If you can't review it soon, say so

*The goal is not perfection, it's progress. Working code now is better than perfect code later.*

More guidance on code reviews can be found in [Google Engineering Practices: Code Review Guide ](https://google.github.io/eng-practices/review/)& [Github: How to write the perfect pull request](https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/).