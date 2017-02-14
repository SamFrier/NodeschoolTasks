/* Module to retrieve a list of data events from an HTTP GET request */

const http = require('http');

module.exports = function(request, callback) {
  http.get(request, function(response) {
    response.setEncoding("utf8");
    var output = [];

    response.on("data", function(data) {
      output.push(data);
    });

    response.on("end", function() {
      return callback(null, output);
    });

    response.on("error", function(error) {
      return callback(error);
    });
  });
};
