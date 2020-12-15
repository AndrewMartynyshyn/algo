// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = [];
  let strArr = str.split("");
  for (let index = strArr.length - 1; index > -1; index--) {
    result.push(strArr[index]);
  }

  return result.join("");
}

module.exports = reverse;
