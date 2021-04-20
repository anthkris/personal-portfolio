describe('portfolio', () => {
  it('works', () => {
    cy.visit('/');
    cy.get('nav').findByRole('link', { name: /about/i }).click();
    cy.get('.leadText')
      .contains('I am fundamentally motivated')
      .should('exist');
  });
});
