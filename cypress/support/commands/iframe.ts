// eslint-disable-next-line @typescript-eslint/no-namespace

declare namespace Cypress {
  interface Chainable<Subject> {
    iframeLoaded(): Chainable<JQuery>;
    getInDocument(selector: string): Chainable<JQuery>
  }
}
Cypress.Commands.add(
  'iframeLoaded',
  { prevSubject: 'element' },
  ($iframe) => {
    const contentWindow = $iframe.prop('contentWindow');
    return new Promise(resolve => {
      if (
        contentWindow &&
        contentWindow.document.readyState === 'complete'
      ) {
        resolve(contentWindow.document)
      } else {
        $iframe.on('load', () => {
          setTimeout(() => {
            resolve(contentWindow.document)
          });
        })
      }
    })
  })

Cypress.Commands.add(
  'getInDocument',
  { prevSubject: 'document' },
  (document, selector) => Cypress.$(selector, document)
)
