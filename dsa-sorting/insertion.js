//Builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //currentValue is compared with elements when sorted
    let currentValue = arr[i];
    //second loop goes backwards until reaches or equal to -1 and arr[j] is greated than currentvalue
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      //shift elemt to right if arr[j] is greater
      arr[j + 1] = arr[j];
    }
    //move this value to the currentValue
    arr[j + 1] = currentValue;
  }

  return arr;
}

module.exports = insertionSort;
