"use strict";

// Hamburger-menu
let menu = document.getElementById("menu");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalContainer = document.querySelector(".modal-container");

menu.addEventListener("click", function () {
  first.classList.toggle("right");
  second.classList.toggle("hide");
  third.classList.toggle("left");
  modal.classList.toggle("active");
  modalBackdrop.classList.toggle("active");
  modalContainer.classList.toggle("active");
});

// Time
let time = document.getElementById("current-time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}, 1000);
