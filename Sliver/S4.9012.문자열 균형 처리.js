const fs = require("fs");
const [n, input] = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(ps) {
  let balance = 0;

  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") {
      balance++;
    } else if (ps[i] === ")") {
      balance--;

      if (balance < 0) {
        return "NO";
      }
    }
  }

  return balance === 0 ? "YES" : "NO";
}

const T = input[0];
for (let i = 1; i <= T; i++) {
  console.log(solution(input[i]));
}
