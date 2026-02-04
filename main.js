const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

hamburger.addEventListener("click", () => {
    handleToggle();
})

const handleToggle = () => {
    if (hamburger.getAttribute("aria-expanded") == "false") {

        hamburger.setAttribute("aria-expanded", true)

        // nav.classList.remove("hidden")
        // nav.classList.add("flex")
        
        menuIcon.classList.add("fa-close");
        menuIcon.classList.remove("fa-bars");
        
        nav.classList.add("right-0")
        nav.classList.removes("-right-20")

        console.log('expanded')
    }
    else {
        hamburger.setAttribute("aria-expanded", false)
        
        // nav.classList.add("hidden")
        // nav.classList.remove("flex")

        nav.classList.remove("right-0")
        nav.classList.add("-right-20")

        menuIcon.classList.remove("fa-close");
        menuIcon.classList.add("fa-bars");

        console.log('hidden')

    }
}