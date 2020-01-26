// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    getStories<E extends Node = HTMLElement>(): Chainable<JQuery<E>>;
    loadStory(id?: string, innerPage?: boolean): Chainable<unknown>;
    activateKnobsTab(): Chainable<unknown>;
    activateActionsTab(): Chainable<unknown>;
    expandAll<E extends Node = HTMLElement>(): Chainable<JQuery<E>>;
  }
}

Cypress.Commands.add('activateKnobsTab', () => {
  // TODO
});

Cypress.Commands.add('activateActionsTab', () => {
// TODO
});

Cypress.Commands.add('getStories', () => {
  return cy
    .expandAll()
    .then(() => {
      return cy.get('a[id^=explorer][href]')
    });
})

Cypress.Commands.add('loadStory', (id: string, innerPage: boolean = false) => {
  const storyId = id.replace(/^(explorer)/, '');

  if (innerPage) {
    return cy.visit(`/iframe.html?id=${storyId}`);
  }

  return cy.visit(`?path=/story/${storyId}`);
});

Cypress.Commands.add('expandAll', () => {
  let didExpand = false;
  return cy
    .get('a[id^=explorer]:not([href])')
    .each(story => {
      const isExpanded = story.parent()
        .find(`#${story.attr('id')} + .css-0`).length > 0;
      if (!isExpanded) {
        cy.get(story as any).scrollIntoView().click({ force: true });
        didExpand = true;
      }
    })
    .then(() => {
      // if we expanded any stories, lets check if there is any inner stories to expand
      didExpand && cy.expandAll();
    })
});
