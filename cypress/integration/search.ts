describe('Search Input', function() {
  beforeEach(() => {
    cy.visit('');
    cy.loadStory('inputs-search-input--workshop');
    cy.activateKnobsTab();
  });

  it('Placeholder', function() {
    const text = 'Test Placeholder attribute';
    cy.testAllInputsPlaceholder(2, text);
  });

  it('Is Busy', function() {
    // Verify 2 inputs displayed
    cy.testAllInputsIsBusy(2);
  });

  it('Has Error', function() {
    cy.testAllInputsHasError(2);
  });

  it('Disabled', function() {
    cy.testAllInputsDisabled(2);
  });
});
