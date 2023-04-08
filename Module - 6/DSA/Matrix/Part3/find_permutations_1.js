// t: o(nlogn) + n
// s: o(n)

const is_perfect_square = (num1, num2) => {

  const sum = num1 + num2;
  const sqrt = Math.sqrt(sum);

  const result = sum - (sqrt * sqrt) === 0
  return result;

}


const find_permutations_dfs = (input, start = 0) => {

  // define the base case 

  if (start === input.length - 1) return 1;

  let count = 0; // # of permutations
  /// [1 , 8, 17]
  if (is_perfect_square(input[start], input[start + 1])) {

    count += find_permutations_dfs(input, start + 1)

  }

  return count;

}

const find_permutations = (input) => {

  input.sort((a, b) => a - b);

  const result = find_permutations_dfs(input, 0);

  if (result !== 0) return result + 1;

  return result;

}


let input = [1, 17, 8];

console.log(find_permutations(input));