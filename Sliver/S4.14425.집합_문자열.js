const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const S = new Set(input.slice(1, N + 1));
  const test = input.slice(N + 1);

  let count = 0;

  for (let i = 0; i < M; i++) {
    if (S.has(test[i])) {
      count++;
    }
  }

  return count;
}

console.log(solution(input));
