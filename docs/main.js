// hamburger button toggle events
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav_links");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
    toggle();
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('open')) {
            toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open")
    // Stop scrolling if hamburger button is toggled
    if(menuBtn.classList.length == 2){
        document.body.style.overflow = 'hidden';
    }else {
        document.body.style.overflow = 'initial';
    }
}
