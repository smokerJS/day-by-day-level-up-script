const arr = [13,5,74,6,3,6,7,2,25,63,12,45,1,0,2,5,7,9,3];

// 시간복잡도 O(nlogn)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = Math.floor(arr.length / 2);
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot, arr.length);
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
  };
  return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort(arr));
