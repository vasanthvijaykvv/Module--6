// t: o (m*n)
// s: o(m)
const find_magical_number = (matrix, m, n) => {

  let magic_number = -Infinity;

  // validate input

  const row_bounds_check = m >= 0 && m < 50 && matrix.length === m; //pass
  const col_bounds_check = n >= 0 && n < 50 && matrix[0].length === n; //fail

  if (!row_bounds_check || !col_bounds_check) {

    return magic_number;
  }

  // find the minimum in each row and store the result in temporary array
  const temp_array = [];

  for (let i = 0; i < m; i++) {

    const row = matrix[i];
    console.log(row);
    const min_row = Math.min(...row); // o(mXn)
    temp_array.push(min_row);

  }


  // loop through each column and record the maximum

  for (let j = 0; j < n; j++) {
    let maximum = -Infinity;
    for (let k = 0; k < m; k++) {
      const current = matrix[k][j];
      if (current > maximum) {

        maximum = current;
      }

    }
    if (temp_array.includes(maximum)) {
      magic_number = maximum;
      break;
    }
  }
  // if the maximum is present in the temporary array, then we have found the magical number.



  return magic_number;

}


let input = [
  [3, 7, 8], [9, 11, 13], [15, 16, 17]
]

input = [[7, 8], [1, 2]]

console.log(find_magical_number(input, 2, 3))