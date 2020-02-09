import Chainable = Cypress.Chainable;

export function wrapIframeDoc(doc: JQuery) {
  return cy.wrap(doc.contents());
}

export function zoomInOutSnapshots(
  loadedStory: Chainable<unknown>,
  snapshotName: any,
  zoomInCount: number,
  zoomOutCount: number
) {
  // TODO wait
  cy.wait(3000);
  cy.hideSideSimpleBar();
  cy.stopAllAnimations();
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

export function matchBodySnapshot(
  loadedStory: Chainable<unknown>,
  snapshotName: any,
  size: Array<number> = []
) {
  cy.hideSideSimpleBar();
  if (!Array.isArray(size) || !size.length) {
    cy.setResolution(size);
  }
  cy.stopAllAnimations();
  cy.get('body');
  loadedStory.matchImageSnapshot(snapshotName);
}
