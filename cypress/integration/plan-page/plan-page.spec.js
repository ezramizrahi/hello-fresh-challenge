import PlanPage from '../../support/page-objects/PlanPage';

describe('Select Plans', () => {
  it('should select multiple plan combinations for HelloFresh AU', () => {
    // Data driven test data
    const planPageTitle = 'Personalise Your Plan';
    const preferences = [
      { id: "chefschoice" },
      { id: "veggie" },
      { id: "family" },
      { id: "lowcalorie" }
    ];

    const planPage = new PlanPage();
    planPage.visitAU();
    // check that the plan page title exists in the DOM and is visible
    planPage.getPlanPageTitle().should('exist');
    planPage.getPlanPageTitle().should('be.visible');
    planPage.getPlanPageTitle().should('contain', planPageTitle);
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
  });

  it('should select multiple plan combinations for HelloFresh US', () => {
    // Data driven test data
    const planPageTitle = 'Personalize Your Plan';
    const preferences = [
      { id: "chefschoice" },
      { id: "veggie" },
      { id: "family" },
      { id: "fit" },
      { id: "quick" },
      { id: "pescatarian" }
    ];

    const planPage = new PlanPage();
    planPage.visitUS();
    // check that the plan page title exists in the DOM and is visible
    planPage.getPlanPageTitle().should('exist');
    planPage.getPlanPageTitle().should('be.visible');
    planPage.getPlanPageTitle().should('contain', planPageTitle);
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
  });
})
