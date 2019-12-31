
describe('Button', function() {
  beforeEach(() => {
    cy.visit('');
  })

  it('should show spinner when enabling is processing mode', function() {
    cy.loadStory('inputs-button--workshop');


    // buttons in idle mode
    cy.get('iframe#storybook-preview-iframe')
      .iframeLoaded()
      .getInDocument('button')
      .should(($buttons) => {
        expect($buttons).to.have.length(3);
        return $buttons;
      }).each(($button) => {
        cy.wrap($button).find(`i[class*="processingIcon"]`).should('not.be.exist');
      });

    cy.activateKnobsTab();

    cy.get('#storybook-panel-root input#isProcessing').click();

    cy.get('iframe#storybook-preview-iframe')
      .iframeLoaded()
      .getInDocument('button')
      .should(($buttons) => {
        expect($buttons).to.have.length(3);
        return $buttons;
      }).each(($button) => {
      cy.wrap($button).find(`i[class*="processingIcon"]`).should('be.exist');
    });
  })
})
