//t: o(nlogn)
//s: o(1) , o(logn)
const find_scheduling_costs = (costs) => {

  let total_cost = 0;
  console.log(costs);
  // costs.sort((x, y) => {  //sorting algorithm o(nlogn)
  //   return (y[0] - y[1]) - (x[0] - x[1]);
  // });

  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i];
    const [a, b] = cost;
    console.log({ a, b, diff: a - b })
  }


  costs.sort((x, y) => {  //sorting algorithm o(nlogn)
    return (y[1] - y[0]) - (x[1] - x[0]);
  });

  console.log(costs);

  for (let i = 0; i < costs.length / 2; i++) {
    const current = costs[i][1];
    total_cost += current;
  }

  for (let i = costs.length / 2; i < costs.length; i++) {
    const current = costs[i][0];
    total_cost += current;

  }

  return total_cost;

}

let costs = [
  [10, 20], //a
  [30, 200],//b
  [400, 50],
  [30, 20]
]
console.log(find_scheduling_costs(costs));