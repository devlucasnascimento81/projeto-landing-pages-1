const menu = document.querySelector('.menu-toggle')

const nav = document.querySelector('.nav-links')

const links = document.querySelectorAll('.nav-links a')

menu.addEventListener('click', () =>{

    nav.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})