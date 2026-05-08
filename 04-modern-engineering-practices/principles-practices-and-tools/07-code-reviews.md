# 07 - Code Reviews

Code reviews, also known as peer reviews or walkthroughs, are a software development practice where one or more developers review code written by another developer. The primary goal of code reviews is to ensure code quality, identify defects, and improve collaboration within the development team. Our experience and studies have proven that this is not always the case. We've also come across governance processes in regulated environments that mandate code reviews to reduce risk by ensuring that no software should be release without a review. Note that the same objective can be met if the teams follow [Pair Programming](02-pair-programming-and-teaming.md) and build rigorous checks into their CI pipelines as the norm with the added advantage of faster feedback.

To be clear we **strongly** advise against code reviews unless absolutely necessary due to organisational constraints.

# **Who is this useful for?**

Engineering teams that are unable to use Pair Programming will find Code reviews useful. In such cases, the code change must always be reviewed before merging into the main trunk even if this introduces a delay in delivery.

# **How do I get started?**

## **Establish Code Review Guidelines**

Define [clear guidelines](08-code-review-guidelines.md) and expectations for code reviews, including what should be reviewed, how reviews should be conducted, and who should participate, who is allowed to merge.

## **Use Pull Requests**

This functionality is built in all Version control systems that will allow the change author to ask for reviews, and the reviewer will be able to view and comment on the changes.

## **Assign Reviewers**

Assign one or more reviewers to each code review, ensuring that reviews are conducted by developers with relevant expertise and contextual knowledge.

## **Conduct the Code Review**

Review the code changes thoroughly, focusing on readability, maintainability, performance, and adherence to coding standards. Provide constructive feedback, suggestions, and recommendations for improvement.

## **Address Review Comments**

Address the comments and feedback provided during the code review, making necessary changes and improvements to the code.

## **Complete the Code Review**

Once all review comments have been addressed, mark the code review as complete and proceed with merging the code changes into the main branch.

# **Anti-Patterns**

Note that most of these anti-patterns can be avoided when teams adopt [Pair Programming](02-pair-programming-and-teaming.md).

* **Nitpicking:** Reviewers focus on trivial or insignificant issues, such as coding style or formatting, rather than important design or logic issues.
* **Rubber Stamp Approval:** Reviewers provide superficial or cursory reviews, simply approving code changes without thorough examination.
* **Late or Infrequent Reviews:** Code reviews are conducted late in the development process or infrequently, leading to missed opportunities for issue detection and resolution.
* **Personal Attacks or Criticism:** Reviewers use code reviews as an opportunity for personal attacks or criticism, rather than constructive feedback.
* **Ignoring Review Comments:** Developers ignore or dismiss review comments and feedback, failing to address identified issues and improve the code.