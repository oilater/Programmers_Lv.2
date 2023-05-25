// https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

function solution(n) {
  const arr = Array.from(new Array(n), (_, i) => i + 1);
  let answer = 0;
  let start = 0;

  while (start !== n) {
    arr.reduce((acc, cur) => {
      if (acc === n) answer += 1;
      return acc + cur;
    }, start);
    start += 1;
  }

  return answer;
}
console.log(solution(15)); // 4

// 정확성 통과, 효율성 실패
