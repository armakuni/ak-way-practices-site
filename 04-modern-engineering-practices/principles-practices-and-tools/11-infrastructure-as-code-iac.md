# 11 - Infrastructure as Code (IaC)

IaC manages and provisions infrastructure through code, not click-ops. Definitions are versioned, testable, and automated, which makes environments reproducible and safer to change.

# **Who benefits?**

Engineering and platform teams that want consistent, auditable environments, faster delivery, and lower operational risk. Security and governance teams benefit from policy as code, traceability, and drift detection.

# **How we approach IaC**

**Cloud agnostic, AWS-leaning** - We work across AWS, Azure, and GCP. We prefer AWS, where clients are flexible, and use native services when they create real leverage. We use multi-cloud tools when portability or standardisation matters.

**Choose the right level of abstraction** - Use cloud-native definitions for deep integration and service velocity. Use multi-cloud frameworks when standard workflows, reuse, or portability are the priority. Make that trade-off explicit.

**Open source first, licence aware** - HashiCorp changed Terraform's licence to BUSL. For a truly open option, we use **OpenTofu**. We will still use Terraform where appropriate and allowed. Be explicit about the implications in client proposals.

**Pipelines, not laptops** - Plans and applies run in CI with approvals, not from a developer machine. Every change is reviewed, tested, and traceable.

**Guardrails by default** - Remote state with locking, least-privilege IAM, policy as code, tagging standards, drift detection, and cost visibility. No snowflakes.

# **Tooling options**

Use what fits the client's platform strategy, team skills, and compliance needs.

## **AWS**

* Native: CloudFormation, AWS CDK, SAM, Proton
* Multi-cloud: OpenTofu, Terraform, Pulumi, Crossplane

## **Azure**

* Native: Bicep, ARM Templates
* Multi-cloud: OpenTofu, Terraform, Pulumi, Crossplane

## **GCP**

* Native: Config Connector (Deployment Manager where maintained)
* Multi-cloud: OpenTofu, Terraform, Pulumi, Crossplane

## **Common add-ons**

* Policy as code: Open Policy Agent, Conftest, Checkov
* Security scanning: Checkov, tfsec
* Testing: Terratest, cdk-assertions, task-level smoke tests
* State backends: S3 with DynamoDB locking, Azure Storage, GCS
* Orchestration helpers: Terragrunt, make, taskfiles

# **Getting started**

* **Pick a strategy -** Decide native vs multi-cloud, and document why. State management, environments, and promotion model must be defined up front.
* **Set up repos and state** - One repo per product or platform slice. Remote backend with locking. Sensitive values in a secrets manager, not in code.
* **Structure for change** - Small modules, clear interfaces, versioned modules, and a narrow blast radius per deployment unit.
* **Automate the workflow** - CI runs fmt, validate, lint, policy checks, unit tests, and plan. Manual approval gates for apply. Separate pipelines per environment.
* **Baseline policy and tags** - Enforce naming, tagging, regions, encryption, logging, and budget tags in code. Fail the build if missing.
* **Drift and cost** - Scheduled drift checks and cost reports. Triage and remediate drift as work, not as a favour.

# **Anti-patterns**

* **Click-ops after the fact -** Manual console changes create drift and erase auditability. Detect and reverse, or codify immediately.
* **Laptop applies -** Changes outside CI break traceability and invite mistakes.
* **No state discipline -** Local state, no locking, or shared credentials cause race conditions and data loss.
* **Huge blast radius -** One apply touches the world. Split stacks, use granular workspaces, and scope permissions.
* **Unpinned versions** - Provider or module upgrades change behaviour unexpectedly. Pin and upgrade deliberately.
* **Generic rules that do not fit -** Copy-paste policies that create noise. Tune rules to the context, then enforce.
* **Treating IaC as "set and forget" -** No tests, no reviews, no drift checks. IaC is software. Apply the same engineering standards.

# **Common questions and answers**

**"Why not Terraform everywhere?"**

BUSL limits pure open use. OpenTofu provides an open fork. We will use Terraform where licences and client standards allow, and OpenTofu when openness matters.

**"Why not always use cloud-native?"**

Native gives deep integration, but can lock you in. When portability, consistency, or team skills trump depth, use OpenTofu, Pulumi, or Crossplane.

**"How do we keep teams safe?"**

CI-only applies, least-privilege roles, policy checks in the pipeline, drift detection, and small, reversible changes.

# **Test-Driven Development with IaC**

We apply the same **test-first** mindset to infrastructure as we do to application code. TDD with IaC reduces deployment risk, catches misconfigurations early, and ensures our infrastructure changes are safe, intentional, and repeatable.

## **Why it matters**

* Prevents costly outages by validating infrastructure before it's applied
* Documents expected behaviour in executable form
* Makes refactoring infrastructure safe, with confidence in test coverage
* Encourages smaller, more frequent changes that are easier to review and roll back

## **Practical approach**

* **Write a failing test first**
* Define the expected outcome (e.g. "An S3 bucket must have versioning and encryption enabled") before writing IaC.
* Use unit test frameworks such as:
* **Terraform/OpenTofu**: [Terratest](https://terratest.gruntwork.io/), [Kitchen-Terraform](https://newcontext-oss.github.io/kitchen-terraform/)
* **CDK**: CDK assertions libraries (e.g. @aws-cdk/assertions in TypeScript)
* **Pulumi**: Pulumi Test Framework
* **Write the minimal code to pass the test**
* Implement the IaC configuration to meet the defined requirement.
* **Refactor with tests green**
* Optimise module structure, naming, and reusability while ensuring tests still pass.
* **Integrate into CI**
* Run IaC tests as part of the pipeline *before* applying to any environment.
* Fail builds if tests fail. No exceptions for "quick fixes".

## **Example tests**

* Resource existence: "EC2 instance with specific tag exists"
* Policy compliance: "All buckets block public access"
* Networking rules: "No open inbound traffic on port 22"
* Cost guardrails: "No RDS instances deployed outside approved sizes"

## **Anti-patterns in TDD for IaC**

* Writing IaC without tests, relying on "click to check" in the console
* Treating IaC tests as optional when under time pressure
* Only testing "happy path" configurations, ignoring security and failure scenarios
* Leaving tests in a local-only setup and not integrating into CI/CD