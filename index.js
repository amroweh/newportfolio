const menuToggle = document.querySelector("#menuToggle")
const navigationMenu = document.querySelector("#navigationMenu")

function toggleMenu(){
    if(navigationMenu.classList.contains("active")){
        navigationMenu.classList.remove("active")
        menuToggle.innerHTML = "menu &#8594;"
    } 
    else{
        navigationMenu.classList.add("active")
        menuToggle.innerHTML = "&#9587;"        
    } 
}

menuToggle.addEventListener("click", toggleMenu)