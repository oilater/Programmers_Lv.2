// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progress, speed) {
  const answer = [];
  const days = progress.map((v, i) => Math.ceil((100 - v) / speed[i]));

  let first = days[0];
  let count = 0;
  for (const item of days) {
    if (item <= first) {
      count++;
    } else {
      first = item;
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
