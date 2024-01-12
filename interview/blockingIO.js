const fs = require("fs");

// Blocking I/O operation
const data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("Program finished.");
