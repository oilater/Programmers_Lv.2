// https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript

function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities = cities.map((v) => v.toLowerCase());

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    cache.includes(city) ? (answer += 1) : (answer += 5);

    if (cache.length < cacheSize) {
      cache.push(city);
    } else {
      if (cache.includes(city)) {
        cache.splice(cache.indexOf(city), 1);
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 60
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
