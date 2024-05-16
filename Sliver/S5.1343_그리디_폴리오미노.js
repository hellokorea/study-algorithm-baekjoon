const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim();

function solution(board) {
  let result = "";
  let len = 0;
  const A = "AAAA";
  const B = "BB";

  for (let i = 0; i <= board.length; i++) {
    if (board[i] === "X") {
      len++;
    } else {
      while (len > 0) {
        if (len >= 4) {
          result += A;
          len -= 4;
        } else if (len >= 2) {
          result += B;
          len -= 2;
        } else {
          return -1;
        }
      }
      if (i < board.length) result += board[i];
    }
  }

  return result;
}

console.log(solution(input));
