//-------------------------------------------------------
// Header Menu Button
//-------------------------------------------------------

const headerMark = document.getElementById("marker")
const headerMenu = document.querySelectorAll(".header__item")

function moveIndicator(e) {
  headerMark.style.left = `${e.offsetLeft + 23}px`
}

headerMenu.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    moveIndicator(e.target)
  })
})

function activeLink() {
  headerMenu.forEach(item => item.classList.remove("header__item--active"))
  this.classList.add("header__item--active")
}

headerMenu.forEach(item => item.addEventListener("click", activeLink))