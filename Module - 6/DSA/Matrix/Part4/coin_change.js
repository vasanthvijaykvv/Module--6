
// t: o(n^m) s: o(m) brute force. n = array length m= target
// t: o(n*m)
const count_sum_dfs = (target, coins, i = 0, amount = 0, memo = {}) => {

  let key = amount + "_" + i;
  if (key in memo) return memo[key];

  if (amount === target) return 1;

  if (amount > target) return 0;

  if (i === coins.length) return 0;


  const result = count_sum_dfs(target, coins, i, amount + coins[i], memo) + count_sum_dfs(target, coins, i + 1, amount, memo);
  memo[key] = result;
  return result;

}

const count_sum = (target, coins) => {

  return count_sum_dfs(target, coins);

}

console.log(count_sum(4, [1, 2, 3]));
// console.log(count_sum(1000, [1, 2, 3, 4, 5]));

