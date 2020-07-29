const input = document.querySelector("input");

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
      });
    });
});
