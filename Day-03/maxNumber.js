let p = 10;
let q = 30;
let r = 50;

if (p >= q && p >= r) {
  console.log(`${p} is grater then ${q}, ${r}`);
} else if (q >= p && q >= r) {
  console.log(`${q} is grater then ${p}, ${r}`);
} else {
  console.log(`${r} is grater then ${p}, ${q}`);
}
