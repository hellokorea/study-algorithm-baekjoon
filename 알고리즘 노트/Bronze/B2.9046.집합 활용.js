const fs = require("fs");

const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

function findMostFrequentChar(str) {
  const charCount = {}; //^ 각 문자열 키와 등장 한 횟 수 값 저장할 객체
  let maxCount = 0; //^ 가장 많이 등장 한 키 찾기 위한 값

  let maxChars = new Set(); //^ 가장 많이 등장한 키 담기 위한 Set 자료 구조

  for (const char of str) {
    if (char === " ") continue; //^ 문자가 공백이면 패스하여 순회 계속 진행

    charCount[char] = (charCount[char] || 0) + 1; //^ 들어온 문자열 key로 저장하면서 없으면 0 있으면 +1 저장

    if (charCount[char] > maxCount) {
      maxCount = charCount[char]; //^ 0부터 비교해서 key값이 0보다 크면 maxCount로 재할당
      maxChars.clear(); //^ 기존에 있던 key값 재할당을 위한 Set 클리어
      maxChars.add(char); //^ maxCount인 key값 Set에 저장
    } else if (charCount[char] === maxCount) {
      maxChars.add(char); //^ 등장한 횟 수 값이 같다면 그대로 Set에 추가
    }
  }

  return maxChars.size === 1 ? [...maxChars][0] : "?";
  //^ size === 1 즉, 최다 등장 key가 1개면 그대로 return, 아니면 "?" / 최다 등장 key가 0 || 2 이므로
}

for (let i = 1; i <= T; i++) {
  console.log(findMostFrequentChar(input[i]));
}
