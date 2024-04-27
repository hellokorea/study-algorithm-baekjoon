const fs = require("fs");

const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

function findMostFrequentChar(str) {
  const charCount = {};
  let maxCount = 0;
  let maxChars = new Set();

  for (const char of str) {
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

  return maxChars.size === 1 ? [...maxChars][0] : "?";
}

for (let i = 1; i <= T; i++) {
  console.log(findMostFrequentChar(input[i]));
}
