const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const N = Number(input[0]);
const M = Number(input[1]);
const material = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(material, M) {
  let count = 0;
  let left = 0;
  let right = material.length - 1;

  while (left < right) {
    const sum = material[left] + material[right];

    if (sum === M) {
      count++;
      left++;
    } else if (sum < M) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

console.log(solution(material, M));
