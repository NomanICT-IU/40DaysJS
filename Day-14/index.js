/**Task - 1 */

try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
//Output: Reference Error

/**Task - 2 */
function processPayment(amount) {
  const totalBalance = 10000;
  try {
    if (amount <= 0) throw new Error("Invalid Amount");
    if (amount > totalBalance) throw new Error("Insufficient Balance");
    console.log(`You want to withdraw: ${amount} Taka`);
  } catch (error) {
    console.error(error.message);
  }
}
processPayment(11000);

/**Task - 4 */
const url =
  "github.com/NomanICT-IU/40-days-of-javascript/blob/main/day-14/task.md";
function fetchData(url) {
  try {
    if (!url.startsWith("https://")) {
      throw new Error("Invalid URL");
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}
fetchData(url);
