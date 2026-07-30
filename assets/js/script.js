$(document).ready(function () {
  "use strict";
  // navbar js start ---
  //   $(window).on("load scroll", function () {
  //     var scrolling = $(this).scrollTop();
  //     if (scrolling > 50) {
  //       $(".navbar").addClass("nav-fixed");
  //       $(".home-nav-active").removeClass("home-nav");
  //     } else {
  //       $(".navbar").removeClass("nav-fixed");
  //       $(".home-nav-active").addClass("home-nav");
  //     }
  //   });

  // cart-sidebar js start---
  $(".side-cart-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").addClass("active");
    $("body").addClass("active");
  });

  $(".cart-sidebar-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").removeClass("active");
    $("body").removeClass("active");
  });

  $(".side-cart-close-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").removeClass("active");
    $("body").removeClass("active");
  });
  // cart-sidebar js end---

  // sticky-add-to-cart-section js start--
  $(window).on("load scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 1100) {
      $(".sticky-add-to-cart-section").addClass("fixed");
    } else {
      $(".sticky-add-to-cart-section").removeClass("fixed");
    }
  });
  // sticky-add-to-cart-section js end--
});

let lastScroll = 0;

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrolling = window.scrollY;
  const navbar = document.querySelector(".navbar");
  const home_nav_active = document.querySelector(".home-nav-active");

  if (scrolling > 1) {
    navbar.classList.add("nav-fixed");
    home_nav_active.classList.remove("home-nav");
  } else {
    navbar.classList.remove("nav-fixed", "nav-hidden");
    home_nav_active.classList.add("home-nav");
  }

  if (scrolling > lastScroll && scrolling > 10) {
    // scrolling down — hide header
    navbar.classList.add("nav-hidden");
  } else if (scrolling < lastScroll) {
    // scrolling up — show header
    navbar.classList.remove("nav-hidden");
  }

  lastScroll = scrolling;
}
