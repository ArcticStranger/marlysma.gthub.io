const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const logoGif = document.querySelector('.logo-gif');
const emailInputs = document.querySelectorAll('.input-box input[type="email"]');
const passwordInputs = document.querySelectorAll('.input-box input[type="password"]');
const newSrc = "./mainmenuassets/eye.gif";
const originalSrc = "./mainmenuassets/arasaka.gif";
const header = document.querySelector('header');
const body = document.querySelector('body');
body.style.paddingTop = `${header.offsetHeight}px`;

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

logoGif.addEventListener('click', () => {
    if (logoGif.src !== newSrc) {
        logoGif.src = newSrc;
        logoGif.classList.add('new-image'); 
               // Меняем тип у ВСЕХ полей пароля
        passwordInputs.forEach(input => {
            input.type = "text";
        });
    } else {
        logoGif.src = originalSrc;
        logoGif.classList.remove('new-image'); 
             // Возвращаем тип обратно
        passwordInputs.forEach(input => {
            input.type = "password";
        });
    }
});