const body = document.querySelector('body')
const theme = document.querySelector('.theme')
const darkMode = document.querySelector('.dark-mode')
const lightMode = document.querySelector('.light-mode')

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