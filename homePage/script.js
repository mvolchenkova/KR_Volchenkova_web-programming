let burger = document.querySelector('.burger');
let burgerDiv = document.querySelector('.burgerDiv');

burger.addEventListener('click', function() {
  if (burgerDiv.classList.contains('slide-from-top')) {
    burgerDiv.classList.remove('slide-from-top');
  } else {
    burgerDiv.classList.add('slide-from-top');
  }
});
let haveAccBut = document.querySelector('.haveAccBut');
let authReg = document.querySelector('.authRegDiv');
let getStartButton = document.querySelector('.getStartButton');
let auth = document.querySelector('.authorization');
getStartButton.addEventListener('click', function(){
  if (authReg.classList.contains('slide-from-left')) {
    authReg.classList.remove('slide-from-left');
  } else {
    authReg.classList.add('slide-from-left');
  }
})
let authRegDiv = document.querySelector('.authRegDiv');
let authorizationDiv = document.querySelector('.authorizationDiv');

haveAccBut.addEventListener('click', function() {
  authReg.classList.remove('slide-from-left');
    authorizationDiv.style.marginLeft = '0';
});
let reg = document.querySelector('.regDiv');
let regBut = document.querySelector('.regBut');

regBut.addEventListener('click', function(){
  authReg.classList.remove('slide-from-left');
    reg.style.marginLeft = '0';
})

const burgerMenu = document.querySelector('.burgerMenu');
const toggle = document.getElementById('checkbox');
const header = document.querySelectorAll('.head');
const bodyElement = document.querySelector('body');
const meditationWindElement = document.querySelector('.meditationWind');
const windText = document.querySelector('.windText');
const windLor = document.querySelector('.windLorem');
const breathElement = document.querySelector('.breath');
const breathLoremElement = document.querySelector('.breathLorem');
const mus1 = document.querySelector('.musicText1');
const mus2 = document.querySelector('.musicText1-2');
const mus3 = document.querySelector('.musicText1-3');
const mus4 = document.querySelector('.musicText2');
const mus5 = document.querySelector('.musicText2-2');
const mus6 = document.querySelector('.musicText2-3');
const transf = document.querySelector('.transf');
const transfLorem = document.querySelector('.transfLorem');
const namec1 = document.querySelector('.namec1');
const descrc1 = document.querySelector('.descrc1');
const descrc11 = document.querySelector('.descrc1-1');
const namec2 = document.querySelector('.namec2');
const descrc2 = document.querySelector('.descrc2');
const descrc21 = document.querySelector('.descrc2-1');
const navs  = document.querySelector('.navs');
const headerText = document.querySelector('.headerText');
const lngClasses = document.querySelector('.classes1');
const lngAbout = document.querySelector('.about1');
const lngPrivacy = document.querySelector('.privacy1');
const lngServices = document.querySelector('.services1');
const authR = document.querySelector('.authReg');
const getSt = document.querySelector('.getStart');
const authorizationNight = document.querySelector('.authorization');
const authNight = document.querySelector('.auth');
const label1 = document.querySelector('.label1');
const label2 = document.querySelector('.label2');
const loginButton = document.querySelector('.loginButton');
const regId = document.querySelector('.regId');
const chekText = document.querySelector('.checkboxText');
const registrateBut = document.querySelector('.registrateBut');
const logOut = document.querySelector('.logOut');
const tel = document.querySelector('.tel');
const email = document.querySelector('.emaill');
const policyDiv = document.querySelector('.policyDiv');
const rect1 = document.querySelector('.rect1');
const rect2 = document.querySelector('.rect2');
const rect3 = document.querySelector('.rect3');

