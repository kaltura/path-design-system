// Verify after action
export function verifyAllInputsDisabled(expectedInputCount: number) {
  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input).should('to.have.class', 'ant-input-disabled');
    });
}

// Verify before action
export function beforeVerifyAllInputsDisabled() {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input).should('to.have.not.class', 'ant-input-disabled');
  });
}

// Verify before and after action
export function testAllInputsDisabled(expectedInputCount: number) {
  beforeVerifyAllInputsDisabled();
  // Click knob "Disabled"
  cy.setKnobIsDisabled();
  verifyAllInputsDisabled(expectedInputCount);
}

// Verify after action
export function verifyAllInputsHasError(expectedInputCount: number) {
  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'true');
    });
}

// Verify before action
export function beforeVerifyAllInputsHasError() {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input)
      .parent()
      .should('have.attr', 'has-error', 'false');
  });
}

// Verify before and after action
export function testAllInputsHasError(expectedInputCount: number) {
  beforeVerifyAllInputsHasError();
  // Click knob "Has Error"
  cy.setKnobHasError();
  verifyAllInputsHasError(expectedInputCount);
}

// Verify after action
export function verifyAllInputsIsBusy(expectedInputCount: number) {
  cy.iframe('svg.anticon-spin')
    .should('have.length', expectedInputCount)
    .each($svg => {
      cy.wrap($svg).parent().parent().parent()
        .find('input.ant-input')
        .should('be.exist');
    });
}

// Verify before action
export function beforeVerifyAllInputsIsBusy() {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input)
      .siblings('span')
      .find(`svg.anticon-spin`)
      .should('be.not.exist');
  });
}

// Verify before and after action
export function testAllInputsIsBusy(expectedInputCount: number) {
  beforeVerifyAllInputsIsBusy();
  // Click knob "Is busy"
  cy.setKnobIsBusy();
  verifyAllInputsIsBusy(expectedInputCount);
}

// Verify after action
export function verifyAllInputsPlaceholder(expectedInputCount: number, text: string) {
  // Verify text from Placeholder knob is displayed in two inputs
  cy.iframe('input.ant-input')
    .should('have.length', expectedInputCount)
    .each($input => {
      cy.wrap($input).should('have.attr', 'placeholder', text);
    });
}

// Verify before action
export function beforeVerifyAllInputsPlaceholder() {
  cy.iframe('input.ant-input').each($input => {
    cy.wrap($input).should('have.attr', 'placeholder', '');
  });
}

// Verify before and after action
export function testAllInputsPlaceholder(expectedInputCount: number, text: string) {
  beforeVerifyAllInputsPlaceholder();
  // Set text for Placeholder (knob) input
  cy.setKnobPlaceholder(text);
  verifyAllInputsPlaceholder(expectedInputCount, text);
}

export function testAllInputsDisabledAndBusy(expectedDisableCount: number, expectedBusyCount: number) {
  cy.setKnobIsDisabled();
  cy.setKnobIsBusy();
  verifyAllInputsDisabled(expectedDisableCount);
  verifyAllInputsIsBusy(expectedBusyCount);
}
