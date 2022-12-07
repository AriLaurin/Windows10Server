let mybutton2 = document.getElementById("ScrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 


let transcriptTitle = document.querySelector(".TSTitle");
let subtitles = document.querySelector(".transcript");

transcriptTitle.addEventListener("click", (e) => {
  subtitles.classList.toggle("hidden");
});