//------ STICKY MENU --------------
let stickyMenu = document.querySelector('.mobile-menu');

console.log(window.scrollY)
console.log(stickyMenu)

function myFunction() {
    if (window.scrollY >= 20) {
      stickyMenu.classList.add("sticky")
    } else {
      stickyMenu.classList.remove("sticky")
    }
  }

  window.onscroll = function() {myFunction()}