describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });
  const axeRunContext = {
    exclude: [['.gatsby-highlight'], ['#an-id']],
  };
  it('Has no detectable accessibility violations on load', () => {
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
    cy.get('nav')
      .findByRole('link', { name: /writing/i })
      .click()
      .get('main')
      .findByRole('heading', {
        name: /The Tiny Deliberate Practice of the Quiz Game/i,
      })
      .click()
      .checkA11y(axeRunContext);
  });
  it('Navigates to Play page and checks for accessibility violations', () => {
    cy.get('nav')
      .findByRole('link', { name: /play/i })
      .click()
      .checkA11y(axeRunContext);
  });
});
