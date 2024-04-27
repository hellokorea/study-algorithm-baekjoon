const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(files) {
  let extension = new Map();

  for (let i = 1; i < files.length; i++) {
    const file = files[i];
    const ex = file.split(".");
    let split = ex[1];

    if (extension.has(split)) {
      extension.set(split, extension.get(split) + 1);
    } else {
      extension.set(split, 1);
    }
  }

  const sortExtension = Array.from(extension).sort((a, b) => a[0].localeCompare(b[0]));

  sortExtension.forEach(([ex, v]) => {
    console.log(ex + " " + v);
  });
}
solution(input);
