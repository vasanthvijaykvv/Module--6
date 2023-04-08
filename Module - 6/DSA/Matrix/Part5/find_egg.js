// t: o(m+n)
// s: o(1)

const find_egg = (matrix, target) => {

  //validate block

  const M = matrix.length;
  const N = matrix[0].length;


  let row = 0;
  let col = N - 1;

  while (row < M && col >= 0) {

    const current = matrix[row][col];

    if (current === target) return [row, col];

    if (current > target) col--;
    else row++;

  }

  return [-1, -1];

}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 33, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]

]

let target = 31;

console.log(find_egg(matrix, target));