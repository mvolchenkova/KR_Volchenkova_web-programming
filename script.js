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
const alllang = ['en', 'ru'];
const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  localStorage.setItem('lang', lang);
  changeLanguage();
}

function changeLanguage() {
  let lang = localStorage.getItem('lang');
  if (!alllang.includes(lang)) {
    lang = 'en';
  }
  select.value = lang;
  document.querySelector('title').innerHTML = langArr['title'][hash];
  document.querySelector('.lng-med').innerHTML = langArr['med'][hash];
  document.querySelector('.lng-home').innerHTML = langArr['home'][hash];
  document.querySelector('.lng-explore').innerHTML = langArr['explore'][hash];
  document.querySelector('.lng-about').innerHTML = langArr['about'][hash];
  document.querySelector('.lng-privacy').innerHTML = langArr['privacy'][hash];
  document.querySelector('.lng-services').innerHTML = langArr['services'][hash];
  document.querySelector('.lng-classes').innerHTML = langArr['classes'][hash];
  document.querySelector('.lng-medLor').innerHTML = langArr['medLor'][hash];
  document.querySelector('.lng-getStart').innerHTML = langArr['getStart'][hash];
  document.querySelector('.lng-meditation').innerHTML = langArr['meditation'][hash];
  document.querySelector('.lng-meditationLor').innerHTML = langArr['meditationLor'][hash];
  document.querySelector('.lng-learnMore1').innerHTML = langArr['learnMore1'][hash];
  document.querySelector('.lng-learnMore2').innerHTML = langArr['learnMore2'][hash];
  document.querySelector('.lng-learnMore3').innerHTML = langArr['learnMore3'][hash];
  document.querySelector('.lng-yoga').innerHTML = langArr['yoga'][hash];
  document.querySelector('.lng-yogaLor').innerHTML = langArr['yogaLor'][hash];
  document.querySelector('.lng-sound').innerHTML = langArr['sound'][hash];
  document.querySelector('.lng-soundLor').innerHTML = langArr['soundLor'][hash];
  document.querySelector('.lng-practice').innerHTML = langArr['practice'][hash];
  document.querySelector('.lng-practiceLor').innerHTML = langArr['practiceLor'][hash];
  document.querySelector('.lng-medWind').innerHTML = langArr['medWind'][hash];
  document.querySelector('.lng-medWindLor').innerHTML = langArr['medWindLor'][hash];
  document.querySelector('.lng-stress').innerHTML = langArr['stress'][hash];
  document.querySelector('.lng-stressLor').innerHTML = langArr['stressLor'][hash];
  document.querySelector('.lng-self').innerHTML = langArr['self'][hash];
  document.querySelector('.lng-selfLor').innerHTML = langArr['selfLor'][hash];
  document.querySelector('.lng-breath').innerHTML = langArr['breath'][hash];
  document.querySelector('.lng-breathLor').innerHTML = langArr['breathLor'][hash];
  document.querySelector('.lng-mus1').innerHTML = langArr['mus1'][hash];
  document.querySelector('.lng-mus1-1').innerHTML = langArr['mus1-1'][hash];
  document.querySelector('.lng-mus2').innerHTML = langArr['mus2'][hash];
  document.querySelector('.lng-mus2-1').innerHTML = langArr['mus2-1'][hash];
  document.querySelector('.lng-mus3').innerHTML = langArr['mus3'][hash];
  document.querySelector('.lng-mus3-1').innerHTML = langArr['mus3-1'][hash];
  document.querySelector('.lng-best').innerHTML = langArr['best'][hash];
  document.querySelector('.lng-bestLor').innerHTML = langArr['bestLor'][hash];
  document.querySelector('.lng-peace').innerHTML = langArr['peace'][hash];
  document.querySelector('.lng-peaceLor').innerHTML = langArr['peaceLor'][hash];
  document.querySelector('.lng-strength').innerHTML = langArr['strength'][hash];
  document.querySelector('.lng-strengthLor').innerHTML = langArr['strengthLor'][hash];
  document.querySelector('.lng-relex').innerHTML = langArr['relex'][hash];
  document.querySelector('.lng-relexLor').innerHTML = langArr['relexLor'][hash];
  document.querySelector('.lng-refresh').innerHTML = langArr['refresh'][hash];
  document.querySelector('.lng-refreshLor').innerHTML = langArr['refreshLor'][hash];
  document.querySelector('.lng-beauty').innerHTML = langArr['beauty'][hash];
  document.querySelector('.lng-beautyLor').innerHTML = langArr['beautyLor'][hash];
  document.querySelector('.lng-relief').innerHTML = langArr['relief'][hash];
  document.querySelector('.lng-reliefLor').innerHTML = langArr['reliefLor'][hash];
  document.querySelector('.lng-transf').innerHTML = langArr['transf'][hash];
  document.querySelector('.lng-transfLor').innerHTML = langArr['transfLor'][hash];
  document.querySelector('.lng-anti').innerHTML = langArr['anti'][hash];
  document.querySelector('.lng-anti1').innerHTML = langArr['anti1'][hash];
  document.querySelector('.lng-anti2').innerHTML = langArr['anti2'][hash];
  document.querySelector('.lng-learnMore4').innerHTML = langArr['learnMore4'][hash];
  document.querySelector('.lng-back').innerHTML = langArr['back'][hash];
  document.querySelector('.lng-back1').innerHTML = langArr['back1'][hash];
  document.querySelector('.lng-back2').innerHTML = langArr['back2'][hash];
  document.querySelector('.lng-learnMore5').innerHTML = langArr['learnMore5'][hash];
  document.querySelector('.lng-home2').innerHTML = langArr['home2'][hash];
  document.querySelector('.lng-explore2').innerHTML = langArr['explore2'][hash];
  document.querySelector('.lng-about2').innerHTML = langArr['about2'][hash];
  document.querySelector('.lng-privacy2').innerHTML = langArr['privacy2'][hash];
  document.querySelector('.lng-services2').innerHTML = langArr['services2'][hash];
  document.querySelector('.lng-classes2').innerHTML = langArr['classes2'][hash];
  document.querySelector('.lng-start').innerHTML = langArr['start'][hash];

}

