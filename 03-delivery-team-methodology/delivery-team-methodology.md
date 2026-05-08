# Delivery Team Methodology

Our delivery teams are guided by a range of methodologies and practices, from an agile mindset to continuous integration and continuous delivery. These approaches support efficiency, collaboration, and high-quality software delivery.

A team's primary purpose is to deliver value to the end-user, typically through the creation of software. There are multiple ways to articulate value, including:

* Timeliness - providing the right thing at the right time
* Usefulness/Delight - it must benefit (and ideally delight) the end user
* Maintainable - delivered products and features must support future needs for maintenance and extension
* Operable / Observable - it must provide the necessary functionality to safely and reliably operate in production
* Financially optimised - it should use technology efficiently to lower operative costs
* Reduced risk - it should not introduce any undue risk
* Predictable - the end user should have continual visibility of progress. Stakeholders must be able to predict progress with reasonable reliability.

# Principles

We build on several industry-leading methodologies and practices to achieve a fast flow of value:

## 1. Rely on Individuals and Interactions over Processes and Tools

Aligned with agile methods, we keep processes and tools lightweight and adaptable. If particular processes or tools impede the flow of value, they should be removed or adapted. The delivery team has the autonomy to adjust processes and tools to fulfil their responsibilities.

## 2. Working software is the primary measure of success

We judge progress primarily by the availability of working software in a production (or production-like) environment - rather than relying on reports, task lists or burn-down charts. Working software means software delivered into an environment where a customer uses (or tests it in real-world conditions). Progress reports other than working software should be considered of secondary importance.

## 3. Frequent customer collaboration

Teams create all software by working closely with the customer. An end-user should sit with the team daily, reviewing progress and participating in defining the next steps of development. Where this is not feasible, we strive for a minimum of weekly touchpoints for customer collaboration with the team. To support cross-functional work, the whole team must work with the customer - not just a User Researcher or Product Manager. This approach allows the team to empathise with the users' needs and desires, empowering them to build and deliver with that in mind.

## 4. Constantly respond to change

Rather than waiting for a significant upfront design phase, which often misses crucial aspects of the implementation, we start projects without expecting the scope or definition of the product to be fully understood. We identify and prioritise the most critical use case, user journey, or story to implement. We implement this to completion. Only then do we consider the next priority. We improve/expand upon already delivered functionality every time we start a new iteration. This approach enables us to adapt to changes when requirements evolve due to user feedback or a deeper understanding of user needs.

# Start with an Inception

All engagements must start with an [Inception](principles-practices-and-tools/01-inception.md). This approach helps align the team and stakeholders around the scope and expectations. The objective is to understand the organisational context better and produce a prioritised backlog, so the team has everything they need to begin delivering immediately.

We recommend that you dedicate at least an entire day to this process, though depending on the complexity of the work Inceptions can span multiple days. The inception should set the stage for the next two or three months of development. After that period, be prepared to re-incept and re-align scope, expectations, and direction.

# Choose your toolset

The "agile" and "lean" families of methodologies have many different approaches. We recommend starting with the list below. The team should continuously adapt this list based on findings from retrospectives.

## 1. Communication

Strong communication underpins reliance on individuals and interactions, so it is essential to have the right tools to support effective communication. Avoid tools that do not facilitate team autonomy, as they can undermine the work's success.

### Slack/Teams

Every team member should either be co-located or have access to a communication tool such as Slack or Teams. The tool must enable at least the following:

* Instant messaging
* Exchange of files
* Video calls
* [Pair programming and Teaming](../04-modern-engineering-practices/principles-practices-and-tools/02-pair-programming-and-teaming.md) (screen share, keyboard control, etc.) from a developer's workstation

### Confluence / DevOps wiki / GitHub wiki

