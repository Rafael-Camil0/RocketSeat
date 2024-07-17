const cookieImg = document.querySelector('#cookie');
const again = document.querySelector('#again')
const screen1 = document.querySelector('.screen')
const screen2 = document.querySelector('.screen2')
const txt = document.querySelector('#text')
const thought = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.","A felicidade depende de nós mesmos.","A coragem é a primeira das qualidades humanas porque garante todas as outras.","A excelência não é um ato, mas um hábito."]

cookieImg.addEventListener("click",broken)

again.addEventListener('click',(e)=>{
    toogle()
    
}
  
)

function broken() {
   
    getThought()
    setTimeout(function(){
        toogle()
    }, 500);
}

function getThought(){
    let random = Math.floor(Math.random()*4)
    txt.innerHTML = `${thought[random]}`
}

function animate() {
   
}
function toogle (){
      screen1.classList.toggle('hide')  
      screen2.classList.toggle('hide')  
}