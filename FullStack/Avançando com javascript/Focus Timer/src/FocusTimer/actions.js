import state from './state.js'
import * as timer from './timer.js'
import * as element from './elements.js'
import * as sounds from "./sounds.js"



export function toggleRunning(){
    state.isRuning = document.documentElement.classList.toggle('running')
   
    timer.countdown()

    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRuning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set(){
    element.minutes.setAttribute('contenteditable',true)
    element.minutes.focus()
    sounds.buttonPressAudio.play()
}
export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute){
        sounds.bgAudio.play()
        return
    }
    sounds.bgAudio.pause()
}