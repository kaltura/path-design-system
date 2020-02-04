// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    testAllInputsDisabled(expectedInputCount: number): void;
    testAllInputsHasError(expectedInputCount: number): void;
    testAllInputsIsBusy(expectedInputCount: number): void;
    testAllInputsPlaceholder(expectedInputCount: number, text: string): void;
  }
}

Cypress.Commands.add('testAllInputsDisabled', expectedInputCount => {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input).should('to.have.not.class', 'ant-input-disabled');
  });

  // Click knob "Disabled"
  cy.setKnobIsDisabled();

  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input).should('to.have.class', 'ant-input-disabled');
    });
});

Cypress.Commands.add('testAllInputsHasError', expectedInputCount => {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input)
      .parent()
      .should('have.attr', 'has-error', 'false');
  });

  // Click knob "Has Error"
  cy.setKnobHasError();

  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'true');
    });
});

Cypress.Commands.add('testAllInputsIsBusy', expectedInputCount => {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input)
      .siblings('span')
      .find(`svg.anticon-spin`)
      .should('be.not.exist');
  });

  // Click knob "Is busy"
  cy.setKnobIsBusy();

  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input)
        .siblings('span')
        .find(`svg.anticon-spin`)
        .should('be.exist');
    });
});

Cypress.Commands.add('testAllInputsPlaceholder', (expectedInputCount, text) => {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input).should('have.attr', 'placeholder', '');
  });

  // Set text for Placeholder (knob) input
  cy.setKnobPlaceholder(text);

  // Verify text from Placeholder knob is displayed in two inputs
  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input).should('have.attr', 'placeholder', text);
    });
});
