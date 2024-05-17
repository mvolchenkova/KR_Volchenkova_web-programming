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
          window.location.href = 'users.html';
        } else {
          alert('Вы не можете просматривать список пользователей.');
        }
      });