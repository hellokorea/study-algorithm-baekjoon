const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

function solution(X, visitors) {
  let maxSum = 0;
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i < X; i++) {
    currentSum += visitors[i];
  }

  maxSum = currentSum;
  count = 1;

  for (let i = X; i < visitors.length; i++) {
    currentSum += visitors[i] - visitors[i - X];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      count = 1;
    } else if (currentSum === maxSum) {
      count++;
    }
  }

  if (maxSum === 0) {
    return "SAD";
  } else {
    return `${maxSum}\n${count}`;
  }
}

console.log(solution(X, visitors));
