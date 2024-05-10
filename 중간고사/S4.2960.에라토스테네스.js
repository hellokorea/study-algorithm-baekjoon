const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(input) {
  const [n, k] = input.map(Number);
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  let removed = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i; j <= n; j += i) {
        //^ 2를 포함한 배수를 포함해야하니 i로 할당
        if (isPrime[j]) {
          isPrime[j] = false; //^ 2부터 배수 전부 false처리
          removed.push(j);
          if (removed.length === k) {
            //^ 즉, 현재 찾고자하는 k번째 값일 때 j return
            return j;
          }
        }
      }
    }
  }
  return -1;
}

console.log(solution(input));
