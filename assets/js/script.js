"use strict";

// navbar js start----
let lastScroll = 0;

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrolling = window.scrollY;
  const navbar = document.querySelector(".navbar");
  const home_nav_active = document.querySelector(".home-nav-active");

  lastScroll = scrolling;

  if ((scrolling > 100) & navbar.classList.contains("home-nav-active")) {
    home_nav_active.classList.remove("home-nav");
  } else if ((scrolling < 100) & navbar.classList.contains("home-nav-active")) {
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

// cart-drawer js start---
const cartDrawer = document.querySelector(".cart-drawer");
const cartDrawerInner = document.querySelector(".cart-drawer-inner");

function openCartDrawer(event) {
  event.stopPropagation();
  cartDrawer?.classList.add("active");
  cartDrawerInner?.classList.add("active");
}

function closeCartDrawer(event) {
  event.stopPropagation();
  cartDrawer?.classList.remove("active");
  cartDrawerInner?.classList.remove("active");
}

document.querySelectorAll(".cart-drawer-open").forEach((btn) => {
  btn.addEventListener("click", openCartDrawer);
});

document
  .querySelectorAll(".cart-drawer-close-window-btn, .cart-drawer-close-btn")
  .forEach((btn) => {
    btn.addEventListener("click", closeCartDrawer);
  });

// cart-drawer js end---

// modal js start---
// class VanillaModal {
//   constructor(selector) {
//     this.modal = document.querySelector(selector);
//     this.closeEls = this.modal.querySelectorAll("[data-close]");
//     this.closeEls.forEach((el) =>
//       el.addEventListener("click", () => this.close()),
//     );
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Escape") this.close();
//     });
//   }
//   open() {
//     this.modal.classList.add("active");
//     document.body.style.overflow = "hidden";
//     this.modal.setAttribute("aria-hidden", "false");
//   }
//   close() {
//     this.modal.classList.remove("active");
//     document.body.style.overflow = "";
//     this.modal.setAttribute("aria-hidden", "true");
//   }
//   toggle() {
//     this.modal.classList.contains("active") ? this.close() : this.open();
//   }
// }

// const modal = new VanillaModal("#newsletterModal");
// setTimeout(() => modal.open(), 700);

// document.getElementById("openBtn").onclick = () => modal.open();
// modal js end---
