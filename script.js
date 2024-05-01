const langArr = {
  "title" : {
      "en": "meditation",
      "ru": "медитация",
    },
  "med": {
    "en": "Meditations Helps You Detoxify Your Body",
    "ru": "Медитации помогают вам очистить организм от токсинов",
  },
  "home": {
    "en": "Home",
    "ru": "Главная",
  },
  "explore": {
    "en": "Explore",
    "ru": "Исследовать",
  },
}

const alllang = ['en', 'ru'];
const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.hash = lang; 
}
function changeLanguage() {
  let hash = window.location.hash.substring(1);
  if(!alllang.includes(hash)){
    hash = 'en';
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['title'][hash];
  document.querySelector('.lng-med').innerHTML = langArr['med'][hash];
  document.querySelector('.lng-home').innerHTML = langArr['home'][hash];
}
window.addEventListener('hashchange', changeLanguage);

window.addEventListener('load', changeLanguage);
let toogle = document.getElementById('checkbox');
let header = document.querySelector('.head');

toogle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const rectElements = document.querySelectorAll('.rect1, .rect2, .rect3');

  rectElements.forEach((rect) => {
    rect.classList.toggle('darkMode');
  });
  var element = document.body;
  var headElement = document.querySelector(".head");
  element.classList.toggle("night-theme");
  headElement.classList.toggle("night-theme");
  const bodyElement = document.body;
  const meditationWindElement = document.querySelector('.meditationWind');

  bodyElement.classList.toggle('darkMode');

  const currentTheme = bodyElement.classList.contains('darkMode') ? 'dark' : 'light';
  if (currentTheme === 'dark') {
    meditationWindElement.querySelector('.windText').style.color = 'black';
    meditationWindElement.querySelector('.windLorem').style.color = 'black';
  } else {
    meditationWindElement.querySelector('.windText').style.color = '';
    meditationWindElement.querySelector('.windLorem').style.color = '';
  }

  const breathElement = document.querySelector('.breath');
  const breathLoremElement = document.querySelector('.breathLorem');
  const musicText1Elements = document.querySelectorAll('.musicText1, .musicText1-2, .musicText1-3');
  const musicText2Elements = document.querySelectorAll('.musicText2, .musicText2-2, .musicText2-3');

  // Переключение класса darkMode на body
  bodyElement.classList.toggle('darkMode');

  // Обновление цвета текста в зависимости от текущей темы
  if (bodyElement.classList.contains('darkMode')) {
    breathElement.style.color = 'white';
    breathLoremElement.style.color = 'white';
    musicText1Elements.forEach((element) => {
      element.style.color = 'black';
    });
    musicText2Elements.forEach((element) => {
      element.style.color = 'black';
    });
  } else {
    breathElement.style.color = '';
    breathLoremElement.style.color = '';
    musicText1Elements.forEach((element) => {
      element.style.color = '';
    });
    musicText2Elements.forEach((element) => {
      element.style.color = '';
    });
  }
  burger.style="background: white";
}

const burger = document.querySelector('.burger::after');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
})
