/* Perform 3 different GET requests, print the results in order */

const myHTTP = require('./myHTTP');

var results = []

function getContent(order) {
  myHTTP(process.argv[2+order], function(err, output) {
    if (err) {
      return console.error(err);
    }

    var line = "";
    output.forEach((word) => {
      line += word;
    });
    storeResults(line, order);
  });
}

// add response to array at correct index
function storeResults(line, order) {
  results[order] = line;
  
  // once array is full, print contents
  if (results.length === 3) {
    printResults();
  }
}

// print contents of array in order
function printResults() {
  results.forEach((line) => {
    console.log(line);
  });
}

getContent(0);
getContent(1);
getContent(2);
