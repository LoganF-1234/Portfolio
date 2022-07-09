// content-visibility property not supported by firefox or safari. Fix to remove header of main page on repsonsive design
const width = window.innerWidth
const height = window.innerHeight

const header = document.querySelector('header')
console.log(header)
if (width <= 1000) {
  header.removeChild(document.querySelector('nav'))
  console.log(header)
 
}


