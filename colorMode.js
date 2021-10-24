//example found at: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
// function to set a color mode and save to localstorage
function toggleColor() {

    //changing color mode
    const element = document.body;
    element.classList.toggle("light-mode");

    //saving color mode
    if (element.classList.contains("light-mode") === true){
        localStorage.setItem("colorMode", "light");
    }else localStorage.setItem("colorMode", "dark");

    //changing color mode icon and color of the icon
    const x = document.getElementById("colorModeIcon");
    const x2 = document.getElementById("colorButton");

    if(localStorage.getItem("colorMode")==="light"){
        x.style.color="var(--goal-color)";
        x2.style.color="var(--goal-color)";
    }else{
        x.style.color="var(--habit-color)";
        x2.style.color="var(--habit-color)";
    }
}