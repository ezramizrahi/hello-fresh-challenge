# HelloFresh - **Personalize Your Plan** Component E2E Test
Author:
  Ezra Mizrahi

Created:
  08/03/2021

## Task Description
Create a functional/E2E test for the **Personalize Your Plan** component.

## Requirements
The E2E tests should simulate user behaviour such as:

* selecting a preference,
* customizing a plan size,
* and viewing the price and shipping cost based on the plan selection.

Ensure that the test is data driven and can be run for both HelloFresh AU and HelloFresh US.

In addition, a test report should be generated at the end of the test run. The test report should be published to GitHub pages using GitHub actions.

## Design
(2-5 paragraphs) A short and sweet overview of your implementation ideas. If
you have alternative solutions to a problem, list them concisely in a bullet
list.  This should not contain every detail of your implementation, and do
not include code. Use a diagram when necessary. Cover major structural
elements in a very succinct manner. Which technologies will you use? What
new components will you write? What technologies will you use to write them?

I have chosen to use Cypress to run the tests. I have used Mochawesome to generate the reports.

In this task I have aimed to follow best practices within testing and within the Cypress framework. In the `support/page-objects` folder I have created a `PlanPage` PageObject class that is used in the `integration/plan-page/plan-page.spec.js` test file. PageObjects are convenient as they allow us to more easily maintain a test, and allow us to keep duplication to a minimum.

Given that the requirements of this state that the tests need to run on both the HelloFresh AU and US domains, I have split the `plan-page/spec.js` test into two sections - one for the AU domain, and one for the US domain. There is some duplication, but it works. The URLs for each domain are stored as `env` variables in the `cypress.json` file.

For both the AU and US domains, I select each plan option in a data driven way by referencing a `preferences` variable that contains the different preferences for each domain. Once clicked, I check that `data-test-is-active` is `true`. I also click through each "Number of people" and "Recipe per week" option for every meal preference. Lastly, I check that the price and shipping cost are not empty, and I log their values in the Cypress test runner.

The E2E tests are run on every pull request/merge to the master/main branch via a GitHub actions worfklow. Below is a diagram of this workflow:

![Workflow](workflow.svg)

## Alternative Design
As stated above, there is duplication in my `plan-page.spec.js` that is not easily scalable over time. At the moment, splitting the AU and US tests into two separate `it(...)` test blocks works, but there is likely a better solution/architectural design.
