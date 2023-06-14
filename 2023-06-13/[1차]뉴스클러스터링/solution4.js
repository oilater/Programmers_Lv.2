// https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript
function explode(text) {
  const result = [];
  for (let i = 0; i < text.length - 1; i++) {
    const node = text.substr(i, 2);
    if (node.match(/[A-Za-z]{2}/)) {
      result.push(node.toLowerCase());
    }
  }
  return result;
}

function solution(str1, str2) {
  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
console.log(solution("1AA", "11AAAA")); // 21845
console.log(solution("abab", "baba")); // 32768
