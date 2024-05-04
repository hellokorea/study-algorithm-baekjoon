const fs = require("fs");
const readData = fs.readFileSync("../example.txt").toString().trim().split("\n");
const N = parseInt(readData[0], 10);
const words = readData.slice(1);

function solution(words) {
  let goodWords = 0;

  words.forEach((word) => {
    const stack = [];
    for (let char of word) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        //^ 들어온 문자열이 스택 내 최상위 문자와 같다면 제거
        stack.pop();
      } else {
        //^ 아니면 스택에 추가
        stack.push(char);
      }
    }
    if (stack.length === 0) {
      //^ 스택이 비어있다면 즉, 교차되지 않은 문자열이 되어서 모두 제거되었다면 좋은 단어로 처리하여 +1 증가
      goodWords++;
    }
  });

  return goodWords;
}

console.log(solution(words));
