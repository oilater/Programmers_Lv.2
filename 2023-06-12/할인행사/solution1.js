// https://school.programmers.co.kr/learn/courses/30/lessons/131127?language=javascript

function solution(want, number, discount) {
  let start = 0;
  let count = 0;
  while (start !== discount.length - 9) {
    const hash = new Map();
    want.forEach((v, i) => hash.set(v, number[i]));

    for (let i = start; i < start + 10; i++) {
      if (hash.has(discount[i]))
        hash.set(discount[i], hash.get(discount[i]) - 1);
    }

    let zeroCount = 0;
    const hv = [...hash.values()];
    for (let i = 0; i < hv.length; i++) {
      if (hv[i] === 0) zeroCount++;
    }

    if (zeroCount === hash.size) count++;
    start++;
  }
  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); // 3
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); // 0
