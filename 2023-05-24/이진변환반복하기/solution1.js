// https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

function solution(s) {
  let [index, count] = [0, 0];

  while (s !== "1") {
    index += 1;
    count += [...s].filter((v) => v === "0").length;

    s = [...s]
      .filter((v) => v === "1")
      .join("")
      .length.toString(2);
  }

  return [index, count];
}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
