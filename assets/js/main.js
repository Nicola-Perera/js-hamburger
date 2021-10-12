let hamburger_menu = document.querySelector('.hamburger-menu');
let open_hamburger = document.querySelector('div > a');
let close_hamburger = document.querySelector('.close');

open_hamburger.addEventListener('click', function() {
    hamburger_menu.classList.add('active');
});

close_hamburger.addEventListener('click', function() {
    hamburger_menu.classList.remove('active');
});
