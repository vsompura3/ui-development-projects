const hamburger = document.querySelector('.header-hamburger');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
  menu.classList.add('open');
})

closeBtn.addEventListener('click', function () {
  menu.classList.remove('open');
})

document.addEventListener('keyup', function (e) {
  if(menu.classList.contains('open') && e.key==='Escape'){
    menu.classList.remove('open');
  }
})