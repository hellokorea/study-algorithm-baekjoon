const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(S) {
  let result = "";
  let i = 0;
  let temp = [];
  let inTag = false;

  while (i < S.length) {
    if (S[i] === "<") {
      if (temp.length > 0) {
        result += temp.reverse().join("");
        temp = [];
      }
      inTag = true;
      result += S[i];
    } else if (S[i] === ">") {
      inTag = false;
      result += S[i];
    } else if (inTag) {
      result += S[i];
    } else if (S[i] === " ") {
      result += temp.reverse().join("") + " ";
      temp = [];
    } else {
      temp.push(S[i]);
    }
    i++;
  }

  if (temp.length > 0) {
    result += temp.reverse().join("") + " ";
  }

  return result;
}

console.log(solution(input));
