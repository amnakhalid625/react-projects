import React, { useState } from 'react'
import styles from './Game.module.css'
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";




const Game = () => {
    const [playerChoice, setPlayerChoice] =useState(null);
    const [computerChoice, setComputerChoice] =useState(null);
    const [playerScore,setPlayerScore]=useState(0);
    const [computerScore,setComputerScore]=useState(0);


    const gameLogic=(playerChoice,computerChoice)=>{
        if(playerChoice===computerChoice) return 0;
        else if((playerChoice === 'Rock' && computerChoice ==='Scissors')    || (playerChoice === 'Scissors' && computerChoice === "Paper") || (playerChoice === 'Paper' && computerChoice === 'Rock')) return 1;

        else return -1;
    }

    const gameDesion=(playerChoice)=>{

        
        const Choices=['Rock','Paper','Scissors'];
        const computerChoice=Choices[Math.floor(Math.random()*Choices.length)];
        const val=gameLogic(playerChoice,computerChoice);

        setPlayerChoice(playerChoice)
        setComputerChoice(computerChoice)

        if(val===1){
            setPlayerScore(playerScore+1);
        }else if(val===-1){
            setComputerScore(computerScore+1);
        }
    }
    
const resetGame=()=>{
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
}         

    
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}> Welcome to Rock Paper Scissors Game</h1>
        <div>
            <button className={styles.btn}
                onClick={()=>gameDesion('Rock')}>
                <FaHandRock />
            Rock</button>
            <button className={styles.btn}
                 onClick={()=>gameDesion('Paper')}>
                 <FaHandPaper />
            Paper</button>
            <button className={styles.btn}
                 onClick={()=>gameDesion('Scissors')}>
                <FaHandScissors />
            Scissors</button>
        </div>

        <div>
            <p className={styles.para}>Your Choices:{playerChoice}</p>
            <p>Computer Choice:{computerChoice}</p>
            <p>Your Score:{playerScore}</p>
            <p>Computer Score:{computerScore}</p>
        </div>

        <div>
            <button className={styles.btn} onClick={resetGame}>Reset </button>
        </div>

    </div>
  )
}

export default Game