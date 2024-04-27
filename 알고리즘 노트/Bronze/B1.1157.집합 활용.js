const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

//^ 9046 문제와 동일하므로 다른 부분만 주석 설명
function solution(str) {
  let charCount = {};
  let maxCount = 0;
  let maxChars = new Set();

  for (let char of str) {
    char = char.toLowerCase(); //^ 모든 문자를 소문자로 처리하여 소,대문자 구분 제거

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
