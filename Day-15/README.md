:white_check_mark: **T-001**: Create an array of 5 elements using the Array Constructor.

```js
const arrCons = new Array(1, 2, 3, 4, 5);
console.log(`The array are created using Array Constructor : ${arrCons}`);
```

Output:
```js
The array are created using Array Constructor : [ 1, 2, 3, 4, 5 ]
```

---
:white_check_mark:T-002: Create an array of 3 empty slots.

```js
const emptyArr = new Array(3);
console.log(`Creating an array with 3 empty slots ${emptyArr}`); 
```

Output:
```js
Creating an array with 3 empty slots :[ <3 empty items> ]
```

---

:white_check_mark: T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

```js
const arr = [1, 2, 3, 4, 5, 6];
console.log("The array are created with 6 element using Array literals :", arr);
console.log(
  `the fourth element in the array using its length property is : ${
    arr[arr.length - 3]
  }`
);
```

Output:
```js
The array are created with 6 element using Array literals : [ 1, 2, 3, 4, 5, 6 ]
the fourth element in the array using its length property is : 4
```

---

:white_check_mark:T-004: Use the for loop on the above array to print elements in the odd index.

```js
const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    console.log(`The element od odd index are : ${arr[i]}`);
  }
}
```

Output:
```js
The element of odd index are : 2
The element of odd index are : 4
The element of odd index are : 6
```

---

:white_check_mark:T-005: Add one element at the front and the end of an array.

```js
const arr = [1, 2, 3, 4, 5, 6];
arr.unshift(0);
console.log("Add one element at the front of [1,2,3,4,5,6] :", arr);
arr.push(7);
console.log("Add one element at the end of [0,1,2,3,4,5,6] :", arr);
```

Output:
```js
Add one element at the front of [1,2,3,4,5,6] : [
  0, 1, 2, 3,
  4, 5, 6
]
Add one element at the end of [0,1,2,3,4,5,6] : [
  0, 1, 2, 3,
  4, 5, 6, 7
]
```

---

:white_check_mark:T-006: Remove an element from the front and the end of an array.

```js
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.shift();
console.log("Remove one element at the front of [1,2,3,4,5,6] :", arr1);
arr1.pop();
console.log("Remove one element at the end of [2,3,4,5,6] :", arr1);
```

Output:
```js
Remove one element at the front of [1,2,3,4,5,6] : [ 2, 3, 4, 5, 6 ]
Remove one element at the end of [2,3,4,5,6] : [ 2, 3, 4, 5 ]
```

---
:white_check_mark: T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

```js
const favoriteFoods = [
  "Pizza",
  "Burger",
  "Pasta",
  "Biryani",
  "Sushi",
  "Steak",
  "Tacos",
  "Ice Cream",
  "Shawarma",
  "Fried Rice",
];
let [, , , , , sixFood] = favoriteFoods;
console.log(`The 6th food element from the array is: ${sixFood}`);
```

Output:
```js
The 6th food element from the array is: Steak
```
---
:white_check_mark: T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

```js
const favoriteFoods = [
  "Pizza",
  "Burger",
  "Pasta",
  "Biryani",
  "Sushi",
  "Steak",
  "Tacos",
  "Ice Cream",
  "Shawarma",
  "Fried Rice",
];
let [, , ...lest8Food] = favoriteFoods;

console.log(`The last 8 food items from the above array are: ${lest8Food}`);
```

Output:
```js
The last 8 food items from the above array are: Pasta,Biryani,Sushi,Steak,Tacos,Ice Cream,Shawarma,Fried Rice
```

---
:white_check_mark: T-009: Clone an Array(Shallow cloning)

```js
const shallowCopy = [...favoriteFoods];
console.log("Shallow copy of favoriteFoods array is: ", shallowCopy);
```

Output:
```js
Shallow copy of favoriteFoods array is:  [
  'Pizza',    'Burger',
  'Pasta',    'Biryani',
  'Sushi',    'Steak',
  'Tacos',    'Ice Cream',
  'Shawarma', 'Fried Rice'
]
```

