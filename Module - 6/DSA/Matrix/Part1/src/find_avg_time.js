// t: o(m)
// s: o(1)

const find_avg_time = (timings) => {

  let avg_time = -Infinity;

  // validation
  // process each row. compute the actual time, total time taken

  let total_time = 0;

  for (let i = 0; i < timings.length; i++) { //o(m)
    const row = timings[i]
    const [start, end] = row; // o(n)
    const time_taken = end - start;
    total_time += time_taken;
  }

  // calculate avg time

  avg_time = total_time / timings.length;
  console.log(Math.floor(avg_time))
  return avg_time.toFixed(2);

}


let input = [
  [0, 9], [1, 7], [3, 10]
]

console.log(find_avg_time(input))