function onScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    stick.style.visibility = "visible"
  } else {
    navigation.classList.remove('scroll')
    stick.style.visibility = "hidden"
  }
}

function openMenu() {
  const buttonOpenMenu = document.querySelector(".open-menu")
  buttonOpenMenu.addEventListener('click', function() {
    document.body.classList.add('menu-expanded')
  })
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

openMenu()

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  delay: 200
}).reveal(`
  #above-the-fold div,
  #above-the-fold button,
  #above-the-fold img,
  #services,
  #services .label,
  #services .h2,
  #services .card,
  #about-us,
  #about-us .label,
  #about-us h2,
  #about-us p,
  #about-us img,
  #contact-us,
  #contact-us h2,
  #contact-us .contact-info,
  #contact-us button,
  #contact-us img
`);