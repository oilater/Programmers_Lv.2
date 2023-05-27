// https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

function solution(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
console.log(solution([1, 1, 1, 100])); // 1
