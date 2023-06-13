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

  if (arr1.length == 0) {
    if (arr2.length == 0) {
      return 65536;
    } else {
      return 0;
    }
  }

  if (arr2.length == 0) {
    if (arr1.length !== 0) return 0;
  }

  console.log(arr1, arr2);
  // 합집합을 어떻게 구할까 - Map 을 써보자
  const hash = new Map();
  arr1.forEach((v) => hash.set(v, hash.get(v) + 1 || 1));
  let union = [...hash.values()].reduce((acc, cur) => acc + cur);

  arr2.forEach((v) =>
    hash.has(v) ? hash.set(v, hash.get(v) - 1) : hash.set(v, 100)
  );

  const uni = [...hash.values()].filter((v) => v < 0 || v > 90);

  for (let i = 0; i < uni.length; i++) {
    if (uni[i] < 0) union += Math.abs(uni[i]);
    if (uni[i] > 90) union += 100 - uni[i] + 1;
  }

  // 교집합 - set 이용?
  const inter = [...new Set(arr1.filter((v) => arr2.includes(v)))];

  let count = 0;
  for (let i = 0; i < inter.length; i++) {
    let count1 = 0;
    let count2 = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (inter[i] == arr1[j]) count1++;
    }

    for (let k = 0; k < arr2.length; k++) {
      if (inter[i] == arr2[k]) count2++;
    }

    count += Math.min(count1, count2);
  }

  console.log(count, union);
  return Math.floor((count / union) * 65536);
}

// console.log(solution("FRANCE", "french")); // 16384
// console.log(solution("handshake", "shake hands")); // 65536
// console.log(solution("aa1+aa2", "AAAA12")); // 43690
// console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
// console.log(solution("1AA", "11AAAA")); // 21845
// console.log(solution("abab", "baba")); // 32768
console.log(solution("abc", "abbb")); // 16384
