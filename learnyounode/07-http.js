/* Print data events from the response to an HTTP GET request */

const myHTTP = require('./myHTTP');

var request = process.argv[2];

myHTTP(request, function(err, result) {
  if (err) {
    return console.error(err);
  };

  result.forEach((line) => {
    console.log(line);
  });
});
