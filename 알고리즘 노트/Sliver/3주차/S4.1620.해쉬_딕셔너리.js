const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const [N, M] = parseInt(input[0].split(" "));

const pokemonIndex = new Map(); //^ 포켓몬 이름을 숫자로 저장하기 위한 딕셔너리
const pokemonName = new Array(N + 1); //^ 숫자를 포켓몬 이름으로 저장하기 위한 배열

for (let i = 1; i <= N; i++) {
  const name = input[i];
  pokemonName[i] = name; //^ 배열에 i번부터 index부터 포켓몬 이름 저장
  pokemonIndex.set(name, i); //^ 포켓몬 이름 key에 value에 i 저장
}

const results = [];

for (let i = N + 1; i <= N + M; i++) {
  //^ 27번째 부터 5개값이 들어오니 N +1, 5번 돌테니 N + M
  const query = input[i];
  if (isNaN(query)) {
    //^ 입력 값이 문자열이면 결과 배열에 포켓몬 이름의 value 추가
    results.push(pokemonIndex.get(query));
  } else {
    //^ 입력 값이 숫자면 해당 index에 있는 포켓몬 이름 추가
    const index = parseInt(query);
    results.push(pokemonName[index]);
  }
}

console.log(results.join("\n"));
