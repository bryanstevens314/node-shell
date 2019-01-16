const fs = require('fs');
module.exports = function () {
  var files = fs.readdirSync('./');
  process.stdout.write(files.join('\n'));
};
