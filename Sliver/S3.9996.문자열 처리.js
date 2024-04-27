const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const pattern = input[1];

const splitIndex = pattern.indexOf("*");
const start = pattern.substring(0, splitIndex);
const end = pattern.substring(splitIndex + 1);

function solution(filename) {
  if (filename.startsWith(start) && filename.endsWith(end)) {
    if (filename.length >= start.length + end.length) {
      return "DA";
    }
  }
  return "NE";
}

for (let i = 2; i < input.length; i++) {
  console.log(solution(input[i]));
}
