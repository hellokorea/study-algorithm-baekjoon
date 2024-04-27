const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(line) {
  const pattern = /^[A-F]?A+F+C+[A-F]?$/.test(line);
  return pattern ? "Infected!" : "Good";
}

for (let i = 1; i <= input[0]; i++) {
  console.log(solution(input[i]));
}
