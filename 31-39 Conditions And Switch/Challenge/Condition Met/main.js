

let st = "Elzero web School";

// *******************************************************************
// الطلب الاول

if (st[st.indexOf("W")] || st[st.indexOf("w")] === "w") {
  console.log("Good");
}


// *******************************************************************

// الطلب الثاني

if (typeof st.length !== "string") {
  console.log("Good");
}

// *******************************************************************

// الطلب الثالث

if (typeof st.length === "number") {
  console.log("Good");
}

// *******************************************************************

// الطلب الرابع

if ((st.substring(0, 6)).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}