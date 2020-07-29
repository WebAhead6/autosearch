const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autoComplete = require("./handlers/autocomplete");

function router(request, response) {
    const url = request.url;
    const method = request.method
    if (url === "/" && method === "GET") {
      homeHandler(request, response);
    } else if (url === "/" && method === "POST") {
      autoComplete(request, response);
    }
     else if (url.includes("public")) {
      publicHandler(request, response);
    } else {
      missingHandler(request, response);
    }
  }
  
  module.exports = router;