---
:white_check_mark: T-010: Empty an array using its length property

```js
const num = [1, 2, 3, 4, 5, 6];
num.length = 0;
console.log(num);

```

Output:
```js
[]
```

---

:white_check_mark:  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 
5 in that array. Hint: Use for-loop.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (i === 5) {
    arr.length = 6;
  }
}
console.log("After resizing the array to length six, the array is:", arr);
```

Output:
```js
After resizing the array to length six, the array is: [ 1, 2, 3, 4, 5, 6 ]
```

---
:white_check_mark: T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr1.splice(0, 10);
console.log("Use the splice() method:", arr1);
```

Output:
```js
[]
```

---
:white_check_mark: T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method.
Which among these methods are most efficient and why?

Output:
```js
Using length property is most efficient
Because -> All elements are removed instantaneously. The existing array reference is modified.
```

---
:white_check_mark: T-014: What happens when you concatenate two empty arrays? 

```js
const emptyArr1 = [];
const emptyArr2 = [];
const emptyArr = [...emptyArr1, ...emptyArr2];
console.log(emptyArr);
```

Output:
```js
we get another empty array
```

---
:white_check_mark: T-015: How can you check if a value is partially matching with any of the elements of an Array?

```js
const includeArr = [1, 2, 3, 4, 5, 6, 7];
console.log(includeArr.includes(5));
```

Output:
```js
Using array includes() method to check if a value is particularly matching with of the elements of an Array. If it return true that's mean existing element is matched with searching element
```

---
:white_check_mark: T-016: What is the difference between the slice() and splice() methods?

```js
const beforeSlice = [1, 2, 3, 4, 5, 6, 7];
console.log(beforeSlice);
const afterSlice = beforeSlice.slice();
afterSlice.push(8);
console.log(afterSlice); 
```

Output:
```js
Using the slice() method, we can copy an array from its original array. The slice() method is an immutable method. If we change the copied array, the original array remains unchanged.
Original Array : [1, 2, 3, 4, 5, 6, 7]
Uodated Array : [1, 2, 3, 4, 5, 6, 7]
```
```js
const arr3 = [1, 2, 3, 4];
arr.splice(0, 2);
console.log(arr3);
```

Output:
```js
Using the splice() method, we can remove, replace, or add elements in an array. The splice() method is a mutable method. If we change the array using splice(), the original array is modified.
[3,4]
```

---
:white_check_mark: T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

```js
const alphaArray = ["Xavir", "Noman", "Shown", "Yeasir"];

const ascending = alphaArray.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log("Original Array: ", alphaArray);

console.log("Ascending Array: ", ascending);

const descending = alphaArray.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log("Descending Array: ", descending);
```

Output:
```js
Original Array:  [ 'Xavir', 'Noman', 'Shown', 'Yeasir' ]
Ascending Array:  [ 'Noman', 'Shown', 'Xavir', 'Yeasir' ]
Descending Array:  [ 'Yeasir', 'Xavir', 'Shown', 'Noman' ]
```

---
:white_check_mark: T-018: Can you give examples of sparse and dense arrays? */


```js
const denseArray = [1, 2, 3, 4, 5];
console.log(denseArray.length); 
console.log(denseArray);
```

Output:
```js
A dense array means every index has a value — no empty or missing elements.
5
[1, 2, 3, 4, 5]
```
```js
const sparseArray = [1, , 3, , 5];
console.log(sparseArray.length); 
console.log(sparseArray);
```

Output:
```js
A sparse array has holes — some indexes are missing or skipped.
5
[1, <1 empty item>, 3, <1 empty item>, 5]
```
---
:white_check_mark: T-019: Give a practical usages of the .fill() method

```js
const fillArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(fillArray.fill("*"))
```

Output:
```js
['*', '*', '*','*', '*', '*','*', '*']
```

--- 
:white_check_mark: T-020: How to convert an array to a string?

```js
//Using toString()
const arrStr1 = ["apple", "banana", "cherry"];
const str = arrStr1.toString();

console.log(str);
```

