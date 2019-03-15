const arr = [13,5,74,6,3,6,7,2,25,63,12,45,1,0,2,5,7,9,3];

// 시간복잡도 O(n^2)
function bubbleSort(arr) {
  if (arr.length <= 1) return arr;
  let temp = new Number();
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


console.log(bubbleSort(arr));
