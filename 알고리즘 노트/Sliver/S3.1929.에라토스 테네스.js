const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

// 에리토스테네스 알고리즘
function solution(num1, num2) {
  const isPrime = new Array(num2 + 1).fill(true);
  //^ 검사 할 숫자만큼 배열 생성 후 true로 채움

  isPrime[0] = isPrime[1] = false; //^ 0,1 은 소수가 아니므로 false

  for (let i = 2; i * i <= num2; i++) {
    //^ 2부터 시작해서 값의 배수들을 검사
    if (isPrime[i]) {
      //^ 4가 들어오면 이미 false처리가 됐으므로 내부 반복문 실행 X
      for (let j = i * i; j <= num2; j += i) {
        isPrime[j] = false;
        //^ 2는 소수이므로, 2,4,6,8,10 ... false 처리
      }
    }
  }

  let prime = [];

  for (let i = num1; i <= num2; i++) {
    if (isPrime[i] === true) {
      prime.push(i);
      //^ 소수들만 i 추가
      console.log(i);
    }
  }
}

solution(parseInt(input[0]), parseInt(input[1]));