// Обработчик события изменения переключателя темы
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
  for(let elem of header){
    elem.classList.add('darkMode');
  }
 
  meditationWindElement.style = 'background-image:none';
  windText.style.color = 'white';
  windLor.style.color = 'white';
  transf.style.color = 'white';
  transfLorem.style.color = 'white';
  breathElement.style.color = 'white';
  breathLoremElement.style.color = 'white';
  burgerMenu.style = 'background-color: black';
  burger.style = 'background-color:white;border-radius:10px';
  headerText.style.color = 'white'; 
  lngClasses.style.color = 'white';
  lngAbout.style.color = 'white';
  lngPrivacy.style.color = 'white';
  lngServices.style.color = 'white';
  authR.style = 'background-color: black';
  getSt.style.color = 'white';
  authorizationNight.style = 'background-color: black';
  authNight.style.color = 'white';
  label1.style.color = 'white'; 
  label2.style.color = 'white';
  loginButton.style = 'background-color: white';
  reg.style = 'background-color: black';
  regId.style.color = 'white';
  chekText.style.color = 'white';
  email.style.color = 'white';
  tel.style.color = 'white';
  namec1.style.color = 'white';
  descrc1.style.color = 'white';
  descrc11.style.color = 'white';
  namec2.style.color = 'white';
  descrc2.style.color = 'white';
  descrc21.style.color = 'white';
  mus1.style.color = 'white';
  mus2.style.color = 'white';
  mus3.style.color = 'white';
  mus4.style.color = 'white';
  mus5.style.color = 'white';
  mus6.style.color = 'white';
  rect1.style = 'margin:5px;background-image:none;border-radius:20px;background-color: gray';
  rect2.style = 'margin:5px;background-image:none;border-radius:20px;background-color: gray';
  rect3.style = 'margin:5px;background-image:none;border-radius:20px;background-color: gray';

  registrateBut.style = 'background-color:white'; 

  burger.style = 'background-color: white; border-radius: 10px';

    const whiteTextElements = document.querySelectorAll('.transf, .transfLorem');
    whiteTextElements.forEach((element) => {
      element.style.color = 'white';
    });
  
  localStorage.setItem('theme', 'dark');
  toggle.checked = true;
}

function disableDarkMode() {
  bodyElement.classList.remove('darkMode');
  for(let elem of header){
    elem.classList.remove('darkMode');
  }
  breathElement.style.color = '';
  windText.style.color = '';
  windLor.style.color = '';
  breathLoremElement.style.color = '';
  burgerMenu.style = '';
  headerText.style.color = ''; 
  lngClasses.style.color = '';
  lngAbout.style.color = '';
  lngPrivacy.style.color = '';
  lngServices.style.color = '';
  authR.style = '';
  logOut.style.color = '';
  getSt.style.color = '';
  authorizationNight.style = '';
  authNight.style.color = '';
  label1.style.color = ''; 
  label2.style.color = '';
  loginButton.style = '';
  reg.style = '';
  regId.style.color = '';
  chekText.style.color = '';
  registrateBut.style = '';
  email.style.color = '';
  tel.style.color = '';
  mus1.style.color = '';
  mus2.style.color = '';
  mus3.style.color = '';
  mus4.style.color = '';
  mus5.style.color = '';
  mus6.style.color = '';
  rect1.style = '';
  rect2.style = '';
  rect3.style = '';

    const whiteTextElements = document.querySelectorAll('.transf, .transfLorem, .namec1, .descrc1, .descrc1-1, .namec2, .descrc2, .descrc2-1, .navs,.resetButton');

    whiteTextElements.forEach((element) => {
      element.style.color = 'black';
    });
  toggle.checked = false;
  localStorage.setItem('theme', 'light');
}
let slid1 = document.getElementById("slid1");
let slid2 = document.getElementById("slid2");
let slid = document.querySelector(".slid");
let countOfItems; 

function updateCountOfItems() {
  if (window.innerWidth <= 768) {
    countOfItems = 6;
  } else {
    countOfItems = 5;
  }
}

updateCountOfItems();

window.addEventListener('resize', updateCountOfItems);

let currentItem = 0;

slid2.addEventListener('click', function() {
  if (currentItem < countOfItems - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }

  slid.style.transform = `translateX(-${currentItem * 605}px)`;
});

