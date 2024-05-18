const storedUsername = localStorage.getItem('username');
const empFullDiv = document.querySelector('.empFullDiv');
const notperm = document.querySelector('.notPerm');
if(storedUsername === 'admin'){
    notperm.style.display = 'none';
    empFullDiv.style.display = 'flex';
}
else{
    notperm.style.display = 'flex';
    empFullDiv.style.display = 'none';
}
const logOut2 = document.querySelector('.logOut2')
logOut2.addEventListener('click', function(){
    sessionStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('username');
    window.location = 'KR_Volchenkova_web.html';
  });

  const toggle = document.getElementById('checkbox');
const header = document.querySelector('.head');
const explore = document.querySelector('.lng-explore');
const classes = document.querySelector('.lng-classes');
const about = document.querySelector('.lng-about');
const privacy = document.querySelector('.lng-privacy');
const services = document.querySelector('.lng-services');
const bodyElement = document.querySelector('body');
const exp1element = document.querySelectorAll('.exp1Element');
const empDiv = document.querySelectorAll('.empDiv');
const burgerMenu = document.querySelector('.burgerMenu');
let burger = document.querySelector('.burger');

  function enableDarkMode() {
    header.classList.add('darkMode');
    explore.style.color = 'white'; 
    classes.style.color = 'white'; 
    about.style.color = 'white'; 
    privacy.style.color = 'white'; 
    services.style.color = 'white'; 
    bodyElement.classList.add('darkMode');
    burgerMenu.style = 'background-color: black';
    burger.style = 'background-color:white;border-radius:10px';
    for(let elem of exp1element){
      elem.style = 'background-color: gray'
    }
    for(let elem of empDiv){
        elem.style = 'background-color: gray'
      }
    localStorage.setItem('theme', 'dark');
    toggle.checked = true;
  }
  function disableDarkMode() {
    header.classList.remove('darkMode');
    explore.style.color = ''; 
    classes.style.color = ''; 
    about.style.color = ''; 
    privacy.style.color = ''; 
    services.style.color = ''; 
    burgerMenu.style = '';
    burger.style = '';
    bodyElement.classList.remove('darkMode');
    for(let elem of exp1element){
      elem.style = ''
    }for(let elem of empDiv){
        elem.style = ''
      }
    toggle.checked = false;
    localStorage.setItem('theme', 'light');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  if (toggle) {
    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  }
  let burgerDiv = document.querySelector('.burgerDiv');
  
  burger.addEventListener('click', function() {
    if (burgerDiv.classList.contains('slide-from-top')) {
      burgerDiv.classList.remove('slide-from-top');
    } else {
      burgerDiv.classList.add('slide-from-top');
    }
  });
  let resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', function() {
  localStorage.clear();
  disableDarkMode();
  toggle.checked = false;
});
function openPageWithAnchor() {
  window.location.href = 'KR_Volchenkova_web.html#sixth';
};
