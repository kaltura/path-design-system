

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    runStorybookVisualRegression(): Chainable<any>;
  }
}


Cypress.Commands.add('runStorybookVisualRegression', () => {
  return cy.getStories().each(story => {
    const name = story.attr('title');
    const id = story.attr('id');
    cy.loadStory(id).matchImageSnapshot(name);
  });
});
