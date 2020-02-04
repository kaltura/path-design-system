// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    getStories<E extends Node = HTMLElement>(): Chainable<JQuery<E>>;
    loadStory(id?: string, innerPage?: boolean): Chainable<unknown>;
    activateKnobsTab(): Chainable<unknown>;
    activateActionsTab(): Chainable<unknown>;
    expandAll<E extends Node = HTMLElement>(): Chainable<JQuery<E>>;

    // Simplebar
    hideSideSimpleBar(): void;
    clickZoomIn(count?: number): Chainable<unknown>;
    clickZoomOut(count?: number): Chainable<unknown>;

    // Knobs
    setKnobPlaceholder(text: string): Chainable<unknown>;
    setKnobHasError(): Chainable<unknown>;
    setKnobIsBusy(): Chainable<unknown>;
    setKnobIsDisabled(): Chainable<unknown>;
  }
}

Cypress.Commands.add('activateKnobsTab', () => {
  // TODO
});

Cypress.Commands.add('activateActionsTab', () => {
  // TODO
});

Cypress.Commands.add('getStories', () => {
  return cy.expandAll().then(() => {
    return cy.get('a[id^=explorer][href]');
  });
});

Cypress.Commands.add('loadStory', (id: string, innerPage = false) => {
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
      const isExpanded =
        story.parent().find(`#${story.attr('id')} + .css-0`).length > 0;
      if (!isExpanded) {
        cy.get(story as any)
          .scrollIntoView()
          .click({force: true});
        didExpand = true;
      }
    })
    .then(() => {
      // If we expanded any stories, lets check if there is any inner stories to expand
      didExpand && cy.expandAll();
    });
});

// Simplebar
Cypress.Commands.add('hideSideSimpleBar', () => {
  cy.get('body').then($body => {
    if ($body.find('input#storybook-explorer-searchfield').length > 0) {
      cy.get('body').type('s');
    }
  });
});

Cypress.Commands.add('clickZoomIn', (count = 1) => {
  for (let i = 0; i < count; i++) {
    // Use blur to un-focus the element
    cy.get('[title="Zoom in"]')
      .click()
      .blur();
  }
});

Cypress.Commands.add('clickZoomOut', (count = 1) => {
  for (let i = 0; i < count; i++) {
    // Use blur to un-focus the element
    cy.get('[title="Zoom out"]')
      .click()
      .blur();
  }
});

// Knobs
Cypress.Commands.add('setKnobPlaceholder', text => {
  // cy.wait(500)
  cy.get('#Placeholder').type(text);
});

Cypress.Commands.add('setKnobHasError', () => {
  cy.get('#Has\\ Error').click();
});

Cypress.Commands.add('setKnobIsBusy', () => {
  cy.get('#Is\\ Busy').click();
});

Cypress.Commands.add('setKnobIsDisabled', () => {
  cy.get('#Disabled').click();
});
