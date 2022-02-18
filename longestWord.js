function findLongestWord(arr) {
  let wordLengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    wordLengthArr.push(+arr[i].length);
  }
  let newArr = wordLengthArr.sort((a, b) => b - a);
  console.log(newArr[0]);
}

findLongestWord(["hi", "hello", "William", "Cuthbertson"]);
// -> 11

//Runtime for this code = O(n)
