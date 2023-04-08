

const count_empty_places = matrix => {
  let count = 0;

  let M = matrix.length;
  let N = matrix[0].length;

  let row = 0;
  let col = N - 1;
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 1]

  ]

  while (row < M && col >= 0) {

    while (matrix[row][col] === 1) {
      col--;
    }

    count += col + 1;
    row++;

  }

  return count;

}

let input = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 1]
];

console.log(count_empty_places(input));