const fs = require("fs");

fs.readFile("/test.txt", "utf-8", (error, file) => {
  if (error) {
    console.log(error);
  } else {
    console.log(file);
  }
});
