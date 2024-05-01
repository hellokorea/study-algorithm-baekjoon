const fs = require("fs");
const readData = fs.readFileSync("../example.txt").toString().trim().split("\n");
const N = parseInt(readData[0], 10);
const words = readData.slice(1);

function solution(words) {
  let goodWords = 0;

  words.forEach((word) => {
    const stack = [];
    for (let char of word) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    if (stack.length === 0) {
      goodWords++;
    }
  });

  return goodWords;
}

console.log(solution(words));
