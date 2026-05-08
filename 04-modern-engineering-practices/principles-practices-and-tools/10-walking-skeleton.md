# 10 - Walking Skeleton

A walking skeleton is a minimal implementation of a system that includes just enough functionality to be deployed, integrated, and tested end-to-end. It provides a basic architectural structure for the project, allowing developers to build upon it incrementally.

## **Who is this useful for?**

It helps delivery teams starting out new projects to reduce the risk from delivery by uncovering blockers to releasing sooner and validating architecture early in the development process.

## **How do I get started?**

* **Identify the first feature**

Identify the first essential feature with end-to-end functionality that demonstrates the flow of data through the system. Eg, a dashboard with a single widget showing a single database entry fetched from a real database table.

* **Setup Basic Infrastructure**

Use Infrastructure as Code (IaC) to set up the basic building blocks in the destination hosting environment of your choice. Make a basic CI/CD pipeline with only the stages that can test and deploy the application and the infrastructure. The goal is to have the basic setup running in production.

* **Test in Production**

Perform the integration tests in production environment to prove that functionality works as expected.

* **Iterate and Expand**

Once the walking skeleton is in place, continue to build upon it incrementally, adding new features and functionality in small, iterative cycles.