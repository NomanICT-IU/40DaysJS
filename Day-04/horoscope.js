let month = "April"; 
let zodiac;

switch (month) {
  case "March":
  case "April":
    zodiac = "Aries";
    break;

  case "April":
  case "May":
    zodiac = "Taurus ";
    break;

  case "May":
  case "June":
    zodiac = "Gemini ";
    break;

  case "June":
  case "July":
    zodiac = "Cancer ";
    break;

  case "July":
  case "August":
    zodiac = "Leo";
    break;

  case "August":
  case "September":
    zodiac = "Virgo ";
    break;

  case "September":
  case "October":
    zodiac = "Libra";
    break;

  case "October":
  case "November":
    zodiac = "Scorpio ";
    break;

  case "November":
  case "December":
    zodiac = "Sagittarius";
    break;

  case "December":
  case "January":
    zodiac = "Capricorn";
    break;

  case "January":
  case "February":
    zodiac = "Aquarius";
    break;

  case "February":
  case "March":
    zodiac = "Pisces";
    break;

  default:
    zodiac = "Invalid month!";
}

console.log(`Your Zodiac sign is: ${zodiac}`);
