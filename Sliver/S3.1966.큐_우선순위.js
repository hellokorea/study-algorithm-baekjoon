const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const testCaseCount = Number(input[0]);
let currentIndex = 1;

for (let t = 0; t < testCaseCount; t++) {
  const [n, m] = input[currentIndex].split(" ").map(Number);
  const priorities = input[currentIndex + 1].split(" ").map(Number);
  currentIndex += 2;

  let queue = priorities.map((priority, idx) => ({ priority, idx }));
  let printOrder = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some((doc) => doc.priority > current.priority)) {
      queue.push(current);
    } else {
      printOrder++;

      if (current.idx === m) {
        console.log(printOrder);
        break;
      }
    }
  }
}