Output:
```js
"apple,banana,cherry"
```
```js
//Using JSON.stringify()
const arrStr2 = ["apple", "banana", "cherry"];
const str1 = JSON.stringify( arrStr2);

console.log(str1);
```

Output:
```js
["apple","banana","cherry"]
```

---
:white_check_mark: This object are applicable from T-021 - T-048

```js
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
```

---
:white_check_mark: T-021: Can you filter employees who work in the "Engineering" department?

```js
const engrDept = departments.find((dept) => dept.name === "Engineering");

const engineeringEmployees = employees.filter((info) => {
  return info.departmentId === engrDept.id;
});
console.log(
  "Employees list who work in the 'Engineering' department: ",
  engineeringEmployees
);
```

Output:
```js
Employees list who work in the 'Engineering' department:  [
  { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
  { id: 9, name: 'Ian', departmentId: 2, salary: 4800 }
]
```

---
:white_check_mark: T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)

```js
const combineEmployeesNames = employees.map((employeesInfo) => {
  const deptInfo = departments.find(
    (dept) => dept.id === employeesInfo.departmentId
  );
  return `${employeesInfo.name} (${deptInfo.name})`;
});
console.log("Combine the employees name list: ", combineEmployeesNames);
```

Output:
```js
Combine the employees name list:  [
  'Alice (HR)',
  'Bob (Engineering)',
  'Charlie (Marketing)',
  'Diana (HR)',
  'Edward (Engineering)',
  'Fiona (Sales)',
  'George (Marketing)',
  'Helen (Sales)',
  'Ian (Engineering)',
  'Jane (HR)'
]
```

---
:white_check_mark: T-023: Find the highest salary among employees.

```js
const heightSalary = Math.max(...employees.map((emp) => emp.salary));
console.log(heightSalary);

```

Output:
```js
Height Salary : 8000
```

---
:white_check_mark: T-024: Check if there is at least one employee in the "Sales" department.

```js
const salesDept = departments.find((dept) => dept.name === "Sales");

const hasSalesEmployee = employees.some(
  (emp) => emp.departmentId === salesDept.id
);
console.log(hasSalesEmployee);
```

Output:
```js
 true
```

---
:white_check_mark: T-025: Write a function to filter employees earning more than 6000.

```js
function salaryMoreThan6000(employees) {
  return employees.filter((emp) => emp.salary > 6000);
}
console.log(salaryMoreThan6000(employees));
```

Output:
```js
[
  { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
  { id: 8, name: 'Helen', departmentId: 4, salary: 7200 }
]
```

---
:white_check_mark: T-026: Create an array of employee names only.

```js
const names = employees.map((emp) => emp.name);
console.log(names);
```

Output:
```js
[
  'Alice',   'Bob',
  'Charlie', 'Diana',
  'Edward',  'Fiona',
  'George',  'Helen',
  'Ian',     'Jane'
]
```

---
:white_check_mark: T-027:Calculate the total salary of all employees using

```js
const totalSalary = employees.reduce((acc, cur) => {
  acc += cur.salary;
  return acc;
}, 0);

console.log("Total salary:", totalSalary);
```

Output:
```js
Total salary: 58300
```

---
:white_check_mark: T-028: Is there any employee earning less than 5000?

```js
const isSalaryLess5000 = employees.some((emp) => emp.salary < 5000);
console.log(isSalaryLess5000);
```

Output:
```js
true
```

---
:white_check_mark: T-029: Find the first employee who earns exactly 5100.

```js
const salaryExact5100 = employees.find((emp) => emp.salary === 5100);
console.log(salaryExact5100);
```

Output:
```js
{ id: 10, name: 'Jane', departmentId: 1, salary: 5100 }
```

---
:white_check_mark: T-030: Find the last employee in the "HR" department.

```js
const deptOfHR = departments.find((dept) => dept.name === "HR");
const indexOfHR = employees.findLastIndex(
  (dept) => dept.departmentId === deptOfHR.id
);
const lastEmployeeOfHR = employees.find((emp) => emp.id === indexOfHR);
console.log(lastEmployeeOfHR);
```

