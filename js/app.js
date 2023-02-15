const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open__menu");
const closeMenuBtn = document.querySelector(".close__menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
    })
})
menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        menu.classList.remove ("menu_opened")
    })
})