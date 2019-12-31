export function wrapIframeDoc(doc: JQuery) {
  return cy.wrap(doc.contents());
}
