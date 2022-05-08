window.addEventListener('scroll', onScroll)

function onScroll(){
  showBackToTopOnScroll()
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  console.log(targetLine)

  //verificar se a sessão passou da linha, quais dados preciso?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  console.log(sectionHeight)
  const sectionEndsAt = sectionTop + sectionHeight

  console.log(sectionEndsAt)

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  console.log(sectionTopReachedOrPassedTargetLine)
  
  
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  console.log(sectionEndPassedTargetLine)
  
  const sectionBoundaries = sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  console.log( sectionBoundaries)
  
  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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