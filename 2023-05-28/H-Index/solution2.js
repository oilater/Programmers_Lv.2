// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(c) {
  c.sort((a, b) => b - a);
  for (let i = 0; i < c.length; i++) {
    if (i + 1 >= c[i]) return c[i];
  }
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([7, 6, 5, 4, 3, 2, 1])); // 4
console.log(solution([1, 1, 1, 0, 0, 0, 0])); // 4
