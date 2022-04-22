const menuToggle = document.getElementById("inventory")
const subMenu = document.getElementById("dropdown")
const arrow = document.getElementById("arrow")

menuToggle.addEventListener('click', () => {
    subMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})

document.addEventListener('click', (e) => {
  if (e.target.id !== "inventory") {
    subMenu.classList.remove('active')
    arrow.classList.remove('active')
  }
})

// BONUS QUESTION SOLUTION

const arrayOne = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"]
const arrayTwo = ["dog", "goose", "kite", "meal", "laptop"]

const findMatch = (arr1, arr2) => (arr1.filter(element => arr2.includes(element)))

console.log(findMatch(arrayOne, arrayTwo))