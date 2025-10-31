function parseJson(str) {
  try {
    if (JSON.parse(str)) {
      console.log("Parsing JSON successfully.....");
    }
  } catch (err) {
    console.log("Invalid JSON");
  }
}

parseJson('{"name": "Noman", "age": 26}'); // { name: 'Noman', age: 26 }
parseJson('{name: "Noman"}'); // Invalid JSON
