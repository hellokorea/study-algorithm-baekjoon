const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(lines) {
  const maxLength = Math.max(...lines.map((line) => line.length)); //^ 문자열 중 가장 긴 길이만큼 순회를 위한 값 할당
  let result = ""; //^ 세로로 들어온 문자열 담을 빈 문자열

  for (let i = 0; i < maxLength; i++) {
    for (let line of lines) {
      //^ 문자열의 문자열 순회 => 2차원 배열 순회
      if (i < line.length) {
        //^ 세로로 넣을 때 해당 문자열이 존재하는지 체크
        result += line[i]; //^ i 인덱스부터 들어온 문자열 1개씩 할당 => 즉, 세로로 추가 되는 것
      }
    }
  }
  return result;
}

console.log(solution(input));
