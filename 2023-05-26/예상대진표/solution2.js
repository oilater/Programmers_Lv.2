// https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

function solution(n, a, b) {
  a = Math.min(a, b);
  b = Math.max(a, b);

  while (n >= 1) {
    if (a <= n / 2 && b > n / 2) {
      for (let i = 0; i < n; i++) {
        if (2 ** i === n) return i;
      }
    }
    n /= 2;
  }
}

console.log(solution(8, 4, 7)); // 3
