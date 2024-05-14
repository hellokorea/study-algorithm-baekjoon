const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const coins = input
  .slice(1)
  .sort((a, b) => b - a)
  .map(Number);

function solution(K, coins) {
  let count = 0;

  for (let coin of coins) {
    if (K === 0) break;

    if (coin <= K) {
      count += Math.floor(K / coin);
      K %= coin;
    }
  }

  return count;
}

console.log(solution(K, coins));
