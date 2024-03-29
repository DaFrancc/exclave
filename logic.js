var isUp = false;
function toggleTab() {
    let nav = document.getElementById("nav-tab");
    let tb = document.getElementById("top-bar");
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-500%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Show";
            isUp = true;
        } else {
            nav.style.transform = "translateY(-250%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Hide";
            isUp = false;
        }
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-300%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Show";
            isUp = true;
        } else {    
            nav.style.transform = "translateY(-100%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Hide";
            isUp = false;
        }
    }
}

window.DeviceOrientationEvent = () => {toggleTab();}
