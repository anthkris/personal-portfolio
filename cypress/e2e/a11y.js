describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });
  const axeRunContext = {
    exclude: [['.gatsby-highlight']],
  };
  it('Has no detectable accessibility violations on load', () => {
    cy.wait(1000);
    cy.checkA11y(axeRunContext);
  });
  it('Navigates to About page and checks for accessibility violations', () => {
    cy.get('nav')
      .findByRole('link', { name: /about/i })
      .click()
      .checkA11y(axeRunContext);
  });
  it('Navigates to Writing page and checks for accessibility violations', () => {
    cy.get('nav')
      .findByRole('link', { name: /writing/i })
      .click()
      .checkA11y(axeRunContext);
  });
  it('Navigates to Post page and checks for accessibility violations', () => {
    // Must injectAxe whenever you visit a new page with cy.visit
    cy.visit(
      '/writing/the-tiny-deliberate-practice-of-the-quiz-game/'
    ).injectAxe();
    cy.checkA11y(axeRunContext);
  });
  it('Navigates to Play page and checks for accessibility violations', () => {
    cy.get('nav')
      .findByRole('link', { name: /play/i })
      .click()
      .checkA11y(axeRunContext);
  });
});
