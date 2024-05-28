fetch('../json/logins.json')
  .then(response => response.json())
  .then(data => {
    

    data.forEach(user => {
      const userElement = document.createElement('div');
      userElement.textContent = `LOGIN: ${user.login}`;
      usersList.appendChild(userElement);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных пользователей:', error);
  });
const usersList = document.querySelector('.users-list');

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
  const users = document.querySelector('.users-list > div');
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

    const logOut = document.querySelector('.logOut');
    logOut.addEventListener('click', function(){
      sessionStorage.setItem('isAuthenticated', 'false');
      localStorage.removeItem('username');
      window.location = '../homePage/KR_Volchenkova_web.html';
    });
      function openPageWithAnchor() {
        window.location.href = '../homePage/KR_Volchenkova_web.html#sixth';
      };    
      
  let burger = document.querySelector('.burger');
  let burgerDiv = document.querySelector('.burgerDiv');
  
  burger.addEventListener('click', function() {
    if (burgerDiv.classList.contains('slide-from-top')) {
      burgerDiv.classList.remove('slide-from-top');
    } else {
      burgerDiv.classList.add('slide-from-top');
    }
  });
  let resetButton = document.querySelector('.resetButton');
  const languageselect = document.querySelector('.change-lang');
  resetButton.addEventListener('click', function() {
      
      localStorage.setItem('translate', 'ru');
      let lang1 = localStorage.getItem('translate');
      loadLanguage(lang1);
      const da = languageselect.querySelector('option[value="ru"]');
    if (da) {
      da.selected = true;
    }
    disableDarkMode();
  
    toggle.checked = false;
  });

  function loadLanguage(language) { 
    let url = '../json/lang.json'; 
    fetch(url) 
      .then(response => response.json()) 
      .then(data => { 
        // Обновление текстовых значений элементов 
        const elements = document.querySelectorAll('.data-lang'); 
     
        for (let element of elements) { 
           
          const key = element.getAttribute('data-lang'); 
          let translation = data[language][key]; 
          localStorage.setItem(key,translation); 
          element.innerHTML = translation; 
        } 
      }); 
  } 

  if (languageselect) {
    languageselect.addEventListener('change', function() {
      let select = languageselect.value;
      loadLanguage(select);
  
      localStorage.setItem('translate', select);
    });
  }
  
  const isEnLanguage = localStorage.getItem('translate');
  if (isEnLanguage === 'en') {
    loadLanguage(isEnLanguage);
    const EnOption = languageselect.querySelector('option[value="en"]');
    if (EnOption) {
      EnOption.selected = true;
    }
  } else {
    loadLanguage('ru');
    const ruOption = languageselect.querySelector('option[value="ru"]');
    if (ruOption) {
      ruOption.selected = true;
    }
  }