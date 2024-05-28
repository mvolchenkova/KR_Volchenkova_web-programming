let exit4 = document.querySelector('.exit4');
      exit4.addEventListener('click', function(){
      history.back();
      });

      const showUsers = document.querySelector('.showUsers');
      const showUsersDiv = document.querySelector('.showUsersDiv');
      
      const storedUsername = localStorage.getItem('username');
      
      if (storedUsername !== 'admin') {
        showUsersDiv.style.display = 'none';
      } else {
        showUsersDiv.style.display = 'flex';
      }
      
      showUsers.addEventListener('click', function() {
        if (storedUsername === 'admin') {
          // Перенаправляем пользователя на страницу users.html
          window.location.href = '../users/users.html';
        } else {
          alert('Вы не можете просматривать список пользователей.');
        }
      });
      
      const toggle = document.getElementById('checkbox');
      const bodyElement = document.querySelector('body');
      const htmlElement = document.querySelector('html');

      
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
          htmlElement.classList.add('darkMode');

          localStorage.setItem('theme', 'dark');
          toggle.checked = true;
        }
        
        function disableDarkMode() {
          bodyElement.classList.remove('darkMode');
          htmlElement.classList.remove('darkMode');

          toggle.checked = false;
          localStorage.setItem('theme', 'light');
        }
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
        const languageselect = document.querySelector('.change-lang');
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