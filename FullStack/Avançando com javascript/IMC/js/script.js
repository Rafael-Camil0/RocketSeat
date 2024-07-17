import { Modal } from './modal.js'
import {alertError} from './alert-error.js'
import { calculateImc, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        alertError.open();
        return;
    }
    
   

    const result = calculateImc(weight, height)
    displayResultMessage(result);
  
}
inputHeight.addEventListener('input',()=>{
    alertError.close()
})
inputWeight.addEventListener('input',()=>{
    alertError.close()
})

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