Output:
```js
{ id: 9, name: 'Ian', departmentId: 2, salary: 4800 }
```

---
:white_check_mark: T-031: Find the first employee in the "Marketing" department.

```js
const deptOfMarketing = departments.find((dept) => dept.name === "Marketing");
const firstEmployeeOfMarketing = employees.find(
  (emp) => emp.departmentId === deptOfMarketing.id
);
console.log(firstEmployeeOfMarketing);
```

Output:
```js
{ id: 3, name: 'Charlie', departmentId: 3, salary: 4500 }
```

---
:white_check_mark: T-032: Check if all employees earn more than 4000.

```js
const isAllEmployeeEarnMore4000 = employees.every((emp) => emp.salary > 4000);
console.log(isAllEmployeeEarnMore4000);
```

Output:
```js
ture
```

---
:white_check_mark:  T-033: Find the first employee in the "Sales" and "HR" department.

```js
const HRIds = departments.find((dept) => dept.name === "HR");

const employeeInHR = employees.find((emp) => emp.departmentId === HRIds.id);

const SalesIds = departments.find((dept) => dept.name === "Sales");

const employeeInSales = employees.find(
  (emp) => emp.departmentId === SalesIds.id
);
console.log(
  "First employee in the 'Sales' and 'HR' department are: ",
  employeeInSales,
  employeeInHR
);
```

Output:
```js
First employee in the 'Sales' and 'HR' department are:
{ id: 6, name: 'Fiona', departmentId: 4, salary: 6000 }
{ id: 1, name: 'Alice', departmentId: 1, salary: 5000 }
```

---
:white_check_mark: T-034: Verify if all employees belong to a department listed in the departments array.

```js
const allEmployeesHaveValidDept = employees.every((emp) =>
  departments.some((dept) => dept.id === emp.departmentId)
);

console.log(allEmployeesHaveValidDept);
```

Output:
```js
true
```

---
:white_check_mark: T-035: Log each employee's name and department name to the console.

```js
const employeesNameAndDept = employees.map((emp) => {
  const dept = departments.find((dept) => dept.id === emp.departmentId);
  return { name: emp.name, department: dept.name };
});

employeesNameAndDept.forEach((emp) =>
  console.log(`${emp.name} works in ${emp.department} department`)
);
```

Output:
```js
Alice works in HR department
Bob works in Engineering department
Charlie works in Marketing department
Diana works in HR department
Edward works in Engineering department
Fiona works in Sales department
George works in Marketing department
Helen works in Sales department
Ian works in Engineering department
Jane works in HR department
```

---
:white_check_mark: T-036: Extract all employee names into a single array.

```js
const empName = employees.map((emp) => emp.name);
console.log(empName);
```

Output:
```js
[
  'Alice',   'Bob',
  'Charlie', 'Diana',
  'Edward',  'Fiona',
  'George',  'Helen',
  'Ian',     'Jane'
]
```

---
:white_check_mark: T-037: Increment each employee's salary by 10%

```js
const updatedEmployees = employees.map((employee) => {
  const newSalary = employee.salary + employee.salary * 0.1;
  return { ...employee, salary: newSalary };
});

console.log(updatedEmployees);
```

Output:
```js
[
  { id: 1, name: 'Alice', departmentId: 1, salary: 5500 },
  { id: 2, name: 'Bob', departmentId: 2, salary: 7700 },
  { id: 3, name: 'Charlie', departmentId: 3, salary: 4950 },
  { id: 4, name: 'Diana', departmentId: 1, salary: 6050 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8800 },
  { id: 6, name: 'Fiona', departmentId: 4, salary: 6600 },
  { id: 7, name: 'George', departmentId: 3, salary: 5720 },
  { id: 8, name: 'Helen', departmentId: 4, salary: 7920 },
  { id: 9, name: 'Ian', departmentId: 2, salary: 5280 },
  { id: 10, name: 'Jane', departmentId: 1, salary: 5610 }
]
```

---
:white_check_mark: T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

