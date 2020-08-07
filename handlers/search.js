const axios = require("axios");

function searchHandler(request, response) {
  let data = "";
  request.on("data", (chunck) => {
    data += chunck;
  });

  request.on("end", () => {
    if (data) {
      //   console.log("we are inside the server!!!!!" + data);
      const url =
        "https://gist.githubusercontent.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4/raw/2c06c44dcea55ecbb6fbf20edfd240ec6373b688/state_capitals.json";
      axios.get(url).then((result) => {
        console.log(result);
        const newSearch = result.data.filter(
          (state) => state.name.toLowerCase() === data.toLowerCase()
        );
        console.log("bbbbb", newSearch);

        response.end(JSON.stringify(newSearch));
      });
      //  .catch (function (error) {
      //           console.log(error);
      //     }
      //   });
    }
  });
}
module.exports = searchHandler;
