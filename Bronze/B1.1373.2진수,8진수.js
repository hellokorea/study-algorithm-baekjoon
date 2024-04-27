const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(binaryWord) {
  while (binaryWord.length % 3 !== 0) {
    binaryWord = "0" + binaryWord;
  }

  let result = "";

  for (let i = 0; i < binaryWord.length; i += 3) {
    const chunck = binaryWord.substring(i, i + 3);
    const decimal = parseInt(chunck, 2);
    result += decimal.toString(8);
  }

  return result.replace(/^0+/, "") || 0;
}

console.log(solution(input));
