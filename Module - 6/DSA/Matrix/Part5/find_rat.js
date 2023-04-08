
const directions = [
  [1, 0], // downward direction
  [0, 1] // right direction
]

// t: o(2^(n+m))
// s: o(n+m)

const boundsCheck = (M, N, position) => {

  const [row, col] = position;

  if (row < 0 || row >= M || col < 0 || col >= N) {
    return false;
  }

  return true;

}


const traverseDFS = (matrix, src, dst) => {

  let totalCount = 0;
  const [srcX, srcY] = src;
  const [dstX, dstY] = dst;

  if (srcX === dstX && srcY === dstY) {
    return 1;
  }

  for (let dir of directions) {

    const [dirX, dirY] = dir;

    const newDir = [srcX + dirX, srcY + dirY];

    if (boundsCheck(matrix.length, matrix[0].length, newDir)) {

      totalCount += traverseDFS(matrix, newDir, dst);
    }


  }

  return totalCount;

}



const find_rat = (matrix, src, dst) => {

  //validate
  return traverseDFS(matrix, src, dst);

}

const matrix = [
  [11, 12, 13],
  [14, 15, 16]
];

let src = [0, 0];
let dst = [1, 2];

console.log(find_rat(matrix, src, dst));
// 2X3
// 15*15