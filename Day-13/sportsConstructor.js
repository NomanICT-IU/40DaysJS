function Sports(name, number) {
  (this.name = name), (this.number = number);
}

const player1 = new Sports("Abdullah Al Noman", 56);
const player2 = new Sports("Yeasir Arafat Zim", 15);

console.log(
  `The name of player is ${player1.name} and his jersey number is is ${player1.number}`
);
console.log(
  `The name of player is ${player2.name} and his jersey number is is ${player2.number}`
);
