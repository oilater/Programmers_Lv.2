// https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

const tupleFrom = (str) =>
  str.slice(2, -2).split('},{')
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce((acc, cur) =>
      [...acc, ...cur.filter((it) => !acc.includes(it))], []);

const toNumbers = (str) => str.split(',').map(it => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1]