Store documentation of designs and decisions in a location accessible to all team members. If desired, maintain architecture decision records ([ADRs](https://github.com/joelparkerhenderson/architecture-decision-record)) in source control. The tool must enable at least the following:

* The documentation should be accessible to everyone in the organisation without prior approval
* All team members can structure and add/remove pages
* All team members should be able to comment/suggest edits

### Daily meeting(s)

The team should collaborate continuously through pair programming (or sometimes mob programming). It may also be helpful to have designated daily meetings. [Daily meetings](principles-practices-and-tools/05-daily-stand-up.md), sometimes referred to as 'stand up', may support the following:

* Communication of status with stakeholders
* Identifying external blockages
* Ensuring team goals are progressing

### Task management

The team should have a shared space to communicate planned and ongoing activities. This space can be a conventional [Team board](principles-practices-and-tools/04-team-board.md), or if the team is comfortable trying new ideas, they can explore tree-structured dependency diagrams (like shared mind maps) or [event modelling](https://eventmodeling.org/posts/what-is-event-modeling/) to slice a system into a set of deliverable products collaboratively.

## 2. Working software delivered to production

A team must deliver working software to the production (or production-like) environment as soon as possible. Ideally, a team should deliver software into production during the first week of development. This approach is called the [Walking Skeleton](../04-modern-engineering-practices/principles-practices-and-tools/10-walking-skeleton.md).

We recommend the following practices to achieve working software delivered to production:

### Test in Production

Test in Production is a technique which uses software deployed to a production environment as the location for acceptance testing. We prefer it over the traditional approach of using a distinct QA/UAT environment. Use a tenancy model to allow test tenants for test isolation where necessary.

### Continuous Deployment

We fully automate the software deployment process when deploying it into production. We achieve this through a widespread understanding of [CI/CD methods](../04-modern-engineering-practices/principles-practices-and-tools/09-continuous-integration-continuous-delivery.md), which are well-established as supporting safe and reliable software deployment in highly regulated environments.

### Automated Acceptance testing

Automated acceptance tests should gate all software, replacing manual testing before deployment to production. Note that some manual testing may still be necessary in production, but this happens after deployment. QA engineers may design the automated acceptance suite, although developers should implement the tests themselves.

### Infrastructure as Code

Create and configure all environments using Infrastructure as Code (IaC). This approach is vital for supporting the fast flow of working software into production. To achieve this, use tools such as Terraform, CloudFormation, or Bicep.

The team should regularly rehearse the removal and regeneration of the production environment to ensure the IaC code meets the requirements. This technique is crucial during the early delivery stages.

### Observe and Generate feedback

The software in production should produce insights about usage patterns to inform experimentation and decision-making about the product. Metrics should be both technical and business-facing.

## 3. Collaborate with your customers

You must involve customers in your daily work. Sometimes, customers are unavailable or unwilling to work with a team. In this situation, we recommend appointing an [XP-style Customer role](http://www.extremeprogramming.org/rules/customer.html) to champion the customer's needs and desires. When daily collaboration isn't possible, use Iteration planning with the customer to prioritise the most crucial functionality to implement.

### Use of design/wireframe tools

Tools like Figma are a powerful way to iterate on user interface ideas quickly. However, it is essential to note that using these tools can delay the implementation of UI within Working Software. Teams should limit the use of design tools to quickly explore initial thoughts or sketches and work to convert the output directly into working software. At no point should the team claim delivery of value to the user based solely on static designs or wireframes.

### Team Reviews/Demos

We recommend using ["Sprint Demos"](principles-practices-and-tools/07-team-reviews-and-demos.md), borrowed from the Scrum methodology. These meetings allow teams to demonstrate the value they deliver to stakeholders and customers and encourage knowledge sharing and a shared context across the team. Ideally, the team will work with customers daily, and regular organic discussions and demonstrations may replace these meetings.

### User stories/Use cases

When iterating quickly with users, capturing the core functionality in an [abstract form](principles-practices-and-tools/03-user-stories.md) is essential. The primary reason is to explain the reasoning for design decisions. These artefacts will prove valuable for communication within the team and between stakeholders and the team. However, it is vital to keep the primary measure of delivery as working software rather than "offline" artefacts like these.

### Information radiators

An [Information Radiator](principles-practices-and-tools/08-information-radiator.md) is a practice that makes a team's work and status immediately visible to stakeholders and other teams. A team is not required to show their "internal workings" (or inner game) to those outside it. We empower teams to work in whatever way serves them best, with complete autonomy. Teams earn autonomy by proactively broadcasting their progress to those outside the team, making it available without request. (See <https://www.agilealliance.org/glossary/information-radiators/>)

## 4. Respond to change

The team must be able to pivot quickly to meet emerging needs and priorities, including adjusting team working practices and delivery goals. Below are a couple of practices that help with this.

### Retrospective

Teams should hold a [retrospective](principles-practices-and-tools/06-retrospectives.md) meeting at the end of each delivery iteration. Retrospectives allow the team to articulate necessary changes to how they are working. To ensure these meetings are helpful, they must have clear actions, and the team must make time to implement any improvements to their system of work. No part of the team's adopted "methodology" should be seen as fixed. Meetings/processes/working practices - these should all be available for the team to adjust as they see fit, in line with delivering on the user or customer needs.

### Plan for change

Creating detailed plans containing a long list of features and hours spent estimating effort creates a false sense of certainty. This creates waste, as teams invest time and effort into work that may not go live for months—or ever. The investment of time creates a feeling of attachment to the long backlog of work or an agreed-upon list of milestones and can prevent teams from adapting to new learnings and changing direction.

Prioritising the most valuable features removes the need for backlogs and estimates. If a "backlog" is maintained, it should be considered a casual list of potential work instead of a rigid delivery commitment for weeks or months. At the [start of each iteration](principles-practices-and-tools/02-iteration-planning.md), the team, together with the Customer, should choose the subsequent most important functionality to implement.