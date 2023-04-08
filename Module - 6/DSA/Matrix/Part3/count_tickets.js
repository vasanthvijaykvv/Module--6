
const count_tickets_value_per_queue = (matrix) => {

  const result = [];

  const M = matrix.length;
  const N = matrix[0].length;

  let col = 0;

  while (col < N) {

    let row = M - 1;
    let col_sum = 0;

    while (row >= 0) {

      const current = matrix[row][col];
      col_sum += current;
      row--;

    }

    result.push(col_sum);
    col++;
  }

  return result;

}

let matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [24, 29, 37, 48],
  [32, 33, 39, 50]
];

console.log(count_tickets_value_per_queue(matrix));

