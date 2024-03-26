/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");


// element.before("Hello From JS"); //اضافة نص قبل الديف
// element.after("Hello From JS"); // اضافة نص بعد الديف


// element.before(createdP); // للصفحة inspect عمول
// element.after(createdP); // للصفحة inspect عمول


// element.append("Hello From JS"); // اضافة نص داخل الديف لكن اخر شي
// element.append(createdP); // اضافة عنصر داخل الديف لكن اخر شي
// بالابيند رح يضيف العنصر او النص اخر شي جوا العنصر يعني رح يخلي العنصر يلي ضفتو اخر عنصر بالديف



// element.prepend("Hello From JS");// اضافة نص داخل الديف لكن اول شي
// element.prepend(createdP); // اضافة عنصر داخل الديف لكن اول شي
// بريبيند رح يضيف العنصر او النص اول شي جوا العنصر يعني رح يخلي العنصر يلي ضفتو اول عنصر بالديف


element.remove(); // ازالة العنصر بشكل كامل 