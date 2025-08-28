let div = document.getElementById("main");
let displayed = 0;

function hideShow() {
    if (displayed == 1) {
        div.style.display = "block";
        displayed = 0;
    } else {
        div.style.display = "none";
        displayed = 1;
    }
}