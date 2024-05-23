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