slid1.addEventListener('click', function() {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = countOfItems - 1;
  }

  slid.style.transform = `translateX(-${currentItem * 605}px)`;
});

function validateForm() {
  var login = document.forms["authorization"]["login"].value;
  var password = document.forms["authorization"]["password"].value;
  if (login !== "correctLogin" || password !== "correctPassword") {
    document.getElementById("error-message").textContent = "Неверный логин или пароль";
    return false;
  }
  return true;
}

let resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', function() {
  localStorage.clear();
  disableDarkMode();
  toggle.checked = false;
});

// Получаем ссылку на checkbox
let agreeCheckbox = document.querySelector('.agreeCheckbox');

// Добавляем обработчик события, чтобы проверять состояние checkbox'а
agreeCheckbox.addEventListener('change', function() {
  if (agreeCheckbox.checked) {
    // Checkbox отмечен
    // Ваш код, который выполняется при согласии пользователя
  } else {
    // Checkbox не отмечен
    // Ваш код, который выполняется при отказе пользователя
  }
});

//REGISTRATION
// Получаем ссылку на форму регистрации
let registrationForm = document.getElementById('formregistr');

// Получаем ссылки на все поля формы
let surnameInput = registrationForm.querySelector('input[placeholder="Surname"]');
let nameInput = registrationForm.querySelector('input[placeholder="Name"]');
let fatherNameInput = registrationForm.querySelector('input[placeholder="Father Name"]');
let mobilePhoneInput = registrationForm.querySelector('input[placeholder="Mobile phone"]');
let emailInput = registrationForm.querySelector('input[placeholder="E-mail"]');
let birthDateInput = registrationForm.querySelector('input[placeholder="Birth date"]');
let usernameInput = registrationForm.querySelector('input[placeholder="Username"]');
let passwordInput = registrationForm.querySelector('input[placeholder="Create a password"]');
let repeatPasswordInput = registrationForm.querySelector('input[placeholder="Repeat a password"]');


// Добавляем обработчик события при отправке формы
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию
  // Проверяем заполнение обязательных полей
  if (
    surnameInput.value === '' ||
    nameInput.value === '' ||
    mobilePhoneInput.value === '' ||
    emailInput.value === '' ||
    birthDateInput.value === '' ||
    passwordInput.value === '' ||
    repeatPasswordInput.value === '' ||
    !agreeCheckbox.checked
  ) {
    // Если хотя бы одно обязательное поле не заполнено или checkbox не отмечен, добавляем текстовое сообщение об ошибке
    showErrorMessage();
  } else {
    // Если все обязательные поля заполнены и checkbox отмечен, генерируем имя пользователя
    generateUsername();
  }
});

// Функция для добавления текстового сообщения об ошибке
function showErrorMessage() {
  let requiredFields = [
    { input: surnameInput, placeholder: 'Surname' },
    { input: nameInput, placeholder: 'Name' },
    { input: fatherNameInput, placeholder: 'Father name' },
    { input: mobilePhoneInput, placeholder: 'Mobile phone' },
    { input: emailInput, placeholder: 'E-mail' },
    { input: birthDateInput, placeholder: 'Birth date' },
    { input: usernameInput, placeholder: 'Username' },
    { input: passwordInput, placeholder: 'Create a password' },
    { input: repeatPasswordInput, placeholder: 'Repeat a password' },
  ];

  for (let field of requiredFields) {
    if (field.input.value === '') {
      if (!field.input.nextElementSibling || !field.input.nextElementSibling.classList.contains('error-message')) {
        let errorMessage = document.createElement('span');
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');
        errorMessage.textContent = `Please enter ${field.placeholder}`;
        field.input.insertAdjacentElement('afterend', errorMessage);
      }
    } else {
      removeErrorMessage(field.input);
    }
  }

  requiredFields.forEach(field => {
    field.input.addEventListener('input', function() {
      // Если в поле есть текст, удаляем сообщение об ошибке
      if (field.input.value !== '') {
        removeErrorMessage(field.input);
      }
    });
  });
}

