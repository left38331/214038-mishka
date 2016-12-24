    var navMain = document.querySelector('.main-nav');
    var navUser = document.querySelector(".user-nav");
    var navToggle = document.querySelector('.page-header__toggle');

    navMain.classList.remove('main-nav--nojs');
    navUser.classList.remove('user-nav--nojs');
    navToggle.classList.remove("page-header__toggle--nojs");
    navToggle.style.backgroundImage="url(img/icon-menu-open.svg)";

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navToggle.style.backgroundImage="url(img/icon-menu-close.svg)";
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navToggle.style.backgroundImage="url(img/icon-menu-open.svg)";
      }
      if (navUser.classList.contains("user-nav--closed")) {
        navUser.classList.remove("user-nav--closed");
        navUser.classList.add("user-nav--opened");
      } else {
        navUser.classList.add("user-nav--closed");
        navUser.classList.remove("user-nav--opened");
      }
    });

    var link = document.querySelector(".product__buy");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close");
    var overlay = document.querySelector(".modal-overlay");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      overlay.classList.add("modal-overlay-show");
    });

    overlay.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    });
