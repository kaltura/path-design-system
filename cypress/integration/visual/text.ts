import Chainable = Cypress.Chainable;
sizes = [
  [800, 600],
  [1200, 800],
  [1920, 1080],
];
let resPrefix: string;
function matchBodySnapshot(
  size: Array<number>,
  loadedStory: Chainable<unknown>,
  snapshotName: any
) {
  cy.hideSideSimpleBar();
  cy.setResolution(size);
  cy.stopAllAnimations();
  loadedStory.matchImageSnapshot(snapshotName);
}

describe('Text Input', function() {
  sizes.forEach(size => {
    let loadedStory: Cypress.Chainable<unknown>;
    if (Cypress._.isArray(size)) {
      resPrefix = size[0] + 'X' + size[1] + '_';
    }
    let testName = resPrefix + 'Text_Input_Fields';

    beforeEach(() => {
      cy.visit('');
      loadedStory = cy.loadStory('inputs-text-input--workshop');
      cy.activateKnobsTab();
    });

    it(`Verify Icon fits Text Input field and positioned as designed: '${size}'`, function() {
      matchBodySnapshot(size, loadedStory, testName);
    });

    it(`Use a long string (gt 32 chars): '${size}'`, function() {
      testName = testName + '32';
      cy.iframe('input[class*="ant-input"][placeholder="Default"]').type(
        '0123456789!@#$%^&*()_+=-qwertyuiop'
      );
      matchBodySnapshot(size, loadedStory, testName);
    });

    [
      {
        testName: 'Is Busy Text Input:' + size,
        method: cy.setKnobIsBusy,
        snapShotName: testName + 'IsBusy',
      },
      {
        testName: 'Has Error Text Input' + size,
        method: cy.setKnobHasError,
        snapShotName: testName + 'HasError',
      },
      {
        testName: 'Disabled Text Input' + size,
        method: cy.setKnobIsDisabled,
        snapShotName: testName + 'Disabled',
      },
    ].forEach(test => {
      it(test.testName, function() {
        test.method();
        matchBodySnapshot(size, loadedStory, test.snapShotName);
      });
    });
  });
});
