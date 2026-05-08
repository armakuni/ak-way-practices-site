# 05 - Test-Driven Development

Test Driven Development (TDD) is a software development approach where developers write tests for new code before writing the code itself. By writing tests first, developers can ensure that code meets requirements, performs as expected, and is easy to maintain and refactor.

## **Who is this useful for?**

Engineering teams looking to improve code quality, reduce bugs, and increase confidence. Businesses who want to save potentially millions by detecting bugs early in the process.

## **How do I get started?**

A pre-requisite for TDD is familiarity with the programming language you are using and basic knowledge of a testing framework, e.g. what are assertions and how to use them in the language you selected.

**Understand the basics**

* Gain an understanding of the TDD cycle: Red-Green-Refactor. Read introductory materials on TDD, such as [books](https://www.oreilly.com/library/view/test-driven-development/0321146530/), [articles](https://www.codecademy.com/article/tdd-red-green-refactor), and [tutorials](https://www.youtube.com/watch?v=eAPmXQ0dC7Q).
* Focus on understanding the importance of writing tests first.
* Write simple tests to verify basic functionality.
* Write code to make tests pass without over-engineering.

 ![](img/test-driven-development.png)

**Write Effective Tests**

* Practice writing different types of tests for various scenarios.
* Experiment with using test doubles (mocks, stubs, fakes) to isolate code under test.
* Study examples of effective test cases and learn from experienced TDD practitioners.
* Understand different types of tests: unit tests, integration tests, and end-to-end tests.

**Test-Driven Design**

* Use TDD to guide the creation of well-designed, modular software.
* Focus on writing tests that guide the design of clean, modular, and maintainable code.
* Build confidence in refactoring code, knowing that tests provide a safety net.

**Advanced TDD Techniques**

* Use TDD with legacy code.
* Apply TDD to complex or challenging problems.
* Integrate TDD with other development practices, such as pair programming, continuous integration, and continuous deployment.

**Zen Mastery**

* Mentor and coach others in TDD best practices.
* Lead TDD adoption within teams and organisations.
* Contribute to the TDD community through writing, speaking, and teaching

## **Anti-Patterns**

* Writing tests after coding can lead to tests that only confirm the current behaviour of the code, rather than defining the desired behaviour.
* Writing tests that are too complex or tightly coupled to the implementation details of the code makes tests difficult to maintain and refactor.
* Skipping the refactoring step leads to code that is difficult to maintain, understand, and extend over time.
* Focusing exclusively on unit tests without testing interactions between different components or systems can lead to integration issues.
* Writing too many tests, especially redundant or trivial tests, increases development time without providing significant value.