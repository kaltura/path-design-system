// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands/storybook';
import './commands/iframe';
import './commands/image-snapshot';

// TODO should be in the relevant command file
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.0, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: {threshold: 0.0}, // threshold for each pixel
  customDiffDir: 'cypress/visual_diffs', // capture viewport in screenshot
})
