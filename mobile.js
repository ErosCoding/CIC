const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list li");
const activeClass = "active";

function animateLinks() {
  navLinks.forEach(function(link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
}

function handleClick() {
  navList.classList.toggle(activeClass);
  mobileMenu.classList.toggle(activeClass);
  animateLinks();
}

mobileMenu.addEventListener("click", handleClick)