/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Samera","Emad", "Stop", "Yasser", "Ammar"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Elene", "Eiead", "Eman"];

// document.write(myAdmins[0][0]);

document.write(`<div>We Have X Admins</div>`);
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    let a = i;
    break;
  }else{
    a = i+1; 
  }
}
document.write(`<div>We Have ${a} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }else{
    document.write(`<hr>`);
    document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]} `);
    document.write(`<h2>Team Members :</h2>`);
    for (let j = 0; j < myEmployees.length; j++) {
      if (myAdmins[i][0] === myEmployees[j][0]) {
        document.write(`<div> - ${myEmployees[j]}</div>`);
      }     
    }
  }
}