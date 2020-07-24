const image = document.getElementById("cookie");
const paragraph = document.getElementById("clicker__counter");
let clicks = paragraph.innerText;
paragraph.innerHTML += "<br/>Скорость клика: ";
function clickME() {
    clicks++;
    paragraph.innerHTML = clicks;

    // // Данная запись равнозначна записи ниже
    // image.width += 150 * ((clicks%2==0) ? -1 : 1);

    if(clicks%2==0) {
        image.width -= 150;
    } else {
        image.width += 150;
    }
};
image.onclick = clickME;
// document.getElementById("clicker__counter").innerHTML = Date.now() - ;

