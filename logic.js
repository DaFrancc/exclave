var isUp = false;
function toggleTab(t) {
    let nav = document.getElementById("nav-tab");
    let tb = document.getElementById("top-bar");
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-400%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Open";
            isUp = true;
        } else {
            nav.style.transform = "translateY(-200%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Close";
            isUp = false;
        }
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-250%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Open";
            isUp = true;
        } else {    
            nav.style.transform = "translateY(-100%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Close";
            isUp = false;
        }
    }
}