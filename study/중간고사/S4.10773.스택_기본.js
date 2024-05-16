const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(nums) {
  let stack = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      stack.pop(); //^ 최상위 값 제거
    } else {
      stack.push(nums[i]); //^ 0 아니면 스택에 추가
    }
  }
  return !stack.length ? 0 : stack.reduce((acc, cur) => acc + cur); //^ 배열 내 값이 존재하면 누적 값 return
}

console.log(solution(input.map(Number)));
