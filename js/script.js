const arrowIcon = document.querySelector(".fas");
const btn = document.querySelector(".arrow");
const img = document.querySelector(".item1");

function showImage() {
	img.classList.toggle("show");

	if (img.classList.contains("show")) {
		arrowIcon.style.rotate = "180deg";
		// img.classList.remove('show')
		// arrowIcon.classList.remove('rotate')
	} else {
		arrowIcon.style.rotate = "0deg";
		// img.classList.add('show',)
		// arrowIcon.classList.add('rotate')
	}
}

btn.addEventListener("click", showImage);
