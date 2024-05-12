// HEADER LINKS
const headerLinks = document.querySelectorAll(".header__link")

headerLinks.forEach(link => {
  link.addEventListener("click", () => {
    headerLinks.forEach(link => link.classList.remove("header__link--active"))
    link.classList.add("header__link--active")
  })
})

// LOGIN
const loginBtn = document.querySelector(".nav__login")
const login = document.querySelector(".login")
const loginClose = document.getElementById("login-btn")
const loginInput = document.getElementById("login-password")
const loginEyes = document.querySelectorAll(".login__eye")

loginBtn.addEventListener("click", () => {
  login.classList.add("login-show")
})

login.addEventListener("click", (e) => {
  if (e.target.id === "login") login.classList.remove("login-show")
})

loginClose.addEventListener("click", () => {
  login.classList.remove("login-show")
})

loginEyes.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "login-close") {
      loginEyes[0].classList.remove("login__eye--active")
      loginEyes[1].classList.add("login__eye--active")
      loginInput.type = "text"
    } else {
      loginEyes[1].classList.remove("login__eye--active")
      loginEyes[0].classList.add("login__eye--active")
      loginInput.type = "password"
    }
  })
})

// HERO 
const heroContainer = document.querySelector(".hero__container")
const heroList = document.querySelector(".hero__list")
const firstItemWidth = heroList.querySelector(".hero__item").offsetWidth
const heroListChildren = [...heroList.children]
let isDragging = false, startX, startScrollLeft, timeoutId

let itemPerView = Math.round(heroList.offsetWidth / firstItemWidth)

heroListChildren.slice(-itemPerView).reverse().forEach(card => {
  heroList.insertAdjacentHTML("afterbegin", card.outerHTML)
})

heroListChildren.slice(0, itemPerView).forEach(card => {
  heroList.insertAdjacentHTML("beforeend", card.outerHTML)
})

const dragStart = (e) => {
  isDragging = true
  heroList.classList.add("dragging")
  startX = e.pageX || e.touches[0].pageX
  startScrollLeft = heroList.scrollLeft
}

const dragging = e => {
  if (!isDragging) return
  heroList.scrollLeft = startScrollLeft - (e.pageX - startX) || (e.touches[0].pageX - startX)
}

const dragStop = () => {
  isDragging = false
  heroList.classList.remove("dragging")
}

const autoPlay = () => {
  timeoutId = setTimeout(() => heroList.scrollLeft += firstItemWidth, 2000);
}

autoPlay()

const infiniteScroll = () => {
  if (heroList.scrollLeft === 0) {
    heroList.classList.add("no-transition")
    heroList.scrollLeft = heroList.scrollWidth - (2 * heroList.offsetWidth)
    heroList.classList.remove("no-transition")
  } else if (Math.ceil(heroList.scrollLeft) === heroList.scrollWidth - heroList.offsetWidth) {
    heroList.classList.add("no-transition")
    heroList.scrollLeft = heroList.offsetWidth
    heroList.classList.remove("no-transition")
  }

  clearTimeout(timeoutId)
  if (!heroContainer.matches(":hover")) autoPlay()
}

heroList.addEventListener("mousedown", dragStart)
heroList.addEventListener("touchstart", dragStart)

heroList.addEventListener("mousemove", dragging)
heroList.addEventListener("touchmove", dragging)

document.addEventListener("mouseup", dragStop)

heroList.addEventListener("scroll", infiniteScroll)
heroContainer.addEventListener("mouseenter", () => clearTimeout(timeoutId))
heroContainer.addEventListener("mouseleave", autoPlay)
heroContainer.addEventListener("touchend", autoPlay)