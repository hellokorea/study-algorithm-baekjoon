const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const pattern = input[1];

const splitIndex = pattern.indexOf("*");
const start = pattern.substring(0, splitIndex); //^ "*" 전까지 앞 문자열 저장
const end = pattern.substring(splitIndex + 1); //^ "*" 이후 뒷 문자열 저장

function solution(filename) {
  if (filename.startsWith(start) && filename.endsWith(end)) {
    //^ 문자열의 앞과 뒤가 똑같을 때 길이 비교 후 return
    if (filename.length >= start.length + end.length) {
      return "DA";
    }
  }
  return "NE";
}

for (let i = 2; i < input.length; i++) {
  console.log(solution(input[i]));
}
