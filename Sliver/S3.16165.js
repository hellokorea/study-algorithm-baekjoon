const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

function solution(str) {
  let currentLine = 1;

  const groups = new Map();
  const members = new Map();

  for (let i = 0; i < N; i++) {
    const groupName = input[currentLine++];
    const num = Number(input[currentLine++]);
    groups[groupName] = [];

    for (let j = 0; j < num; j++) {
      const memberName = input[currentLine++];
      groups[groupName].push(memberName);
      members[memberName] = groupName;
    }
  }

  console.log(members);
  const queries = [];

  for (let i = 0; i < M; i++) {
    const query = input[currentLine++];
    const queryType = Number(input[currentLine++]);

    queries.push({ query, queryType });
  }

  for (const { query, queryType } of queries) {
    if (queryType === 0) {
      const memberList = groups[query].slice().sort();
      console.log(memberList.join("\n"));
    } else if (queryType === 1) {
      console.log(members[query]);
    }
  }
}

solution(input);
