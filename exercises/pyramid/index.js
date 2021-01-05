// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = "") {
  if (n === row) return;

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  const add =
    midpoint - row <= level.length && midpoint + row >= level.length
      ? "#"
      : " ";

  pyramid(n, row, level + add);
}

module.exports = pyramid;

//   loop solution
//   for (let row = 0; row < n; row++) {
//     let pyramid = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col >= n - 1 - row && col <= n - 1 + row) {
//         pyramid += "#";
//       } else {
//         pyramid += " ";
//       }
//     }

//     console.log(pyramid);
//   }
