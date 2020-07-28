// const btn = document.querySelector("");

const input = document.querySelector("input");
// const log = document.getElementById("log");

const filterItems = (arr, query) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
input.addEventListener("keyup", function (event) {
  fetch;
  console.log(event.target.value);
  console.log(filterItems(fruits, event.target.value));
  event.preventDefault();

  var parent;
  var num = filterItems(fruits, event.target.value);
  var parent = document.getElementById("myDatalist");

  parent.innerHTML = "";

  num.forEach((itemText) => {
    var node = document.createTextNode(itemText);
    var ele = document.createElement("option");
    ele.append(node);
    parent.appendChild(ele);
  });

  //   document.getElementById("name").value = "";
});
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