```js
const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["JavaScript", "React"] },
  { name: "Charlie", skills: ["SEO", "Content Writing"] },
  { name: "Diana", skills: ["Recruitment", "Communication"] },
];

const allSkills = employeesWithSkills.flatMap((emp) => emp.skills);
console.log(allSkills);
```

Output:
```js
[
  'Excel',
  'Management',
  'JavaScript',
  'React',
  'SEO',
  'Content Writing',
  'Recruitment',
  'Communication'
]
```

---

:white_check_mark: T-039: Find the total salary of all employees working in the "Engineering" department.

```js
const engineeringId = departments.find((dept) => dept.name === "Engineering");
const engineeringEmployeesList = employees.filter(
  (emp) => emp.departmentId === engineeringId.id
);

const engineerTotalSalary = engineeringEmployeesList.reduce((acc, cur) => {
  acc += cur.salary;
  return acc;
}, 0);

console.log(engineerTotalSalary);
```

Output:
```js
19800
```

---
:white_check_mark:  T-040: Check if there is any department where all employees earn more than 5000.

```js
// method-1
const groupedByDept = departments.map((dept) => {
  const groupEmp = employees.filter((emp) => {
    return emp.departmentId === dept.id;
  });
  return groupEmp;
});
const salaryMoreThan5000 = groupedByDept.filter((singleGroup) => {
  return singleGroup.every((item) => item.salary >= 5000);
});

console.log(salaryMoreThan5000);
```

Output:
```js
[
  [
    { id: 1, name: 'Alice', departmentId: 1, salary: 5000 },
    { id: 4, name: 'Diana', departmentId: 1, salary: 5500 },
    { id: 10, name: 'Jane', departmentId: 1, salary: 5100 }
  ],
  [
    { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
    { id: 8, name: 'Helen', departmentId: 4, salary: 7200 }
  ]
]
```
```js
//method-2
const groupByDept = employees.reduce((acc, emp) => {
  const key = emp.departmentId;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(emp);
  return acc;
}, []);

const salaryMoreThan5000_2 = groupByDept.filter((dept) => {
 return dept.every((emp) => emp.salary > 5000);
});
console.log(salaryMoreThan5000_2);
```

Output:
```js
[
  [
    { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
    { id: 8, name: 'Helen', departmentId: 4, salary: 7200 }
  ]
]
```

---
:white_check_mark:  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

```js
const employees1 = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
  { id: 3, name: "Charlie", projects: ["Project D"] },
  { id: 4, name: "Diana", projects: ["Project A", "Project E"] },
];

const allProject = employees1.flatMap((emp) => emp.projects);
const result = allProject.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log("Unique Project Number is : ", result.length);
```

Output:
```js
Unique Project Number is :  5
```

---
:white_check_mark:  T-042: For each employee, find their department name and return an array of employee names with their department names.

```js
const employeeNameAndDept = employees.map((emp) => {
  const department = departments.find((dept) => dept.id === emp.departmentId);
  return { name: emp.name, department: department.name };
});

console.log(employeeNameAndDept);

```

Output:
```js
[
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Engineering' },
  { name: 'Charlie', department: 'Marketing' },
  { name: 'Diana', department: 'HR' },
  { name: 'Edward', department: 'Engineering' },
  { name: 'Fiona', department: 'Sales' },
  { name: 'George', department: 'Marketing' },
  { name: 'Helen', department: 'Sales' },
  { name: 'Ian', department: 'Engineering' },
  { name: 'Jane', department: 'HR' }
]
```

---

:white_check_mark: T-043: Get a list of names of employees earning more than 6000.

```js
const highEarningEmployeeNames = employees.reduce((names, employee) => {
  if (employee.salary > 6000) {
    names.push(employee.name);
  }
  return names;
}, []);

console.log(highEarningEmployeeNames);
```

Output:
```js
[ 'Bob', 'Edward', 'Helen' ]
```

---
:white_check_mark:  T-044: Write a for-of loop to print the names of all employees from the employees array.

```js
for (const element of employees) {
  console.log(element.name);
}
```

Output:
```js
Alice
Bob
Charlie
Diana
Edward
Fiona
George
Helen
Ian
Jane
```

