// t: o(n^2*k)
// s : o(n^2)


const checkFound = (input_row, input_col, positions) => {

  const position_keys = Object.keys(positions); // array of keys

  for (let idx = 0; idx < position_keys.length; idx++) {

    const key = position_keys[idx];
    const [row, col] = key.split('_');

    if (row === input_row.toString() || col === input_col.toString()) {

      const new_key = input_row + '_' + input_col;

      positions[new_key] = positions[key] + 1;
      delete positions[key];
      return true;

    }



  }

  return false;


}






const find_spl_positions = (matrix) => {

  // validate

  let result = [];

  const positions = {}
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {

      const current = matrix[i][j];

      if (current === 0) continue;

      // current is 1
      let key = i + "_" + j;

      if (!checkFound(i, j, positions)) {
        positions[key] = 1;
      }


    }


  }



  Object.keys(positions).forEach(key => {

    if (positions[key] === 1) {
      const pos = key.split("_"); // [1,2];
      result.push(pos);
    }
  });


  return result.length;

}

let input = [
  [1, 0, 0], [0, 0, 1], [1, 0, 0]
];

input = [
  [1, 0, 0], [0, 1, 0], [0, 0, 1]
];
console.log(find_spl_positions(input));