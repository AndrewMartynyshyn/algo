// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  let maxChar = null;
  Object.keys(chars).map((k) => {
    if (maxChar === null) {
      return (maxChar = k);
    }
    if (chars[maxChar] < chars[k]) {
      maxChar = k;
    }
  });

  return maxChar;
}

module.exports = maxChar;
