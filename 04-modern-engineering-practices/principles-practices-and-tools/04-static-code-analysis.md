# 04 - Static Code Analysis

Static code analysis is a practice for examining source code without running it, to detect errors, bugs, vulnerabilities, and deviations from agreed coding standards. We use it to improve code quality, consistency, and maintainability, while reducing delivery and security risks.

Using it enables early detection of issues, helps apply consistent coding conventions across teams, and reduces governance overhead through automated checks.

# **Why We Use It**

* **Consistency and standardisation**: Enforces conventions and style guidelines across the codebase.
* **Early error and vulnerability detection**: Identifies issues before they reach production.
* **Security assurance**: Reduces the chance of introducing exploitable flaws.
* **Governance at speed**: Automates quality and compliance checks without slowing delivery.

# **Getting Started**

* Select the right tools based on language, framework, and hosting environment. Consider:
* Linters: Syntax, style, and potential bug detection (e.g. ESLint, Flake8, StyleCop).
* Code quality analysers: Maintainability and complexity checks (e.g. SonarQube, NDepend).
* Security analysers: Detect vulnerabilities (e.g. OWASP ZAP).
* Code formatters: Enforce style automatically (e.g. Prettier, Roslyn analysers).
* Type checkers: Enforce type safety (e.g. TypeScript, MyPy).
* Dependency analysers: Flag outdated or insecure libraries (e.g. OWASP Dependency-Check).
* Coverage analysers: Measure test coverage (e.g. Istanbul, coverage.py).
* Performance analysers: Identify bottlenecks (e.g. PerfView, Py-Spy).
* Integrate into the workflow
* Run in CI to prevent merging code with issues.
* Enable on developer machines for instant feedback.
* Configure sensibly
* Prioritise rules that add real value.
* Avoid creating noise with low-impact warnings.
* Run regularly
* Make analysis part of normal development, not an occasional audit.
* Address issues quickly
* Fix them as soon as possible to avoid tech debt build-up.

# **Common Misconceptions + Counter-Arguments**

"It slows us down."

Early detection reduces rework, meaning less time fixing production defects later.

"We trust our developers, we don't need it."

This isn't about trust. It's about catching human error and ensuring consistency across the whole codebase.

"It's only for big teams."

Small teams also benefit, especially when scaling or onboarding new engineers.

# 

# **Anti-Patterns**

* Ignoring results: Defeats the purpose and lets issues pile up.
* Overly strict rules: This leads to false positives and frustration, resulting in low adoption.
* Late introduction: Adds an overwhelming backlog of issues, discouraging fixes.
* No training: Without understanding the tools, adoption is poor.
* One-off scans: Running analysis as a rare "big bang" exercise instead of embedding it in daily work.
* Unaligned rulesets: Using generic configurations that don't fit the project context, creating unnecessary noise.
* Security-only mindset: Focusing only on vulnerabilities and ignoring maintainability, readability, and complexity issues that slow future work.

# 

# **Useful tools**

**Category**

**JavaScript / Node.js**

**Python**

**C# / .NET**

**Java**

**PHP**

**Linters**

ESLint, JSHint

Flake8, Pylint

StyleCop, Roslyn analysers

Checkstyle, PMD

PHP_CodeSniffer, PHPMD

**Code quality analysers**

SonarQube, Plato

Radon

SonarQube, NDepend

SonarQube, SpotBugs

SonarQube, PHPStan

**Security analysers**

npm audit, Retire.js, OWASP Dependency-Check

Bandit, Safety

Microsoft Security Code Analysis, OWASP ZAP

FindSecBugs, OWASP Dependency-Check

RIPS, Psalm, OWASP Dependency-Check

**Code formatters**

Prettier, StandardJS

Black, autopep8

Roslyn analysers, dotnet format

Google Java Format, Spotless

PHP-CS-Fixer, phpcbf

**Type checkers**

TypeScript, Flow

MyPy, Pyright

Built-in compile-time type checking

Built-in compile-time type checking

Psalm, PHPStan

**Dependency analysers**

npm audit, Snyk, Retire.js

pip-audit, Safety

NuGet tooling, OWASP Dependency-Check

Maven Dependency Plugin, Gradle Versions Plugin, OWASP Dependency-Check

Composer Audit, Snyk, OWASP Dependency-Check

**Coverage analysers**

Istanbul/NYC, Jest coverage

coverage.py

dotCover, Coverlet

JaCoCo, Cobertura

PHPUnit Code Coverage, Xdebug

**Performance analysers**

Chrome DevTools Performance tab, Lighthouse

Py-Spy, cProfile

PerfView, dotTrace

VisualVM, JProfiler, YourKit

Xdebug profiler, Blackfire.io