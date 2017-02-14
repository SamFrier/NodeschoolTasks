/* Print the number of characters returned from a GET request to an HTTP server */

const myHTTP = require('./myHTTP');

var request = process.argv[2];

myHTTP(request, function(err, result) {
  if (err) {
    return console.error(err);
  }

  var numChars = 0;
  var line = "";
  result.forEach((word) => {
    numChars += word.length;
    line += word;
  });

  console.log(numChars);
  console.log(line);
});
