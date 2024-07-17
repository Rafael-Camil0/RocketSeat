
const fisrtNumber = Number(prompt("Insira o primeiro número"));

let secondNumber = Number(prompt("Insira o segundo número"));

const sum = fisrtNumber+secondNumber;

const oddOrEven = () =>{
  let result = ""
  if((fisrtNumber+secondNumber) % 2 == 0){
    result = "Par"
  } else {
    result = "Ímpar"
  }
  return result
}

const isEqual = fisrtNumber == secondNumber? "são":"não são"

while(secondNumber === 0 ){
  alert("O segundo número não pode ser igual a 0, Por favor insira novamente");
  secondNumber = Number(prompt("Insira o segundo número"));
}

alert(`A soma dos numeros é igual a: ${sum}`);

alert(`A subtração dos numeros é igual a: ${(fisrtNumber - Math.abs(secondNumber))}`);

alert(`A multiplicação  dos numeros é igual a: ${(fisrtNumber*secondNumber)}`);

alert(`A divisão  dos numeros é igual a: ${(fisrtNumber/secondNumber)}`);

alert(`O resto da divisão dos numeros é igual a: ${(fisrtNumber%secondNumber)}`);

alert(`A soma dos numeros é : ${oddOrEven()}`);

alert(`Os números inseridos ${isEqual} iguais.`);



