// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  while (people.length !== 0) {
    if (people[0] + people.at(-1) > limit) {
      people.pop();
      count++;
    } else if (people[0] + people.at(-1) <= limit) {
      people.pop();
      people.shift();
      count++;
    }
  }
  return count;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

console.log(solution([60, 40, 50, 80, 50], 100)); // 3

//정확성 통과, 효율성 시간초과