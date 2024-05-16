const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const cities = Number(input[0]);
const distances = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

function solution(distances, prices) {
  let totalCost = 0;
  let minPrice = prices[0];

  for (let i = 0; i < distances.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    totalCost += minPrice * distances[i];
  }

  return totalCost;
}

console.log(solution(distances, prices));
