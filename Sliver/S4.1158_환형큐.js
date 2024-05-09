const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(input) {
  const [data, order] = input;
  const humans = Array.from({ length: data }, (_, i) => i + 1);
  let result = [];
  let p = 0;

  while (humans.length > 0) {
    if (p === order - 1) {
      result.push(humans.shift());
      p = 0;
    } else {
      humans.push(humans.shift());
      p++;
    }
  }
  console.log(`<${result.join(", ")}>`);
}

solution(input);
