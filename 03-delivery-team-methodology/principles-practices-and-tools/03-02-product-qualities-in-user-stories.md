# 03.02 - Product Qualities in User Stories

**Product Qualities** (also called *Quality Attributes*, *System Characteristics*, or *Architectural Characteristics*) describe the measurable qualities and behaviours of a product beyond its core functionality. These qualities are **part of the product**, not "extras" or "nice-to-haves", and they directly shape the user experience, system resilience, and maintainability.

By embedding product qualities into user stories, we ensure they are considered during design, development, and testing — not bolted on afterwards. This helps teams deliver software that is not only functional, but **reliable, secure, and delightful to use**.

# Why not NFRs?

The label Non-Functional Requirements is misleading for two main reasons:

### 1. "Non-functional" is a false distinction

Product qualities like performance, security, or accessibility are functional in the sense that they directly affect whether the product works for its intended users. Calling them "non-functional" implies they are optional or secondary, when they are often critical to product success.

### 2. They are not separate from functional work

Historically, NFRs were treated as a separate checklist after features were built. This created risk, rework, and missed expectations. In modern engineering, product qualities are first-class citizens, embedded into the stories, definition of done, and acceptance criteria from the start.

Using the term *product qualities* keeps them visible, valued, and integral to delivery.

# Who is this useful for?

* **Product Managers** - to ensure product qualities are part of prioritisation discussions.
* **Engineers** - to design, build, and test against agreed quality targets.
* **Stakeholders** - to understand how qualities like performance or accessibility affect customer satisfaction and business outcomes.

# How to incorporate product qualities into stories

## 1. Use acceptance criteria for qualities

For every functional user story, define acceptance criteria that capture relevant product qualities.

**Example:**

*As a user, I want to search for products so that I can find what I need quickly.*

**Product Quality Acceptance Criteria:** 95% of search queries return results within 300ms under normal load.

## 2. Make them measurable

Qualities should be expressed in measurable terms to enable verification.

**Good:** Page loads in under 1.5 seconds for 90% of users on a 4G connection.

**Poor:** Page should load quickly.

## 3. Include them early

Qualities should be part of Definition of Ready (DoR) for a story. If they aren't, the story isn't ready for development.

## 4. Treat them as first-class

Product qualities are as important as functional requirements - they affect user experience and business value.

# Examples of Product Qualities in Stories

| Quality Attribute | Example in a User Story |
| --- | --- |
| Performance | 95% of API calls respond in <250ms under expected peak load. |
| Security | All form inputs are validated server-side; no reflected XSS vulnerabilities detected. |
| Accessibility | Page meets WCAG 2.1 AA criteria; all images have descriptive alt text. |
| Scalability | System supports 10,000 concurrent sessions with <1% error rate. |
| Reliability | 99.95% uptime over rolling 30-day period. |
| Maintainability | New features are implemented without modifying more than 10% of core modules. |
| Usability | User completes onboarding in under 2 minutes without help. |

# **Anti-patterns**

* **Treating product qualities as optional** - leads to rushed, low-quality experiences.
* **Leaving them until the end** - costly and risky to retrofit.
* **Using vague language** - makes validation impossible.
* **Separating them entirely from user stories** - encourages siloed thinking.

# **Useful Links**

* [The Quality Attribute Workshop](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=513807)
* [Google Web Vitals](https://web.dev/vitals/) - measurable metrics for performance and usability.
* [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/) - accessibility requirements.
* [Site Reliability Engineering (SRE) - SLOs and Error Budgets](https://sre.google/workbook/implementing-slos/)