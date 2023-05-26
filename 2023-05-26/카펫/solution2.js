// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  let [w, h] = [0, 0];

  const s = brown + yellow;
  const m = Math.sqrt(brown + yellow);

  for (let i = 1; i <= m; i++) {
    if (s % i === 0) {
      [w, h] = [s / i, i];
      if (yellow % (w - 2) === 0) return [w, h];
    }
  }
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
console.log(solution(26, 10)); // [12, 3]
console.log(solution(24, 9)); // [11, 3]
