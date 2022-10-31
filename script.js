//------ STICKY MENU --------------
let stickyMenu = document.querySelector('.menu-wrap');

console.log(window.scrollY)
console.log(stickyMenu)

function myFunction() {
    if (window.scrollY >= 70) {
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

//SMTPJS -- ENVOI MAIL FORMULAIRE

let sendForm = document.getElementById('send-btn');

sendForm.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
  console.log(document.getElementById('email').value);

  let email = document.getElementById('email').value
  let name = document.getElementById('name').value

  sendEmail(email, name);

  function sendEmail(email, name) {
    Email.send({
      Host : "smtp.elasticemail.com",
    Username : "sabmhadji@gmail.com",
    Password : "BA14902E0CBD65453D8629C14066E806C71B",
    To : "diallosabourata@gmail.com",
    From : 'sabmhadji@gmail.com',
    Subject : "This is the subject",
    Body : document.getElementById('message').value + document.getElementById('name').value
}).then(
  message => alert(message)
);
  }
})
