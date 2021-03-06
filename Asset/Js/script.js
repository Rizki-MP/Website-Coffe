// ambil data
let toggle = document.querySelector(".toggle-nav input");
let ul = document.querySelector("nav ul");
let header = document.querySelector("header");

let button_kategori_1 = document.querySelector("#button-kategori-1")
let button_kategori_3 = document.querySelector("#button-kategori-3")
let info_varian_1 = document.querySelector("#info-varian-1")
let button_kategori_2 = document.querySelector("#button-kategori-2")
let info_varian_2 = document.querySelector("#info-varian-2")
let info_varian_3 = document.querySelector("#info-varian-3")
let closeInfo_1 = document.querySelector(".close-1")
let closeInfo_2 = document.querySelector(".close-2")
let closeInfo_3 = document.querySelector(".close-3")
let closeInfo_about = document.querySelector(".close-about")
let button_about = document.querySelector("#button-about")
let container_btn_about = document.querySelector(".container-paragraf-about")
let closeInfo_skill = document.querySelector(".close-skill")
let button_skill = document.querySelector("#button-skill")
let container_btn_skill = document.querySelector(".container-content-skill")
let closeInfo_project = document.querySelector(".close-project")
let button_project = document.querySelector("#button-project")
let container_btn_project = document.querySelector(".container-content-project")

// header scrolling
window.addEventListener("scroll", function() {
	scrollposition = window.scrollY;

	if (scrollposition >= 60) {
		header.classList.add("shadow-nav")
		ul.classList.add("shadow-nav-ul")
	} else if (scrollposition < 60) {
		header.classList.remove("shadow-nav")
		ul.classList.remove("shadow-nav-ul")
	}
})

// navbar responsive
toggle.addEventListener("click", function() {
	ul.classList.toggle("muncul")
	header.classList.toggle("muncul-lagi")
})
// end Navbar resonsive

// informasi produk 1 (pop-up)
button_kategori_1.addEventListener("click", function() {
	info_varian_1.classList.add("scale-variant")
})

closeInfo_1.addEventListener("click", function() {
	info_varian_1.classList.remove("scale-variant")
})

// informasi produk 2 (pop-up)
button_kategori_2.addEventListener("click", function() {
	info_varian_2.classList.add("scale-variant")
})

closeInfo_2.addEventListener("click", function() {
	info_varian_2.classList.remove("scale-variant")
})

// informasi produk 3 (pop-up)
button_kategori_3.addEventListener("click", function() {
	info_varian_3.classList.add("scale-variant")
})

closeInfo_3.addEventListener("click", function() {
	info_varian_3.classList.remove("scale-variant")
})

// button-about (pop-up)
button_about.addEventListener("click", function() {
	container_btn_about.classList.add("button_about_muncul")
})

closeInfo_about.addEventListener("click", function() {
	container_btn_about.classList.remove("button_about_muncul")
})

// button-skill (pop-up)
button_skill.addEventListener("click", function() {
	container_btn_skill.classList.add("button_skill_muncul")
})

closeInfo_skill.addEventListener("click", function() {
	container_btn_skill.classList.remove("button_skill_muncul")
})

// button-project (pop-up)
button_project.addEventListener("click", function() {
	container_btn_project.classList.add("button_project_muncul")
})

closeInfo_project.addEventListener("click", function() {
	container_btn_project.classList.remove("button_project_muncul")
})