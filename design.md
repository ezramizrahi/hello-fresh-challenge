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
I have chosen to use Cypress to run the tests. I have used Mochawesome to generate the reports.

In this task I have aimed to follow best practices within testing and within the Cypress framework. In the `support/page-objects` folder I have created a `PlanPage` PageObject class that is used in the `integration/plan-page/plan-page.spec.js` test file. PageObjects are convenient as they allow us to more easily maintain a test, and allow us to keep duplication to a minimum.

My selector strategy targets elements using the `data-test-id=` and `data-translation-id=` attributes.

Given that the requirements of this state that the test needs to run on both the HelloFresh AU and US domains, I have used `forEach` to run the same test on both URLs in the `plan-page.spec.js` test file.

For both the AU and US domains, I select each plan option in a data driven way by referencing a `preferences` variable that contains the different preferences for each domain. Once clicked, I check that `data-test-is-active` is `true`. I also click through each "Number of people" and "Recipe per week" option for every meal preference. Lastly, I check that the price and shipping cost are not empty, and I log their values in the Cypress test runner.

The E2E tests are run on every pull request/merge to the master/main branch via a GitHub actions worfklow. Below is a diagram of this workflow:

![Workflow](workflow.svg)

## Future Improvements
* Using a data driven strategy, check that the price and shipping cost are correct for each plan combination selected
* Using a data driven strategy, check that the text on both domains has been localized correctly (e.g. "customize" vs. "customise")
