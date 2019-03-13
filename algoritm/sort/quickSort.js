const arr = [13,5,74,6,3,6,7,2,25,63,12,45,1,0,2,5,7,9,3];

function quickSort(arr) {
  if(arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivot = arr[0];
  let element = new Number();
  arr.splice(0, 1);
  while(arr.length) {
    element = arr[0];
    pivot >= element ? left.push(element) : right.push(element);
    arr.splice(0, 1);
  }
  return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort(arr));
