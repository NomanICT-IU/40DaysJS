const expenses = [
  { id: 231, amount: 100, category: "food", description: "Lunch" },
  { id: 532, amount: 300, category: "shopping", description: "New Shoes" },
  {
    id: 990,
    amount: 1000,
    category: "tour trip",
    description: "Entertainment",
  },
  { id: 571, amount: 200, category: "shopping", description: "Shirt" },
  { id: 211, amount: 300, category: "rent", description: "Office rent" },
  { id: 915, amount: 500, category: "rent", description: "House rent" },
];

const userInfo = {
  fname: "Abdullah al",
  lname: "Noman",
  email: "user@example.com",
  initialBudget: 5000,
};

function createExpenseTracker(user) {
  if (!user) {
    console.log("Create an user first ");
    return;
  }
  let randomId = () => Math.floor(Math.random() * 1000);

  return {
    //adding Expense
    addExpense: function (amount, category, description) {
      if (amount > this.reamingBalance()) {
        console.log("Amount is exceeding your budget\n");
        return;
      }
      let addExpense = {
        id: randomId(),
        amount,
        category,
        description,
      };
      expenses.push(addExpense);
    },

    //Removing Expense
    removingExpense: function (id) {
      let removingExpense = expenses.find((expense) => expense.id === id);
      if (!removingExpense) {
        console.log("Removing id did not match\n");
        return;
      }
      let filterExpenses = expenses.filter((expense) => expense.id !== id);
      expenses.length = 0;
      expenses.push(...filterExpenses);
    },

    //Updating Expense
    updatingExpense: function (updateExpense) {
      let findExpense = expenses.find(
        (expense) => expense.id === updateExpense.id
      );
      if (!findExpense) {
        console.log("Updating expense failed: No matching expense found!");
        return;
      }
      if (updateExpense.amount > this.reamingBalance()) {
        console.log("Updating amount is exceeding your budget\n");
        return;
      }
      const findIndex = expenses.findIndex(
        (expense) => expense.id === updateExpense.id
      );
      expenses.splice(findIndex, 1, updateExpense);
    },

    //Getting Total Expenses
    totalExpense: function () {
      return expenses.reduce((acc, cur) => (acc += cur.amount), 0);
    },
    //Getting expense by category
    expensesByCategory: function (categoryName) {
      let expenseList = expenses.filter(
        (expense) => expense.category === categoryName
      );
      console.log(expenseList);
    },

    //Getting remaining balance
    reamingBalance: function () {
      return user.initialBudget - this.totalExpense();
    },

    //Get the Highest Expense
    highestExpense: function () {
      let amountArray = expenses.map((expense) => expense.amount);
      let maxExpense = Math.max(...amountArray);
      console.log(maxExpense);
    },
    //Get the Lowest Expense
    lowestExpense: function () {
      let amountArray = expenses.map((expense) => expense.amount);
      let lowestExpense = Math.min(...amountArray);
      console.log(lowestExpense);
    },
    // Get the user info
    userInfo: function () {
      console.log(`Name : ${user.fname} ${user.lname} `);
    },
    //Show all the expenses
    showAllExpenses: function () {
      console.log("All expenses\n");
      expenses.forEach((value) => {
        console.log(
          `${value.category}(${value.description}) : ${value.amount}`
        );
      });
    },
    //Update User data
    updatedUserData: function (updateData) {
      if (!(user.email === updateData.email)) {
        console.log("Email address doesn’t match");
        return;
      }
      Object.assign(user, updateData);
    },
  };
}

const expense = createExpenseTracker(userInfo);
console.log("Before update:", expenses);
expense.addExpense(500, "food", "dinner");
console.log("After added:", expenses);
expense.removingExpense(571);
console.log("After Removing:", expenses);
expense.updatingExpense({
  id: 231,
  amount: 1100,
  category: "food",
  description: "Lunch",
});
console.log("After Update:", expenses);
let totalExp = expense.totalExpense();
console.log(totalExp);
expense.expensesByCategory("rent");
expense.highestExpense();
expense.lowestExpense();
expense.userInfo();
expense.showAllExpenses();
expense.updatedUserData({
  fname: "Al",
  lname: "Fahim",
  email: "user@example.com",
});

console.log(userInfo);
 