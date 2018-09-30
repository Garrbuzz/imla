// slider
var slideIndex=1;
// showSlide(slideIndex);
function showSlide(slideInd) {
	var slides = document.getElementsByClassName("slide");
	document.getElementsByClassName("slider-cover")[0].style.display = "block";
	document.getElementsByClassName("hot-lamp-gallery")[0].style.display = "none";	
	if (slideInd>slides.length) {
		slideIndex = 1;
		slideInd = 1;
	}
	if (slideInd<1){
		slideIndex = slides.length;
		slideInd = slides.length;
	} 
	for (let i = 0; i < slides.length; i++) {
	
		slides[i].style.display = "none";

	}
	slides[slideInd-1].style.display = "block";
	slideIndex = slideInd;
	document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
	    document.getElementsByClassName("slider-cover")[0].style.display = "none";
		document.getElementsByClassName("hot-lamp-gallery")[0].style.display = "block";	 
    }
};
}

function nextSlide(direction) {
	showSlide(slideIndex += direction);
}	

function startSlider(n){
	location.href='http://imla1/html/photo.html';

	showSlide(n);
}
// end slider

