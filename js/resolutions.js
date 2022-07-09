// const ld = () => {
  const width =
  window.innerWidth
const height =
  window.innerHeight

const sword = document.getElementById("Layer_1");
if (width <= 380 ) {
  if (height <= 670) {
    sword.removeAttribute('viewBox')
    sword.setAttribute('viewBox', '11 -50 1000 429')
  } else {
    sword.setAttribute('viewBox', '-11 170 1000 429')
  }
} else {
  sword.setAttribute('viewBox', '-11 170 1000 429')
}

// }

// addEventListener('resize', (event) => {ld()});
