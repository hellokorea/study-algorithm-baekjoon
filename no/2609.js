const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(a, b) {
  const gcdF = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const lcmF = (a, b) => {
    return (a * b) / gcdF(a, b);
  };
  const gcd = gcdF(a, b);
  const lcm = lcmF(a, b);

  console.log(gcd);
  console.log(lcm);
}

const num1 = parseInt(input[0], 10);
const num2 = parseInt(input[1], 10);

solution(num1, num2);
