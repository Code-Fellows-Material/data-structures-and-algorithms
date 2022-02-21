'use strict'


function mergeSort(arr){
  if(!Array.isArray(arr)) return false;
  let arrLen = arr.length;

  if(arrLen > 1){
    let mid = Math.floor(arrLen/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arrLen);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }

  return arr;
}

function merge(left, right, arr){
  let i = 0, j = 0, k = 0;

  while( i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i]
      i++
    } else {
      arr[k] = right[j];
      j++
    }

    k++;
  }

  if(i === left.length){ 
    for(j; j < right.length; j++){
      arr[k] = right[j];
      k++;
    }
  } else {
    for(i; i < left.length; i++){
      arr[k] = left[i]
      k++;
    }
  }
}

module.exports = mergeSort;