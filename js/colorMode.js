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
    const colorModeIcon = document.getElementById("colorModeIcon");
    const siteIcon = document.getElementById("site-icon");
    const navIcon = document.getElementById("navbar-icon");
    const navbar = document.getElementById("navbar");

    if(window.localStorage.getItem("z.me-colorMode")==="dark"){
        colorModeIcon.classList.remove("bi-moon-fill");
        colorModeIcon.classList.add("bi-brightness-high-fill");

        siteIcon.setAttribute('href', './img/svg/logo_light_bold.svg');
        navIcon.setAttribute('src', './img/svg/logo_light_bold.svg');

        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
    }else{
        colorModeIcon.classList.remove("bi-brightness-high-fill");
        colorModeIcon.classList.add("bi-moon-fill");

        siteIcon.setAttribute('href', './img/svg/logo_dark_bold.svg');
        navIcon.setAttribute('src', './img/svg/logo_dark_bold.svg');

        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
    }
}


