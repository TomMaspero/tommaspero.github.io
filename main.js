//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


//Fade in effects
function isVisible(element){
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -50;
    if(elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    }
    else{
        return false;
    }
}

function scanDocumentForHidden(){
    let hiddenList = document.querySelectorAll('.hidden');
    hiddenList.forEach(function(section){
        if(isVisible(section)){
            section.classList.remove('hidden');
        };
    });
}

document.addEventListener('scroll', scanDocumentForHidden);

// document.addEventListener('scroll', _.throttle(scanDocumentForHidden, 100));