const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(str) {
  const hasUnderscore = str.includes("_");
  const isSingleLowerCaseWord = /^[a-z]+$/.test(str);
  const isJavaStyle = /^[a-z][a-zA-Z]*$/.test(str) && !hasUnderscore;
  const isCppStyle =
    /^[a-z]+(_[a-z]+)*$/.test(str) && !str.includes("__") && !str.startsWith("_") && !str.endsWith("_");

  if (isSingleLowerCaseWord) {
    return str; // 영소문자로만 이루어진 경우
  } else if (isJavaStyle && !isCppStyle) {
    return javaToCpp(str); // Java 형식을 C++ 형식으로
  } else if (isCppStyle && !isJavaStyle) {
    return cppToJava(str); // C++ 형식을 Java 형식으로
  } else {
    return "Error!"; // 형식에 맞지 않는 경우
  }
}

function javaToCpp(javaStr) {
  return javaStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
}

function cppToJava(cppStr) {
  return cppStr
    .split("_")
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

console.log(solution(input));
