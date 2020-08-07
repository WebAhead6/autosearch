const input = document.querySelector("input");
const form = document.querySelector("form");
const info = document.querySelector("#newResult");
const abbr = document.querySelector(".abbreviation");
const capital = document.querySelector(".capital");
const lat = document.querySelector(".lat");
const long = document.querySelector(".long");

let globalState = "";
input.addEventListener("keyup", function (event) {
  const options = {
    method: "post",
    Headers: { "content-type": "applicaion/json" },
    body: JSON.stringify(event.target.value),
  };
  fetch("/autocomplete", options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(event.target.value);
      var parent;
      var parent = document.getElementById("myDatalist");

      parent.innerHTML = "";
      data.forEach((state) => {
        var node = document.createTextNode(state.name);
        var ele = document.createElement("option");
        ele.append(node);
        parent.appendChild(ele);
        globalState = state;
      });
    });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
  fetch("/search", {
    method: "POST",
    body: globalState.name,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (newSearch) {
      console.log(newSearch);
      info.textContent = newSearch[0].name;
      abbr.textContent = newSearch[0].abbr;
      capital.textContent = newSearch[0].capital;
      lat.textContent = newSearch[0].lat;
      long.textContent = newSearch[0].long;
    });
});
