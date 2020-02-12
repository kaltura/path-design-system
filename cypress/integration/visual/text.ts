// eslint-disable-next-line filenames/match-regex
import {zoomInOutSnapshots} from '../../support/storybook-utils';

describe('Text Input', function() {
  let loadedStory: Cypress.Chainable<unknown>;

  beforeEach(() => {
    cy.visit('');
    loadedStory = cy.loadStory('inputs-text-input--workshop');
    cy.activateKnobsTab();
  });

  it('Verify Icon fits Text Input field and positioned as designed', function() {
    zoomInOutSnapshots(loadedStory, 'VerifyIconFitsInput', 2, 3);
  });

  it('Use a long string (gt 32 chars)', function() {
    cy.iframe('input[class*="ant-input"][placeholder="Default"]').type(
      'LONG including some $peci@l chars & > 32 CHARS'
    );
    zoomInOutSnapshots(loadedStory, 'UseLongString', 2, 3);

    cy.log("Clear previous string and verify")
    cy.iframe('input[class*="ant-input"][placeholder="Default"]').clear();
    zoomInOutSnapshots(loadedStory, 'ClearString', 3, 2);
  });

  it('Verify Disabled and Is Busy Text Input', function() {
    cy.setKnobIsBusy()
    cy.setKnobIsDisabled()
    zoomInOutSnapshots(loadedStory, 'VerifyDisabledAndIsBusy', 2, 3);
  });

  [
    {
      testName: 'Is Busy Text Input',
      method: cy.setKnobIsBusy,
    },
    {
      testName: 'Has Error Text Input',
      method: cy.setKnobHasError,
    },
    {
      testName: 'Disabled Text Input',
      method: cy.setKnobIsDisabled,
    },
  ].forEach(test => {
    it(test.testName, function() {
      test.method();
      zoomInOutSnapshots(loadedStory, test.testName, 2, 3);
    });
  });
});
