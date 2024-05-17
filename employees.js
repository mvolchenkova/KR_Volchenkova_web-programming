const storedUsername = localStorage.getItem('username');
const empFullDiv = document.querySelector('.empFullDiv');
const notperm = document.querySelector('.notPerm');
if(storedUsername === 'admin'){
    notperm.style.display = 'none';
    empFullDiv.style.display = 'flex';
}
else{
    notperm.style.display = 'flex';
    empFullDiv.style.display = 'none';
}
const logOut2 = document.querySelector('.logOut2')
logOut2.addEventListener('click', function(){
    sessionStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('username');
    location.reload();
  });