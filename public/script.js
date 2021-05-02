// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Smooth scrolling on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


function on() {
  document.getElementById("about-overlay").style.display = "flex";

}

function off() {
  document.getElementById("about-overlay").style.display = "none";
}

var modal = document.getElementById('about-overlay');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
