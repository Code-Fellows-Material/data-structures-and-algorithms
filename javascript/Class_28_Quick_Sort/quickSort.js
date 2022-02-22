
  function swap(arr, i, low){
    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }

function partition (arr, left, right){

  // set a pivot value as a point of reference
  let pivot = arr[right]; //<-------------- Pivot is the VALUE, start is the position!
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;

  for(let i = left; i < right; i++){
    if(arr[i] <= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function quickSort(arr, left, right){
  if(!Array.isArray(arr)) return false;
  
  if(left < right){
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1); //one under pivot
    quickSort(arr, position + 1, right); //one over pivot
  }
  return arr;
}

module.exports = quickSort;