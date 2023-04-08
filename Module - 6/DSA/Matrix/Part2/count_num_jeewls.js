// t: o(n)
// s : o(m)

const findJewelsCount = (jewels, stones) => {

  let jewels_count = 0;

  const jewels_map = {};

  for (let i = 0; i < jewels.length; i++) {

    const current = jewels[i];
    jewels_map[current] = true;

  }

  for (let k = 0; k < stones.length; k++) {

    const stone = stones[k];

    if (jewels_map[stone]) {
      jewels_count++;
    }
  }


  return jewels_count;

}

console.log("# of jewewls of type 'zy' from stones 'abTghMztyk'", findJewelsCount('zy', 'abTghMztykz'))