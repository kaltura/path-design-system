describe('Search', function() {
  beforeEach(() => {
    cy.visit('');
    cy.loadStory('inputs-search-input--workshop');
    cy.activateKnobsTab();
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
    cy.get('#Is\\ busy').click();

    // Verify 2 spinners exists, for each input field
    cy.iframe('input.ant-input').each($input => {
      cy.wrap($input)
        .siblings('span')
        .find(`svg.anticon-spin`)
        .should('be.exist');
    });
  });

  it('Has Error', function() {
    cy.iframe('input.ant-input')
      .each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'false');
    });

    // Click knob "Is busy"
    cy.get('#Has\\ Error').click();

    cy.iframe('input.ant-input')
      .each($input => {
      cy.wrap($input)
        .parent()
        .should('have.attr', 'has-error', 'true');
    });
  });

  it('Disabled', function() {
    cy.iframe('input.ant-input')
      .each($input => {
      cy.wrap($input)
        // .should('have.not.attr', 'class', 'ant-input ant-input-disabled input-0-2-5');
        .should('to.have.not.class', 'ant-input-disabled');
    });

    // Click knob "Is busy"
    cy.get('#Disabled').click();

    cy.iframe('input.ant-input')
      .each($input => {
      cy.wrap($input)
        .should('to.have.class', 'ant-input-disabled');
    });
  });
});
