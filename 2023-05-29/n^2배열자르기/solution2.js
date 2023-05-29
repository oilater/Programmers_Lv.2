// https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

function solution(n, left, right) {
  // 2차원 n x n 배열 만들기
  const arr = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    const ar = new Array(i).fill(i);
  }

  return arr;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
