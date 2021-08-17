//mobile Responsiveness
//Navbar Responsiveness
const navToggle = document.querySelector(".navToggle");
const navContainer = document.querySelector(".nav-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-active");
  navContainer.classList.toggle("show-nav-container");
});
