const iPad = window.matchMedia('screen and (max-width: 768px)');
const menu = document.getElementById('menu')
const burgerButton = document.getElementById('burguer-menu');
const menuLink = document.querySelectorAll(".link");
        
burgerButton.addEventListener("click", function() {
menu.classList.toggle("is-active");
});

menuLink.forEach(function(element) {
element.addEventListener("click", function() {
menu.classList.remove("is-active");
});
});