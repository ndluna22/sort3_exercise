//On2

function bubbleSort(arr) {
  //swap function destructures swap
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //iterates the last index down to the first index
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
