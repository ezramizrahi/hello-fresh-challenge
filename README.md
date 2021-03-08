<br />
<p align="center">
  <h3 align="center">HelloFresh Take Home Challenge - QA Engineer</h3>
</p>



## Table of Contents

* [About](#about)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Contact](#contact)



## About

End-to-end/functional tests for the **Personalize Your Plan** component that simulates user behaviour such as:
* selecting a preference,
* customizing a plan size,
* and viewing the price and shipping cost based on the plan selection.

Please see the `design.md` page for more details on the design of this test.

### Built With/Uses

* [Cypress.IO](https://www.cypress.io/)
* [Mocha](https://mochajs.org/)
* [Mochawesome](https://github.com/adamgruber/mochawesome)
* [Mochawesome-Merge](https://github.com/Antontelesh/mochawesome-merge)
* [Mochawesome-Report-Generator](https://github.com/adamgruber/mochawesome-report-generator)
* [GitHub Actions](https://github.com/features/actions)

## Getting Started

To get a local copy up and running follow these simple steps:

### Installation

1. Clone the repo.

2. Install the packages/dependencies
```sh
npm install
```
3. If you want to run the tests and generate a report locally, run `npm run test` in your terminal.

4. Otherwise, if you want to publish the reports to GitHub Pages, ensure that GitHub Pages is set to the `gh-pages` branch in your repo settings. The report should be generated on every pull request or push to the main branch.

## Contact

Ezra Mizrahi - ezra.mizrahi@hey.com
