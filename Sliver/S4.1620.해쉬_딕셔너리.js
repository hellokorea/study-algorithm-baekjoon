const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

const [N, M] = parseInt(input[0].split(" "));

const pokemonIndex = new Map();
const pokemonName = new Array(N + 1);

for (let i = 1; i <= N; i++) {
  const name = input[i];
  pokemonName[i] = name;
  pokemonIndex.set(name, i);
}

const results = [];
for (let i = N + 1; i <= N + M; i++) {
  const query = input[i];
  if (isNaN(query)) {
    results.push(pokemonIndex.get(query));
  } else {
    const index = parseInt(query);
    results.push(pokemonName[index]);
  }
}

console.log(results.join("\n"));
