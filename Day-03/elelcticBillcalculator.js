
const unit = 1;
const unitCharge = 150;
const discount = 0.2;

const perMonthCost = unit * unitCharge * 31;

const annualCost = perMonthCost * 12;

const discountAmount = annualCost * 0.2;
const annualPayment = annualCost - discountAmount;
console.log(`You need to pay ${annualPayment} Rupees for annual payment.`);
