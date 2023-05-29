// reduce 이용하여 평균구하기

// const values = [1, 2, 3, 4, 5, 6];

// const average = values.reduce((acc, cur, idx, arr) => {
//   console.log(acc, cur);
//   return idx === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
// }, 0);

// console.log(average);

// reduce 이용하여 최댓값 구하기

// const values = [1, 2, 3, 4, 5];
// const max = values.reduce((acc, cur) => (cur > acc ? cur : acc), 0);

// console.log(max);

// reduce 를 이용하여 요소의 중복 횟수 구하기

// 내 풀이
// const fruits = ["banana", "apple", "orange", "orange", "apple"];

// const count = fruits.reduce((acc, cur) => {
//   acc[cur] === undefined ? (acc[cur] = 1) : (acc[cur] += 1);
//   return acc; // return 해줘서 acc를 함수에 다시 전달해줘야 한다!!
// }, {});

// console.log(count);

//모범 답안
// const fruits = ["banana", "apple", "orange", "orange", "apple"];

// const count = fruits.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc; // return 해줘서 acc를 함수에 다시 전달해줘야 한다!!
// }, {});

// console.log(count);
