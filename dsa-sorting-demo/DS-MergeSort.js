function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//same as above but with notes
function merge(arr1, arr2) {
  const results = []; //make empty array
  let i = 0; //first pointer for arr1
  let j = 0; //second pointer for arr2
  while (i < arr1.length && j < arr2.length) {
    //loop that helps repeat the below
    if (arr1[i] < arr2[j]) {
      //compare both arrays
      results.push(arr1[i]); //push to arr1 value
      i++; //pushed onto i variable
    } else {
      results.push(arr2[j]); //else, if greater, then move to j variable
      j++; //pushed to j variable
    }
  }

  //once above is exhausted, push all remaining values to other array:
  //only one of the loops below will start. not both
  while (i < arr1.length) {
    //while i is less than arr1 length
    results.push(arr1[i]); //push to arr1 value
    i++; //pushed onto i variable
  }
  while (j < arr2.length) {
    //while i is less than arr2 length
    results.push(arr2[j]); //push to arr2 value
    j++; //pushed to j variable
  }

  return results;
}

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

//same as above but with notes
function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  //whatever array was passed in less or equal to one, we'll return array. do not need to split any further
  const mid = Math.floor(arr.length / 2); //this is midpoint
  //if don't have array that is 0 or 1 items log. then split in to two arrays
  //math.floor (similar to binary search) since can have even .5 numbers
  const left = mergeSort(arr.slice(0, mid)); //
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

//array we're trying to sort
//recursive function
mergeSort([3,2,70,48] )

if (arr.length <=1) return arr; //above is not one or 0 so you move to the next line
const mid = Math.floor(arr.length / 2);  
//pick midpoint
--> mid is ([3,2] [70,48]) 

const left = mergeSort(arr.slice(0, mid)); 

--> mergeSort([3,2] )  //too large in if (arr.length <=1) return arr; 
  --> mergeSort([3] ) // then return 3 (since it's on left side)


const right = mergeSort(arr.slice(mid));

--> mergeSort([3,2] )  //too large
  --> mergeSort([2] ) // then return 2

return merge(left, right);

--> merge([3],[2]) --> [2,3]

//Then run the other side

const left = mergeSort(arr.slice(0, mid)); 

--> mergeSort([70,48] )  //too large in if (arr.length <=1) return arr; 
  --> mergeSort([70] ) // then return 3 (since it's on left side)


const right = mergeSort(arr.slice(mid));

--> mergeSort([70,48] )  //too large
  --> mergeSort([48] ) // then return 2

return merge(left, right);

--> merge([70],[48]) --> [48,70]



return merge(left, right);

  --> merge([2,3,48,70])