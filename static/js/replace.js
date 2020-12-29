document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
        resize_info();
    };
});

function resize_info() {
    if (document.documentElement.clientHeight > document.documentElement.clientWidth)
        document.querySelector('.main-img').setAttribute('src', '../static/img/fon_to_phone.jpg');
    else
        document.querySelector('.main-img').setAttribute('src', '../static/img/image-gusstory.jpg')
}

function resize(img) {
    if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
        img.setAttribute('src', '../static/img/fon_to_phone.jpg')
        img.style.width = "100%";
    } else
        img.style.width = "100%";
} 