// https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

function solution(s) {
  const answer = [];
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" && s[i] === s[i + 1]) continue;
    if (s[i] === "}" && s[i] === s[i + 1]) continue;

    if (s[i - 1] === "}" && s[i] === ",") {
      newS += "a";
    } else {
      newS += s[i];
    }
  }

  let arr = newS.split("a").join("").split("{").join("").split("}");
  arr.pop();

  arr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(",");
  }

  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      set.add(Number(arr[i][j]));
    }
  }

  return [...set];
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1]
