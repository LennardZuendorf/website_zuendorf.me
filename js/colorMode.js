function startupColor(){
    if (window.localStorage.getItem("z.me-colorMode") === "dark"){
        console.log("checking for color setting - triggered dark mode")
        toggleColor();
    }else console.log("checking for color setting - kept light mode")
}

function toggleColor() {

    //changing color mode
    const element = document.body;
    element.classList.toggle("dark-mode");

    //saving color mode
    if (element.classList.contains("dark-mode") === true){
        window.localStorage.setItem("z.me-colorMode", "dark");
        console.log("dark mode activated - saved in local storage");
    }else {
        window.localStorage.setItem("z.me-colorMode", "light");
        console.log("light mode activated - saved in local storage");
    }

    classChanges()
}

function classChanges(){

    //changing color mode icon and color of the icon
    const x = document.getElementById("colorModeIcon");
    const x2 = document.getElementById("site-icon");
    const x3 = document.getElementById("navbar-icon");
    const x4 = document.getElementById("navbar");

    if(window.localStorage.getItem("z.me-colorMode")==="dark"){
        x.classList.remove("bi-moon-fill");
        x.classList.add("bi-brightness-high-fill");

        x2.setAttribute('href', './img/logo_icon_dark.svg');
        x3.setAttribute('src', './img/logo_light_bold.svg');

        x4.classList.remove("navbar-light");
        x4.classList.add("navbar-dark");
    }else{
        x.classList.remove("bi-brightness-high-fill");
        x.classList.add("bi-moon-fill");

        x2.setAttribute('href', './img/logo_icon_light.svg');
        x3.setAttribute('src', './img/logo_dark_bold.svg');

        x4.classList.remove("navbar-dark");
        x4.classList.add("navbar-light");
    }
}


