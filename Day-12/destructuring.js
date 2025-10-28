const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,

  company: {
    name: companyName,
    location: { city, zip },
  },
} = person;
console.log(name);
console.log(companyName);
console.log(city);
console.log(zip);