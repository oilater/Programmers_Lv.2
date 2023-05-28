// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
  if (s % 2 === 1) return 0;

  let answer = 0;
  const mapping = { "]": "[", ")": "(", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{") {
        stack.push(rotate[j]);
      } else {
        const last = stack.pop();
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
