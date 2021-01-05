// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  const arr = [];

  for (let index = 0; index < n; index++) {
    arr.push(" ");
  }

  for (let index = 0; index < n; index++) {
    arr[index] = "#";
    console.log(arr.join(""));
  }
}

module.exports = steps;