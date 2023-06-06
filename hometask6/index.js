// TASK 1 -----------

// var list = document.getElementById("list");
// var listItems = list.getElementsByTagName("li");

// var output = listItems[0].textContent + ", ";
// output += listItems[listItems.length - 1].textContent + ", ";
// output += listItems[1].textContent + ", ";
// output += listItems[3].textContent + ", ";
// output += listItems[2].textContent;

// alert(output);

// TASK 1 -----------

// TASK 3 -----------

var body = document.createElement("body");
var main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

var div = document.createElement("div");
div.setAttribute("id", "myDiv");

var paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";

// Додавання елементів до DOM
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

// Додавання body до документу
document.documentElement.appendChild(body);

// TASK 3 -----------
