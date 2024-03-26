/*
  DOM [Cloning]
  - cloneNode(Deep)
*/


// let myp = document.querySelector("p");
// let mydiv = document.querySelector("div");

// mydiv.appendChild(myp);
// هون انا خدت البرغراف من مكانه وحطيته بالديف

// ******************************************************************

// منشان اخد نسخة من البارغراف وحط النسخة بالديف بستخدم التالي

let myP = document.querySelector("p").cloneNode(true);

// ---------------
// cloneNode(false)
// يأخذ نسخة من البرغراف مع الاتربيوت الخاصة به ومااا بياخد يلي داخل البرغراف

// cloneNode(true)
// يأخذ نسخة من البرغراف مع الاتربيوت الخاصة به   و    بياخد يلي داخل البرغراف
// ---------------

let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

