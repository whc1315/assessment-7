let summArr = [];

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      summArr.push(arr[i] + arr[j]);
    }
  }
  if (summArr.includes(0)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

addToZero([1, 2, 8, 10, 4, 24, -8]);
console.log(summArr);

//Runtime for this code = O(n^2)
