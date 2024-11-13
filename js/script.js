const menu = document.querySelector(".menu")

const openMenu = () => {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("open-menu")
}

menu.addEventListener("click", openMenu)