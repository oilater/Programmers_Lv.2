// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  people.sort((a, b) => a - b);
  const boat = [];
  const temp = [];

  for (let i = 0; i < people.length; i++) {
    if (people.includes(limit - people[i])) {
      people[people.indexOf(limit - people[i])] = limit / 2;
      people[i] = limit / 2;
    }
  }

  for (let i = 0; i < people.length; i++) {
    if (people[i] === limit / 2) {
      temp.push(people[i]);
    } else {
      boat.push(people[i]);
    }
  }
  return boat.length + Math.ceil(temp.length / 2);
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

console.log(solution([60, 40, 50, 80, 50], 100)); // 3
