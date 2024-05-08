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
document.querySelector('.lng-start').innerHTML = langArr['start'][hash];
}
window.addEventListener('hashchange', changeLanguage);

window.addEventListener('load', changeLanguage);

