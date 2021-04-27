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
      <div class="vtimeline-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
      </div>
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

document.querySelector('#lead-down').addEventListener('click', function () {
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

// Make skills
const usedSkills = document.querySelectorAll('li.skill')
const uniqueUsedSkills = new Set()
const mainSkillsList = document.querySelector('#skills ul.skills-list')
for (let i = 0; i < usedSkills.length; i++) {
  const skill = usedSkills[i].innerText
  if (!uniqueUsedSkills.has(skill)) {
    uniqueUsedSkills.add(skill)
    mainSkillsList.insertAdjacentHTML(
      'beforeend',
      `<li class="skill">${skill}</li>`,
    )
  }
}

// Toggle dark mode
// const btn = document.querySelector('button#dark-mode')
// const currentTheme = localStorage.getItem('theme')

// if (
//   currentTheme === 'dark' ||
//   (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) // check user browser setting for dark mode
// ) {
//   document.body.classList.add('dark-mode')
// }
// // Listen for a click on the button
// btn.addEventListener('click', function () {
//   document.body.classList.toggle('dark-mode')

//   // Let's say the theme is equal to light
//   let theme = 'light'
//   // If the body contains the .dark-theme class...
//   if (document.body.classList.contains('dark-mode')) {
//     // ...then let's make the theme dark
//     theme = 'dark'
//   }
//   // Then save the choice in localStorage
//   localStorage.setItem('theme', theme)
// })
