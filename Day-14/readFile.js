const fileName = "tst.txt";

function readFile(filePath) {
  try {
    console.log("Opening file...");
    if (!(filePath === "test.txt")) throw new Error("File not found");
    console.log(`Reading content from ${filePath}...`);
    console.log("File read successfully!");
  } catch (error) {
     console.error("Error:", error.message);
  } finally {
    console.log("Releasing I/O resources...");
  }
}
readFile(fileName);
