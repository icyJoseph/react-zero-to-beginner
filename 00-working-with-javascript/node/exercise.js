const fs = require("fs");

const inputFile = "./01.in";

fs.readFile(inputFile, "utf-8", function (err, data) {
  console.log(data);
});
