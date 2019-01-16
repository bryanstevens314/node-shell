const request = require('request');

module.exports = function (url) {
  request(`${url}`, function (err, response, body) {
    if (err) {
      throw err;
    }
    process.stdout.write('Status Code: ', response && response.statusCode);
    process.stdout.write('Body: \n ', body);
  });
};
