# 02 - Pair Programming and Teaming

At Armakuni, we use pair programming and teaming (mob programming) to accelerate learning, reduce delivery risk, and improve delivery flow. Pairing ensures knowledge is shared, feedback is immediate, and no individual becomes a bottleneck or single point of failure.

Pair programming is a method where two engineers work on the same code at the same time. One is the driver, actively writing code, while the other is the navigator, reviewing, asking questions, and spotting issues early. Roles switch regularly to keep energy and engagement high.

Teaming extends this to the whole team. One driver codes while the rest act as navigators, offering ideas, spotting problems, and helping shape solutions in real-time. Roles rotate often, so everyone contributes.

# **Why it's important**

* **Shared ownership and collective responsibility**: By working in pairs, code and context are owned by the team, not individuals. This reduces delivery risk and strengthens resilience when someone is absent.
* **Continuous feedback loops**: The driver-navigator dynamic gives immediate, constructive feedback, reinforcing our focus on learning and improvement.
* **Psychological safety**: Pairing builds trust, creates confidence, encourages open conversation, and makes it safe to share ideas or challenge approaches.
* **Cognitive load management**: Splitting the problem-solving between two minds helps avoid overload, which supports sustainable delivery.
* **Improved Flow**: Work is less likely to stall when someone is unavailable. It also reduces the need for code reviews, as they happen in real-time through the pair negotiation process

# **How to Get Started**

* **Find your people**: Choose partners or team members with complementary skills and strong communication.
* **Create the right setup**: For in-person sessions, ensure a comfortable, ergonomic space with shared screens. For remote, use collaborative code editors, screen-sharing, and stable audio.
* **Define roles and rhythm**: Be explicit about who is the driver and who is navigating. Switch regularly to keep engagement balanced.
* **Agree on goals**: Set a clear scope for the session and agree on what success looks like.
* **Start building**: Keep the conversation flowing, challenge ideas constructively, and share reasoning as you go.

# 

# **Anti-Patterns to Avoid**

* **Dominating voices**: One person drives the session, others disengage. Maintain equal participation.
* **Lack of focus**: Side conversations, Slack pings, or vague goals derail progress. Set boundaries and objectives upfront.
* **Silent pairing**: Little to no conversation between driver and navigator. Without verbalising thought processes, opportunities for shared learning and early problem-spotting are lost.
* **Context hoarding**: One person has most of the knowledge about the task and does not explain their reasoning, which prevents effective knowledge transfer.
* **Uneven role switching**: Driver and navigator roles aren't rotated often enough, leaving one person in a passive role and reducing engagement.
* **Ping-pong fatigue**: Switching roles so frequently that neither person maintains enough focus to make meaningful progress.
* **Backseat driving**: Navigators over-direct every keystroke rather than discussing intent and guiding the approach.
* **Over-engineering in the momen**t: Pairs or teams use the session to "perfect" a solution rather than delivering something valuable incrementally.
* **Tool friction**: Poor setup (laggy remote tools, uncomfortable workspace, small shared screen) makes the process frustrating and slows progress.
* **Task mismatch**: Using pairing or teaming for trivial, low-value work where the overhead outweighs the benefits, leading to frustration or the perception that it's "wasting time."
* **Pairing isolation**: Pairs work so closely that they lose sight of the wider team context, leading to decisions that conflict with other work in progress.
* **Burnout pairing**: Pairing or teaming for too long without breaks, causing fatigue and reducing code quality and collaboration quality.

## 

## **Common Misconceptions and Counter-Arguments**

**"Pairing slows us down."**

It may feel slower for an individual, but for the *team,* it increases delivery speed by reducing rework, finding defects earlier, and removing handover delays. The net effect is faster, higher-quality delivery. See [The Costs and Benefits of Pair Programming](https://web.eecs.umich.edu/\~weimerw/2024-481F/readings/pairprogramming.pdf)

**"We don't need to pair because we trust each other."**

Pairing isn't about mistrust. It's about amplifying knowledge sharing, removing single points of failure, and enabling continuous improvement through live feedback. See [The GDS Way](https://gds-way.digital.cabinet-office.gov.uk/standards/pair-programming.html?utm_source=chatgpt.com#pair-programming).

**"It's too expensive to have two (or more) people on the same task."**

The real cost is defects, misaligned solutions, and lost context when key people are unavailable. Pairing is an investment in reducing those risks. See [Investigating the Effectiveness of Pair Programming in Industrial Domains](https://alexpawelczyk.github.io/Portfolio/assets/pp-research-paper.pdf)

**"We'll get the same benefits from code review."**

Code reviews happen after the fact, when context may already be lost and rework is more costly. Pairing provides *real-time* review and collaborative problem-solving. See [Exploring the benefits of pair reviewing in code reviews](https://graphite.dev/guides/benefits-pair-reviewing-code-reviews)

**"Not all work needs two people."**

True, pairing is most valuable for complex, high-risk, or business-critical work. Part of the skill is knowing when to pair, when to mob, and when solo work is fine.

**"Introverts won't like it."**

Pairing can be adapted to suit different communication styles. Agree on working rhythms, take regular breaks, and rotate partners to keep energy sustainable.

**"It only works in person."**

With the right tools and discipline, remote pairing can be equally effective. We've successfully done this at Armakuni across multiple distributed client teams.