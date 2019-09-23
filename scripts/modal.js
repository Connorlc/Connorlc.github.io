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
}

/*function getModal(name) {
  var modal = document.getElementById(name);
  var img = document.getElementById("img");
  var mTitle = document.getElementById("modal-title");
  var mImg = document.getElementById("modal-img");
  var mCaption = document.getElementById("modal-caption");
  var closeBtn = document.getElementById("close");

  img.onclick = function() {
    modal.style.display = "block";
    mImg.src = this.src;
    mTitle.innerHTML = this.alt;
    setTimeout(function() {
      mImg.style.transform = "scale(1)";
      mCaption.style.transform = "scale(1)";
      mTitle.style.transform = "scale(1)";
      }, 100);
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
    mImg.style.transform = "scale(0)";
    mCaption.style.transform = "scale(0)";
    mTitle.style.transform = "scale(0)";
  }
}*/