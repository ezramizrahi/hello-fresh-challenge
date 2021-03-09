import PlanPage from '../../support/page-objects/PlanPage';

describe('Select Plans', () => {
  // URLs for HelloFresh AU and HelloFresh US
  const urls = ['https://www.hellofresh.com.au/plans', 'https://www.hellofresh.com/plans'];

  // Run the same test on each HelloFresh domain
  urls.forEach((url) => {
    // Create the test name dynamically using the url
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

      // Visit the URL
      cy.visit(url)

      // Preferences are different on AU vs US domains
      // We will set the preference based on the domain name
      const preferences = url.includes('.com.au') ? preferencesAU : preferencesUS;

      // Check that the plan widget exists in the DOM and is visible
      planPage.getPlanWidget().should('exist');
      planPage.getPlanWidget().should('be.visible');

      // Click through each preference on the page
      cy.wrap(preferences).each((preference) => {
        // Check that each preference exists in the DOM and is visible
        // before clicking on it
        planPage.selectYourPreference(preference.id).should('exist');
        planPage.selectYourPreference(preference.id).should('be.visible');
        planPage.selectYourPreference(preference.id).click({force: true});
        // Check that "data-test-is-active" is true after the element
        // has been clicked
        planPage.selectYourPreference(preference.id).then(($preference) => {
          cy.get($preference).invoke('attr', 'data-test-is-active').should('contain', 'true');
        });
        // Clicks through all Number of People options
        planPage.selectAllPeople();
        // Clicks through all Recipes per Week options
        planPage.selectAllRecipes();
        // Check that the plan configuration is not empty
        // and log the value
        planPage.getPlanConfigurationAU().should('not.be.empty');
        planPage.getPlanConfigurationAU().then(($plan) => {
          cy.log($plan.text());
        });
        // Check that Price Per Serving is not empty
        // and log the price
        planPage.getPrice().should('not.be.empty');
        planPage.getPrice().then(($price) => {
          cy.log($price.text());
        });
        // Check that Shipping cost is not empty
        // and log the shipping cost
        planPage.getShippingCost().should('not.be.empty');
        planPage.getShippingCost().then(($shipping) => {
          cy.log($shipping.text());
        });
      });
    })
  });
})
