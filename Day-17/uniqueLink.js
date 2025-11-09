function showUniqueLink() {
  const links = document.querySelectorAll("a");
  const hrefArray = [];
  links.forEach((link) => hrefArray.push(link.getAttribute("href")));

  const filterHref = hrefArray.filter((item, index, selfArr) => {
    return selfArr.indexOf(item) === index;
  });

  document.getElementById(
    "count"
  ).innerText = `Unique link for this page is : ${filterHref.length}`;
}
