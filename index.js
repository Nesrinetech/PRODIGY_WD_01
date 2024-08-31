function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

 
window.addEventListener('scroll', function() {
    const navbars = document.querySelectorAll('#desktop-nav, #hamburger-nav');
   
    navbars.forEach(navbar => {

    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
  });
});