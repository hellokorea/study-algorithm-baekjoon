const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(line) {
  const pattern = /^[A-F]?A+F+C+[A-F]?$/.test(line);
  //^ "/^[A-F]?" : 시작 문자열이 A - F까지 그리고 0또는 1이상, "str+" : 무조건 1개이상, "?": 0 또는 1이상, "$":끝나는 문자열이 [A-F]
  return pattern ? "Infected!" : "Good";
}

for (let i = 1; i <= input[0]; i++) {
  console.log(solution(input[i]));
}
