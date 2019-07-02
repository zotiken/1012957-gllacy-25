// -----------slider-----------------

var rad = document.querySelectorAll('.slider-toggle');
var img = document.querySelectorAll(".img-slider");
var body = document.querySelector("body");
var title = document.querySelector(".poster-title");
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
                title.innerHTML = "Крем-брюле и пломбир с малиновым джемом";
            }
            if (i == 1) {
                body.style.backgroundColor = '#8996a6';
                title.innerHTML = "Шоколадный пломбир и лимонный сорбет";
            }
            if (i == 2) {
                body.style.backgroundColor = '#9d8b84';
                title.innerHTML = "Пломбир с помадкой и клубничный щербет";
            }
        } else {
            img[i].style.opacity = '0';
        }
    }
}

// -----------------modal-----------------------------

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

link.addEventListener("click", function(evt) {
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

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal");
    overlay.classList.remove("modal");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal");
    overlay.classList.remove("modal");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal")) {
            popup.classList.remove("modal");
        }
    }
});