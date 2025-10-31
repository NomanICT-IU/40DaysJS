/**Task - 3 */

const user = {
  username: "Noman",
  payment: true,
  email: "noman.ict.iu@gmail.com",
  serverDown: false,
};

function UserError(message) {
  (this.name = "UserError"), (this.message = message);
}

function PaymentError(message) {
  (this.name = "PaymentError"), (this.message = message);
}
function EmailError(message) {
  (this.name = "EmailError"), (this.message = message);
}
function ServerError(message) {
  (this.name = "ServerError"), (this.message = message);
}

function validUser(user) {
  if (user.serverDown) throw new ServerError("Server down...");
  if (!user.username) throw new UserError("User name are missing");
  if (!user.payment) throw new PaymentError("Payment aren't complete yet");
  if (!user.email) throw new EmailError("invalid email address");

  return "All process are completed successfully";
}

try {
  const msg = validUser(user);
  console.log(msg);
} catch (error) {
  console.error(`${error.name} : ${error.message}`);
}