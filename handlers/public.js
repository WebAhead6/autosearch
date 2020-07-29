const path = require("path");
const fs = require("fs");

const types = {
  html: "text/html",
  js: "application/javascript",
  css: "text/css",
  jpg: "image/jpg",
  ico: "imagee/x-ico",
};

function publicHandler(request, response) {
  const urlArray = request.url.split(".");
  const url = request.url;
  const extension = urlArray[1];
  const type = types[extension];
  const filePath = path.join(__dirname, "..", request.url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
