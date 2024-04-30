const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(files) {
  let extension = new Map(); //^ 확장자 파일을 중복 없이 담기 위한 딕셔너리 자료구조 사용

  for (let i = 1; i < files.length; i++) {
    const file = files[i];
    const ex = file.split(".");
    let split = ex[1]; //^ 확장자명을 분리하여 할당

    if (extension.has(split)) {
      extension.set(split, extension.get(split) + 1);
      //^ 딕셔너리 내 해당 키값이 존재할 경우 +1 추가
    } else {
      extension.set(split, 1);
      //^ 없으면 1
    }
  }

  const sortExtension = Array.from(extension).sort((a, b) => a[0].localeCompare(b[0]));
  //^ from을 통해 이터레이터 객체 배열로 변환 후 확장자명 기준으로 사전 정렬

  sortExtension.forEach(([ex, v]) => {
    console.log(ex + " " + v);
  });
}
solution(input);
