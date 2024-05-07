const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(nums) {
  let stack = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      stack.pop();
    } else {
      stack.push(nums[i]);
    }
  }
  return !stack.length ? 0 : stack.reduce((acc, cur) => acc + cur);
}

console.log(solution(input.map(Number)));
