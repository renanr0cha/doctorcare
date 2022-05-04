function onScroll(){
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}