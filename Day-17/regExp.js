function replaceText() {
  const text = document.getElementById("text").innerText;
  const find = document.getElementById("findWord").value;
  const replace = document.getElementById("replaceWord").value;
  const regex = new RegExp(find, "gi");
  const updatedText = text.replace(regex, replace);
  document.getElementById("result").innerText = updatedText;
}
