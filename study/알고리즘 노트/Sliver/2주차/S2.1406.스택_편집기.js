const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const initialMsg = input[0];
const T = Number(input[1]);
const commands = input.slice(2);

function solution(initialMsg, commands) {
  let leftStack = initialMsg.split("");
  let rightStack = []; //^ 시간 복잡도 감소를 위한 스택 생성

  commands.forEach((command) => {
    const [cmd, value] = command.split(" ");
    switch (cmd) {
      case "B":
        if (leftStack.length > 0) {
          leftStack.pop();
        }
        break;

      case "L":
        if (leftStack.length > 0) {
          rightStack.push(leftStack.pop()); //^ 오른쪽 스택으로 이동
        }
        break;

      case "D":
        if (rightStack.length > 0) {
          leftStack.push(rightStack.pop()); //^ 오른쪽 스택으로 이동
        }
        break;

      case "P":
        leftStack.push(value);
        break;
    }
  });

  return leftStack.join("") + rightStack.reverse().join("");
}

console.log(solution(initialMsg, commands));
