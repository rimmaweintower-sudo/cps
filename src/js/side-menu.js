const burgerBtn = document.querySelector('.header__icon--burger')
const closeBtn = document.querySelector('.fixed-menu__icon--close')
const sideMenu = document.querySelector('.fixed-menu')
const overlay = document.querySelector('.overlay')

let openMenu = function () {
  sideMenu.classList.add('fixed-menu--open')
  overlay.classList.add('overlay--active')
}
let closeMenu = function () {
  sideMenu.classList.remove('fixed-menu--open')
  if (!document.querySelector('.is-open')) {
    overlay.classList.remove('overlay--active')
  }
}

if (burgerBtn && sideMenu) {
  burgerBtn.addEventListener('click', openMenu)
}

if (closeBtn && sideMenu) {
  closeBtn.addEventListener('click', closeMenu)
}
overlay.addEventListener('click', closeMenu)
// боковое
let menuItems = document.querySelectorAll('.fixed-menu__el')

menuItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault()
    menuItems.forEach(function (el) {
      el.classList.remove('fixed-menu__el--active')
    })

    item.classList.add('fixed-menu__el--active')
  })
})

let btns = document.querySelectorAll('.language__btn')

btns.forEach(function (item) {
  item.addEventListener('click', function () {
    btns.forEach(function (el) {
      el.classList.remove('language__btn--active')
    })
    item.classList.add('language__btn--active')
  })
})
