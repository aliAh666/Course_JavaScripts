
let elementArr = document.querySelector("[title='Current']");
let ins_ert = document.querySelector(".classes-to-add");
let del_ete = document.querySelector(".classes-to-remove");
let ddiv = document.querySelector(".classes-list");
let onload_classes = elementArr.className.split(' ').sort();


if (elementArr.getAttribute("class") == '') {
        ddiv.children[1].textContent = "No Classes To Show";
} else {

        for (let i = 0; i < elementArr.classList.length; i++) {
                let create_span = document.createElement("span");
                create_span.append(onload_classes[i].toLowerCase());
                ddiv.children[1].append(create_span);
        }
}
// Add Clases
ins_ert.onmouseleave = function () {
        if (ins_ert.value.length !== 0) {
                ddiv.children[1].textContent = '';
                let inputt = ins_ert.value.toLowerCase().trim();
                let inputt_class = inputt.split(" ");
                let current_class = elementArr.className.split(" ");
                const children = current_class.concat(inputt_class);
                let childrenTrim = children.filter(Boolean).sort();
                elementArr.className = childrenTrim.join(' ').toLowerCase().trim();
                ddiv.children[1].textContent = '';
                for (let i = 0; i < childrenTrim.length; i++) {
                        let create_span = document.createElement("span");
                        create_span.append(childrenTrim[i].toLowerCase());
                        ddiv.children[1].appendChild(create_span);
                }
                ins_ert.value = "";
        }

};


// Remove Clases
del_ete.onmouseleave = function () {

        if ((del_ete.value).length !== 0) {
                let current_class = elementArr.className.split(" ");
                let oitput_class = del_ete.value.split(" ");

                let filterdCurrent = current_class.map(function (ele) {
                        return ele.toLowerCase();
                });

                let filterdInput = oitput_class.map(function (el) {
                        return el.toLowerCase();
                });

                function arrayDifference(arr1, arr2) {
                        const difference = [];
                        for (let i = 0; i < arr1.length; i++) {
                                if (arr2.indexOf(arr1[i]) === -1) {
                                        difference.push(arr1[i]);
                                }
                        }
                        return difference;
                }
                const difference = arrayDifference(filterdCurrent, filterdInput);
                difference.sort();
                elementArr.className = difference.join(' ').toLowerCase();
                ddiv.children[1].textContent = '';
                for (let i = 0; i < elementArr.classList.length; i++) {
                        let create_span = document.createElement("span");
                        create_span.append(elementArr.classList[i].toLowerCase());
                        ddiv.children[1].append(create_span);

                }
        }
        del_ete.value = "";
        if (elementArr.getAttribute("class") == '') {
                ddiv.children[1].textContent = "No Classes To Show";
        }
}


// Change Background-Color of Input Field
const form = document.querySelector(".assign");

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "#ee967b";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);