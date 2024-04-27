const fs = require("fs");

const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const countStraight = input[1];

function solution(ns) {
  const arr = [...ns]; //^ 각 숫자들 배열로 전개

  return arr.map((item) => Number(item)).reduce((acc, cur) => acc + cur);
  //^ 배열 순회하면서 reduce로 누적 값 합산
}

console.log(solution(countStraight));
