const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split(" ");

function solution(input) {
  const [data, order] = input;
  const humans = Array.from({ length: data }, (_, i) => i + 1); //^ 길이 만큼 배열 생성 및 1부터 원소 할당
  let result = [];
  let p = 0; //^ 3번째 마다 값을 찾기 위한 변수

  while (humans.length > 0) {
    if (p === order - 1) {
      //^ p가 3 즉, 3번째 제거 대상일 경우 큐 맨앞 요소를 결과 배열에 추가
      result.push(humans.shift());
      p = 0; //^ 제거 됐으니 다시 0으로 초기화
    } else {
      humans.push(humans.shift()); //^ 3번째가 아니라면 맨뒤에 맨앞 요소를 추가하면서 환형 큐
      p++; //^ p를 증가시켜 3번째를 찾기위함
    }
  }
  console.log(`<${result.join(", ")}>`);
}

solution(input);
