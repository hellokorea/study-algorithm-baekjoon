const fs = require("fs");
const readPath = fs.readFileSync("../example.txt").toString().trim().split("\n");

const T = Number(readPath[0]);
const expression = readPath[1];
const values = readPath.slice(2);
const operandValues = {};

for (let i = 0; i < T; i++) {
  operandValues[String.fromCharCode(65 + i)] = values[i];
}

const stack = [];

expression.split("").forEach((char) => {
  if (char >= "A" && char <= "Z") {
    stack.push(Number(operandValues[char]));
  } else {
    const b = stack.pop();
    const a = stack.pop();

    switch (char) {
      case "+":
        stack.push(a + b);
        break;
      case "-":
        stack.push(a - b);
        break;
      case "*":
        stack.push(a * b);
        break;
      case "/":
        stack.push(a / b);
        break;
    }
  }
});

console.log(stack.pop().toFixed(2));
