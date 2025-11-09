:white_check_mark: 1. Find the Most Frequent Word in a Paragraph

HTML code:

```js

  <h1>Find the Most Frequent Word in a Paragraph</h1>
  <div id="text">This is a test. This test is only a test.</div>
  <br>
  <button onclick="frequentWord()">Frequent Word</button>
  <br>
  <br>

  <div id="result"></div>

```

JavaScript Code

```js
function frequentWord() {
  const text = document.getElementById("text").innerText;

  const words = text
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split(" ");
  const count = words.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const maxFreq = Math.max(...Object.values(count));
  const mostFrequentWords = Object.entries(count)
    .filter(([word, freq]) => freq === maxFreq)
    .map(([word]) => word);

  const result = document.getElementById("result");
  result.innerText = mostFrequentWords.join().toUpperCase();
}
```

---

:white_check_mark: 2. Create a zebra pattern

HTML code:

```js

    <h1>Create a zebra pattern</h1>
    <ul id="cars">
      <li>BMW</li>
      <li>Mahindra</li>
      <li>Audi</li>
      <li>Toyota</li>
      <li>Honda</li>
      <li>Hundai</li>
      <li>Tata</li>
      <li>Suzuki</li>
    </ul>
    <br />
    <button onclick="showZebraPattern()">Show Zebra Pattern</button>

```

JS code:

```js
function showZebraPattern() {
  const cars = document.querySelectorAll("ul#cars li");
  cars.forEach((car, index) => {
    const isEven = index % 2 === 0;
    car.style.backgroundColor = isEven ? "black" : "white";
    car.style.color = isEven ? "white" : "black";
    car.style.listStyleType = "none";
  });
}
```

Output:

---

:white_check_mark: 3. Write different ways we can access DOM and what they returns

| Method                              | What it selects                                  | Returns               |
| ----------------------------------- | ------------------------------------------------ | --------------------- |
| `document.getElementById(id)`       | The element with the specified `id`              | `Element` or `null`   |
| `document.getElementsByClassName()` | All elements with the given class name           | Live `HTMLCollection` |
| `document.getElementsByTagName()`   | All elements with the given tag name             | Live `HTMLCollection` |
| `document.querySelector()`          | The **first** element matching the CSS selector  | `Element` or `null`   |
| `document.querySelectorAll()`       | **All** elements matching the CSS selector       | Static `NodeList`     |
| `document.getElementsByName()`      | All elements with the specified `name` attribute | Live `NodeList`       |

---

:white_check_mark: 4. Find and Replace Text Inside a Page

HTML code:

```js
    <p id="text">
      JavaScript is easy. I love JavaScript because JavaScript is powerful.
    </p>

    <input id="findWord" placeholder="Word to find" />
    <br />
    <br />
    <input id="replaceWord" placeholder="Word to replace with" />
    <br />
    <br />
    <button onclick="replaceText()">Replace</button>
    <br>
    <br>
    <div id="result"></div>


```

JS code:

```js
function replaceText() {
  const text = document.getElementById("text").innerText;
  const find = document.getElementById("findWord").value;
  const replace = document.getElementById("replaceWord").value;
  const regex = new RegExp(find, "gi");
  const updatedText = text.replace(regex, replace);
  document.getElementById("result").innerText = updatedText;
}
```

---

:white_check_mark: 5. Extract and Count Unique Links from a Page

HTML code:

```js
<div>
      <p><a href="google.com">Goggle</a></p>
      <p><a href="microsoft.com">Microsoft</a></p>
      <p><a href="appale.com">Apple</a></p>
      <p><a href="google.com">Goggle</a></p>
      <p><a href="amazon.com">Amazon</a></p>
      <p><a href="microsoft.com">Microsoft</a></p>
    </div>
    <br />
    <br />
    <button onclick="showUniqueLink()">Show Unique Link</button>
    <br />
    <br />
    <div id="count"></div>
```

JS code:
```js
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
```
