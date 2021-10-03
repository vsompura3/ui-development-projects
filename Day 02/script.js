const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');

// To toggle open class when hamburger icon is clicked
hamburger.addEventListener('click', function () {
  menu.classList.toggle('open');
})

// when menu is open and user press escape open class gets removed and menu closes.
document.addEventListener('keydown', function(e){
  if(menu.classList.contains('open') && e.key === 'Escape'){
    menu.classList.remove('open');
  }
})