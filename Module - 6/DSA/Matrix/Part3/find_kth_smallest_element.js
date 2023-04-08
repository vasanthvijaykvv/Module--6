
const find_count_smaller_larger = (matrix, start, mid, end) => {

  let N = matrix.length;
  let row = N - 1;
  let col = 0;
  let count = 0;
  let smaller = start;
  let larger = end;

  while (col < N && row >= 0) {

    const current = matrix[row][col];

    if (current > mid) {

      larger = Math.min(larger, current);
      row--;

    } else {

      count += row + 1;
      smaller = Math.max(smaller, current);
      col++;


    }

  }

  return [count, smaller, larger];

}


const find_kth_smallest_element = (matrix, K) => {

  let start = matrix[0][0];
  let N = matrix.length;

  let end = matrix[N - 1][N - 1];

  if (K === 1) return start;

  while (start < end) {

    let mid = Math.floor(start + end) / 2;

    // find the smallest element greater than mid.
    // find the largest element smaller than or equal to mid.
    // count of elements that are less thanor equal to mid. 

    const [count, smaller, larger] = find_count_smaller_larger(matrix, start, mid, end)

    if (count === K) {
      return smaller;
    }

    if (count > K) {
      // search the lower space.
      end = smaller;

    }

    if (count < K) {
      // search the upper space.
      start = larger;

    }

  }

  return start;

}



const input = [
  [2, 6, 8],
  [3, 7, 10],
  [5, 10, 11]
];

let K = 4;

console.log(find_kth_smallest_element(input, K));