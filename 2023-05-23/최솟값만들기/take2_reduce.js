// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
