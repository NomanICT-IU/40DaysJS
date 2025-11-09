function filterList() {
  const input = document.getElementById("searchInput").value;

  const items = document.querySelectorAll("ul#itemList li");
  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
