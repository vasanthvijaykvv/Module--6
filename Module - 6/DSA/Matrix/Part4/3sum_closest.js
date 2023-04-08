//t : o(nlogn) + o(n^2) => o(n^2)
// s : o(1)
const three_sum_closest = (nums, target) => {


  nums.sort((a, b) => a - b); // o(nlogn)
  let min = Infinity;
  //1,2,3
  for (let i = 0; i < nums.length - 2; i++) { // o(n^2)


    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;


    while (left < right) {

      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return 0;
      }

      let diff = Math.abs(sum - target);

      if (min > diff) {
        result = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }

    }
  }

  return result;

}

const nums = [-1, 2, 1, -4];

let target = 1;
// target = 2;
console.log(three_sum_closest(nums, target));