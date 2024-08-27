// CAMBIO COLOR HEADER

window.addEventListener("scroll", function(){
	let header = document.querySelector("header");

	header.classList.toggle("abajo", window.scrollY > 1000);
});

// Menú hamburguesa

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

// BOTÓN P/ SUBIR

function subir() {
	window.addEventListener("scroll", () => {
		let scroll = document.documentElement.scrollTop;
		let btnUp = document.getElementById("btn-up");

		if (scroll >= 1000) {
			btnUp.style.right = 30 + "px";
		} else {
			btnUp.style.right = -200 + "px";
		}
	})
}

subir();