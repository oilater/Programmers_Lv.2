// https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

function solution(n, a, b) {
  a = Math.min(a, b);
  b = Math.max(a, b);

  let count = 0;

  while (n !== 1) {
    if (b % 2 === 1) b += 1;
    if (a % 2 === 1) a += 1;
    b /= 2;
    a /= 2;
    n /= 2;
    count += 1;

    if (a === b || a + 1 === b) return count;
  }
}

console.log(solution(8, 4, 7)); // 3
