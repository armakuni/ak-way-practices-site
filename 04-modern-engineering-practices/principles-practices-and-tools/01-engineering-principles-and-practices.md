# 01 - Engineering Principles and Practices

Continuous attention to technical excellence is crucial in driving organisational change. In today's fast-paced environment, delivering high-quality, reliable software at speed is not just a goal but a necessity for staying competitive and responsive to market demands. Using engineering practices prioritising quality, reliability, and speed, we can meet our users' evolving needs and drive positive organisational transformation.

# The Practices

Here are some practices we have adopted to meet the evolving customer needs and bring about positive transformation. These practices work because they have a strong basis in the principles we describe later on this page. We use the "Working agreements" stage of an Inception to inform everyone that these are our Engineering defaults. These practices apply to engineers from Armakuni and clients. If our clients have reasons for choosing a different approach, we ask that they outline the alternative practices they'll use to ensure delivery meets the same standards.

The default practices that we recommend are:

* [Pair Programming/Teaming](02-pair-programming-and-teaming.md): A collaborative coding approach where two developers work together on the same code, improving code quality, sharing knowledge, and reducing errors
* [Version Control](03-version-control-using-git.md): Utilising version control systems like Git ensures code changes are tracked, managed, and collaborated on efficiently
* [Static Code Analysis](04-static-code-analysis.md): Detect security vulnerabilities and other code quality issues early in the development lifecycle.
* [Test-Driven Development (TDD)](05-test-driven-development.md): Drive the design of the code by writing automated tests first
* [Trunk-Based Development](06-trunk-based-development.md): Facilitates rapid integration and early detection of conflicts, promoting collaboration and reducing integration issues
* [Continuous Integration](09-continuous-integration-continuous-delivery.md): Automate the process of integrating code changes frequently, ensuring that the software is always in a releasable state
* [Continuous Deployment](09-continuous-integration-continuous-delivery.md): Automate the deployment process to rapidly and reliably release changes into production
* [Walking Skeleton](10-walking-skeleton.md): Deploy to production from the very first production by building a walking skeleton, and iteratively expand functionality
* [Infrastructure as Code (IaC)](11-infrastructure-as-code-iac.md): Automating infrastructure provisioning and configuration ensures consistency and reliability across environments
* [Test in Production (TiP)](12-test-in-production.md): Use the production environment to test critical functionality, performance and reliability.
* [Observability](15-observability.md): Implement robust monitoring and logging practices to proactively detect and respond to issues.
* [Shift Left Security](13-shift-left-security.md): Integrate security practices early in the development process, such as threat modelling, secure coding practices, and security testing.
* [Dependency Management](14-dependancy-management.md): Regularly update and manage dependencies to mitigate security vulnerabilities and ensure software reliability.

# The Underlying Principles

These practices aren't commandments that people must follow. If we choose any other practices in place of the ones described above, then the new practices must, in principle, be able to produce a similar impact. The underlying tenets of these practices and the effect they have are as follows:

## Focus on Quality and Reliability

Prioritise quality and reliability throughout the software development lifecycle.

### Organisational Impact:

* Customer satisfaction: High-quality, reliable software improves customer satisfaction and loyalty.
* Reduced technical debt: By prioritising quality, teams can reduce technical debt, leading to easier maintenance and fewer issues in the long run.
* Enhanced reputation: Consistently delivering reliable software enhances the organisation's reputation and builds trust with customers and stakeholders.

## DevOps Culture and not Job Title

Improve Flow (the ability to produce value continuously) by breaking down silos, generating feedback and introducing a culture of learning to enable faster, more reliable software delivery.

### Organisational Impact:

Faster time to market: By automating manual processes, addressing bottlenecks and reducing handoffs, DevOps accelerates the software delivery pipeline, allowing organisations to release new features more quickly.

* Culture of continuous improvement: DevOps promotes a culture of experimentation and continuous improvement, where teams are empowered to innovate and take calculated risks.

## Iterative Development and Agile Practices

Break down work into smaller, manageable tasks and iterate quickly based on feedback.

### Organisational Impact:

* Flexibility and adaptability: Agile practices enable teams to respond effectively to changing requirements and customer feedback, resulting in software that better meets user needs.
* Increased transparency: Regular iterations and sprint reviews provide visibility into project progress, fostering trust and alignment across the organisation.
* Employee empowerment: Empowers team members to take ownership of their work, leading to increased engagement and job satisfaction.

## Automation-Driven Development

Automate repetitive tasks to accelerate development and reduce errors. Integrate code changes frequently and deploy them rapidly and reliably.

### Organisational Impact:

* Efficiency boost: Automation reduces manual effort, enabling teams to focus on innovation and higher-value tasks.
* Quality improvement and risk reduction: Automated testing and deployment pipelines ensure consistent quality, reduce the likelihood of errors, and enhance reliability.
* Speed to market: CI/CD pipelines enable rapid release cycles, allowing organisations to respond quickly to market demands and stay ahead of competitors.