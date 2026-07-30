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

// navbar js start----
let lastScroll = 0;

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrolling = window.scrollY;
  const navbar = document.querySelector(".navbar");
  const home_nav_active = document.querySelector(".home-nav-active");

  if (scrolling > 1) {
    navbar.classList.add("nav-fixed");
  } else {
    navbar.classList.remove("nav-fixed", "nav-hidden");
  }

  if (scrolling > lastScroll && scrolling > 10) {
    // scrolling down — hide header
    navbar.classList.add("nav-hidden");
  } else if (scrolling < lastScroll) {
    // scrolling up — show header
    navbar.classList.remove("nav-hidden");
  }

  lastScroll = scrolling;

  if ((scrolling > 1) & navbar.classList.contains("home-nav-active")) {
    home_nav_active.classList.remove("home-nav");
  } else if ((scrolling < 1) & navbar.classList.contains("home-nav-active")) {
    home_nav_active.classList.add("home-nav");
  }
}
// navbar js end----

// accordion js start----
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-items").forEach((section) => {
    const items = section.querySelectorAll(".accordion-item");

    function openItem(item) {
      const content = item.querySelector(".accordion-item-content");
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }

    function closeItem(item) {
      const content = item.querySelector(".accordion-item-content");
      item.classList.remove("active");
      content.style.maxHeight = null;
    }

    // ==========================
    // DEFAULT OPEN
    // ==========================

    if (section.classList.contains("toggle-item") && items.length) {
      openItem(items[0]);
    } else if (section.classList.contains("all-item-open")) {
      items.forEach(openItem);
    } else if (section.classList.contains("first-item-open") && items.length) {
      openItem(items[0]);
    }

    // Recalculate height after page fully loaded (fix refresh height cut issue)
    window.addEventListener("load", () => {
      items.forEach((item) => {
        if (item.classList.contains("active")) {
          const content = item.querySelector(".accordion-item-content");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

    // Recalculate on resize
    window.addEventListener("resize", () => {
      items.forEach((item) => {
        if (item.classList.contains("active")) {
          const content = item.querySelector(".accordion-item-content");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

    // ==========================
    // CLICK
    // ==========================

    items.forEach((item) => {
      const header = item.querySelector(".accordion-item-title-wrap");

      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // all-item-open mode
        if (section.classList.contains("toggle-item")) {
          if (isActive) {
            closeItem(item);
          } else {
            openItem(item);
          }
          return;
        }

        if (section.classList.contains("all-item-open")) {
          if (isActive) {
            closeItem(item);
          } else {
            openItem(item);
          }
          return;
        }

        // single-open mode
        items.forEach(closeItem);

        if (!isActive) {
          openItem(item);
        }
      });
    });
  });
});
// accordion js end----
