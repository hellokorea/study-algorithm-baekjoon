const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(S) {
  let result = "";
  let i = 0;
  let temp = [];
  let inTag = false;

  while (i < S.length) {
    if (S[i] === "<") {
      if (temp.length > 0) {
        result += temp.reverse().join("");
        temp = [];
        //^ "<"일 때 지금까지 저장된 문자열을 결과 값에 추가 후 빈 배열로 초기화
      }
      inTag = true; //^ flag를 통해 분기 처리
      result += S[i];
    } else if (S[i] === ">") {
      inTag = false; //^ ">"로 태그 닫히면 false 처리를 통해 분기 처리
      result += S[i];
    } else if (inTag) {
      result += S[i]; //^ "< >" 태그 내 존재하면 flag true값을 통해 결과 값에 온전히 추가
    } else if (S[i] === " ") {
      result += temp.reverse().join("") + " ";
      temp = [];
      //^ 공백 또한 동일하게 처리하되 " "를 추가하여 공백도 포함 처리
    } else {
      temp.push(S[i]);
      //^ 태그가 아닌 문자는 모두 배열에 저장 후 "<", " " 만나면 reverse 후 join하기 위함
    }
    i++;
  }

  if (temp.length > 0) {
    result += temp.reverse().join("") + " ";
    //^ ">" 이후 나머지 문자열도 전부 동일하게 처리
  }

  return result;
}

console.log(solution(input));
