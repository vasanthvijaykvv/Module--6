

const find_middle_point = (matrix) => {

  const input = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const current = matrix[i][j];
      input.push(current);

    }
  }
  console.log({ b4: input })
  input.sort((a, b) => a - b);
  console.log({ after: input })

  const input_len = input.length;

  const mid_point = Math.floor(input_len / 2);
  console.log({ mid_point: mid_point })

  return input[mid_point];
}

const matrix = [
  [11, 13, 15],
  [12, 16, 19],
  [13, 16, 19]
]

console.log(find_middle_point(matrix));