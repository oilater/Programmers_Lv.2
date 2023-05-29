// https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[i].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]

console.log(
  solution(
    [
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4],
      [2, 4],
      [3, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]


//차분히 생각해,, 범위 설정 잘하기