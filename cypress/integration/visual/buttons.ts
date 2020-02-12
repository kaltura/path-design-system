import {zoomInOutSnapshots} from "../../support/storybook-utils";

describe('Buttons', function() {
  let loadedStory: Cypress.Chainable<unknown>;

  beforeEach(() => {
    cy.visit('');
    loadedStory = cy.loadStory('inputs-button--workshop');
    cy.activateKnobsTab();
  });

  it('Verify buttons load fully and are in place as designed ', function () {
    zoomInOutSnapshots(loadedStory, 'VerifyButtonsFit', 1, 2);
  });
});
