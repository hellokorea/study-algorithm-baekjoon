const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const N = Number(input[0]);
let answer = [];

for (let i = 1; i <= N; i++) {
  let currentNumber = "";
  for (let char of input[i]) {
    if (!isNaN(char)) {
      //^ 숫자면 문자열에 추가
      currentNumber += char;
    } else if (isNaN(char)) {
      if (currentNumber.length > 0) {
        //^ 문자열이면 현재까지 저장한 숫자 BigInt로 변환하여 결과 배열에 추가
        answer.push(BigInt(currentNumber));
      }
      currentNumber = ""; //^ 다시 새로운 숫자를 받기 위해 빈 문자열로 초기화
    }
  }
  if (currentNumber.length > 0) {
    //^ 마지막에 남아있는 숫자까리 전부 결과 배열에 추가
    answer.push(BigInt(currentNumber));
  }
}

answer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
//^ sort가 안되므로 직접 -1 반환하여 오름차순 정렬
console.log(answer.join("\n").trim());
