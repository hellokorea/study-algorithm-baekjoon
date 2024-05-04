const fs = require("fs");
const [n, input] = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(ps) {
  let balance = 0; //^ "()" 괄호가 정상적으로 존재하기 체크하기 위한 변수

  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") {
      balance++; //^ "(" 들어오면 밸런스에 +1 처리
    } else if (ps[i] === ")") {
      balance--; //^ ")" 괄호가 닫히면 -1 처리

      if (balance < 0) {
        //^ 즉, -1이 되는 순간 괄호가 2번 닫힌 것이니 바로 NO return
        return "NO";
      }
    }
  }

  //^ 밸런스가 0 즉, 괄호가 정상적으로 처리 됐으면 YES, 아니면 NO
  return balance === 0 ? "YES" : "NO";
}

const T = input[0];
for (let i = 1; i <= T; i++) {
  console.log(solution(input[i]));
}
