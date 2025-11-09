function showZebraPattern() {
  const cars = document.querySelectorAll("ul#cars li");
  cars.forEach((car, index) => {
    const isEven = index % 2 === 0;
    car.style.backgroundColor = isEven ? "black" : "white";
    car.style.color = isEven ? "white" : "black";
    car.style.listStyleType = "none";
  });
}
