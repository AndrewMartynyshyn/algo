// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

/**
 *
 * first solution
 *
 */

/*

 function anagrams(stringA, stringB) {
  const exp = /[^\w]/g;
  stringA = stringA.replace(exp, "");
  stringB = stringB.replace(exp, "");

  let charsA = {};
  for (const char of stringA) {
    charsA[char] = charsA[char] + 1 || 1;
  }

  let charsB = {};
  for (const char of stringB) {
    charsB[char] = charsB[char] + 1 || 1;
  }

  let isAnagram = false;
  if (Object.entries(charsA).length === Object.entries(charsB).length) {
    isAnagram = true;
    for (const [key, value] of Object.entries(charsA)) {
      if (charsB[key] !== value) {
        isAnagram = false;
        break;
      }
    }
  }

  return isAnagram;
}

 */
