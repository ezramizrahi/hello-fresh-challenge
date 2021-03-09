import PlanPage from '../../support/page-objects/PlanPage';

describe('Select Plans', () => {
  // URLs for HelloFresh AU and HelloFresh US
  const urls = ['https://www.hellofresh.com.au/plans', 'https://www.hellofresh.com/plans'];

  // The same test should be ran on both domains
  urls.forEach((url) => {
    it(`should select multiple plan combinations on ${url}`, () => {
      const preferencesAU  = [
        { id: "chefschoice" },
        { id: "veggie" },
        { id: "family" },
        { id: "lowcalorie" }
      ];
      const preferencesUS = [
        { id: "chefschoice" },
        { id: "veggie" },
        { id: "family" },
        { id: "fit" },
        { id: "quick" },
        { id: "pescatarian" }
      ];

      // Create a new PlanPage object
      const planPage = new PlanPage();

      // Visit the url
      cy.visit(url)

      // Preferences are different on AU vs US domains
      // we will choose which preference data to use based on the domain name
      const preferences = url.includes('.com.au') ? preferencesAU : preferencesUS;

      // check that the plan widget exists in the DOM and is visible
      planPage.getPlanWidget().should('exist');
      planPage.getPlanWidget().should('be.visible');

      // click through each preference on the page
      cy.wrap(preferences).each((preference) => {
        // check that each preference exists in the DOM and is visible
        // before clicking on it
        planPage.selectYourPreference(preference.id).should('exist');
        planPage.selectYourPreference(preference.id).should('be.visible');
        planPage.selectYourPreference(preference.id).click({force: true});
        // check that "data-test-is-active" is true after the element
        // has been clicked
        planPage.selectYourPreference(preference.id).then(($preference) => {
          cy.get($preference).invoke('attr', 'data-test-is-active').should('contain', 'true');
        });
        // clicks through all Number of People options
        planPage.selectAllPeople();
        // clicks through all Recipes per Week options
        planPage.selectAllRecipes();
        // check that the plan configuration is not empty
        // and log the value
        planPage.getPlanConfigurationAU().should('not.be.empty');
        planPage.getPlanConfigurationAU().then(($plan) => {
          cy.log($plan.text());
        });
        // check that Price Per Serving is not empty
        // and log the price
        planPage.getPrice().should('not.be.empty');
        planPage.getPrice().then(($price) => {
          cy.log($price.text());
        });
        // check that Shipping cost is not empty
        // and log the shipping cost
        planPage.getShippingCost().should('not.be.empty');
        planPage.getShippingCost().then(($shipping) => {
          cy.log($shipping.text());
        });
      });
    })
  });
})
