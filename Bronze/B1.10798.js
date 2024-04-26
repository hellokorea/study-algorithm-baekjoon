const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(lines) {
  const maxLength = Math.max(...lines.map((line) => line.length));
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    for (let line of lines) {
      if (i < line.length) {
        result += line[i];
      }
    }
  }
  return result;
}

console.log(solution(input));
