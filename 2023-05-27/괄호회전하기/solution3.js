// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
  let sStr = s;
  let sArr = sStr.split("");
  const hash = new Map();
  hash.set("[", "]");
  hash.set("(", ")");
  hash.set("{", "}");
  if (sArr.length % 2 === 1) return 0;

  let newStr, newArr;
  let answer = 0;
  let loop = s.length;
  while (loop) {
    for (let i = 0; i < sArr.length; i++) {
      if (hash.get(sArr[i]) === sArr[i + 1]) {
        sArr.splice(i, 2, "");
        sArr = sArr.join("").split("");
        if (sArr.length === 0) {
          answer++;
          continue;
        }
        i -= 2;
      }
    }

    newArr = sStr.split("");
    newArr.push(newArr.shift());
    newStr = newArr.join("");
    [sArr, sStr] = [newArr, newStr];
    loop--;
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
