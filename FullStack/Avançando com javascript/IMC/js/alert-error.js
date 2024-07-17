export const  alertError ={
    element: document.querySelector('.alert-error') ,
    open(){
        
        alertError.element.classList.add('open')
    },
    close(input){
        
        alertError.element.classList.remove('open')

    }
}
