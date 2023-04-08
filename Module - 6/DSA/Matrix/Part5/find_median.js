

const find_median = (matrix, r, c) => {


  let start = 0;
  let end = 2000;
  let mid;
  let n = r * c;

  while (start <= end) {
    mid = (end + start) / 2;
    let ans = 0;
    for (let i = 0; i < r; i++) {
      let l = 0; h = c - 1;
      while (l <= h) {

        m = l + (h - l) / 2;
        if (matrix[i][m] <= mid) {
          l = m + 1;
        } else {
          h = m - 1;
        }
      }
      ans += 1;
    }
    if (ans <= n / 2) start = mid + 1;
    else end = mid - 1;

  }
  return start;
}