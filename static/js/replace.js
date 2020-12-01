const mql = window.matchMedia("(orientation: portrait)");

if (mql.matches) {
    let img = document.querySelector('.replace-img');
    img.setAttribute('src', '../static/img/image16.jpg');
} else {
    let img = document.querySelector('.replace-img');
    img.setAttribute('src', '../static/img/image-gusstory.jpg');
}
mql.addListener(function (m) {
    if (m.matches) {
        let img = document.querySelector('.replace-img');
        img.setAttribute('src', '../static/img/image16.jpg');
    } else {
        let img = document.querySelector('.replace-img');
        img.setAttribute('src', '../static/img/image-gusstory.jpg');
    }
});