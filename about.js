const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const getInTouchBtn = document.getElementById("getInTouchBtn");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
getInTouchBtn.addEventListener("click", function () {
  window.location.href = "./contact.html";
});
