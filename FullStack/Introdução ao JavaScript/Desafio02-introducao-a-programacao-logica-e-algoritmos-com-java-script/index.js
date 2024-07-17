

const students = [new student("Rafael Camilo",7,10),new student("Gabriel Camilo",5,5),new student("Peterson Camilo",10,10)]

for (let index = 0; index < students.length; index++) {
  alert(students[index].calculateAverage());

  
}

function student (name,
  firstScore,secondScore){
    this.name = name
    this.firstScore = firstScore
    this.secondScore = secondScore;
    this.average = (firstScore+secondScore)/2
    this.calculateAverage = () =>{
      let result = ""  
      if(this.average >= 7){
        result = `A aluna(o) ${this.name} tem a média de: ${this.average} \n
        Parabéns aluna(o) ${this.name} você foi aprovada(o)!!
        `
        }else{
          result = `A aluna(o) ${this.name} tem a média de: ${this.average} \n
          A aluna(o) ${this.name} não foi aprovada(o)!!
          `
        }
        return result
    }
  }