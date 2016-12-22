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
