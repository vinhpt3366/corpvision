$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
  });
});

$(document).ready(function () {
  $(".slider-list").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    cssEase: "linear",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarIcon = document.getElementById("navbar-icon");

  navbarToggler.addEventListener("click", function () {
    if (navbarIcon.classList.contains("fa-bars")) {
      navbarIcon.classList.remove("fa-bars");
      navbarIcon.classList.add("fa-times");
    } else {
      navbarIcon.classList.remove("fa-times");
      navbarIcon.classList.add("fa-bars");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbarCollapse = document.getElementById("navbarNav");
  var navbarButtons = document.querySelectorAll(".navbar-buttons");
  var darkModeButtons = document.querySelectorAll(".btn-mode");

  navbarCollapse.addEventListener("show.bs.collapse", function () {
    navbarButtons.forEach(function (buttons) {
      buttons.style.display = "flex";
    });
  });

  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    if (window.innerWidth < 992) {
      navbarButtons.forEach(function (buttons) {
        if (buttons.closest(".navbar-toggler-wrapper")) {
          buttons.style.display = "none";
        }
      });
    }
  });

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    darkModeButtons.forEach(function (button) {
      const icon = button.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    });
  }

  darkModeButtons.forEach(function (button) {
    button.addEventListener("click", toggleDarkMode);
  });
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
  $("header").toggleClass("active");
});
$(document).on("ready", function () {
  if ($(window).width() > 991) {
    $("header").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
  });
});

new WOW().init();

AOS.init({
  // attributeName: 'data-animation'
});
