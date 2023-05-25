// https://school.programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

function solution(n) {
  const p = [0, 1];
  for (let i = 2; i <= n; i++) {
    p[p.length] = (p[p.length - 1] + p[p.length - 2]) % 1234567;
  }

  return p[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5

// for 문 안에서 나머지 연산을 해주는 게 포인트!
