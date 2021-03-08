class PlanPage {

  // visit the hello fresh plan page
  // TODO: MAKE THIS DYNAMIC
  visitAU() {
    cy.visit('https://www.hellofresh.com.au/plans');
  };

  visitUS() {
    cy.visit('https://www.hellofresh.com/plans');
  };

  // get all plans
  getPlans() {
    return cy.get('[data-test-id="desktop-plans-widget"]');
  };

  // get plan preference
  selectYourPreference(preference) {
    return cy.get(`button[data-test-id*="${preference}"]`);
  };

  // select people
  // takes in string
  selectPeople(n) {
    cy.get('[data-test-id="plans-widget-container"]').within(($widget) => {
      cy.get(`button[data-test-id="size-button-selectors-${n}"]`).click();
    });
  };

  // clicks through all people
  selectAllPeople() {
    cy.get('[data-test-id="size-selector"]').within(($people) => {
      cy.get('button').each(($button) => {
        cy.wrap($button).click({force: true});
      });
    });
  };

  // select recipe
  selectRecipesPerWeek(n) {
    return cy.get(`button[data-test-id="meal-button-selectors-${n}"]`);
  };

  // click on each recipe amount per week
  selectAllRecipes() {
    cy.get('[data-test-id="meal-button-selectors"]').within(($meal) => {
      cy.get('button').each(($button) => {
        cy.wrap($button).click({force: true});
      });
    });
  };

  // get price
  getPrice() {
    return cy.get('[data-test-id="discount-price"]');
  };

  // get shipping
  getShippingCost() {
    return cy.get('[data-test-id="shipping-message-label"]');
  };

}

export default PlanPage;
