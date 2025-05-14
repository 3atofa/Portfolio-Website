var typed = new Typed('#element', {
    strings: ['Developer', 'Designer', 'Larry Daniels'],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
 });

 window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar-example");
    if (window.scrollY > 500) { // Adjust the scroll distance as needed
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});