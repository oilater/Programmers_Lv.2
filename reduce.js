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

// reduce를 이용하여 중첩 배열 평탄화하기
// 내 풀이
// const values = [1, [2, 3], 4, [5, 6]];

// const flatten = values.reduce((acc, cur) => {
//   Array.isArray(cur) ? (acc = acc.concat(cur)) : acc.push(cur);
//   return acc;
// }, []);

// console.log(flatten);

//모범 답안
// const values = [1, [2, 3], 4, [5, 6]];

// const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
// // [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]
// console.log(flatten); // [1, 2, 3, 4, 5, 6]

// reduce를 사용하여 중복 요소 제거하기
// 내 풀이
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// const result = values.reduce((acc, cur) => {
//   if (!acc.includes(cur)) acc.push(cur);
//   return acc;
// }, []);

// console.log(result);

// 책의 풀이
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// const result = values.reduce(
//   (unique, val, i, _values) =>
//     // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소다.
//     // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 다르다면 val은 중복된 요소다.
//     // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거된다.
//     _values.indexOf(val) === i ? [...unique, val] : unique,
//   []
// );

// console.log(result);

//filter 를 사용한 풀이
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// // 현재 순회 중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소다. 이 요소만 필터링한다.
// const result = values.filter((v, i, arr) => arr.indexOf(v) === i);

// console.log(result);

//Set 을 사용한 풀이
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// //중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
// const result = [...new Set(values)];
// console.log(result);

//객체의 특정 프로퍼티 값을 합산하는 경우

const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

// 1번쨰 순회 시 acc는 {id: 1, price: 100}, cur은 {id: 2, price: 200}
// 2번째 순회 시 acc는 300, cur은 {id: 3, price: 300}이다.
// 2번쨰 순회 시 acc에 함수에 객체가 아닌 숫자값이 전달된다. 이때 acc.price는 undefined다.
const priceSum = products.reduce((acc, cur) => acc.price + cur.price);

console.log(priceSum); // NaN
