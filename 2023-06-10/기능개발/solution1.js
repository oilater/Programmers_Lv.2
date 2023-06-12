// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progress, speed) {
  const answer = [];
  const days = progress.map((v, i) => Math.ceil((100 - v) / speed[i]));

  let count = 0;
  for (let i = 0; i < days.length; i++) {
    count++;

    if (days[i] < days[i + 1]) {
      answer.push(count);
      count = 0;
    }
  }

  return days;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
