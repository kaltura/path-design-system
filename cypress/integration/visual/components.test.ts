// eslint-disable-next-line filenames/match-regex
let sizes = [
  [800, 600],
  [1200, 800],
  [1920, 1080],
];
// const sizes = [
//   [1200, 800]
// ];
describe('Visual regression tests', () => {
  sizes.forEach(size => {
    it(`Should match previous screenshot when '${size}' resolution`, () => {
      cy.setResolution(size);
      cy.visit('/').runStorybookVisualRegression(size);
    });
  });
});
