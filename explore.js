const logOut1 = document.querySelector('.logOut1');
const isAuthenticated = true;

logOut1.addEventListener('click', function(){
    sessionStorage.setItem('isAuthenticated', 'false');
    window.location = 'KR_Volchenkova_web.html';
  });
  function openPageWithAnchor() {
    window.location.href = 'KR_Volchenkova_web.html#sixth';
  };

const toggle = document.getElementById('checkbox');
const header = document.querySelector('.head');
const explore = document.querySelector('.lng-explore');
const classes = document.querySelector('.lng-classes');
const about = document.querySelector('.lng-about');
const privacy = document.querySelector('.lng-privacy');
const services = document.querySelector('.lng-services');
const bodyElement = document.querySelector('body');
const exp1element = document.querySelectorAll('.exp1Element');

  function enableDarkMode() {
    header.classList.add('darkMode');
    explore.style.color = 'white'; 
    classes.style.color = 'white'; 
    about.style.color = 'white'; 
    privacy.style.color = 'white'; 
    services.style.color = 'white'; 
    bodyElement.classList.add('darkMode');
    for(let elem of exp1element){
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
    bodyElement.classList.remove('darkMode');
    for(let elem of exp1element){
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