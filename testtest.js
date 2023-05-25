function validAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const obj = {};

  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
validAnagram("texttwisttime", "timetwisttext"); // true
