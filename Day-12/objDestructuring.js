const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];
users.forEach((element) => {
  const { name, address, age } = element;
  console.log(`${name} is ${age} years old, from ${address}`);
});
