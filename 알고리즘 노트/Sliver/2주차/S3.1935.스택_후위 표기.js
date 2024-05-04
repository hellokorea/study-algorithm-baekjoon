const fs = require("fs");
const readPath = fs.readFileSync("../example.txt").toString().trim().split("\n");

const T = Number(readPath[0]);
const expression = readPath[1];
const values = readPath.slice(2);
const operandValues = {};

for (let i = 0; i < T; i++) {
  operandValues[String.fromCharCode(65 + i)] = values[i]; //^ 아스키코드 65부터 A이므로, 변환해서 매핑
}

const stack = [];

expression.split("").forEach((char) => {
  if (char >= "A" && char <= "Z") {
    //^ 스택에 추가
    stack.push(Number(operandValues[char]));
  } else {
    const b = stack.pop(); //^ b먼저 꺼낸 이유는 후위 표기식이므로, 계산을 정확하게 하기위함
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
