const fs = require('fs');

module.exports = function (file) {
  var data = fs.readFileSync(`./${file}`);
  process.stdout.write(data);
};
