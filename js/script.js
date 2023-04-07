const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
const map = document.querySelector(".map");

menuIcon.addEventListener('click', () => {
    navItems.classList.toggle('mobile-menu');
    menuIcon.classList = navItems.classList.contains('mobile-menu') ? "menu-icon fa-solid fa-xmark" : "menu-icon fa-solid fa-bars";
    map.classList = "app remove";
});