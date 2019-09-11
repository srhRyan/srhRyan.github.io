/* Get the modal */
var modal = document.getElementById("myModal");
var getNote = document.getElementsByClassName("note-photo");
var modalImg = document.getElementById("imgshow");
var navi = document.getElementById('navicon');
var menu = document.getElementById("mainNav");

var noteIndex = 1;

function plusNote(n){
    showNote(noteIndex += n);
}

function currentNote(n) {
    showNote(noteIndex = n-1);
}

function showNote(n) {
    
    if (n > getNote.length) {noteIndex = 1}
    if (n < 1) {noteIndex = getNote.length}
    
    modal.style.display = "block";
    modalImg.src = getNote[n].src;
    
    navi.style.display = "none";
    
  if(menu.style.display === "block") {
      menu.style.display = "none";
  }
}

function closeModal() { 
  modal.style.display = "none";
  navi.style.display = "block";
}

/* Get the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

/* When the user clicks on <span> (x), close the modal*/
span.onclick = closeModal;

document.addEventListener('keydown', function(e){
  if (e.keyCode === 27) {
    closeModal();
  }
}, false);