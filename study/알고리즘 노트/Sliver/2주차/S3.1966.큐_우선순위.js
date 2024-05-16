const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const testCaseCount = Number(input[0]);
let currentIndex = 1;

for (let t = 0; t < testCaseCount; t++) {
  const [n, m] = input[currentIndex].split(" ").map(Number); //^ 찾고자하는 문서 인덱스 구조분해할당
  const priorities = input[currentIndex + 1].split(" ").map(Number); //^ 문서 중요도 할당
  currentIndex += 2; //^ 2씩 증가시키며 총 3개로 분리

  let queue = priorities.map((priority, idx) => ({ priority, idx })); //^ 중요도와 idx 매핑하여 객체로 생성 priority : 1 , idx : 0
  let printOrder = 0;

  while (queue.length > 0) {
    const current = queue.shift(); //^ 큐 맨앞 추출
    if (queue.some((doc) => doc.priority > current.priority)) {
      //^ 현재 문서 중요도가 가장 높은 중요도보다 낮으면 뒤로 재배치
      queue.push(current);
    } else {
      printOrder++; //^ 중요도 제일 높으면 +1 증가

      if (current.idx === m) {
        //^ 찾고자하는 문서의 인덱스와 지금 문서의 인덱스와 같다면 로그에 출력
        console.log(printOrder);
        break;
      }
    }
  }
}
