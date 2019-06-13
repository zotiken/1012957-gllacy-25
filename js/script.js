// "use strict"
var rad = document.querySelectorAll( '.slider-toggle' );
var img = document.querySelectorAll(".img-slider");
var body = document.querySelector( "body");
console.log(rad);
console.log(img);
console.log(body);
function slider() {
for (var i = 0; i < rad.length; i++) {
   if (rad[i].checked) {
       console.log(rad[i]);
    img[i].style.opacity = '1';
    if (i == 0) {
        body.style.backgroundColor = '#849d8f';
    }
    if (i == 1) {
        body.style.backgroundColor = '#8996a6';
    }
    if (i == 2) {
        body.style.backgroundColor = '#9d8b84';
    }
}
   
    else {
        img[i].style.opacity = '0';
    }
    }
   }  