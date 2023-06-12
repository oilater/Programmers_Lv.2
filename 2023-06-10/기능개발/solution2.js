// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progress, speed) {
  const answer = [];
  const days = progress.map((v, i) => Math.ceil((100 - v) / speed[i]));

  let count = 0;
  while (days.length) {
    count++;
    if (days[0] >= days[1]) {
      days.shift();
    } else {
      answer.push(count);
      days.shift();
      count = 0;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
