import Chainable = Cypress.Chainable;

function matchBodySnapshot(loadedStory: Chainable<unknown>, snapshotName: any) {
  cy.stopAllAnimations();
  cy.get('body');
  loadedStory.matchImageSnapshot(snapshotName);
}

function zoomInOutSnapshots(
  loadedStory: Chainable<unknown>,
  snapshotName: any,
  zoomInCount: number,
  zoomOutCount: number
) {
  // TODO wait
  cy.wait(3000);
  //TODO make it reusable method
  loadedStory.matchImageSnapshot(snapshotName);
  //Zoom in
  cy.clickZoomIn(zoomInCount);
  cy.get('body');
  loadedStory.matchImageSnapshot(snapshotName + '_ZoomIn');
  //Zoom out
  cy.clickZoomOut(zoomOutCount);
  cy.get('body');
  loadedStory.matchImageSnapshot(snapshotName + '_ZoomOut');
}

describe('Text Input', function() {
  let loadedStory: Cypress.Chainable<unknown>;
  let testName = 'Text_Input_Fields';

  beforeEach(() => {
    cy.visit('');
    loadedStory = cy.loadStory('inputs-text-input--workshop');
    cy.activateKnobsTab();
  });
  //TODO NOT FINISHED
  // it('Hover(mouseover) each input', function() {
  //   cy.iframe('input.ant-input').each($input => {
  //     cy.wrap($input).focus()
  //     matchBodySnapshot(
  //       loadedStory,
  //       testName + '_' + $input.attr('placeholder')?.trim()
  //     );
  //     cy.get('body').click()
  //     cy.wait(1000)
  //   });
  // });
  it('Verify Icon fits Text Input field and positioned as designed', function() {
    zoomInOutSnapshots(loadedStory, testName, 1, 2);
  });

  it('Use a long string (gt 32 chars)', function() {
    testName = testName + '32'
    cy.iframe('input[class*="ant-input"][placeholder="Default"]').type(
      '0123456789!@#$%^&*()_+=-qwertyuiop'
    );
    zoomInOutSnapshots(loadedStory, testName, 1, 2);
  });

  [
    {
      testName: 'Is Busy Text Input',
      method: cy.setKnobIsBusy,
      snapShotName: testName + 'IsBusy',
    },
    {
      testName: 'Has Error Text Input',
      method: cy.setKnobHasError,
      snapShotName: testName + 'HasError',
    },
    {
      testName: 'Disabled Text Input',
      method: cy.setKnobIsDisabled,
      snapShotName: testName + 'Disabled',
    },
  ].forEach(test => {
    it(test.testName, function() {
      test.method();
      cy.stopAllAnimations();
      zoomInOutSnapshots(loadedStory, test.snapShotName, 1, 2);
    });
  });
});