---
:white_check_mark: T-045: Using a for-of loop, print the names of employees earning more than 5000.

```js
for (const element of employees) {
  if (element.salary >= 5000) {
    console.log(element.name);
  }
}
```

Output:
```js
Alice
Bob
Diana
Edward
Fiona
George
Helen
Jane
```

---
:white_check_mark: T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

```js
for (const { name, salary } of employees) {
  console.log(`${name} earns ${salary}`);
}
```

Output:
```js
Alice earns 5000
Bob earns 7000
Charlie earns 4500
Diana earns 5500
Edward earns 8000
Fiona earns 6000
George earns 5200
Helen earns 7200
Ian earns 4800
Jane earns 5100
```

---
:white_check_mark:  T-047: Write a for-of loop to match employees with their departments and print the results.

```js
for (const employee of employees) {
  const department = departments.find(
    (dept) => dept.id === employee.departmentId
  );
  console.log(`${employee.name} works in ${department.name} department.`);
}
```

Output:
```js
Alice works in HR department.
Bob works in Engineering department.
Charlie works in Marketing department.
Diana works in HR department.
Edward works in Engineering department.
Fiona works in Sales department.
George works in Marketing department.
Helen works in Sales department.
Ian works in Engineering department.
Jane works in HR department.
```

---
:white_check_mark: T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

```js
for (const [index, employee] of employees.entries()) {
  console.log(`${index}: ${employee.name}`);
}

```

Output:
```js
0: Alice
1: Bob
2: Charlie
3: Diana
4: Edward
5: Fiona
6: George
7: Helen
8: Ian
9: Jane
```

---
:white_check_mark:  T-049: Given the array-like object below, access the second element and log it:

```js
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(Array.from(arrayLike)[1]);
```

Output:
```js
Second
```

---
:white_check_mark: T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

```js
function numberOfArguments() {
  let total = 0;
  Array.from(arguments).forEach((value) => (total += value));
  return total;
}

const sum = numberOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Summation of these arguments :", sum);
```

Output:
```js
Summation of these arguments : 55
```

---
:white_check_mark:  T-052: Merge these two arrays into a single array:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("Marge array :", [...arr1, ...arr2]);
```

Output:
```js
Marge array : [ 1, 2, 3, 4 ]
```

---
:white_check_mark: T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

```js
const n = 5;
const duplicateArray = Array.from({ length: n }, () => "A");

console.log(duplicateArray);
```

Output:
```js
[ 'A', 'A', 'A', 'A', 'A' ]
```

---
:white_check_mark: T-054: Use Array.from to convert a string like "Hello" into an array of characters.

```js
let str = "Hello";
console.log("Convert string to Array: ", Array.from(str))
```

Output:
```js
Convert string to Array:  [ 'H', 'e', 'l', 'l', 'o' ]
```

---
:white_check_mark: T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

```js
const fruits = ["apple", "banana", "apricot", "mango", "blueberry"];

