const {defaults} = require('jest-config');
module.exports = {
  verbose: true,
  //setupFiles: "<rootDir>/enzyme.config.js",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};