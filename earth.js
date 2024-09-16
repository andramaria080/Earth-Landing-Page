const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const serviceData = document.getElementById("service");
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
      "Custom web design for small businesses we help you capture new audience and increase your sales",
  },
  {
    image: "./img/service-2.png",
    title: "Graphic Design",
    paragraph:
      "Logos, merchandise and more. Anyone can create nice graphics. We think it`s better to crate memorable ones. ",
  },
  {
    image: "./img/service-3.png",
    title: "Content Creation",
    paragraph:
      "Want to atract people to your website? You have to have the best content in the world. That`s what we do.",
  },
];
data.forEach((service) => {
  const serviceElement = `
  <div class="service-content">
  <img src="${service.image}" alt="${service.title}"/>
  <div class="service-data">
  <h1>${service.title}</h1>
  <p>${service.paragraph}</p> 
  </div>
  </div>`;
  serviceData.innerHTML += serviceElement;
});
