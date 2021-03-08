import PlanPage from '../../support/page-objects/PlanPage';

beforeEach(() => {
  // ensure we are testing desktop
  cy.viewport(1280, 720);
});

describe('Select Plans', () => {
  it('should select multiple plan combinations for HelloFresh AU', () => {
    // data driven preferences
    const preferences = [
      { id: "chefschoice" },
      { id: "veggie" },
      { id: "family" },
      { id: "lowcalorie" }
    ];

    const planPage = new PlanPage();
    planPage.visitAU();
    // assert that the plan widget exists in the DOM and is visible
    planPage.getPlans().should('exist');
    planPage.getPlans().should('be.visible');
    // click through each preference on the page
    cy.wrap(preferences).each((preference) => {
      // assert that each preference exists in the DOM and is visible
      // before clicking on it
      planPage.selectYourPreference(preference.id).should('exist');
      planPage.selectYourPreference(preference.id).should('be.visible');
      planPage.selectYourPreference(preference.id).click({force: true});
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
    // data driven preferences
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
    // assert that the plan widget exists in the DOM and is visible
    planPage.getPlans().should('exist');
    planPage.getPlans().should('be.visible');
    // click through each preference on the page
    cy.wrap(preferences).each((preference) => {
      // assert that each preference exists in the DOM and is visible
      // before clicking on it
      planPage.selectYourPreference(preference.id).should('exist');
      planPage.selectYourPreference(preference.id).should('be.visible');
      planPage.selectYourPreference(preference.id).click({force: true});
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
