const menuBtn = document.querySelector(".menu-btn");
const cardServices = document.getElementById("cardServices");
const navLinks = document.querySelector(".nav-links");
const getInTouchBtn = document.getElementById("getInTouchBtn");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
getInTouchBtn.addEventListener("click", function () {
  window.location.href = "./contact.html";
});
const data = [
  {
    image: "./img/service-1.png",
    title: "Web Design",
    paragraph:
      "We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing of filling out our form. You will recive a free quote by email within 24 hours.",
  },
  {
    image: "./img/service-2.png",
    title: "Graphic Design",
    paragraph:
      "We specialize in logos, merchandise and more. Anyone can create nice graphics but it`s much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will recive a free quote by email within 24 hours.",
  },
  {
    image: "./img/service-3.png",
    title: "Content Creation",
    paragraph:
      "Want to atract people to your website? You have to have the best content in the world. Our content writers will create award willing content for you. Contact us by calling, emailing or filling out our form. You will recive a free quote by email within 24 hours.",
  },
];

cardServices.innerHTML = data
  .map(
    (item) => `
     <div class="card">
        <div class="card-text">
        <h1 class="card-title">${item.title}</h1>
        <p class="card-paragraph">${item.paragraph}</p>
        <button class="primary-btn">EXPLORE</button>
        </div>
        <div class="card-img">
        <img src="${item.image}" alt="${item.title}">
        </div>
      </div>`
  )
  .join("");
