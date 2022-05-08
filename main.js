window.addEventListener('scroll', onScroll)

function onScroll(){
  showBackToTopOnScroll()
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = (scrollY + innerHeight) / 2

  //verificar se a sessão passou da linha, quais dados preciso?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  const sectionBottomReachedOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionBottomReachedOrPassedTargetLine && sectionEndPassedTargetLine

  console.log(sectionTopReachedOrPassedTargetLine)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 350) {
    stick.classList.add('show')
  } else {
    stick.classList.remove('show')
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
onScroll()




ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  delay: 200
}).reveal(`
  #home,
  #home div,
  #home button,
  #home img,
  #services,
  #services .label,
  #services .h2,
  #services .card,
  #about,
  #about .label,
  #about h2,
  #about p,
  #about img,
  #contact,
  #contact h2,
  #contact .contact-info,
  #contact button,
  #contact img
`);