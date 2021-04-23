describe('portfolio', () => {
  // Cypress smoke test to make sure that the site is running and the pages are showing
  it('works', () => {
    cy.visit('/');
    cy.get('nav').findByRole('link', { name: /about/i }).click().wait(1000);
    cy.get('.leadText')
      .contains('I am fundamentally motivated')
      .should('exist');
    cy.get('nav').findByRole('link', { name: /play/i }).click();
    cy.findByRole('heading', { name: 'on the interwebs' }).should('exist');
    cy.get('nav')
      .findByRole('link', { name: /writing/i })
      .click();
    cy.findByRole('heading', { name: 'Uniqueness is Not a Goal' }).should(
      'exist'
    );
  });
});
