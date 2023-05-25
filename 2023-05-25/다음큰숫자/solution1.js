// https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

function solution(n) {
  let nTwo = [...n.toString(2)].filter((v) => v === "1").length;
  for (let i = n + 1; i < n * n; i++) {
    if ([...i.toString(2)].filter((v) => v === "1").length === nTwo) return i;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