function removeErrorMessage(input) {
  let errorMessage = input.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains('error-message')) {
    errorMessage.remove();
  }
}
function removeErrorMessage(input) {
  let errorMessage = input.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains('error-message')) {
    errorMessage.remove();
  }
}

// Функция для генерации имени пользователя
let genBut = document.querySelector('.genBut');

function generateUsername() {
  // Генерируем имя пользователя 5 раз

  let generatedUsernames = [];
  for (let i = 0; i < 5; i++) {
    let username = generateRandomUsername();
    generatedUsernames.push(username);
  }

  // Предлагаем пользователю выбрать одно из сгенерированных имен пользователя
  let chosenUsername = prompt('Choose a username:', generatedUsernames.join('\n'));
  if (chosenUsername && generatedUsernames.includes(chosenUsername)) {
    // Пользователь выбрал одно из сгенерированных имен пользователя
    // Выполняем дальнейшие действия, например, отправляем форму
    registrationForm.submit();
  } else {
    // Пользователь не выбрал сгенерированное имя пользователя
    // Можно выполнить необходимые действия или вывести сообщение об ошибке
  }
}

// Функция для генерации случайного имени пользователя
function generateRandomUsername() {
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let usernameLength = 8;
  let randomUsername = '';

  for (let i = 0; i < usernameLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomUsername += characters[randomIndex];
  }

  return randomUsername;
}
document.addEventListener('DOMContentLoaded', function() {
  const secondCont = document.querySelector('.secondContainer');
  const thirdCont = document.querySelector('.thirdContainer');
  const fifthCont = document.querySelector('.fifthContainer');
  const Login = document.querySelector('.loginButton');
  let qq = document.querySelector('.qq');

  // Check if the user is already authenticated when the page loads
  if (sessionStorage.getItem('isAuthenticated') === 'true') {
    // If authenticated, apply the authenticated styles and display settings
    secondCont.classList.add('secondContainer1');
    thirdCont.classList.add('thirdContainer1');
    fifthCont.classList.add('fifthContainer1');
    getStartButton.style.display = 'none';
    qq.style.display = 'flex';
  }

  Login.addEventListener('click', function(event) {
    event.preventDefault();

    let logup = document.getElementById("Logup").value;
    let userpassword = document.getElementById("PasswordLog").value;
    let username = logup;
    let password = userpassword;
    let url = 'logins.json';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let isAuthenticated = false;
        for (let element of result) {
          if (element.login === username && element.password === password) {
            isAuthenticated = true;
            break;
          }
        }
        if (isAuthenticated) {
          // Apply the authenticated styles and display settings
          secondCont.classList.add('secondContainer1');
          thirdCont.classList.add('thirdContainer1');
          fifthCont.classList.add('fifthContainer1');
          qq.style.display = 'flex';
          location.reload();
          sessionStorage.setItem('isAuthenticated', 'true');
        
          // Save username to localStorage
          localStorage.setItem('username', username);
        } else {
          alert('Ошибка входа. Пожалуйста, проверьте логин и пароль.');
        }
      });
  });
});
logOut.addEventListener('click', function(){
  sessionStorage.setItem('isAuthenticated', 'false');
  localStorage.removeItem('username');
  location.reload();
});


let exit1 = document.querySelector('.exit1');
let exit2 = document.querySelector('.exit2');
let exit3 = document.querySelector('.exit3');
exit1.addEventListener('click', function(){
  authReg.classList.remove('slide-from-left');
});
exit2.addEventListener('click', function(){
  authorizationDiv.style.marginLeft = '-2000px';
});
exit3.addEventListener('click', function(){
  reg.style.marginLeft = '-4000px';
});
//интернационализация
function loadLanguage(language) { 
  let url = 'lang.json'; 
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