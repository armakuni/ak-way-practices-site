# 12 - Test in Production

Test in Production (TiP) is a software testing approach that involves running tests against a live production environment. Unlike traditional testing methods that rely on pre-production environments, TiP allows teams to validate system behaviour, performance, and reliability in real-world conditions.

## **Who is this useful for?**

This helps the product teams, customer representatives, and QA team validate the system in real-world scenarios. This reduces the need for distinct "lower" environments like QA, UAT etc. This makes the delivery process faster and reduces the effort and money spent on making these lower environments look like production.

## **How do I get started?**

**Identify test scenarios**

Production testing in your real production system is all about studying, making improvements, and informing your choices with the most up-to-date and accurate data available, after the code has already gone through the regular deployment process. This assumes that a lot of functionality would have been tested via automated tests in the deployment pipeline. So the focus for testing in production is critical functionality, performance, and reliability.

**Feature Flags**

[Feature flags or toggles](https://martinfowler.com/articles/feature-toggles.html) allow you to test the behaviour in production without rolling it out to end users by providing a control to enable and disable it.

**Gradual Rollout**

Techniques like canary releases or blue-green deployment can allow the production traffic to be rolled out to a small percentage of users at a time. This allows you to test and gather data about the new behaviours before deciding to direct 100% of traffic to it. A similar behaviour can also be provided by some feature flag tools that support traffic segmentation without complicating the deployment strategy.

**Observability**

Utilise monitoring and observability to collect and analyse data from the production environment, including performance metrics, error rates, and user behaviour.