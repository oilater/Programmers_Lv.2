// https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

function solution(n, left, right) {
  // 2차원 n x n 배열 만들기
  const arr = [];
  const ar = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    arr.push(ar);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < i; k++) {
        if (arr[j][k] === -1) arr[j][k] = i;
      }
    }
  }
  return arr;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
