const navLinks = document.getElementById("nav-links");
const menuToggle = document.getElementById("toggle-btn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-link-active");
});
