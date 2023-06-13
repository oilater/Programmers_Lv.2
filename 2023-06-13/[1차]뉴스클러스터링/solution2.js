// https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let arr1 = [...str1];
  let two1 = "";
  let ar1 = [];

  for (let i = 0; i < arr1.length - 1; i++) {
    two1 += arr1[i] + arr1[i + 1];
    ar1.push(two1);
    two1 = "";
  }

  ar1 = ar1.filter((v) => alpha.includes(v[0]) && alpha.includes(v[1]));

  let arr2 = [...str2];
  let two2 = "";
  let ar2 = [];

  for (let i = 0; i < arr2.length - 1; i++) {
    two2 += arr2[i] + arr2[i + 1];
    ar2.push(two2);
    two2 = "";
  }

  arr2.pop();

  ar2 = ar2.filter((v) => alpha.includes(v[0]) && alpha.includes(v[1]));

  if (ar1.length == 0 && ar2.length == 0) return 65536;

  // 합집합을 어떻게 구할까 - Map 을 써보자
  const hash = new Map();
  ar1.forEach((v) => hash.set(v, hash.get(v) + 1 || 1));
  let union = [...hash.values()].reduce((acc, cur) => acc + cur);

  ar2.forEach((v) =>
    hash.has(v) ? hash.set(v, hash.get(v) - 1) : hash.set(v, 100)
  );

  const uni = [...hash.values()].filter((v) => v < 0 || v == 100);

  for (let i = 0; i < uni.length; i++) {
    if (uni[i] < 0) union += Math.abs(uni[i]);
    if (uni[i] == 100) union += 1;
  }

  const inter = ar1.filter((v) => ar2.includes(v)).length; // 교집합의 길이

  return Math.floor((inter / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
console.log(solution("1AA", "11AAAA")); // 21845
console.log(solution("APPLE", "appleAPPLE")); //
