const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

// 에리토스테네스 알고리즘
function solution(num1, num2) {
  const isPrime = new Array(num2 + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= num2; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num2; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let prime = [];

  for (let i = num1; i <= num2; i++) {
    if (isPrime[i] === true) {
      prime.push(i);
      console.log(i);
    }
  }
}

solution(parseInt(input[0]), parseInt(input[1]));
