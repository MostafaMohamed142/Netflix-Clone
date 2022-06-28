// let slider=["https://www.youtube.com/embed/zcI6SFiK_yk","https://www.youtube.com/embed/1ygQATx7_4g","https://www.youtube.com/embed/IN5TD4VRcSM","https://youtu.be/h9MSHl40z-g","https://youtu.be/Rx-4kSM743o"];
// var thevideo="https://www.youtube.com/embed/zcI6SFiK_yk";
// slider["0"]=thevideo;

// function rght(){for(i in slider){
//     slider=document.getElementById("imgs").innerHTML = `
//     <iframe src="${thevideo}" title="YouTube video player" frameborder="0"  allowfullscreen></iframe> 
//     `;
//     var i=slider["2"].lenth-1;
//     console.log(slider);

//     i++;
   
// }};

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
