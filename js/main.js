const body = document.querySelector('body')
const theme = document.querySelector('.theme')
const favorite = document.querySelector('.favorite')
const darkMode = document.querySelector('.dark-mode')
const lightMode = document.querySelector('.light-mode')
const cardsContinaer = document.querySelector('.cards')
const drawer= document.querySelector('.drawer')

theme.addEventListener('click', (e) => {
  body.classList.toggle('dark')

  if(body.classList.contains('dark')) {
    darkMode.classList.add('hidden')
    lightMode.classList.remove('hidden')
  } else {
    darkMode.classList.remove('hidden')
    lightMode.classList.add('hidden')
  }
})

favorite.addEventListener('click', (e) => {
  if(drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden')
  } else {
    drawer.classList.add('hidden')
  }
})