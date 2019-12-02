const smallDevice = window.matchMedia('screen and (max-width: 520px)');
const about = document.getElementById('about');
const questions = document.getElementById('questions');
const contact = document.getElementById('contact');
const comments = document.getElementById('comments');

        
about.addEventListener("click", function() {
    const footerLink = document.getElementById("li-a");
    footerLink.classList.toggle("is-active");
});

questions.addEventListener("click", function() {
    const footerLink = document.getElementById("li-q");
    footerLink.classList.toggle("is-active");
});
contact.addEventListener("click", function() {
    const footerLink = document.getElementById("li-c");
    footerLink.classList.toggle("is-active");
});
comments.addEventListener("click", function() {
    const footerLink = document.getElementById("li-co");
    footerLink.classList.toggle("is-active");
});