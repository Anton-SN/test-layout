const nav = document.getElementsByClassName('wrapp__nav')[0];
const form = document.getElementsByClassName('nav__page input')[0];
const btn = document.getElementsByClassName('input__btn')[0];
const inputItem = document.getElementsByClassName("input__item")

window.addEventListener('scroll', function() { 
    if (pageYOffset >= 72) {
        nav.classList.add("nav__page--fixed")
    } else {
        nav.classList.remove("nav__page--fixed")
    }
});

form.addEventListener('keyup', function() {
    const length = form.elements.Length.value
    const limit = form.elements.Limit.value
    if (length && limit) {
        btn.classList.remove("input__btn--disabled")
    }
})