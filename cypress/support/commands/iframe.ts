// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    iframe(selector: string): Chainable<JQuery>;
    iframeLoaded(): Chainable<JQuery>;
    getInDocument(selector: string): Chainable<JQuery>;
  }
}

Cypress.Commands.add('iframeLoaded', {prevSubject: 'element'}, $iframe => {
  const contentWindow = $iframe.prop('contentWindow');
  return new Promise(resolve => {
    if (contentWindow && contentWindow.document.readyState === 'complete') {
      resolve(contentWindow.document);
    } else {
      $iframe.on('load', () => {
        setTimeout(() => {
          resolve(contentWindow.document);
        });
      });
    }
  });
});

Cypress.Commands.add(
  'getInDocument',
  {prevSubject: 'document'},
  (document, selector) => Cypress.$(selector, document)
);

Cypress.Commands.add('iframe', elSelector => {
  return cy
    .get(`iframe${'#storybook-preview-iframe' || ''}`, {timeout: 10000})
    .should($iframe => {
      expect($iframe.contents().find(elSelector || 'body')).to.exist;
    })
    .then($iframe => {
      return cy.wrap($iframe.contents().find(elSelector || 'body'));
    });
});
