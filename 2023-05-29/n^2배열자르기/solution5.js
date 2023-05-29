// https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

function solution(n, left, right) {
  return new Array(right - left + 1).fill(0).reduce((acc, _, i) => {
    acc.push(Math.max((i + left) % n, parseInt((i + left) / n)) + 1);
    return acc;
  }, []);
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
