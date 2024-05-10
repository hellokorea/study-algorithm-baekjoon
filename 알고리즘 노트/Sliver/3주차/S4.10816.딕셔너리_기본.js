const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const cards = input[1].split(" ");
const quiz = input[3].split(" ");

let haveCard = new Map(); //^ 숫자가 몇개 저장 되었는지 확인하기 위한 딕셔너리 초기화

for (let i = 0; i < cards.length; i++) {
  if (haveCard.has(cards[i])) {
    //^ 카드가 이미 있으면 +1 아니면 1로 할당
    haveCard.set(cards[i], haveCard.get(cards[i]) + 1);
  } else {
    haveCard.set(cards[i], 1);
  }
}

let result = [];

for (let i = 0; i < quiz.length; i++) {
  let findNumber = quiz[i];

  if (haveCard.get(findNumber)) {
    //^ 카드가 존재하면 해당 카드 보유 개수 value 결과 배열에 추가
    result.push(haveCard.get(findNumber));
  } else {
    result.push(0); //^ 없으면 0
  }
}

console.log(result.join(" "));
