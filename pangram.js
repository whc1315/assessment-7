function isPangram(str) {
  let regex = /([a-z])(?!.*\1)/gi;
  console.log(str.match(regex).length === 26);
}

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

//Runtime for this code = O(1)
