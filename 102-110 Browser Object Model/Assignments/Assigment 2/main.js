let div = document.querySelector(".popup-wrap");

document.addEventListener('click',function (e){
    if (e.target.className === "close-btn popup-close") {
        div.style.display = "none";
    }
});

function showPoup() {
    div.style.display = "block";
}

let counter = setTimeout(showPoup, 5000);
