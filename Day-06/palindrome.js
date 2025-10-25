function isPalindrome(str) {
  let forward = "";
  for (let i = 0; i < str.length; i++) {
    forward += str[i];
  }
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  if (forward === reverse) {
    console.log(`${str} is a Palindrome string`);
  }else{
    console.log(`${str} is not a Palindrome string`);
  }
}
isPalindrome("madam");
