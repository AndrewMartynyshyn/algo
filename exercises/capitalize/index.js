// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const resWords = [];

  for (let word of str.split(" ")) {
    resWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return resWords.join(" ");
}

module.exports = capitalize;

/** bad solution */

/*

function capitalize(str) {
  let needToCapitalize = true;
  const resultArr = [];

  for (let char of str.split("")) {
    if (needToCapitalize) {
      char = char.toUpperCase();
      needToCapitalize = false;
    }

    if (char === " ") {
      needToCapitalize = true;
    }

    resultArr.push(char);
  }

  return resultArr.join("");
}

*/
