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
let email = document.getElementById('email');
let formName = document.getElementById('name');
let telephone = document.getElementById('telephone');
let message = document.getElementById('message');
let errorName = document.querySelector('.error-name');
let errorMail = document.querySelector('.error-email');
let errorPhone = document.querySelector('.error-phone');
let errorMessage = document.querySelector('.error-message');


function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sabmhadji@gmail.com",
    Password : "BA14902E0CBD65453D8629C14066E806C71B",
    To : "diallosabourata@gmail.com",
    From : 'sabmhadji@gmail.com',
    Subject : "This is the subject",
    Body : `Nom : ${formName.value} <br/> Email: ${email} <br/> Téléphone: ${telephone} <br/> Message: ${message}`
}).then(
  message => alert(message)
);
}

sendForm.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
  console.log(email.value)

  if(!email.value == '' && !formName.value == '' && !telephone.value =='' && !message.value == '') {
    console.log('je suis la!!!')
    sendEmail();
    
  } else {
    if(formName.value == ''){
      errorName.textContent = 'Merci de préciser votre nom'
    } 
    if(email.value == ''){
      errorMail.textContent = 'Merci de préciser votre email'
    }
    if(telephone.value == ''){
      errorPhone.textContent = 'Merci de préciser votre n° de téléphone'
    } 
    if(message.value == ''){
      errorMessage.textContent = 'Merci de préciser votre message'
    } 
    
  }
})
