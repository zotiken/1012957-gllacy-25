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
// ------------------------------------------------------
  var link = document.querySelector(".form-feedback-link");
  
  var popup = document.querySelector(".feedback-form");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-closed");
  
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal");
    overlay.classList.add("modal");
    
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal");
    popup.classList.remove("modal-error");
  });
  
//   form.addEventListener("submit", function (evt) {
//     if (!name.value || !email.value) {
//       evt.preventDefault();
//       popup.classList.remove("modal-error");
//       popup.offsetWidth = popup.offsetWidth;
//       popup.classList.add("modal-error");
//     } else {
//       if (isStorageSupport) {
//         localStorage.setItem("name", name.value);
//       }
//     }
//   });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal")) {
        popup.classList.remove("modal");
        popup.classList.remove("modal-error");
      }
    }
  });