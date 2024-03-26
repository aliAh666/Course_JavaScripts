/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick --- الضغط على زر اليسار بالماوس
  --- oncontextmenu --- الضغط على زر اليمين بالماوس
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

