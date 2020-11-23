document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        resize_info();
    };
});

function resize_info()
{
    let img = document.querySelectorAll('.card-img-top');
    for (let i in img) {
        let width = Number(img[i].offsetWidth);
        img[i].style.height =  width * 0.75 + 'px';
    }

}
function resize(img) {
    let width = Number(img.offsetWidth);
    img.style.height =  width * 0.75 + 'px';
}