const student = {
  name: "Rony",
  age: 20,
  grades: [85, 90, 78,67],
};

function avgGradeCalculator(student) {
  const { grades } = student;
  let sum = 0;
  let length = grades.length;
  grades.forEach((element) => {
    sum += element;
  });
  let avgGrade = (sum / length).toFixed(2);
  console.log(`Avg grades is : ${avgGrade}`);
}
avgGradeCalculator(student);
