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

function switcha()
{
    // Replace image with pushed image
    document.getElementById("img1").src = "img/aidePushed.png";
    // Go to form page
    window.location.href = "form.html";
}

// read the value of the radio button for extra help
function getRadioValue() {
    var radios = document.getElementsByName("help");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == "oui") {
                // Change the href of the submit button to the resource page
                document.getElementById("submit").href = "index.html#projects";
                console.log("Oui");
            }
            return radios[i].value;
        }
    }
}
