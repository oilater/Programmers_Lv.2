// https://school.programmers.co.kr/learn/courses/30/lessons/12914?language=javascript

function solution(n) {
  const p = [1, 2];

  for (let i = 0; i < 2000; i++) {
    p[i + 2] = (p[i] + p[i + 1]) % 1234567;
  }
  return p[n - 1];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
