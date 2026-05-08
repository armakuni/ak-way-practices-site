# 15 - Observability

Observability is the ability to understand the internal state of a system based on its external outputs. In practice, this means being able to answer questions about system behaviour, performance, and health without deploying new code.

For modern, cloud-native systems made up of microservices, containers, and distributed infrastructure, failures often arise from application errors or complex service interactions rather than hardware. Observability helps teams detect, understand, and resolve these issues faster.

We focus on building systems that are transparent, diagnosable, and capable of delivering fast feedback for continuous improvement.

# Why We Use It

* **Proactive problem-solving**: Spot performance degradations and errors before they impact users.
* **Faster root cause analysis**: Understand *why* a system is failing, not just *that* it is failing.
* **Improved resilience**: Make informed design changes based on real operational insight.
* **Shared context**: Provide engineers, operations, and product teams with a common source of truth.

# Observability vs Monitoring

* **Monitoring** answers: *Is the system healthy?*
* Example: Disk usage, CPU load, API response times, uptime.
* Focus: Capturing metrics, triggering alerts.
* **Observability** answers: *Why isn't the system healthy?*
* Example: Tracing request flows, correlating logs across services, and identifying failure patterns.
* Focus: Analysing metrics, logs, and traces to provide context and insight.

# Building Observability into Systems

We approach observability in **five stages**:

* **Instrumentation**
* Embed metrics, logging, and tracing in code, infrastructure, and business processes.
* Include correlation IDs, request IDs, and trace context in all logs.
* **Metrics, Logs, and Traces Collection**
* Centralise data from applications, infrastructure, and cloud services.
* Use AWS CloudWatch, CloudWatch Logs, X-Ray, OpenTelemetry, or vendor tools such as Honeycomb and Datadog.
* **Analysis and Visualisation**
* Use dashboards and queries to detect anomalies and patterns.
* Example tools: CloudWatch Insights, Elasticsearch/Kibana, Honeycomb, Grafana.
* **Alerting and Notification**
* Set thresholds and anomaly detection rules.
* Send alerts via appropriate channels (Slack, PagerDuty, email).
* **Continuous Improvement**
* Review incidents and operational data to refine instrumentation, alerts, and dashboards.

# Logging for Observability

Logs are a key observability signal when structured and enriched with context.

* **Single log event** → Snapshot of state at a moment in time.
* **Multiple correlated events** → Trend or pattern that reveals underlying issues.

## Example pattern detection

Three log entries for the same API show response times increasing from 0.07s → 1.3s → 2.0s. While the API is still returning 200 OK, the pattern points to a performance degradation worth investigating.

# Structured Logging

Plain string logs are harder to parse and analyse at scale. Structured logs use key–value pairs, often in JSON, to make logs machine-readable and queryable.

Example:

```
{`   "date":"Sep 27 16:13:16"``   "endpoint": "armakuni.tk-learning.ak-raindrops"``   "some-other-data": "bb62be68-7829-44f6-ac88-ccc1eed010e7/[RTR/6]: ak-raindrops-fearless-kookaburra.cfapps.io - [2018-09-27T23:13:15.242+0000]"``   "operation": "GET /period/10 HTTP/1.1"``   "response-code": 200``   "some-value": 0``   "transferred": 52``   "response-body": "-"``   "agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"``   "some-ip""10.10.66.49:58376"``   "some-other-ip": "10.10.149.233:61086"``   "x_forwarded_for": ["86.159.227.161", "10.10.66.49"]``   "x_forwarded_proto":"http"``   "vcap_request_id":"b5174259-5823-4dbf-7608-4745c418a5d2"``   "response_time": 0.070358043``   "app_id": "bb62be68-7829-44f6-ac88-ccc1eed010e7"``   "app_index": "0"``   "x_b3_traceid":"9728e528008bee29"``   "x_b3_spanid":"9728e528008bee29"``   "x_b3_parentspanid":"-"`}
```

**Benefits**:

* Easier searching, filtering, and aggregation in tools like CloudWatch Logs Insights, Elasticsearch, and Honeycomb.
* Enables automated anomaly detection and correlation across services.

# Anti-Patterns

* Ignoring key metrics and events: Missing critical visibility into performance and behaviour.
* Overlooking dependency tracking: Makes root cause analysis harder when upstream services fail.
* Inadequate alerting – Delays detection and response to incidents.
* Overly aggressive logging/monitoring: Creates noise and hides meaningful signals.
* Unstructured logs only: Limits the ability to correlate and query data effectively.
* Lack of context in logs: Omitting trace IDs, request IDs, or user context reduces diagnostic value.

# Recommended Practices

* AWS preference: Use AWS-native tooling first where appropriate: CloudWatch, X-Ray, GuardDuty, Config.
* Open standards: Leverage OpenTelemetry for portable instrumentation.
* Observability as code: Provision dashboards, alerts, and log groups using IaC.
* Correlated triage: Always review metrics, logs, and traces together during incident response.
* Post-incident feedback loop: Improve instrumentation and alerting after every major incident.