# 09 - Continuous Integration/Continuous Delivery

* **Continuous Integration (CI)**: Developers integrate code changes into a shared repository frequently (ideally[ at least once a day](https://minimumcd.org/), but preferably multiple times). Each integration triggers an automated build and test process, catching issues early and reducing integration pain.
* **Continuous Delivery (CD)**: Builds on CI by ensuring that code is always in a deployable state. A fully automated pipeline builds, tests, configures, and prepares the software for production, so the business can release at will.
* **Continuous Deployment**: Extends CD by automatically deploying every successful build to production. "Done" means "in the hands of users," with no manual release steps.

This practice supports delivering value quickly, reducing risk, and maintaining high quality through automation and fast feedback.

# **Why We Use It**

* **Catch issues early**: Smaller, frequent commits mean problems are identified and fixed sooner ([Minimum CD](https://minimumcd.org/)).
* **Reduce manual intervention**: Automated pipelines eliminate repetitive, error-prone release tasks.
* **Improve confidence**: A green pipeline means the code is ready for release ([Atlassian: CI/CD Explained](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)).
* **Faster delivery**: Features and fixes get to users quickly, shortening feedback loops.
* **Greater visibility**: Pipelines provide a shared, centralised view of build and release health.

# **Who Benefits**

* **Engineering teams**: Reduce time spent debugging and integrating, focus on delivering functionality.
* **Product teams**: Can release features when they need feedback, without waiting for "release windows."
* **Operations and security teams**: Gain consistent, auditable release processes with built-in compliance checks.

# **How To Get Started**

* **Build the first pipeline**
* Start small: clone the repo, run a build, produce a deployable artefact ([GitHub CI/CD Guide](https://github.com/resources/articles/devops/ci-cd)).
* Integrate with version control so every merge triggers the pipeline.
* **Automate deployment**
* Add a stage to deploy to production (Walking Skeleton).
* Enable repeatable, one-click or auto-triggered deployments from the pipeline.
* **Add testing stages**
* Pre-release:
* Unit tests
* Integration tests
* Static code analysis
* Automated security scans of artefacts
* Post-release:
* Smoke/system tests
* Security scans of deployed apps
* **Use production-like environments**
* Test in environments that match production to catch environment-specific issues ([Continuous Delivery Book](https://continuousdelivery.com/)).
* Use infrastructure as code for environment setup.
* **Work in small, frequent increments**
* Integrate at least daily ([Minimum CD](https://minimumcd.org/)).
* Keep stories and pull requests small to reduce merge conflicts.

# **Good Practices**

* **CI** ([Minimum CD Practices](https://minimumcd.org/))
* Single source repository
* Automated builds on every push
* Fast build times (minutes, not hours)
* Visible build status for everyone
* Commit meaningful messages
* Never commit broken or untested code
* Fix broken builds immediately
* **Continuous Delivery** ([Atlassian Guide](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment))
* Keep software deployable over adding new features
* Fully automate the release pipeline
* Multiple test phases (unit, integration, acceptance)
* Business decides when to release
* Infrastructure as code for consistent environments
* **Continuous Deployment**
* No manual steps from commit to production
* Use feature toggles for incomplete features
* Blue/green or canary deployments for safe rollouts
* Production monitoring and fast rollback paths

# **Anti-Patterns**

* **Infrequent commits**: Large changes are harder to merge and debug ([Minimum CD](https://minimumcd.org/)).
* **Skipping automated tests**: Increases the risk of shipping defects.
* **Ignoring build failures**: Leads to unstable software and loss of trust in the pipeline.
* **Manual approvals for routine deploys**: Slows down delivery and invites human error.
* **Inadequate monitoring and alerting**: Delays detection and resolution of production issues.

# **Tactics to move towards Full CI/CD**

**Level**

**CI/CD Stage**

**Characteristics**

**Risks & Limitations**

**AK Way Focus**

**1**

**Ad-hoc Integration**

Code merged irregularly, manual builds, no standardised test process. Deployments are manual and infrequent.

High integration risk, long lead times, high defect rate.

Establish shared repo, start automated build.

**2**

**Basic CI**

Code is merged daily or more, automated builds are triggered on commit, and basic unit tests run.

Tests may be incomplete, and deployments may still be manual.

Add test coverage, ensure fast build times, fix builds immediately.

**3**

**Automated CI**

Builds include unit + integration tests, static code analysis, and security scans. Build status is visible to all.

Still reliant on manual or semi-manual deployment steps.

Expand automated checks, integrate artefact storage.

**4**

**Continuous Delivery**

Fully automated pipeline to create deployable artefacts. Multiple test environments. Business controls release timing.

Risk of drift between test and prod environments.

Use IaC to keep environments consistent, prioritise deployability.

**5**

**Continuous Deployment**

Every passing pipeline auto-deploys to production. Feature toggles and blue/green/canary releases reduce risk.

Requires strong monitoring and rollback capability.

Embed production monitoring, automate rollback, and use safe rollout patterns.

**6**

**Progressive Delivery**

Continuous deployment plus targeted rollouts, automated impact analysis, and rapid feature rollback.

Requires mature observability and release governance.

Integrate observability signals into deploy decisions and run post-release reviews.