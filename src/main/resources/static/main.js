/* efecto scroll en el header */
const nav = document.querySelector('header');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY > 0)
})