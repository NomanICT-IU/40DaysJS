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
