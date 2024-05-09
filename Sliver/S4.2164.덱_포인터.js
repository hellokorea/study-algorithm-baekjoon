const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(num) {
  let cards = Array.from({ length: num }, (_, i) => i + 1);
  let head = 0;
  let tail = num;

  let isDelete = true;

  while (head < tail - 1) {
    if (isDelete) {
      head++;
    } else {
      cards[tail] = cards[head];
      head++;
      tail++;
    }

    isDelete = !isDelete;
  }

  return cards[head];
}
console.log(solution(input));
