describe('Text Input', function() {
  let loadedStory: Cypress.Chainable<unknown>;
  let testName = 'Text_Input_Fields';

  beforeEach(() => {
    cy.visit('');
    loadedStory = cy.loadStory('inputs-text-input--workshop');
    cy.activateKnobsTab();
  });

  it('Verify Icon fits Text Input field and positioned as designed', function() {
    // TODO wait
    cy.wait(3000);
    //TODO make it reusable method
    // cy.zoomInOutSnapshots(loadedStory, testName, 1, 2);
    loadedStory.matchImageSnapshot(testName);
    //Zoom in
    cy.clickZoomIn()
    cy.get('body');
    loadedStory.matchImageSnapshot(testName + '_ZoomIn');
    //Zoom out
    cy.clickZoomOut(2)
    cy.get('body');
    loadedStory.matchImageSnapshot(testName + '_ZoomOut');
  });

  it('Use a long string (gt 32 chars)', function() {
    testName = testName + '32'
    cy.iframe('input[class*="ant-input"][placeholder="Default"]').type(
      '0123456789!@#$%^&*()_+=-qwertyuiop'
    );
    // TODO wait
    cy.wait(3000);
    //TODO make it reusable method
    // cy.zoomInOutSnapshots(loadedStory, testName, 1, 2);
    loadedStory.matchImageSnapshot(testName);
    //Zoom in
    cy.clickZoomIn()
    cy.get('body');
    loadedStory.matchImageSnapshot(testName + '_ZoomIn');
    //Zoom out
    cy.clickZoomOut(2)
    cy.get('body');
    loadedStory.matchImageSnapshot(testName + '_ZoomOut');
  });
});
