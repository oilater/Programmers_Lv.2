function areThereDuplicates(...n) {
  const set = new Set();

  for (let i = 0; i < [...n].length; i++) {
    if (set.has([...n][i])) return true;
    set.add([...n][i]);
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
