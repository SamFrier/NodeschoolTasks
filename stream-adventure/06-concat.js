/* Reverse text from stdin, pipe to stdout */

const concat = require('concat-stream'); // npm install concat-stream

function reverse(string) {
  var array = string.split("");
  array = array.reverse();
  return array.join("");
}

var reverseStream = concat(body => {
  console.log(reverse(body.toString()));
});

process.stdin.pipe(reverseStream);
