/* [
  [16, 13, 19],
  [12, 16, 19],
  [13, 16, 19]
] */

// t: o(m*n)
// s: o(n)

const find_common_books = (matrix) => {

  //validate input
  const M = matrix.length;
  const N = matrix[0].length;

  const common_books = {} //16: 1, 13: 1, 19: 1
  const result = [];

  for (let i = 0; i < N; i++) {
    const current = matrix[0][i];
    if (!common_books[current])
      common_books[current] = 1;
  }

  for (let i = 1; i < M; i++) {

    for (let j = 0; j < N; j++) {

      const current = matrix[i][j];
      if (common_books[current] !== undefined && common_books[current] === i) {

        common_books[current] += 1;
        if (i === M - 1) result.push(current);
      }

    }
  }

  return result;

}


let input = [
  [16, 19, 19],
  [12, 16, 19],
  [13, 16, 13]]; // ans :[16,19]

console.log(find_common_books(input));