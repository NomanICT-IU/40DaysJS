

function capitalizeWords(sentence, cb) {
  const arr = sentence.split(" ");
  const rtnValue = arr.map((value) => {
    let word = "";
    for (let i = 0; i < value.length; i++) {
      if (i === 0) {
        word += value[i].toUpperCase();
      } else {
        word += value[i];
      }
    }
    return word;
  });

  cb(rtnValue);
}

function makingSentence(value) {
  let str = " ";
  value.map((v) => (str = str + v + " "));
  console.log(str);
}
capitalizeWords("islamic university, Bangladesh", makingSentence);

