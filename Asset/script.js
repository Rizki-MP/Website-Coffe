// ambil data
let toggle = document.querySelector(".toggle-nav input");
let ul = document.querySelector("nav ul");
let header = document.querySelector("header");

let button_kategori_1 = document.querySelector("#button-kategori-1")
let info_varian_1 = document.querySelector("#info-varian-1")
let button_kategori_2 = document.querySelector("#button-kategori-2")
let info_varian_2 = document.querySelector("#info-varian-2")
let closeInfo_1 = document.querySelector(".close-1")
let closeInfo_2 = document.querySelector(".close-2")

// header scrolling
window.addEventListener("scroll", function() {
	scrollposition = window.scrollY;

	if (scrollposition >= 60) {
		header.classList.add("shadow-nav")
	} else if (scrollposition < 60) {
		header.classList.remove("shadow-nav")
	}
})

// navbar responsive
toggle.addEventListener("click", function() {
	ul.classList.toggle("muncul")
	header.classList.toggle("muncul-lagi")
})
// end Navbar resonsive

// informasi produk 1
button_kategori_1.addEventListener("click", function() {
	info_varian_1.classList.add("scale-variant")
})

closeInfo_1.addEventListener("click", function() {
	info_varian_1.classList.remove("scale-variant")
})

// informasi produk 2
button_kategori_2.addEventListener("click", function() {
	info_varian_2.classList.add("scale-variant")
})

closeInfo_2.addEventListener("click", function() {
	info_varian_2.classList.remove("scale-variant")
})