//need two loops to compare to two instead of once

function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

//below is copy of above but with notes

function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //loop for every element in the array
    for (let j = 0; j < arr.length; j++) {
      //loop again for every element in array
      count++; //add one to count
      if (arr[j] > arr[j + 1]) {
        //comparing first number to the next number. if greater than next one then
        let temp = arr[j]; //temporary variable
        arr[j] = arr[j + 1]; //current will now be j+1
        arr[j + 1] = temp; //next one will be temp
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

function bubbleSort2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

//below is copy of above but with notes. this function runs less interations or counts
function bubbleSort2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //outer loop is higher than below
    for (let j = 0; j < arr.length - i; j++) {
      //j starts at 0. decrementing inner loop with arr.length-i
      count++; //add one to count
      if (arr[j] > arr[j + 1]) {
        //comparing first number to the next number. if greater than next one then
        let temp = arr[j]; //temporary variable
        arr[j] = arr[j + 1]; //current will now be j+1
        arr[j + 1] = temp; //next one will be temp
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

function bubbleSort3(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

//below is copy of above but with notes
function bubbleSort3(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false; //assume we have not swapped anything
    for (let j = 0; j < arr.length - i; j++) {
      //j starts at 0. decrementing inner loop with arr.length-i
      count++; //add one to count
      if (arr[j] > arr[j + 1]) {
        //comparing first number to the next number. if greater than next one then
        let temp = arr[j]; //temporary variable
        arr[j] = arr[j + 1]; //current will now be j+1
        arr[j + 1] = temp; //next one will be temp
        swapped = true; //if we end up swapping anything, we will set swap to be true
      }
    }
    if (!swapped) break; //outer loop, if no swaps in outerloop, then break out of loop. it's done
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

// [7,3,5,6]
