export function wrapIframeDoc(doc: JQuery) {
  return cy.wrap(doc.contents());
}

// export function zoomInOutSnapshots(
//   loadedStory: Chainable<unknown>,
//   snapshotName: any,
//   zoomInCount: number,
//   zoomOutCount: number
// ) {
//   loadedStory.matchImageSnapshot(snapshotName);
//   //Zoom in
//   cy.clickZoomIn(zoomInCount);
//   cy.get('body');
//   loadedStory.matchImageSnapshot(snapshotName + '_ZoomIn');
//   //Zoom out
//   cy.clickZoomOut(zoomOutCount);
//   cy.get('body');
//   loadedStory.matchImageSnapshot(snapshotName + '_ZoomOut');
// }
