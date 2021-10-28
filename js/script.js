function toggleColor() {

    //changing color mode
    const element = document.body;
    element.classList.toggle("light-mode");

    //saving color mode
    if (element.classList.contains("light-mode") === true){
        localStorage.setItem("zuendorf.me-colorMode", "light");
    }else localStorage.setItem("zuendorf.me-colorMode", "dark");

    //changing color mode icon and color of the icon
    const x = document.getElementById("colorModeIcon");
    const x2 = document.getElementById("site-icon");
    const x3 = document.getElementById("navbar-icon");
    const x4 = document.getElementById("navbar");



    if(localStorage.getItem("zuendorf.me-colorMode")==="light"){
        x.classList.remove("bi-brightness-high-fill");
        x.classList.add("bi-moon-fill");
        x2.setAttribute('href', './img/logo_small_dark.svg');
        x3.setAttribute('src', './img/logo_small_dark.svg');
        x4.classList.remove("navbar-dark");
        x4.classList.add("navbar-light");

    }else{
        x.classList.remove("bi-moon-fill");
        x.classList.add("bi-brightness-high-fill");
        x2.setAttribute('href', './img/logo_small_light.svg');
        x3.setAttribute('src', './img/logo_small_light.svg');
        x4.classList.remove("navbar-light");
        x4.classList.add("navbar-dark");
    }
}

