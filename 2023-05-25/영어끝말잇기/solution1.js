// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

function solution(n, words) {
  const arr = [words[0]];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (!arr.includes(word) && arr[arr.length - 1].at(-1) === word[0]) {
      arr.push(word);
    } else {
      return [(i % n) + 1, Math.trunc(i / n) + 1];
    }
  }

  if (arr.length === words.length) return [0, 0];

  return "nothing";
}

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
