// https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

function solution(n) {
  let count = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      count += 1;
    }
  }
  return count;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
