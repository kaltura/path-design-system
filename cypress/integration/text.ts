import {
  testAllInputsDisabled, testAllInputsDisabledAndBusy,
  testAllInputsHasError,
} from '../support/reusable-test';

describe('Text Input', function() {
  beforeEach(() => {
    cy.visit('');
    cy.loadStory('inputs-text-input--workshop');
    cy.activateKnobsTab();
  });

  it('Has Error', function() {
    testAllInputsHasError(5);
  });

  it('Disabled', function() {
    testAllInputsDisabled(5);
  });

  it('Disabled and Busy', function() {
    testAllInputsDisabledAndBusy(5, 4);
  });
});
