const path = require("path");
const fs = require("fs");
const origin = require("../data/states.json");

function autoHandler(request, response) {
  let data = "";

  request.on("data", (chunk) => {
    data += chunk;
  });

  request.on("end", () => {
    if (data) {
      response.writeHead(200, { "content-type": "application/json" });

      let matches = origin.filter(
        (state) =>
          state.name.toLowerCase().indexOf(JSON.parse(data).toLowerCase()) === 0
      );
      console.log(matches);

      response.end(JSON.stringify(matches));
    }
  });
}

module.exports = autoHandler;
