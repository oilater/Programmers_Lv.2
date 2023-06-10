let num = 0;
function 최소공배수(a, b) {
  for (let i = Math.max(a, b); i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      num = i;
      break;
    }
  }

  return num;
}

console.log(최소공배수(3, 5)); // 15
console.log(최소공배수(3, 6)); // 6
