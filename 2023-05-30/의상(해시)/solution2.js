// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  let count = clothes.length;
  const hash = new Map();
  clothes.forEach((v) =>
    hash.get(v[1]) ? hash.set(v[1], hash.get(v[1]) + 1) : hash.set(v[1], 1)
  );

  if (hash.size === 1) return count;

  const hashArr = [...hash].map((v) => v[1]);
  let answer = hashArr.reduce((acc, cur) => acc * (cur + 1), 1) - 1;

  return answer;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
