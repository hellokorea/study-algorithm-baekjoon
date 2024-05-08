const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const cards = input[1].split(" ");
const quiz = input[3].split(" ");

let haveCard = new Map();

for (let i = 0; i < cards.length; i++) {
  if (haveCard.has(cards[i])) {
    haveCard.set(cards[i], haveCard.get(cards[i]) + 1);
  } else {
    haveCard.set(cards[i], 1);
  }
}

let result = [];

for (let i = 0; i < quiz.length; i++) {
  let findNumber = quiz[i];

  if (haveCard.get(findNumber)) {
    result.push(haveCard.get(findNumber));
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
