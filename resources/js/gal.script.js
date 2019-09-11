function openTab(part) {
  var tabs = document.getElementsByClassName('gallery-tab');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById('gallery-main').style.display = "none";
  document.getElementById("part" + part).style.display = "block";
}

function closeTab() {
  var tabs = document.getElementsByClassName('gallery-tab');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  document.getElementById('gallery-main').style.display = "block";
}

function openModal() {
  let navi = document.getElementById('navicon');
  let menu = document.getElementById("mainNav");

  document.getElementById('myModal').style.display = "block";
  navi.style.display = "none";
  menu.style.right = "-280px";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navicon').style.display = "block";
}

var slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function addSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var show = document.getElementById("slideShow");

  if (n > 90) { slideIndex = 1 }
  else if (n < 1) { slideIndex = 90 }
  else { slideIndex = n }




  show.src = getPhotoSRC(slideIndex);
  slides[0].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    dots[i].src = "/resources/img/gallery/thumbnail/" + ((i + slideIndex - 4 + 86) % 86 + 1) + ".jpg";
  }

  dots[slideIndex - 1].className += " active";
}

function getPhotoSRC(slideIndex) {
  let photosrc = "/resources/img/gallery/";

  if (slideIndex > 0 && slideIndex <= 10) { photosrc = `${photosrc}A/${slideIndex}.jpg`; }
  else if (slideIndex > 10 && slideIndex <= 18) { photosrc = `${photosrc}B/${slideIndex}.jpg`; }
  else if (slideIndex > 18 && slideIndex <= 36 || slideIndex === 83 || slideIndex === 84 || slideIndex === 90) { photosrc = `${photosrc}C/${slideIndex}.jpg`; }
  else if (slideIndex > 36 && slideIndex <= 45) { photosrc = `${photosrc}D/${slideIndex}.jpg`; }
  else if (slideIndex > 45 && slideIndex <= 62 || slideIndex === 87 || slideIndex === 88) { photosrc = `${photosrc}E/${slideIndex}.jpg`; }
  else if (slideIndex > 62 && slideIndex <= 72 || slideIndex === 85 || slideIndex === 86 || slideIndex === 89) { photosrc = `${photosrc}F/${slideIndex}.jpg`; }
  else if (slideIndex > 72 && slideIndex <= 82) { photosrc = `${photosrc}G/${slideIndex}.jpg`; }
  else { photosrc = `${photosrc}thumbnail/${slideIndex}.jpg`; }

  return photosrc;
}

/*window.onload = function() {
	setTimeout(function() {
		// preload image
        let i;

        for(i=1; i<87; i++){
		  new Image().src = getPhotoSRC(i);
        }
	}, 5000);
};*/

document.querySelector("modal").addEventListener('keydown', function(e){
  if(e.keyCode === 27) {
    closeModal();
  }
}, false);