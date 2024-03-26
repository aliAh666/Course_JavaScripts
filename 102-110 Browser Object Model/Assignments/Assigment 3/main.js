let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
    div.textContent = "Your Link Is Ready";
  }
}
let counter = setInterval(countdown, 1000);
