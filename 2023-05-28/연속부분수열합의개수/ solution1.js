// https://school.programmers.co.kr/learn/courses/30/lessons/131701?language=javascript

function solution(e) {
  e.sort((a, b) => a - b);
  const length = e.length;
  e = e.concat(e);
  const set = new Set();

  let temp = 1;
  while (temp !== length) {
    for (let i = 0; i < length; i++) {
      let sum = 0;
      for (let j = i; j < temp + i; j++) {
        sum += e[j];
        set.add(sum);
      }
    }
    temp++;
  }

  return set.size + 1;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
console.log(solution([1, 1, 1, 1, 1, 2])); // 18

// 길이 1일 때, 2일떄, 3일때 따라서 다르게 배열을 만들어야 하나,, 어쨌든 이결과를 set에 넣어줄 예정
