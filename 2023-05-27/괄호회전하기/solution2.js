// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
  let sStr = s;
  let sArr = sStr.split("");
  const hash = new Map();
  hash.set("[", "]");
  hash.set("(", ")");
  hash.set("{", "}");
  //sArr의 길이가 1일 경우 무조건 0 return
  if (sArr.length % 2 === 1) return 0;

  let newStr, newArr;
  //이제 회전시키면서 검사해야 하는데,,
  //splice를 쓰면서 할거라 원본 배열 보존을 위해 문자열 형태의 sStr을 이용
  //우선 sArr 검사
  let answer = 0;
  let loop = s.length;
  while (loop) {
    for (let i = 0; i < sArr.length; i++) {
      if (hash.get(sArr[i]) === sArr[i + 1]) {
        sArr.splice(i, 2, "");
        sArr = sArr.join("").split("");
        if (sArr.length === 0) {
          answer += 1;
          continue;
        }
        i -= 2;
      }
    }

    //처리는 끝, 이제 배열 회전 시키고 다시 검사할거임
    newArr = sStr.split("");
    newArr.push(newArr.shift());
    newStr = newArr.join("");
    [sArr, sStr] = [newArr, newStr];
    loop -= 1;
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
