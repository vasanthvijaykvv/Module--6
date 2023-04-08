// t: o(m*n )
// s : o(n)
const find_pair = (row) => {

  const pairedItems = {} // 8:2, 9:1
  // [8,9,8]
  const matched_results = [];
  const unmatched_results = [];

  row.forEach(item => {

    if (pairedItems[item]) {
      pairedItems[item] += 1;
    } else {
      pairedItems[item] = 1;
    }

  })

  Object.keys(pairedItems).forEach(item => {

    if (pairedItems[item] === 2) {
      matched_results.push([item, item])
    } else {
      unmatched_results.push(item);
    }
  })

  return [matched_results, unmatched_results]

}

const find_pairs = (matrix) => {

  const matched_pairs = [];
  const unmatched_pairs = [];

  // process each row and find a matching pair and unmatched shoe

  matrix.forEach(row => {

    const [matched, unmatched] = find_pair(row);
    if (matched.length > 0) {
      matched_pairs.push(...matched);
    }

    if (unmatched.length > 0) {
      unmatched_pairs.push(...unmatched); // [8,9,8]
    }

  })

  if (unmatched_pairs.length > 1) {
    const [matched, unmatched] = find_pair(unmatched_pairs);
    matched_pairs.push(...matched);
  }

  return matched_pairs;

}

let input = [
  [3, 3, 8], [9, 8, 9], [10, 10]
];

input = [[7, 8], [8, 7]]

console.log(find_pairs(input));