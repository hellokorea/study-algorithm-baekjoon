const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const N = Number(input[0]);
let answer = [];

for (let i = 1; i <= N; i++) {
  let currentNumber = "";
  for (let char of input[i]) {
    if (!isNaN(char)) {
      currentNumber += char;
    } else if (isNaN(char)) {
      if (currentNumber.length > 0) {
        answer.push(BigInt(currentNumber));
      }
      currentNumber = "";
    }
  }
  if (currentNumber.length > 0) {
    answer.push(BigInt(currentNumber));
  }
}

answer.sort((a, b) => (a - b ? -1 : a > b ? 1 : 0));
console.log(answer.join("\n").trim());
