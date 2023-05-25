// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

// function solution(n, words) {
//   const arr = [words[0]];
//   let answer = [];

//   words.forEach((v, i) => {
//     if (!arr.includes(v) && arr[arr.length - 1].at(-1) === v[0]) {
//       arr.push(v);
//     } else {
//       answer = [(i % n) + 1, Math.trunc(i / n) + 1];
//     }
//   });
//   if (arr.length === words.length) return [0, 0];
//   return answer;
// }

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3,3]
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); // [0,0]
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); // [1,3]
