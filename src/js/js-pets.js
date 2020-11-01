
let card = document.querySelectorAll('.slider__card-pets');
let btnleft=document.querySelector('.btn-left')
console.log(card)
let current = 0;

function slider() {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('opacity0');
        console.log(card[i])
    }
    card[current].classList.remove('opacity0');

}
slider();

document.querySelector('.btn-right').onclick  = function () {
    if (current + 1 == card.length) {
        current = 0
    }
    current++
    slider()
}
document.querySelector('.btn-left').onclick  = function () {
    btnleft.classList.add('button_colored')
    if (current - 1 == -1) {
        current = card.length - 1;
    }
    current--;
    slider();
}