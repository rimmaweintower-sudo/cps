import Swiper, { Pagination } from 'swiper'

Swiper.use([Pagination])

const breakpoint = window.matchMedia('(max-width: 767px)')
let swiper = null

function checkSlider() {
  if (breakpoint.matches) {
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  }
}

checkSlider()
breakpoint.addEventListener('change', checkSlider)

let expandIt = function (
  buttonName,
  wrapperName,
  openText = 'Показать всё',
  closeText = 'Скрыть'
) {
  let btn = document.querySelector(buttonName)
  let wrapper = document.querySelector(wrapperName)

  if (!btn || !wrapper) return
  const buttonText = btn.querySelector('.expand-button__text')

  btn.addEventListener('click', function () {
    const isExpanded = wrapper.classList.toggle('expanded')

    if (isExpanded) {
      buttonText.textContent = closeText
      btn.classList.add('expand-button--opened')
    } else {
      buttonText.textContent = openText
      btn.classList.remove('expand-button--opened')
    }
  })
}

// бренды
expandIt('.brands__expand-button', '.brands-swiper')

// техника
expandIt('.devices__expand-button', '.devices-swiper')

// верхний
const infoBtn = document.querySelector('.info__expand-button')
const infoText = infoBtn.querySelector('.expand-button__text')
const tabletText = document.querySelector('.info__text--tablet-only')
const desktopText = document.querySelector('.info__text--desktop')

infoBtn.addEventListener('click', function () {
  const isOpened = infoBtn.classList.toggle('expand-button--opened')
  if (isOpened) {
    infoText.textContent = 'Свернуть'
  } else {
    infoText.textContent = 'Читать далее'
  }
  tabletText.classList.toggle('info__text--tablet-only')
  desktopText.classList.toggle('info__text--desktop')
})
// модалки
let showModal = function (modalBtn, modalWindow, modalClose) {
  let btns = document.querySelectorAll(modalBtn)
  let modal = document.querySelector(modalWindow)
  let overlay = document.querySelector('.overlay')
  let btnsClose = modal.querySelectorAll(modalClose)

  if (btns.length === 0 || !modal) return
  let openModal = function () {
    modal.classList.add('is-open')
    overlay.classList.add('overlay--active')
  }
  let closeModal = function () {
    modal.classList.remove('is-open')
    if (
      !document.querySelector('.is-open') &&
      !document.querySelector('.fixed-menu--open')
    ) {
      overlay.classList.remove('overlay--active')
    }
  }
  btns.forEach(function (btn) {
    btn.addEventListener('click', openModal)
  })
  btnsClose.forEach(function (btnC) {
    btnC.addEventListener('click', closeModal)
  })
  overlay.addEventListener('click', closeModal)
}

showModal('.modal-call-btn', '.modal-call', '.modal-call__close-btn')
showModal(
  '.modal-feedback-btn',
  '.modal-feedback',
  '.modal-feedback__close-btn'
)
