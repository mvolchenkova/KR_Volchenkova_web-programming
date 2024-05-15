const logOut1 = document.querySelector('.logOut1');
const isAuthenticated = true;

logOut1.addEventListener('click', function(){
    sessionStorage.setItem('isAuthenticated', 'false');
    window.location = 'KR_Volchenkova_web.html';
  });
  function openPageWithAnchor() {
    window.location.href = 'KR_Volchenkova_web.html#sixth';
  }
