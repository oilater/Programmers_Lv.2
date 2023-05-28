// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(c) {
  c.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i <= Math.max(...c); i++) {
    let count = 0;
    for (let j = 0; j < c.length; j++) {
      if (c[j] >= i) count++;
      if (count >= i) {
        answer = i;
        break;
      }
    }
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([7, 6, 5, 4, 3, 2, 1])); // 4
// console.log(solution([8, 4, 2, 1, 0, 0, 0, 0])); // 2
// console.log(solution([0, 1, 2, 3, 4])); // 2
console.log(solution([7, 6, 5, 4, 0])); // 4
console.log(solution([10000, 0])); // 4
console.log(solution([12, 10, 9, 5, 4, 2, 2, 0, 0, 1, 1, 1, 1, 1])); // 5
