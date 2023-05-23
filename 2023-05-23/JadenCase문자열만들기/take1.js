// https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

function solution(s) {
  s = s.split(" ");
  let answer = "";

  s.forEach((v) => {
    v.split("").forEach((a, i) => {
      a = i === 0 ? a.toUpperCase() : a.toLowerCase();
      answer += a;
    });
    answer += " ";
  });
  return answer.slice(0, answer.length - 1);
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
