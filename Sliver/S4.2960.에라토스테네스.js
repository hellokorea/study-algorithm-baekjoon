const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(input) {
  const [n, k] = input.map(Number);
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  let removed = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i; j <= n; j += i) {
        if (isPrime[j]) {
          isPrime[j] = false;
          removed.push(j);
          if (removed.length === k) {
            return j;
          }
        }
      }
    }
  }
  return -1;
}

console.log(solution(input));
