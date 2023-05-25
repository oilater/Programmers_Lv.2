// https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

function solution(n) {
  let nTwo = [...n.toString(2)].filter((v) => v === "1").length;
  while (n++) {
    if ([...n.toString(2)].filter((v) => v === "1").length === nTwo) return n;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
