describe('path-composer', () => {
  beforeEach(() => cy.visit('https://path-design-system-l8177ss7y.now.sh/workshop?path=/story/inputs-button--workshop'));

  it('should display welcome message', () => {
    cy.wrap('foo').should('equal', 'foo')
  });
});
