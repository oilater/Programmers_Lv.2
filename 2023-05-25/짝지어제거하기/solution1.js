// https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

function solution(s) {
  let arr = [];
  for (const item of s) {
    if (item !== arr.at(-1)) {
      arr.push(item);
    } else {
      arr.pop();
    }
  }
  return arr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
