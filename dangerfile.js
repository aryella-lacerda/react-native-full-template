const path = require('path');

const {dangerReassure} = require('reassure');

dangerReassure({
  inputFilePath: path.join(__dirname, '.reassure/output.md'),
});
