const side1 = 10;
const side2 = 20;
const side3 = 30;

if (side1 === side2 && side2 === side3 && side3 === side1) {
  console.log(`All sides equal is called, Equilateral Triangle.`);
} else if(side1 === side2 || side2 === side3 || side3 === side1) {
  console.log(`Two sides equal is called, Isosceles Triangle.`);
}else{
  console.log(`All sides different is called, Scalene Triangle.`);
  
}
