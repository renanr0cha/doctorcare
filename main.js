function onScroll(){
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
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