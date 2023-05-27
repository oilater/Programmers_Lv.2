// https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

function solution(arr) {
  arr.sort((a, b) => a - b);
  for (let i = arr.at(-1); i <= 100 ** 4; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] === 0) count++;
      if (count === arr.length) return i;
    }
  }
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
console.log(solution([1, 1, 1, 100])); // 1
