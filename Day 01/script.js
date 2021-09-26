const openBtn = document.querySelector('.header-menu-toggle');
const closeBtn = document.querySelector('#close');
const menu = document.querySelector('.site-menu');

openBtn.addEventListener('click', function(){
  if (!menu.classList.contains('open')) {
    menu.classList.add('open');
  }
})

closeBtn.addEventListener('click', function(){
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
})
