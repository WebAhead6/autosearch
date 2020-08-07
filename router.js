const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autoHandler = require("./handlers/auto");
const searchHandler = require("./handlers/search");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/autocomplete" && request.method === "POST") {
    autoHandler(request, response);
  } else if (url === "/search" && request.method === "POST") {
    searchHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;
