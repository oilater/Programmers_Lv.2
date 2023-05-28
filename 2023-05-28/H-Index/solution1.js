// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(c) {
  c.sort((a, b) => b - a);
  let count = 0;
  let answer = 0;
  for (let i = 0; i < c.length; i++) {
    count++;
    if (count >= c[i] && c.slice(i + 1).length <= count) {
      answer = count;
      break;
    }
  }

  return count;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
