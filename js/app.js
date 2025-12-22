// ********** nav toggle ************
// select button and links
const toggleBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show");
  toggleBtn.classList.toggle("active");
});
