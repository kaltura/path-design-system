// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    runStorybookVisualRegression(size?: Array<any>): Chainable<any>;
    stopAllAnimations(): void;
    setResolution(size: Array<any>): void;
  }
}
Cypress.Commands.add('stopAllAnimations', () => {
  // Stop all animations
  cy.iframe(
    "i[class*='processingIcon']" && "svg[class*='anticon-spin']",
    true
  ).each($icon => {
    if ($icon != undefined) {
      $icon.hide();
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
  });
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});
