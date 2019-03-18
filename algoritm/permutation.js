let arr = ['b','c','a']
function permutator(inputArr, result = []){
  function permute(arr, m = []){
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

console.log(permutator(arr));