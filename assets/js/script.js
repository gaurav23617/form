const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.login-btn');
const closebtn = document.querySelector('.close-icon');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-btn');
});

closebtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active-btn');
});