const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(binaryWord) {
  while (binaryWord.length % 3 !== 0) {
    binaryWord = "0" + binaryWord; //^ 입력된 2진수를 3의 배수로 만들어 8진수 숫자에 대응하기 위함
  }

  let result = "";

  for (let i = 0; i < binaryWord.length; i += 3) {
    //^ i를 3씩 증강시키며, 길이 만큼 순회
    const chunck = binaryWord.substring(i, i + 3); //^ 현재 i에서 시작하는 3자리 2진수 추출
    const decimal = parseInt(chunck, 2); //^ 추출된 3자리 2진수를 문자열을 10진수로 변환
    result += decimal.toString(8); //^ 10진수를 다시 8진수로 변환하여 결과 값에 추가
  }

  return result.replace(/^0+/, "") || 0; //^ 시작 문자열 0이 1개 이상이면, 공백으로 처리
}

console.log(solution(input));
