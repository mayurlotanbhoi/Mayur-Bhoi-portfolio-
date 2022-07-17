const navbar = document.querySelector('.navlist')
const icon = document.querySelectorAll('.list')

console.log(navbar)



console.log(screen.width)

function myFunction() {

    console.log("click on nav bar")
    console.log(navbar.className)
    if (navbar.className === 'navlist') {
        navbar.className = "verticulbar";
        icon.style.display = "flex";

    } else {
        navbar.className = "navlist";

    }
}