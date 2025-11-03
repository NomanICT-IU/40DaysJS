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

/** T-021: Can you filter employees who work in the "Engineering" department? */

const engrDept = departments.find((dept) => dept.name === "Engineering");

const engineeringEmployees = employees.filter((info) => {
  return info.departmentId === engrDept.id;
});
console.log(
  "Employees list who work in the 'Engineering' department: ",
  engineeringEmployees
);

/** T-021: Can you filter employees who work in the "Engineering" department? */
const combineEmployeesNames = employees.map((employeesInfo) => {
  const deptInfo = departments.find(
    (dept) => dept.id === employeesInfo.departmentId
  );
  return `${employeesInfo.name} (${deptInfo.name})`;
});
console.log("Combine the employees name list: ", combineEmployeesNames);

/** T-023: Find the highest salary among employees. */
const heightSalary = Math.max(...employees.map((emp) => emp.salary));
console.log(heightSalary);

/**T-024: Check if there is at least one employee in the "Sales" department. */

const salesDept = departments.find((dept) => dept.name === "Sales");

const hasSalesEmployee = employees.some(
  (emp) => emp.departmentId === salesDept.id
);
console.log(hasSalesEmployee);// true

/** T-025: Write a function to filter employees earning more than 6000. */
function salaryMoreThan6000(employees) {
  return employees.filter((emp) => emp.salary > 6000);
}
console.log(salaryMoreThan6000(employees));

/** T-026: Create an array of employee names only. */
const names = employees.map((emp) => emp.name);
console.log(names);

/**T-027:Calculate the total salary of all employees using */
const totalSalary = employees.reduce((acc, cur) => {
  acc += cur.salary;
  return acc;
}, 0);

console.log("Total salary:", totalSalary);

/**T-028: Is there any employee earning less than 5000? */
const isSalaryLess5000 = employees.some((emp) => emp.salary < 5000);
console.log(isSalaryLess5000);// true

/** T-029: Find the first employee who earns exactly 5100.*/
const salaryExact5100 = employees.find((emp) => emp.salary === 5100);
console.log(salaryExact5100);

/** T-030: Find the last employee in the "HR" department. */
const deptOfHR = departments.find((dept) => dept.name === "HR");
const indexOfHR = employees.findLastIndex(
  (dept) => dept.departmentId === deptOfHR.id
);
const lastEmployeeOfHR = employees.find((emp) => emp.id === indexOfHR);
console.log(lastEmployeeOfHR);

/** T-031: Find the first employee in the "Marketing" department. */
const deptOfMarketing = departments.find((dept) => dept.name === "Marketing");
const firstEmployeeOfMarketing = employees.find(
  (emp) => emp.departmentId === deptOfMarketing.id
);
console.log(firstEmployeeOfMarketing);

/** T-032: Check if all employees earn more than 4000. */
const isAllEmployeeEarnMore4000 = employees.every((emp) => emp.salary > 4000);
console.log(isAllEmployeeEarnMore4000);

/** T-033: Find the first employee in the "Sales" and "HR" department. */
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

/** T-034: Verify if all employees belong to a department listed in the departments array. */
const allEmployeesHaveValidDept = employees.every((emp) =>
  departments.some((dept) => dept.id === emp.departmentId)
);

console.log(allEmployeesHaveValidDept);

/**T-035: Log each employee's name and department name to the console. */
const employeesNameAndDept = employees.map((emp) => {
  const dept = departments.find((dept) => dept.id === emp.departmentId);
  return { name: emp.name, department: dept.name };
});

employeesNameAndDept.forEach((emp) =>
  console.log(`${emp.name} works in ${emp.department} department`)
);

/** T-036: Extract all employee names into a single array. */
const empName = employees.map((emp) => emp.name);
console.log(empName);

/**T-037: Increment each employee's salary by 10% */
const updatedEmployees = employees.map((employee) => {
  const newSalary = employee.salary + employee.salary * 0.1;
  return { ...employee, salary: newSalary };
});

console.log(updatedEmployees);

/**T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...]. */
const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["JavaScript", "React"] },
  { name: "Charlie", skills: ["SEO", "Content Writing"] },
  { name: "Diana", skills: ["Recruitment", "Communication"] },
];

const allSkills = employeesWithSkills.flatMap((emp) => emp.skills);
console.log(allSkills);

/** T-039: Find the total salary of all employees working in the "Engineering" department.*/
const engineeringId = departments.find((dept) => dept.name === "Engineering");
const engineeringEmployeesList = employees.filter(
  (emp) => emp.departmentId === engineeringId.id
);

const engineerTotalSalary = engineeringEmployeesList.reduce((acc, cur) => {
  acc += cur.salary;
  return acc;
}, 0);

console.log(engineerTotalSalary);

/** T-040: Check if there is any department where all employees earn more than 5000. */
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

/**T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees. */
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

/** T-042: For each employee, find their department name and return an array of employee names with their department names. */

const employeeNameAndDept = employees.map((emp) => {
  const department = departments.find((dept) => dept.id === emp.departmentId);
  return { name: emp.name, department: department.name };
});

console.log(employeeNameAndDept);

/** T-043: Get a list of names of employees earning more than 6000. */
const highEarningEmployeeNames = employees.reduce((names, employee) => {
  if (employee.salary > 6000) {
    names.push(employee.name);
  }
  return names;
}, []);

console.log(highEarningEmployeeNames);

/** T-044: Write a for-of loop to print the names of all employees from the employees array. */
for (const element of employees) {
  console.log(element.name);
}

/**T-045: Using a for-of loop, print the names of employees earning more than 5000. */
for (const element of employees) {
  if (element.salary >= 5000) {
    console.log(element.name);
  }
}

/** T-046: Modify the for-of loop to destructure each employee object and log their name and salary. */
for (const { name, salary } of employees) {
  console.log(`${name} earns ${salary}`);
}

/** T-047: Write a for-of loop to match employees with their departments and print the results. */
for (const employee of employees) {
  const department = departments.find(
    (dept) => dept.id === employee.departmentId
  );
  console.log(`${employee.name} works in ${department.name} department.`);
}

/** T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee. */
for (const [index, employee] of employees.entries()) {
  console.log(`${index}: ${employee.name}`);
}

