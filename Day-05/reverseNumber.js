let input = 6789;
let output = 0;
while (input > 0) {
  let remainder = input % 10;
  input = Math.floor(input / 10);
  output = output * 10 + remainder;
}
console.log(`Output : ${output}`);
