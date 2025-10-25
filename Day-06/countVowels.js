function countVowels(str) {
  const arr = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    switch (element) {
      case "a":
        count += 1;
        break;
      case "e":
        count += 1;
        break;
      case "i":
        count += 1;
        break;
      case "o":
        count += 1;
        break;
      case "u":
        count += 1;
        break;
      default:
        count == count;
        break;
    }
  }
  console.log(`The number of vowels is ${count}`);
}

countVowels("Abdullah Al Noman");
