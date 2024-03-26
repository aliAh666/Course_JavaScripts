//Assignment 01

let promptMsg = prompt("Print Number From – To", "Example: 5-20");

if (promptMsg.includes("-")) {
    let first = parseInt(promptMsg.slice(0,promptMsg.indexOf("-")));
    let end = parseInt(promptMsg.slice(promptMsg.indexOf("-")+1));
    let number = [first, end];
    let sorted_number = number.sort();
    for (let i = sorted_number[0]; i <= sorted_number[sorted_number.length - 1]; i++) {
        document.write(i);    50-
        document.write("<br>");
    }
}