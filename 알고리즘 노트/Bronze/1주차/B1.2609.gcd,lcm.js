const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(a, b) {
  const gcdF = (a, b) => {
    while (b !== 0) {
      //^ 값 0 될 때 까지 반복
      let temp = b; //^ 임시 저장소에 b 할당
      b = a % b; //^ 나눈 나머지 값을 b에 재할당
      a = temp; //^ 나눈 나머지 값을 a에 할당
    }
    return a; //^ b가 0이되면, 나눈 나머지 값 a를 return
  };

  const lcmF = (a, b) => {
    return (a * b) / gcdF(a, b); //^ 두 수의 곱을 최대 공약수로 나누면 최소 공배수
  };

  const gcd = gcdF(a, b);
  const lcm = lcmF(a, b);

  console.log(gcd);
  console.log(lcm);
}

const num1 = parseInt(input[0], 10);
const num2 = parseInt(input[1], 10);

solution(num1, num2);
