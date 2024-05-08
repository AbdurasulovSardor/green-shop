// LOGIN
const loginBtn = document.querySelector(".nav__login")
const login = document.querySelector(".login")
const loginClose = document.getElementById("login-btn")

loginBtn.addEventListener("click", () => {
  login.classList.add("login-show")
})

login.addEventListener("click", (e) => {
  if (e.target.id === "login") login.classList.remove("login-show")
})

loginClose.addEventListener("click", () => {
  login.classList.remove("login-show")
})

// INPUT PASSWORD

const loginInput = document.getElementById("login-password")
const loginEyes = document.querySelectorAll(".login__eye")

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