// I swear there has got to be a better way to do this
// Probably an eventListener for scrolling?? maybe? idk
// But this uses a 1 millisecond interval with an anonymous function
percent = setInterval(function(){ 
    num = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
    // Between 0% and 16.79% vertical scroll percent, set title to home
    if(num >= 0 && num < 16.79) {
        document.getElementById('name').innerHTML = "Jeunesse_je_pousse/acceuil"
    }
    // Between 16.79% and 51.93% vertical scroll percent, set title to home
    else if(num > 16.79 && num < 51.93) {
        document.getElementById('name').innerHTML = "Jeunesse_je_pousse/resources/siteweb"
    }
    // Between 51.93% and 84.95% vertical scroll percent, set title to home
    else if(num > 51.93 && num < 84.95) {
        document.getElementById('name').innerHTML = "Jeunesse_je_pousse/resources/telephone"
    }
    // Between 84.95% and 100% vertical scroll percent, set title to home
    else if(num > 84.95 && num <= 100) {
        document.getElementById('name').innerHTML = "Jeunesse_je_pousse/vidéos"
    }
    // If the percent is not between 0-100, then just set the title to jack
    // This happens when the user scrolls above or below the page which is possible on Safari I know for sure
    else {
        document.getElementById('name').innerHTML = "Jeunesse_je_pousse"
    }
}, 1);
