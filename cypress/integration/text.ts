describe('Text Input', function() {
  beforeEach(() => {
    cy.visit('');
    cy.loadStory('inputs-text-input--workshop');
    cy.activateKnobsTab();
  });

  it('Has Error', function() {
    cy.testAllInputsHasError(5);
  });

  it('Disabled', function() {
    cy.testAllInputsDisabled(5);
  });
});
