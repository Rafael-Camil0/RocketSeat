let darkMode = true;
const buttonToogle = document.querySelector('#toggle-mode');

buttonToogle.addEventListener('click',(e)=>{
   document.documentElement.classList.toggle('light')
   
    const mode = darkMode ? 'light' : 'dark';

   
    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;

   darkMode = !darkMode;

});