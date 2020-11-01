let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
btnLeft.onclick = sliderleft;
let left = 0;
function sliderleft() {
    var card = document.getElementById('polosa');
    left = left - 313;
    if (left === -1565) {
        // left=0;
        btnLeft.style.display = 'none'
    }
    card.style.left = left + "px";
}
btnRight.onclick = sliderRight;

function sliderRight() {
    var card1 = document.getElementById('polosa');
    left = left + 313;
    if (left === 0) {
        // left=-1252;

    }
    if (left >= -1565) {
        btnLeft.style.display = 'block'


    }
    card1.style.left = left + "px";
}