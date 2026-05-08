# 03.01 - Story Slicing

Large, vague stories slow delivery, increase uncertainty, and hide risks. Small, well-sliced stories enable quicker feedback, easier testing, and faster value delivery.

Story slicing is the practice of breaking large features or epics into the smallest valuable increments that can be designed, built, tested, and released to users. The goal is to deliver value quickly, get feedback early, and reduce the risk of delivering the wrong thing.

Unlike breaking work into technical tasks (e.g., "set up database"), slices should be **vertical** — cutting through all layers of the system to deliver a usable, testable outcome for the customer.

# Why it matters

* **Faster feedback** – You learn whether the feature works for real users earlier.
* **Reduced risk** – You avoid spending weeks or months on something before finding out it's wrong.
* **Higher adaptability** – You can pivot based on what you learn without wasting effort.

# Who is this useful for?

* Product Owners and Product Managers defining and refining the backlog
* Delivery teams ensuring work is small enough to deliver in a single iteration
* Technical leads coaching teams on shaping work into valuable increments

# Story Slicing Principles

When a story is too big to deliver within an iteration or sprint, slice it by:

* **Workflow Steps** – Deliver one step of a process at a time (e.g., implement "upload file" before "edit file").
* **Scenarios or Variations** – Start with the simplest scenario, then add complexity (e.g., one user role before all roles).
* **Data Types** – Support a subset of data first, then extend (e.g., text-only uploads before images or video).
* **Interface Types** – Start with one UI channel or API endpoint, then add others.
* **Quality Attributes** – Deliver functional behaviour first, then extend with optimisations (e.g., basic search before fuzzy search with filters).
* **Happy Path First** – Implement the most common path before handling all edge cases.

**Rule of Thumb:** A story should ideally be small enough to complete in a single day, but must be completable in one iteration.

# Examples of good slices

## Example 1 – Online payment

* Large story: "As a customer, I want to pay for my order online so that I can complete my purchase."
* Slices:
* Support one payment method (credit card) with a fixed amount.
* Support variable amounts.
* Add a second payment method (PayPal).
* Add saved payment details for logged-in customers.

## Example 2 – Search feature

* Large story: "As a user, I want to search the catalogue so that I can find items quickly."
* Slices:
* Search by exact product name.
* Add partial matches and keyword search.
* Add category filtering.
* Add sorting options.

## Example 3 – Reporting dashboard

* Large story: "As a manager, I want a dashboard so I can monitor sales."
* Slices:
* Show total sales for current day.
* Show sales over the past 7 days.
* Add breakdown by product.
* Add filtering by region.

# Anti-patterns

* Slicing stories only by UI layers and leaving backend or integration work as separate, non-value items
* Creating "technical tasks" or delivery by activity eg. focusing on "build database" or "design screens" rather than end-to-end value.
* Over-optimising for reuse too early, adds complexity before value is proven.
* Overly large stories which makes work unpredictable and delays feedback.
* Pushing complexity into "phase 2" without a plan to validate it

# Useful links

* [Bill Wake's INVEST in Good Stories](https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/)
* [Atlassian – How to Split User Stories](https://www.atlassian.com/agile/project-management/user-stories#split)