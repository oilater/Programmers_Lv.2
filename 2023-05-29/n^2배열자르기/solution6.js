// https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(Math.max(parseInt(i / n), i % n) + 1);
  }
  return arr;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
