let uniqueArr = [];

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) == str.charAt(j)) {
        uniqueArr.push("false");
      } else {
        uniqueArr.push("true");
      }
    }
  }
  if (uniqueArr.includes("false")) {
    console.log(false);
  } else {
    console.log(true);
  }
}

hasUniqueChars("Moonday");

//Runtime for this code = O(n^2)