const groupedFruits = fruits.reduce((acc, fruit) => {
  const key = fruit[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(fruit);
  return acc;
}, {});

console.log(groupedFruits); 
```

Output:
```js
{ a: [ 'apple', 'apricot' ],b: [ 'banana', 'blueberry' ],m: [ 'mango' ]}
```

---
:white_check_mark: T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

```js
const numbers = [3, 7, 3, 2, 3, 8, 7, 7];
const count = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const maxFreq = Math.max(...Object.values(count));
const mostRepeatedNumbers = Object.entries(count)
  .filter(([num, freq]) => freq === maxFreq)
  .map(([num]) => Number(num));
console.log(
  `Most repeated number(s): ${mostRepeatedNumbers} (appeared ${maxFreq} times)`
```

Output:
```js
Most repeated number(s): 3,7 (appeared 3 times)
```

---
:white_check_mark: T-058: Find the median of [5, 2, 9, 1, 3, 6, 8]

```js
const numberArray = [5, 2, 9, 1, 3, 6, 8].sort((a, b) =>
  a === b ? 0 : a > b ? 1 : -1
);
const length = numberArray.length;
const medianNumber = numberArray[Math.floor(length / 2)];
console.log("The medina Number is :", medianNumber);
```

Output:
```js
The medina Number is : 5
```

---
:white_check_mark: T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

```js
const nestedArray = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const nestedArrayToObject = nestedArray.reduce((acc, [index, value]) => {
  acc[index] = value;
  return acc;
}, {});

console.log(nestedArrayToObject);
```

Output:
```js
{ a: 1, b: 2, c: 3 }
```

---
:white_check_mark: T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

```js
const input = [
  ["a", "b"],
  ["c", "d"],
];

const result = input
  .flatMap((innerArray) => innerArray)
  .map((value) => value.toLocaleUpperCase());
console.log(result);
```

Output:
```js
[ 'A', 'B', 'C', 'D' ]
```

---
:white_check_mark: T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

```js
const fruitsArray = ["apple", "banana", "apple", "mango", "banana", "banana"];
const countTheOccurrences = fruitsArray.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(countTheOccurrences);
```

Output:
```js
{ apple: 2, banana: 3, mango: 1 }
```

---
:white_check_mark: T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

```js
const originalArray = ["a", "b", "c", "d", "e"];
const sliceArray = originalArray.slice(1, 4);
console.log(sliceArray);
```

Output:
```js
[ 'b', 'c', 'd' ]
```

---
:white_check_mark: T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

```js
const givenNumbers = [9, 3, 1, 6, 8];
const sortedNumbers = givenNumbers.sort((a, b) =>
  a === b ? 0 : a > b ? 1 : -1
);

console.log("The array of sorted Numbers: ", sortedNumbers);
```

Output:
```js
The array of sorted Numbers:  [ 1, 3, 6, 8, 9 ]
```

---
:white_check_mark: T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

```js
const givenArray = [1, 2, 3, 4, 5];
console.log("Reverse Array", givenArray.reverse()); 
console.log("givenArray", givenArray);
```

Output:
```js
Reverse Array [ 5, 4, 3, 2, 1 ]
givenArray [ 5, 4, 3, 2, 1 ] change original array
```
```js
const givenArray1 = [1, 2, 3, 4, 5];
console.log("Reverse Array using toReverse() :", givenArray1.toReversed());
console.log("givenArray1", givenArray1);
```

Output:
```js
Reverse Array using toReverse() : [ 5, 4, 3, 2, 1 ]
givenArray [ 1, 2, 3, 4, 5 ] // original array remain unchanged
```

---
:white_check_mark: T-065: Group the following array elements based on age(Adult vs Non-Adult):
```js
const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const groupedByAge = users.reduce((acc, user) => {
  const key = user.age >= 18 ? "Adult" : "Non-Adult";
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});

console.log(groupedByAge); 
```

Output:
```js
{ Adult: [ { name: 'Alice', age: 55 }, { name: 'Charlie', age: 25 } ],'Non-Adult': [ { name: 'Bob', age: 3 } ]}
```

---
:white_check_mark: T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
```js
const str1 = "40 Days of JavaScript by tapaScript is a powerful initiative";
const strArray = str1.split(" ");

const strArrToNumArr = strArray.map((element) => element.length);
const maxLength = Math.max(...strArrToNumArr);

const index = strArrToNumArr
  .map((v, i) => {
    return v === maxLength ? i : -1;
  })
  .filter((i) => i !== -1);

console.log(
  `The length of longest word in this sentence is ${maxLength} and the word are given bellow: `
);
index.forEach((v) => console.log(` ${strArray[v]}`));
```

Output:
```js
The length of longest word in this sentence is 10 and the word are given bellow:
 JavaScript
 tapaScript
 initiative
```

---
:white_check_mark: T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6] 
```js
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const mergeArray = [...array1, ...array2];
console.log(mergeArray);

const commonElement = mergeArray.filter((value, index, self) => {
  return self.indexOf(value) !== index;
});
console.log("common elements between two arrays : ", commonElement);
```

Output:
```js
common elements between two arrays :  [ 3, 4 ]
```

---
