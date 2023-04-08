const perfect_square = (num1, num2) => {

  const sum = num1 + num2;
  const sqrt = Math.sqrt(sum);

  const result = sum - (sqrt * sqrt) === 0
  return result;

}

const find_permutations = (input) => {

  const result = find_permutations_dfs(input);
  return result;

}


const find_permutations_dfs = (input, visited = new Set()) => {

  if (visited.size === input.length - 1) {
    return 1;
  }

  let count = 0;
  console.log({ visited, count })

  for (let i = 0; i < input.length; i++) {

    //if input[start] + input[start + 1] is not a perfect square then continue;
    if (i !== input.length - 1 && perfect_square(input[i], input[i + 1]) && !visited.has(input[i])) {
      visited.add(input[i]);
      count += find_permutations_dfs(input, visited);
      console.log({ count });
      visited.delete(input[i]); /// backtracking..
    }

  }

  return count;

}

let input = [1, 8, 17]; // [1, 8, 17], [17, 8, 1]

console.log(find_permutations(input));