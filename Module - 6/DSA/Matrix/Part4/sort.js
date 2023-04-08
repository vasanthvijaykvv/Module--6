// t: o(n logn)
// s: o(1)

const swap = (array, i, j) => {

  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

}

const partition = (array, left, right) => {

  const pivotElement = array[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {

    if (array[j] < pivotElement) {

      //swap the elements
      swap(array, partitionIdx, j);
      partitionIdx++;
      // increment the partitionidx

    }



  }

  swap(array, partitionIdx, right);

  return partitionIdx;

}


const quick_sort = (array, left, right) => {

  if (left < right) {

    const partitionIdx = partition(array, left, right);
    quick_sort(array, left, partitionIdx - 1);
    quick_sort(array, partitionIdx + 1, right);

  }


}


// const arr1 = [5, 3, 1, 7, 8];
const arr1 = [6, 3, 2, 1, 9];
console.log(arr1);

quick_sort(arr1, 0, arr1.length - 1);
console.log(arr1);