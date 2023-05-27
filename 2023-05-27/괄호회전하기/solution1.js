// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
  s = [...s];
  const hash = new Map();
  hash.set("[", "]");
  hash.set("(", ")");
  hash.set("{", "}");

  if (s.length % 2 === 1) return 0;

  let count = 0;
  let retry = 0;
  while (retry !== s.length) {
    let str = s.join("");
    for (let i = 0; i < s.length; i++) {
      if (hash.get(s[i]) === s[i + 1]) {
        s.splice(i, 2, "");
        s = s.join("").split("");
      }

      if (s[i] === hash.get(s[i - 1])) {
        s.splice(i - 1, 2, "");
        s = s.join("").split("");
      }

      if (s.join("").length === 0) count++;
    }
    const arr = [...str];
    arr.push(arr.shift());
    s = arr;
    retry++;
  }
  return count;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
// console.log(solution("[)(]")); // 0
// console.log(solution("}}}")); // 0
