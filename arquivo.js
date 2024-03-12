// escolha no homem
const result =  document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice)  => {
    playTheGame(humanChoice, playMachine())
   
}
// escolha da maquina 

const playMachine = () =>{
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + "Maquina: " +  machine)

    if(human === machine){
        result.innerHTML  = "Empatou " 
    } else if ( (human === "paper" && machine === "rock") || 
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper") ){
       
       humanScoreNumber++
       humanScore.innerHTML = humanScoreNumber
       result.innerHTML = "Ponto para você!"

    
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Ponto para a Maquina!"

    }
}