let year = 2120;

let result =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "leap"
    : "not leap";

console.log(`${year} is ${result} year`);
