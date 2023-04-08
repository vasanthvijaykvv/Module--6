//t: o(r * log(c) )

const find_smaller = (matrix, r, c, mid) => {
  let count = 0;
  for (let i = 0; i < c; i++) {
    if (matrix[r][i] <= mid) count++
  }

  return count;
}

const find_median = (matrix, r, c) => {

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < r; i++) {

    if (matrix[i][0] < min) {
      min = matrix[i][0];
    }

    if (matrix[i][c - 1] > max) {
      max = matrix[i][c - 1];
    }
  }

  let desired = (r * c) / 2;

  while (min < max) {

    let mid = Math.floor(min + (max - min) / 2);
    let count = 0;

    for (let i = 0; i < r; i++) {

      count += find_smaller(matrix, i, c, mid);
    }

    if (count === desired) {
      console.log({ min, mid, max, count, desired });
      return mid;
    }

    if (count < desired) {
      min = mid + 1;
    } else {
      max = mid;
    }

  }

  return min;

}

let input = [
  [1, 3, 5],
  [5, 6, 9],
  [3, 6, 9]
];
// 1,2,3,3,5,6,6,9,9

input = [
  [11, 13, 15],
  [12, 16, 19],
  [13, 16, 19]
]

console.log(find_median(input, 3, 3));