const path = require('path');

const {dangerReassure} = require('reassure');

console.log('DEBUG');
console.log(path);
console.log(path.join);
console.log(path.join(__dirname, '.reassure/output.md'));

dangerReassure({
  inputFilePath: path.join(__dirname, '.reassure/output.md'),
});
