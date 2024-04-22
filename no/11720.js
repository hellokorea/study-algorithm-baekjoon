const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const countStraight = input[1];

function solution(ns) {
  const arr = [...ns];
  return arr.map((item) => Number(item)).reduce((acc, cur) => acc + cur);
}

console.log(solution(countStraight));
