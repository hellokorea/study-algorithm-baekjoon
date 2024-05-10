const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(num) {
  let cards = Array.from({ length: num }, (_, i) => i + 1);
  let head = 0;
  let tail = num;

  let isDelete = true;

  while (head < tail - 1) {
    //^ 카드 1개를 남기기 위함
    if (isDelete) {
      //^ 삭제해야하는 요소라면 head index 증강
      head++;
    } else {
      cards[tail] = cards[head]; //^ 삭제 턴이 아니라면 맨끝에다 맨앞 요소 할당
      head++;
      tail++;
    }

    isDelete = !isDelete; //^ 반복 1회마다 true, false 변환 처리
  }

  return cards[head];
}
console.log(solution(input));
