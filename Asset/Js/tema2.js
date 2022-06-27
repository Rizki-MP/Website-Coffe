// ambil
let button_nav_tema = document.querySelector("#tema-nav")
let button_nav_tema = document.querySelector("#tema-nav")
let muncul_kotak_tema = document.querySelector(".muncul_kotak_tema")
let close_kotak_tema = document.querySelector(".close_kotak_tema")
let cls_tema_text = document.querySelector(".tematext")

// muncul kotak tema
button_nav_tema.addEventListener("click", function() {
	muncul_kotak_tema.classList.add('.')
})

// close kotak tema
close_nav_tema.addEventListener("click", function() {
	muncul_kotak_tema.classList.remove('.')
})

// rubah warna
button_tema.addEventListener("click", function() {
	for (let i = 0; i < cls_tema_text.length - 1; i++) {
		cls_tema_text[i].classList.toggle('.add-color-text')
	}
})