const menuToggle = document.getElementById("inventory")
const subMenu = document.getElementById("dropdown")
const arrow = document.getElementById("arrow")

menuToggle.addEventListener('click', (e) => {
  console.log(e.target.id)
    subMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})

document.addEventListener('click', (e) => {
  if (e.target.id !== "inventory") {
    subMenu.classList.remove('active')
    arrow.classList.remove('active')
  }
})