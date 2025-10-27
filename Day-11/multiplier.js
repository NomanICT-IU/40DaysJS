function createMultiplier(multiplier) {
  return function (number) {
    console.log(number * multiplier);
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
double(10);
triple(10);
