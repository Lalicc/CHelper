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

//VIDEO
let modalVideo = document.getElementById('modal-video');
let modalSource = document.getElementById('modal-source');

let nades = Array.from(document.getElementsByClassName('nade'));

nades.forEach(nade => {
  nade.addEventListener("click", () => {
    modalSource.setAttribute('src', "video/" + nade.getAttribute('data-video'));
    modalVideo.load();
  });
});

$('#exampleModalCenter').on('hidden.bs.modal', () => {
  modalVideo.pause();
});