const mql = window.matchMedia("(orientation: portrait)");

if (mql.matches) {
    let img = document.querySelector('.replace-img');
    img.setAttribute('src', '../static/img/fon_to_phone.JPEG');
} else {
    let img = document.querySelector('.replace-img');
    img.setAttribute('src', '../static/img/image-gusstory.jpg');
}
mql.addListener(function (m) {
    if (m.matches) {
        let img = document.querySelector('.replace-img');
        img.setAttribute('src', '../static/img/fon_to_phone.JPEG');
    } else {
        let img = document.querySelector('.replace-img');
        img.setAttribute('src', '../static/img/image-gusstory.jpg');
    }
});