let navToggleButton = document.querySelector(".nav-toggle");
let nav = document.querySelector(".navbar");

navToggleButton.addEventListener("click", () => {
	nav.classList.toggle("show-navbar");
});
