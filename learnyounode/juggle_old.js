const http = require('http');

var finalResult = [];
var count = 0;

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

function httpGet(index) {
  var url = process.argv[2+i];
  http.get(url, function(response) {
    response.setEncoding("utf8");
    var output = "";

    response.on("data", function(data) {
      output += data;
    });

    response.on("end", function() {
      finalResult[index] = output;
      count++;
      if (count === 3) {
        printResults();
      }
    });

    response.on("error", function(error) {
      return console.error(error);
    });
  });
}

function printResults() {
  finalResult.forEach(function(line) {
    console.log(line);
  });
}
