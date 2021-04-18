//TRANSPARENT NAVBAR
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').addClass('js-navbar-bg')
    $('.navbar').removeClass('js-transparent')
  } else {
    $('.navbar').removeClass('js-navbar-bg')
    $('.navbar').addClass('js-transparent')
  }
})
//!TRANSPARENT NAVBAR

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

//!SMOOTHSCROLL
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//SCROLL ON TOP BUTTON
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
