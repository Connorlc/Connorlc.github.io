var slideIndex = 1;

function openModal(name) {
  document.getElementById(name).style.display = "block";
}

function closeModal(name) {
  document.getElementById(name).style.display = "none";
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

function showSlide(n) {
  slideIndex = n;
  var slides = document.getElementsByClassName("map-slide");
  var thumbs = document.getElementsByClassName("map-thumb");
  var imgs = document.getElementsByClassName("slide-img");
  var prev = document.getElementById("map-prev");
  var next = document.getElementById("map-next");
  
  if(n > slides.length) { slideIndex = 1; }
  if(n < 1) { slideIndex = slides.length; }
  
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for(var i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active-thumb", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " active-thumb";
  prev.style.top = imgs[slideIndex - 1].scrollHeight / 2 + 40 + "px";
  next.style.top = imgs[slideIndex - 1].scrollHeight / 2 + 40 + "px";
}
