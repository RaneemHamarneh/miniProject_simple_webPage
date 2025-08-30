let div = document.getElementById("main");
let displayed = 0;
let displayed1 = 0;

function hideShow() {
    if (displayed == 1) {
        div.style.display = "block";
        displayed = 0;
    } else {
        div.style.display = "none";
        displayed = 1;
    }
}

let p = document.getElementById("main2")

function changeText() {
    if (displayed1 == 1) {
        // show original text
        p.innerHTML = "I can Change By clicking on the button";
        displayed1 = 0;
    } else {
        // change to new text
        p.innerHTML = "New text!<br>Hello World";
        displayed1 = 1;
    }
}
