describe('Search Input', function() {
  beforeEach(() => {
    cy.visit('');
    cy.loadStory('inputs-search-input--workshop');
    cy.activateKnobsTab();
  });

  it('Placeholder', function() {
    const text = 'Test Placeholder attribute';
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .should('have.attr', 'placeholder', '');
    });

    // Set text for Placeholder (knob) input
    cy.setKnobPlaceholder(text)

    // Verify text from Placeholder knob is displayed in two inputs
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .should('have.attr', 'placeholder', text);
    });
  });

  it('Is Busy', function() {
    // Verify 2 inputs displayed
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .siblings('span')
        .find(`svg.anticon-spin`)
        .should('be.not.exist');
    });

    // Click knob "Is busy"
    cy.setKnobIsBusy()

    // Verify 2 spinners exists, for each input field
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .siblings('span')
        .find(`svg.anticon-spin`)
        .should('be.exist');
    });
  });

  it('Has Error', function() {
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'false');
    });

    // Click knob "Has Error"
    cy.setKnobHasError()

    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'true');
    });
  });

  it('Disabled', function() {
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .should('to.have.not.class', 'ant-input-disabled');
    });

    // Click knob "Disabled"
    cy.setKnobIsDisabled()

    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input).should('to.have.class', 'ant-input-disabled');
    });
  });
});
