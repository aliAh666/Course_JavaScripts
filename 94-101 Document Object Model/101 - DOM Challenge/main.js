/*===========================Bulding-Header-Content===========================*/

// ********Create Header******** //
let header = document.createElement("header");
header.className = "website-head";
// -----Styling Header-----
header.style.setProperty("display", "flex");
header.style.setProperty("padding", "20px");
header.style.setProperty("background-color", "rgb(255, 255 ,255)");
header.style.setProperty("justify-content", "space-between");
header.style.setProperty("align-items", "center");
// ************************* //

// ****Create Logo(Elzero)*** //
let divLogo = document.createElement("div");
divLogo.className = "logo";
divLogo.title = "Website Logo";
divLogo.textContent = "Elzero";
// -----Styling Logo-----
divLogo.style.cssText = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px";
// ------End Style-------
header.prepend(divLogo);
// ************************* //

// ********Create ul******** //
let ulHead = document.createElement("ul");
ulHead.className = "menu";
// -----Styling ul-----
ulHead.style.setProperty("padding", "0px");
ulHead.style.setProperty("margin", "0px");
ulHead.style.setProperty("display", "flex");
ulHead.style.setProperty("list-style", "none");
// ------End Style-------
header.append(ulHead);
// ************************* //

// ********Create Link******** //
let liLink = document.createElement("a");
; liLink.setAttribute("href", "#");
// -----Styling Link-----
liLink.style.color = "rgb(35, 169, 110)";
liLink.style.setProperty("text-decoration", "none");
// ------End Style-------
// ************************* //

// ********Create li******** //
let li1 = document.createElement("li");
// -----Styling Li-----
li1.style.setProperty("margin", "0 0.5rem");
// ------End Style-------
liLink1 = liLink.cloneNode(true);
liLink1.textContent = "Home";
li1.append(liLink1);
// -----------
let li2 = li1.cloneNode(true);
liLink1.textContent = "About";
ulHead.append(li2);
// -----------
let li3 = li1.cloneNode(true);
liLink1.textContent = "Service";
ulHead.append(li3);
// -----------
let li4 = li1.cloneNode(true);
liLink1.textContent = "Contact";
ulHead.append(li4);
// -----------
ulHead.append(li1);
// ************************* //

// ********Add All Header Content To Body******** //
document.body.prepend(header);
// ************************* //
/*=============================End Bulding-Header=============================*/



// ########################################################################################################## //



/*===========================Bulding-Body-Content===========================*/

// ********Create Div For All Element******** //
let contentDiv = document.createElement("div");
contentDiv.className = "content";
// -----Styling Content-----
contentDiv.style.setProperty("display", "flex");
contentDiv.style.setProperty("padding", "20px");
contentDiv.style.setProperty("flex-wrap", "wrap");
contentDiv.style.setProperty("justify-content", "center");
contentDiv.style.setProperty("gap", "20px");
contentDiv.style.setProperty("min-height", "calc(100vh - 142px)");
contentDiv.style.setProperty("box-sizing", "border-box");
contentDiv.style.setProperty("background-color", "rgba(221, 221, 221, 0.911)");
// ------End Style-------
// ****************************************** //

for (let i = 1; i < 16; i++) {
    // ********Create Product Div******** //
    let product = document.createElement("div");
    product.className = "product";
    product.textContent = `product`;
    // -----Styling Product Div----- //
    product.style.setProperty("padding", "20px");
    product.style.setProperty("background-color", "rgb(255, 255 , 255)");
    product.style.setProperty("border", "1px solid rgb(221, 221, 221)");
    product.style.setProperty("width", "calc((100% - 40px) / 3)");
    product.style.setProperty("box-sizing", "border-box");
    product.style.setProperty("text-align", "center");
    product.style.setProperty("color", "rgb(136, 136 , 136)");
    product.style.setProperty("border-radius", "6px");
    // ----------End Style---------- //
    // ********************************** //


    // ********Create Span******** //
    let spanProduct = document.createElement("span");
    spanProduct.textContent = `${i}`;
    // -----Styling Span-----
    spanProduct.style.setProperty("color", "rgb(35, 169, 110)");
    spanProduct.style.setProperty("font-size", "40px");
    spanProduct.style.setProperty("font-weight", "normal");
    spanProduct.style.setProperty("display", "block");
    spanProduct.style.setProperty("margin-bottom", "10px");
    spanProduct.style.setProperty("margin-top", "10px");
    // ------End Style-------
    // *************************** //

    product.prepend(spanProduct);
    contentDiv.append(product);

}
document.body.append(contentDiv);
/*=============================End-Bulding-Body=============================*/


// ########################################################################################################## //


/*==============================Bulding-Footer==============================*/

// ********Create footer******** //
let footer = document.createElement("footer");
footer.className = "footer";
footer.textContent = "Copyright 2023";
// ***************************** //

// -----Styling Footer-----
footer.style.setProperty("background-color", "rgb(35, 169, 110)");
footer.style.setProperty("font-size", "26px");
footer.style.setProperty("text-align", "center");
footer.style.setProperty("padding", "20px");
footer.style.setProperty("color", "rgb(255, 255 , 255)");
footer.style.setProperty("margin-top", "10px");
// ------End Style-------

document.body.append(footer);
/*============================End-Bulding-Footer=============================*/