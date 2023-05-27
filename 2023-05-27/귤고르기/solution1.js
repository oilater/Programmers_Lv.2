// https://school.programmers.co.kr/learn/courses/30/lessons/138476?language=javascript

function solution(k, tangerine) {
  tangerine.sort((a, b) => a - b);
  const hash = new Map();

  tangerine.forEach((v) => {
    hash.set(v, hash.get(v) + 1 || 1);
  });

  const arr = [...hash].map((v) => v[1]).sort((a, b) => b - a);

  let ans = 0;
  for (const val of arr) {
    k -= val;
    ans++;
    if (k <= 0) return ans;
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1

//개수가 많은 것부터 채워넣기
