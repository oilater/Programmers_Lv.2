// https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

function solution(n, left, right) {
  // 2차원 n x n 배열 만들기
  const arr = [];
  const ar = new Array(n).fill(0);
  ar.reduce((acc, cur) => {
    return acc.push(cur);
  }, []);

  //배열에 값 넣기
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.max(i, j) + 1;
      console.log(i, j, arr);
    }
  }

  return arr;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
