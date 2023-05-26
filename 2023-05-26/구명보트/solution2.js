// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  people.sort((a, b) => a - b);

  return people;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

console.log(solution([60, 40, 50, 80, 50], 100)); // 3
