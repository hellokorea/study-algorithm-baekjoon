const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(str) {
  let charCount = {};
  let maxCount = 0;
  let maxChars = new Set();

  for (let char of str) {
    char = char.toLowerCase();
    if (char === " ") continue;

    charCount[char] = (charCount[char] || 0) + 1;

    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChars.clear();
      maxChars.add(char);
    } else if (charCount[char] === maxCount) {
      maxChars.add(char);
    }
  }

  return maxChars.size === 1 ? [...maxChars][0].toUpperCase() : "?";
}

console.log(solution(input));
