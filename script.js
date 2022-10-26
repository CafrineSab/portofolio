//------ STICKY MENU --------------
let stickyMenu = document.querySelector('.menu-wrap');

console.log(window.pageYOffset)
console.log(stickyMenu)

function myFunction() {
    if (window.pageYOffset >= 100) {
      stickyMenu.classList.add("sticky")
    } else {
      stickyMenu.classList.remove("sticky")
    }
  }

  window.onscroll = function() {myFunction()}



let portofolioHover = document.querySelectorAll('.portofolio');
let portofolioTitle = document.querySelectorAll('.portofolio-title')
let showTitle = document.querySelector('.show-title')

console.log(portofolioHover)

portofolioHover.forEach(el => {
    el.addEventListener('mouseenter', e => {
        portofolioTitle.forEach(i => {
            console.log(e.target.firstChild.nextSibling)
            let addClass = e.target.firstChild.nextSibling;
            addClass.classList.add('show-title')
        })
    })
    el.addEventListener('mouseleave', e => {
        portofolioTitle.forEach(i => {
            i.classList.remove('show-title')
        })
    })
})
