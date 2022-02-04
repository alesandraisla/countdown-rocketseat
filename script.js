// Pegando o DOM  
const dayHTML = document.querySelector('#day');

console.log(day)

//Expressao resulta no ano atual
const datePresent = new Date('2022-02-04')

const dateFuture = new Date('2022-02-10')

//Contador   
const updateCountdown = () => {
    //diferenca entre a data atual e a próxima data resulta em milisegundo
    const currentTime = new Date()
    const difference = dateFuture - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24); 
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    dayHTML.textContent = days;
    console.log({ days, hours, minutes, seconds })

}

// funcao que ira ser executada a cada x segundos 
setInterval(updateCountdown, 1000)

updateCountdown()
// console.log(datePresent)
// console.log(dateFuture)
