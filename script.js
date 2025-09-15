/* =================================== toggle Icon Navbar ==================================== */

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

/* ================================= Scroll section active link ================================ */

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    let current = ''
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            current = id
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active')
        if(link.getAttribute('href').includes(current)) {
            link.classList.add('active')
        }
    })

    /* ================================= Sticky navbar ================================ */
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    /* ============================== Remove toggle icon and navbar ============================ */
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
}

/* ================================= Typed JS ================================ */
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer', 'Coder'],
    typeSpeed: 70,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
})

/* ================================= Skills Progress Animation ================================ */
const progressBars = document.querySelectorAll('.progress-bar')

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width')
        bar.style.width = width
    })
}

// Animate progress bars when skills section is in view
const skillsSection = document.querySelector('.skills')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars()
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.5 })

if (skillsSection) {
    observer.observe(skillsSection)
}