const toggle = document.getElementById('checkbox');
const bodyElement = document.querySelector('body');
const header = document.querySelector('.head');
const explore = document.querySelector('.lng-explore');
const classes = document.querySelector('.lng-classes');
const about = document.querySelector('.lng-about');
const privacy = document.querySelector('.lng-privacy');
const services = document.querySelector('.lng-services');
const aboutDiv = document.querySelector('.about');

if (toggle) {
    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  function enableDarkMode() {
    bodyElement.classList.add('darkMode');
    header.classList.add('darkMode');
    explore.style.color = 'white'; 
    classes.style.color = 'white'; 
    about.style.color = 'white'; 
    privacy.style.color = 'white'; 
    services.style.color = 'white'; 
    aboutDiv.style = 'background-color:gray'
    localStorage.setItem('theme', 'dark');
    toggle.checked = true;
  }
  
  function disableDarkMode() {
    bodyElement.classList.remove('darkMode');
    header.classList.remove('darkMode');
    explore.style.color = ''; 
    classes.style.color = ''; 
    about.style.color = ''; 
    privacy.style.color = ''; 
    services.style.color = ''; 
    aboutDiv.style = ''
    toggle.checked = false;
    localStorage.setItem('theme', 'light');
  }