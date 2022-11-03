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

//HOVER DU PORTOFOLIO

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
let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
let phoneRegex = new RegExp(/^((\+)33|0)[1-9](\d{2}){4}$/g);


function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sabmhadji@gmail.com",
    Password : "BA14902E0CBD65453D8629C14066E806C71B",
    To : "diallosabourata@gmail.com",
    From : 'sabmhadji@gmail.com',
    Subject : "Message reçu depuis le Portofolio",
    Body : `Nom : ${formName.value} <br/> Email: ${email.value} <br/> Téléphone: ${telephone.value} <br/> Message: ${message.value}`
}).then(
  message => alert(message)
);
}

sendForm.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
  console.log(email.value)
  console.log('verif email regex ', emailRegex.test(email.value))
  console.log('verif phone regex ', phoneRegex.test(telephone.value))


  if(!email.value == '' 
    && emailRegex.test(email.value) === true 
    && !formName.value == '' 
    && !telephone.value =='' 
    && phoneRegex.test(telephone.value) === true
    && !message.value == '') {
    console.log('je suis la!!!')
    sendEmail();
    document.getElementById('form').reset();

  } else {
    console.log('on est dans le else')
    if(formName.value == ''){
      errorName.textContent = 'Merci de préciser votre nom'
    } 
    if(email.value == '' || emailRegex.test(email.value) == false){
      console.log('email else')
      console.log(emailRegex.test(email.value))
      errorMail.textContent = 'Merci de préciser votre email ou vérifier le format'
     /* if(emailRegex.test(email.value) == false) {
        document.querySelector('.regex').textContent = 'Le format mail est incorrect'
      }*/
    }
    if(telephone.value == '' || phoneRegex.test(telephone.value) == false){
      console.log('telephone else')
      console.log(phoneRegex.test(telephone.value))
      errorPhone.textContent = 'Merci de préciser votre n° de téléphone ou le mettre au bon format'
    } 
    if(message.value == ''){
      errorMessage.textContent = 'Merci de préciser votre message'
    } 
  }
})
