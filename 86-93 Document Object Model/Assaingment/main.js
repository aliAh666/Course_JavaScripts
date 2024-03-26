// Assingment 1

// // --1--
// let myElement1 = document.getElementsByTagName("div");
// console.log(myElement1[0]);

// // --2--
// let myElement2 = document.getElementById("elzero");
// console.log(myElement2);

// // --3--
// let myElement3 = document.getElementsByClassName("element");
// console.log(myElement3[0]);

// // --4--
// let myElement4 = document.querySelector("div");  // 1
// console.log(myElement4);

// // --5--
// let myElement5 = document.querySelector(".element"); // 2
// console.log(myElement5);

// // --6--
// let myElement6 = document.querySelector("#elzero"); // 3
// console.log(myElement6);

// // --7--
// let myElement7 = document.querySelector("[name='js']"); // 4
// console.log(myElement7);

// // --8--
// let myElement8 = document.querySelectorAll("div");  // 1
// console.log(myElement8[0]);

// // --9--
// let myElement9 = document.querySelectorAll(".element"); // 2
// console.log(myElement9[0]);

// // --10--
// let myElement10 = document.querySelectorAll("#elzero"); // 3
// console.log(myElement10[0]);

// // --11--
// let myElement11 = document.querySelectorAll("[name='js']"); // 4
// console.log(myElement11[0]);

// // --12--
// let myElement12 = document.body; 
// console.log(myElement12.children[0]);

// // --13--
// let myElement13 = document.body; 
// console.log(myElement13.firstElementChild);

// // --14--
// let myElement14 = document.getElementsByName("js");
// console.log(myElement14[0]);

// // --15--
// let myElement15 = document.body.childNodes[1];
// console.log(myElement15);


// ######################################################################
//Assignment 02

// let divs = document.querySelectorAll("div");
// divs.forEach(function (ele){
//     ele.querySelector("img").setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     ele.querySelector("img").setAttribute("alt", "Elzero Logo");
// });



// ######################################################################

//Assignment 03


// let myInput = document.querySelector("[name='dollar']");
// let myDiv = document.getElementsByTagName("div");
// myInput.oninput = function(){
//   let z = (myInput.value * (15.6)).toFixed(2);
//   let div = document.querySelector("div");
//   div.innerHTML = "";
//   div.appendChild(document.createTextNode(`{${myInput.value}} USD Dollar = {${z}} Egyptian Pound`));
// }


// ######################################################################
//Assignment 04


{/* 
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div> 
*/}

// في هذا الحل لم استخدم اي رقم او اي حرف ولم اعرف اي متغير استخدمت توابع اللغة فقط مع اسماء الكلاسات


//  Div تغيير محتوى ال
// ------
// document.querySelector(".one").textContent = document.querySelector(".two").textContent;
// document.querySelector(".two").textContent = document.querySelector(".one").title[document.getElementsByTagName(".one").length].toUpperCase() 
// + document.querySelector(".one").title.slice(document.querySelector(".one").childNodes.length) + " " + (document.querySelector(".one").childNodes.length + document.querySelector(".one").childNodes.length);

// //  Attribute تغيير محتوى ال
// // ------
// document.querySelector(".one").attributes[document.querySelector(".one").childNodes.length].textContent = document.querySelector(".two").attributes[document.querySelector(".one").childNodes.length].textContent;
// document.querySelector(".two").attributes[document.querySelector(".one").childNodes.length].textContent = document.querySelector(".two").attributes[document.getElementsByTagName(".one").length].textContent;

// // عرض التغييرات
// // ------

// console.log(document.querySelector(".one"));
// console.log(document.querySelector(".two"));




// -------------- حل اخر صحيح لكن فيه القليل من التجاوز على نص المسألة -------------- //


// let divI = document.querySelector(".one");
// let divII = document.querySelector(".two");

// //  Div تغيير محتوى ال
// // ------
// let e = divI.textContent;
// divI.textContent = divII.textContent;
// divII.textContent = e + " " + document.getElementsByTagName("div").length;


// //  Attribute تغيير محتوى ال
// // ------
// divI.attributes[1].textContent = divII.attributes[1].textContent;
// divII.attributes[1].textContent = divII.attributes[0].textContent;
// // console.log(divII.attributes[1].textContent);


// console.log(divI);
// console.log(divII);


{/* المطلوب يصير هيك

<div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div> 

*/}


// ######################################################################
//Assignment 05

// let Images = document.querySelectorAll("img");
// Images.forEach(function (ele){
//     ele.alt ? ele.alt = "Old": ele.alt = "Elzero New";
// });

{/*  المطلوب يصير هيك

<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Elzero New" /> 

*/}




// ######################################################################
//Assignment 06

let results = document.querySelector(".results");
let submit = document.querySelector("[name = create]");
let contentText = document.querySelector("[name = texts]");
let numberOfrepetition = document.querySelector("[name = elements]");


let choose = document.getElementsByTagName("select"); 
console.log(choose[0].value);


submit.onclick = function (event) {
  
  if (choose[0].value === "Div") {
    results.innerHTML = "";
    for (let i = 1; i <= parseInt(numberOfrepetition.value); i++) {
      // انشاء ديف جديد
      let myDiv = document.createElement("div");
      // انشاء اتربيوت جديد اسمه تاتيل
      let myTitle = document.createAttribute("title");
      // انشاء اتربيوت جديد اسمه اي دي
      let myId = document.createAttribute("id");
      // تسمية الديف الجديد باسم بوكس
      myDiv.className = "box";
      //اضافة اتربيوت التايتل الى الديف الجديد
      myDiv.setAttributeNode(myTitle);
      //تسمية اتربيوت التايتل باسم تايتل
      myDiv.setAttribute("title", "Element");
      //اضافة اتربيوت الاي دي الى الديف الجديد
      myDiv.setAttributeNode(myId);
      //تسمية اتربيوت الاي دي باسم اي دي
      myDiv.setAttribute("id", "id-"+`${i}`);
      // تسمية المحتوى النصي للديف الجديد بقيمة حقل التسمية
      myDiv.innerText = contentText.value;
      // اضافة الديف الجديد الى ديف الريزسلت
      results.appendChild(myDiv);
    }

  }else if(choose[0].value === "Section"){
    results.innerHTML = "";
    for (let i = 1; i <= parseInt(numberOfrepetition.value); i++) {
      // انشاء سيكشن جديد
      let mySection = document.createElement("section");
      // انشاء اتربيوت جديد اسمه تاتيل
      let myTitle = document.createAttribute("title");
      // انشاء اتربيوت جديد اسمه اي دي
      let myId = document.createAttribute("id");
      // تسمية الديف الجديد باسم بوكس
      mySection.className = "box";
      //اضافة اتربيوت التايتل الى الديف الجديد
      mySection.setAttributeNode(myTitle);
      //تسمية اتربيوت التايتل باسم تايتل
      mySection.setAttribute("title", "Element");
      //اضافة اتربيوت الاي دي الى الديف الجديد
      mySection.setAttributeNode(myId);
      //تسمية اتربيوت الاي دي باسم اي دي
      mySection.setAttribute("id", "id-"+`${i}`);
      // تسمية المحتوى النصي للديف الجديد بقيمة حقل التسمية
      mySection.innerText = contentText.value;
      // اضافة الديف الجديد الى ديف الريزسلت
      results.appendChild(mySection);
    }
  }
  event.preventDefault(); // منع السلوك الافتراضي
}