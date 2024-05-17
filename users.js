fetch('logins.json')
  .then(response => response.json())
  .then(data => {
    const usersList = document.querySelector('.users-list');

    data.forEach(user => {
      const userElement = document.createElement('div');
      userElement.textContent = `LOGIN: ${user.login}`;
      usersList.appendChild(userElement);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных пользователей:', error);
  });