// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(c) {
  c.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < c.length; i++) {
    if (c.slice(i).length >= c[i] && i + 1 <= c[i]) answer = c[i];
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([7, 6, 5, 4, 3, 2, 1])); // 4
console.log(solution([8, 4, 2, 1, 0, 0, 0, 0])); // 2
