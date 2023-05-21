function handleToggleMenu() {
  const toggle = document.querySelector('nav .toggle')
  const menu = document.querySelector('nav menu')
  const linkMenu = menu.querySelectorAll('nav menu a')

  toggle.addEventListener('click', () => {
    menu.classList.toggle('slide')
  })

  linkMenu.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('slide')
    })
  })
}

window.addEventListener('scroll', () => {
  const backTopBtn = document.querySelector('.go-top')
  if (window.scrollY > 50) {
    backTopBtn.style.display = 'flex'
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0 })
    })
  } else backTopBtn.style.display = 'none'
})

document.querySelector('nav') && handleToggleMenu()
