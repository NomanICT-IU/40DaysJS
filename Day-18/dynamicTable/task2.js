const form = document.getElementById("addForm");
const tableBody = document.getElementById("tableBody");

/**Take the data from Form */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = {};
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.type !== "submit") {
      values[input.name] = input.value;
    }
  });

  const tr = document.createElement("tr");

  for (const key in values) {
    const td = document.createElement("td");
    td.textContent = values[key];
    tr.appendChild(td);
  }
  const td = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = "Delete";
  td.appendChild(button);
  tr.appendChild(td);
  button.addEventListener("click", () => {
    tr.remove();
  });
  tableBody.appendChild(tr);

  form.reset();
});

/** filter row */

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const filter = search.value.toLowerCase();

  const rows = tableBody.querySelectorAll("tr");

  rows.forEach((row) => {
    const nameCell = row.querySelector("td");

    if (nameCell) {
      const nameText = nameCell.textContent.toLowerCase();

      row.style.display = nameText.includes(filter) ? " " : "none";
    }
  });
});
