const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(money) {
  let count = 0;
  const [f, t] = [5, 2];

  while (money > 0) {
    if (money % 5 === 0) {
      count += Math.floor(money / f);
      money %= f;
    } else {
      money -= t;
      count++;
    }

    if (money < 0) {
      return -1;
    }
  }

  return count;
}

console.log(solution(Number(input)));
