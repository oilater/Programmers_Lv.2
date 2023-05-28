// https://school.programmers.co.kr/learn/courses/30/lessons/131701?language=javascript

function solution(e) {
  const set = new Set();
  for (let i = 1; i <= e.length; i++) {
    // 원순열 만들기 i개의 원소를 뒤에 추가해준다
    const els = e.concat(e.slice(0, i));
    // set 갱신
    for (let j = 0; j < e.length; j++) {
      set.add(els.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
console.log(solution([1, 1, 1, 1, 1, 2])); // 18

// 길이 1일 때, 2일떄, 3일때 따라서 다르게 배열을 만들어야 하나,, 어쨌든 이결과를 set에 넣어줄 예정
