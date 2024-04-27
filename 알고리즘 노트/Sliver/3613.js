const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(str) {
  const isJava = /^[a-z]+[a-zA-Z]*$/.test(str) && !str.includes("_");
  const isCpp = /^[a-z]+(_[a-z]+)*$/.test(str);

  if ((isJava && isCpp) || (!isJava && !isCpp) || str.includes("__") || str.endsWith("_") || str.startsWith("_")) {
    return "Error!";
  }

  if (isCpp) {
    return str
      .split("_")
      .map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("");
  } else {
    return str.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
  }
}

console.log(solution(input));
