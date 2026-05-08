# 14 - Dependancy Management

Every software project relies on dependencies: third-party libraries, frameworks, modules, and packaged services. If not tracked and managed consistently, these dependencies can make deploying and operating production systems fragile, unpredictable, and hard to maintain.

Managing dependencies well improves delivery flow, reduces security risks, increases team confidence, and ensures reproducible builds across environments.

# **Who Benefits**

* **Engineering teams**: Consistent, versioned dependencies mean fewer environment mismatches, faster onboarding, and smoother deployments.
* **Security teams**: Managed dependencies are easier to scan, monitor, and patch for known vulnerabilities.

# **Getting Started**

* **Choose appropriate tools** Select a dependency management tool suited to the language and platform:
* **.NET**: NuGet
* **Python**: pip, uv, pipenv
* **JavaScript/TypeScript**: npm, Yarn, pnpm
* **Java**: Maven, Gradle
* **PHP**: Composer
* **Go**: Go modules
* **Define dependencies**
* Declare all dependencies in the tool's configuration file (package.json, requirements.txt, pom.xml, etc.).
* Pin versions where needed to ensure repeatable builds.
* Use version ranges with care and avoid unbounded upgrades in production.
* **Install consistently**
* All engineers install dependencies using the same commands or scripts.
* No dependency is added without updating the configuration file and committing the change.
* **Update regularly**
* Schedule updates to pick up bug fixes, performance improvements, and security patches.
* Test updates in a controlled environment before rolling them into production.
* **Automate dependency checking**
* Use tools such as Dependabot, Renovate, or Snyk to detect outdated or vulnerable packages.
* Integrate checks into pipelines to flag vulnerabilities before release.

# **Anti-Patterns**

* **No version pinning**: Leads to inconsistent builds and "it works on my machine" issues.
* **Ignoring vulnerabilities**: Outdated packages with known CVEs create avoidable security risks.
* **Mixed management**: Some dependencies tracked via tools, others manually copied into the codebase, creating unpredictable environments.
* **"Set and forget" dependencies**: Failing to update packages increases technical debt and risk over time.
* **Updating everything at once**: Massive version jumps increase the chance of breaking changes and long debugging sessions.

# **Some of our defaults**

* **Lockfiles in source control**: Commit lockfiles (package-lock.json, poetry.lock, etc.) to ensure repeatable builds across environments.
* **Automated scanning in pipelines**: All builds run SCA (Software Composition Analysis) tools to detect vulnerabilities before deployment.
* **Staged updates**: Minor updates are applied regularly; major updates are handled as planned work with dedicated testing.
* **Security-driven prioritisation**: Patches for critical vulnerabilities are applied outside normal update cycles.
* **Clear ownership**: Each service or product team is responsible for keeping its dependency set up to date.

# **Test-Driven Development for Dependencies**

We apply a **test-first** mindset to dependency management, making dependency requirements, security rules, and compatibility checks executable and automated. This ensures that dependency changes are safe, intentional, and compliant before they reach production.

## **Why it matters**

* Prevents broken builds from incompatible or untested dependency updates.
* Catches known vulnerabilities early, before release.
* Documents dependency rules as enforceable code, not just as tribal knowledge.
* Encourages small, frequent, safe updates instead of risky "big bang" upgrades.

## **Practical approach**

* **Define dependency requirements as tests**
* Example: "All dependencies must be from approved registries" or "No packages with known CVEs above medium severity".
* Express these requirements as automated checks using tools like:
* **SCA tools**: OWASP Dependency-Check, Snyk, Trivy, pip-audit, npm audit.
* **Policy-as-code**: Open Policy Agent (OPA), Conftest.
* **Custom scripts**: Lint for dependency versions, registry sources, or license compliance.
* **Write the failing test first**
* Introduce the rule before updating dependencies, so violations fail the build immediately.
* **Update dependencies to pass the test**
* Upgrade or replace packages to meet defined rules (e.g. patch known CVEs, remove disallowed licences).
* **Refactor safely**
* Once the build is green, reorganise dependency declarations (grouping, deduplication, or lockfile clean-up) without changing functionality.
* **Integrate into CI/CD**
* Run dependency tests on every pull request.
* Fail builds for any violation, unless there is a documented, approved exception.

## **Example dependency tests**

* "No vulnerable packages in production dependencies."
* "All dependencies pinned to exact versions."
* "Lockfile matches declared dependency versions."
* "No dependencies with GPL licence unless approved."

## **Anti-patterns in TDD for Dependencies**

* Adding new packages without automated checks in place.
* Accepting Dependabot/Renovate PRs without automated verification of functionality and security.
* Disabling or ignoring failing dependency checks.
* Allowing manual, untracked additions of dependencies to bypass policy.