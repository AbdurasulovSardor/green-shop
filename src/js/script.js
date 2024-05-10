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