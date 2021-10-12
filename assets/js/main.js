let hamburger_menu = document.querySelector('div > a');
let open_hamburger = document.querySelector('hamburger-menu');

hamburger_menu.addEventListener('click', function() {
  open_hamburger.className += 'active' 
});