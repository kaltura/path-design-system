// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  addMatchImageSnapshotPlugin(on, config);
}
