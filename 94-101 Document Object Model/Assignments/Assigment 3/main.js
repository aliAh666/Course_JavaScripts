//Assignment 03
let paragr = document.getElementsByTagName("p")[0];
paragr.remove();

let our_element = document.querySelector(".our-element");

let start = document.createElement("div");
start.className = "start";
start.title = "Start Element";
start.textContent = "Start";
start.setAttribute("data-value","Start");

let end = document.createElement("div");
end.className = "end";
end.title = "End Element";
end.textContent = "End";
end.setAttribute("data-value","End");

document.body.prepend(start);
our_element.after(end);
