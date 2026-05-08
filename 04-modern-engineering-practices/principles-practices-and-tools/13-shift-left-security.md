# 13 - Shift Left Security

Shift Left Security means building security in from the start, not bolting it on at the end. We integrate security testing, tooling, and threat modelling into the earliest stages of the software delivery lifecycle (SDLC), so vulnerabilities are found and fixed before they can be exploited.

This enables secure-by-default delivery, fast feedback, and shared responsibility between engineering and security teams.

# **Why We Use It**

* **Catch issues early**: Vulnerabilities are cheaper and easier to fix during development than in production.
* **Embed compliance**: Every change is checked against security policies and regulatory requirements automatically.
* **Strengthen collaboration**: Security specialists work alongside developers, shifting from a reactive "gatekeeper" role to a proactive partner.
* **Reduce breach risk**: Continuous scanning and monitoring make security incidents less likely and less severe.

# **Getting Started**

* **Build security literacy**
* All engineers should understand common vulnerabilities (e.g. OWASP Top 10) and basic threat modelling.
* Use internal training and knowledge-sharing sessions to build awareness.
* **Know your security tooling**

Integrate tools across multiple categories for full coverage:

**Category**

**Purpose**

**Example Tools**

**SAST** (Static Application Security Testing)

Scan the code for vulnerabilities before it runs

SonarQube, Roslyn Security Analysers (C#), Bandit (Python), ESLint security plugins (JS), Checkov (Terraform/Bicep)

**DAST** (Dynamic Application Security Testing)

Test running applications for exploitable flaws

OWASP ZAP, Burp Suite

**SCA** (Software Composition Analysis)

Check dependencies and containers for known CVEs

OWASP Dependency-Check, Snyk, Trivy

**CSPM** (Cloud Security Posture Management)

Monitor and enforce security baselines in the cloud

AWS Security Hub, AWS Config, Prowler (AWS), Prisma Cloud, OpenSCAP

* **Integrate into CI/CD**
* Run security scans on every commit and pull request.
* Fail builds on high-severity issues.
* Generate alerts for remediation and track them to closure.
* **Make it part of the definition of done**
* No story is complete until the security checks are passed.
* Security fixes are prioritised alongside functional work.

# **Anti-Patterns**

* **Ignoring third-party dependencies**: Vulnerable libraries are a top breach vector. Always scan and patch dependencies.
* **Late-stage scanning**: Running tools only before release creates a backlog of issues and slows delivery.
* **Security as someone else's job**: Developers and engineers must own security in their code, not just the security team.
* **Untriaged findings**: Letting scan reports pile up without prioritising and fixing issues erodes trust in the process.

# **Test-Driven Development for Security**

We apply **test-first** thinking to security requirements, ensuring they're codified and verified before features ship. This makes security measurable, automatable, and part of normal development rather than an afterthought.

## **Why it matters**

* Forces teams to clarify security expectations up front.
* Prevents regressions by making security controls testable.
* Embeds compliance into day-to-day delivery.
* Reduces firefighting by catching issues before production.

## **Practical approach**

* **Define security requirements as tests**
* Example: "All S3 buckets must have encryption and block public access" becomes an automated compliance test.
* Use policy-as-code frameworks like **Open Policy Agent (OPA)**, **AWS Config Rules**, or **Conftest** to codify these rules.
* **Write the failing test first**
* For infrastructure: Write a policy check or IaC test that fails until the configuration meets requirements.
* For applications: Write SAST/DAST/SCA test cases or pipeline checks that detect insecure patterns.
* **Write the minimal code/config to pass the test**
* Update application or IaC code to meet the requirement.
* Keep changes small and targeted.
* **Refactor with tests green**
* Improve structure, naming, or performance without breaking compliance.
* **Integrate into CI/CD**
* Security tests run alongside functional and performance tests.
* Builds fail if tests fail. No "fix later" exceptions.

## **Example security tests**

* Application: "No SQL queries use string concatenation."
* Infrastructure: "No security groups allow inbound 0.0.0.0/0 on port 22."
* Dependencies: "No high-severity CVEs in application or container dependencies."
* Cloud: "All IAM roles have least-privilege policies."

## **Anti-patterns in TDD for Security**

* Writing security tests after implementation, losing the "shift left" benefit.
* Treating pipeline security failures as low-priority warnings.
* Using manual checklists instead of automated tests.
* Ignoring failing tests because they're "too noisy" instead of refining them.

###