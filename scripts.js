// Remove no-js class
document.querySelector('html').classList.remove('no-js')

// Open mobile menu
document
  .querySelector('#mobile-menu-open')
  .addEventListener('click', function () {
    document.querySelector('header').classList.add('active')
    document.querySelector('body').classList.add('active')
  })

// Close mobile menu
document
  .querySelector('#mobile-menu-close')
  .addEventListener('click', function () {
    document.querySelector('header').classList.remove('active')
    document.querySelector('body').classList.remove('active')
  })

// Add experiences timeline and dates
let experiences = document.querySelectorAll('#experience-timeline > div')
for (let i = 0; i < experiences.length; i++) {
  let xp = experiences[i]
  let date = xp.getAttribute('data-date')
  xp.classList.add('vtimeline-content')
  let timeline = `<div class="vtimeline-point" id="xp-${i}">
      <div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>
      <div class="vtimeline-block">
        <span class="vtimeline-date">${date}</span>
      </div>
    </div>`

  xp.insertAdjacentHTML('beforebegin', timeline)
  document.querySelector(`div#xp-${i} div.vtimeline-block`).appendChild(xp)
}

// Add scrolls

document.querySelector('#to-top').addEventListener('click', function () {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})

document.querySelector('#lead').addEventListener('click', function () {
  let top = document.querySelector('#about').offsetTop
  scrollTo({
    top,
    left: 0,
    behavior: 'smooth',
  })
})

let menuLinks = document.querySelectorAll('header a')
for (let j = 0; j < menuLinks.length; j++) {
  let link = menuLinks[j]
  let destination = document.querySelector(link.getAttribute('href'))
  link.addEventListener('click', function (e) {
    e.preventDefault()
    scrollTo({
      top: destination.offsetTop,
      left: 0,
      behavior: 'smooth',
    })

    // Hide the menu once clicked if mobile
    if (document.querySelector('header').classList.contains('active')) {
      document.querySelector('header').classList.remove('active')
      document.querySelector('body').classList.remove('active')
    }
  })
}
