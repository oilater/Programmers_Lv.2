// https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const arr1 = [...str1]
    .map((v, i) => v + str1[i + 1])
    .filter((v) => alpha.includes(v[0]) && alpha.includes(v[1]));

  const arr2 = [...str2]
    .map((v, i) => v + str2[i + 1])
    .filter((v) => alpha.includes(v[0]) && alpha.includes(v[1]));

  if (arr1.length == 0 && arr2.length == 0) return 65536;

  // 합집합을 어떻게 구할까 - Map 을 써보자
  const hash = new Map();
  arr1.forEach((v) => hash.set(v, hash.get(v) + 1 || 1));
  let union = [...hash.values()].reduce((acc, cur) => acc + cur);

  arr2.forEach((v) =>
    hash.has(v) ? hash.set(v, hash.get(v) - 1) : hash.set(v, 100)
  );

  const uni = [...hash.values()].filter((v) => v < 0 || v == 100);

  for (let i = 0; i < uni.length; i++) {
    if (uni[i] < 0) union += Math.abs(uni[i]);
    if (uni[i] == 100) union += 1;
  }

  // 교집합의 길이도 set을 이용해서 구해보자 거의 다 왔다

  const hash2 = new Map();
  arr1.forEach((v) => hash2.set(v, hash.get(v) + 1 || 1));
  hashVal2 = [...hash2.values()];

  const hash3 = new Map();
  arr2.forEach((v) => hash3.set(v, hash3.get(v) + 1 || 1));
  hashVal3 = [...hash3.values()];

  const inter = hashVal2
    .map((v, i) => Math.min(v, hashVal3[i]))
    .reduce((acc, cur) => acc + cur, 0);

  return Math.floor((inter / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
console.log(solution("1AA", "11AAAA")); // 21845
console.log(solution("abab", "baba")); // 32768
