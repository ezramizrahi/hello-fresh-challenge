class PlanPage {

  // Visit HelloFresh AU
  visitAU() {
    cy.visit(Cypress.env('url_au'));
  };

  // Visit HelloFresh US
  visitUS() {
    cy.visit(Cypress.env('url_us'));
  };

  // Return plan page title
  getPlanPageTitle() {
    return cy.get('[data-translation-id="funnel.plansWidget.title"]');
  };

  // Returns the plan widget element
  getPlanWidget() {
    return cy.get('[data-test-id="desktop-plans-widget"]');
  };

  /**
   * Get individual plan preferences
   * @param {string} preference - Plan preference e.g. chefschoice
   */
  selectYourPreference(preference) {
    return cy.get(`button[data-test-id*="${preference}"]`);
  };

  // Clicks on each "Number of people" button
  selectAllPeople() {
    cy.get('[data-test-id="size-selector"]').within(($people) => {
      cy.get('button').each(($button) => {
        cy.wrap($button).click({force: true});
      });
    });
  };

  // Click on each "Recipe per week" butto
  selectAllRecipes() {
    cy.get('[data-test-id="meal-button-selectors"]').within(($meal) => {
      cy.get('button').each(($button) => {
        cy.wrap($button).click({force: true});
      });
    });
  };

  // Returns the price
  getPrice() {
    return cy.get('[data-test-id="discount-price"]');
  };

  // Returns the shipping cost
  getShippingCost() {
    return cy.get('[data-test-id="shipping-message-label"]');
  };

}

export default PlanPage;
