const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const S = new Set(input.slice(1, N + 1)); //^ 집한 문자열 Set으로 초기화
  const test = input.slice(N + 1);

  let count = 0;

  for (let i = 0; i < M; i++) {
    if (S.has(test[i])) {
      //^ 집합에 해당 문자열이 존재하면 증강
      count++;
    }
  }

  return count;
}

console.log(solution(input));
