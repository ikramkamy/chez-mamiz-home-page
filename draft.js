var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var showimage=document.getElementById("#1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.flexDirection = "row";
  slides[slideIndex-1].style.justifyContent = "center";
  dots[slideIndex-1].className += " active";
  //slides[slideIndex-1].style.border="2px solid grey"
}

/*---------------------------------------code for rotation magages ---------------------------------------------*/
/****************************************************************************************************************/


var rotation=document.querySelectorAll("contain-rotate")
for (i==0;i<rotate.length;i++)
{
    rotation[1].style.animation="rotate"
}