// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    runStorybookVisualRegression(size?: Array<any>): Chainable<any>;
    stopAllAnimations(): void;
    setResolution(size: Array<any>): void;
    matchBodySnapshot(loadedStory: Chainable<unknown>, snapshotName: any): void;
  }
}
Cypress.Commands.add('stopAllAnimations', () => {
  // Stop all animations
  // TODO wait
  cy.wait(1000);
  cy.iframe("svg[class*='anticon-spin']", true).each($icon => {
    if ($icon != undefined) {
      cy.wrap($icon).invoke('css', 'animation', 'none');
    }
  });
  // Need this for 'matchImageSnapshot' method.
  // Focus whole page after removing the animations elements
  cy.get('body');
});

Cypress.Commands.add('runStorybookVisualRegression', size => {
  return cy.getStories().each(story => {
    let name = story.attr('title');
    const id = story.attr('id');
    const loadedStory = cy.loadStory(id);
    // TODO Remove hardcoded wait and implement: "waitPageLoadCompletely"
    cy.wait(2000);
    cy.stopAllAnimations();
    // Need 'cy.get('body')' for 'matchImageSnapshot' method.
    // To focus whole page after removing the animations elements
    cy.get('body');
    if (Cypress._.isArray(size)) {
      name = size[0] + 'X' + size[1] + '_' + name;
    }
    loadedStory.matchImageSnapshot(name);
    //Zoom in
    cy.clickZoomIn();
    cy.get('body');
    loadedStory.matchImageSnapshot(name + '_ZoomIn');
    //Zoom out
    cy.clickZoomOut(2);
    cy.get('body');
    loadedStory.matchImageSnapshot(name + '_ZoomOut');
  });
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.Commands.add('matchBodySnapshot', (loadedStory, snapshotName) => {
  cy.wait(3000);
  cy.stopAllAnimations();
  cy.get('body');
  loadedStory.matchImageSnapshot(snapshotName);
});