window.addEventListener('load', changeLanguage);

const burgerMenu = document.querySelector('.burgerMenu');
const toggle = document.getElementById('checkbox');
const header = document.querySelector('.head');
const bodyElement = document.body;
const meditationWindElement = document.querySelector('.meditationWind');
const breathElement = document.querySelector('.breath');
const breathLoremElement = document.querySelector('.breathLorem');
const musicText1Elements = document.querySelectorAll('.musicText1, .musicText1-2, .musicText1-3');
const musicText2Elements = document.querySelectorAll('.musicText2, .musicText2-2, .musicText2-3');
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
const lngClasses = document.querySelector('.lng-classes');
const lngAbout = document.querySelector('.lng-about');
const lngPrivacy = document.querySelector('.lng-privacy');
const lngServices = document.querySelector('.lng-services');

toggle.addEventListener('click', toggleDarkMode);

// Check if the current theme is stored in the local storage
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  enableDarkMode();
}
function toggleDarkMode() {
  if (bodyElement.classList.contains('darkMode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  bodyElement.classList.add('darkMode');
  header.classList.add('darkMode');
  meditationWindElement.style.backgroundImage = 'none';
  breathElement.style.color = 'white';
  breathLoremElement.style.color = 'white';
  burgerMenu.style = 'background-color: black ';
  headerText.style.color = 'white'; 
  lngClasses.style.color = 'white';
  lngAbout.style.color = 'white';
  lngPrivacy.style.color = 'white';
  lngServices.style.color = 'white';
  burger.style = 'background-color: white; border-radius: 10px';
  musicText1Elements.forEach((element) => {
    element.style.color = 'black';
  });
  musicText2Elements.forEach((element) => {
    element.style.color = 'black';
  });
  const meditationWindTextElements = meditationWindElement.querySelectorAll('.windText, .windLorem');
  meditationWindTextElements.forEach((element) => {
    element.style.color = 'white';
  });
    const whiteTextElements = document.querySelectorAll('.transf, .transfLorem, .namec1, .descrc1, .descrc1-1, .namec2, .descrc2, .descrc2-1, .navs, .resetButton');

    whiteTextElements.forEach((element) => {
      element.style.color = 'white';
    });
  
  localStorage.setItem('theme', 'dark');
  toggle.checked = true;
}

function disableDarkMode() {
  bodyElement.classList.remove('darkMode');
  header.classList.remove('darkMode');
  breathElement.style.color = '';
  breathLoremElement.style.color = '';
  burgerMenu.style = '';
  headerText.style.color = ''; 
  lngClasses.style.color = '';
  lngAbout.style.color = '';
  lngPrivacy.style.color = '';
  lngServices.style.color = '';

  musicText1Elements.forEach((element) => {
    element.style.color = '';
  });
  musicText2Elements.forEach((element) => {
    element.style.color = '';
  });
  const meditationWindTextElements = meditationWindElement.querySelectorAll('.windText, .windLorem');
  meditationWindTextElements.forEach((element) => {
    element.style.color = '';
  });
    const whiteTextElements = document.querySelectorAll('.transf, .transfLorem, .namec1, .descrc1, .descrc1-1, .namec2, .descrc2, .descrc2-1, .navs,.resetButton');

    whiteTextElements.forEach((element) => {
      element.style.color = 'black';
    });
  
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
let agreeCheckbox = document.getElementById('agreeCheckbox');

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
    { input: mobilePhoneInput, placeholder: 'Mobile phone' },
    { input: emailInput, placeholder: 'E-mail' },
    { input: birthDateInput, placeholder: 'Birth date' },
    { input: passwordInput, placeholder: 'Create a password' },
    { input: repeatPasswordInput, placeholder: 'Repeat a password' },
  ];

    for (let field of requiredFields) {
      if (field.input.value === '') {
        let errorMessage = document.createElement('span');
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');
        errorMessage.textContent = `Please enter ${field.placeholder}`;
        field.input.insertAdjacentElement('afterend', errorMessage);
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

// Функция для генерации имени пользователя
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
const secondCont = document.querySelector('.secondContainer');
const thirdCont = document.querySelector('.thirdContainer');
const fifthCont = document.querySelector('.fifthContainer');
const Login = document.querySelector('.loginButton'); 
Login.addEventListener('click', function(){ 
  let logup = document.getElementById("Logup").value; 
  let userpassword = document.getElementById("PasswordLog").value; 
  username = logup; 
  password = userpassword 
 let url = 'logins.json'; 
 fetch(url) 
 .then(response => response.json()) 
 .then(result => { for(let element of result){ 
  if(element.login == username && element.password == password){ 
    window.location = 'KR_Volchenkova_web.html'; 
  } 
  else{ 
    alert('лох') 
  } 
 }}); 
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