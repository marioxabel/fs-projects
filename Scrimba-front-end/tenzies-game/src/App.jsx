import React from "react"
import Dice from "./assets/components/Dice"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const [dice, setDice] = React.useState(generateDice())
  const [tenzies, setTenzies] = React.useState(
    {
      gameStarted: false,
      startTime: "",
      numberOfRolls: 0,
      won: false,
      gameEnded: false
    }
  )
  const { width, height } = useWindowSize()

  React.useEffect(() => {   
    // Won game checker 
    if (dice.every(die => die.isHeld && dice[0].value === die.value)) {
      setTenzies(prevState => ({...prevState, won: true, gameEnded: true}))
    }
  }, [dice])
  
  
  function generateDice() {
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(
        { 
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }
      )
    }
    return diceArray
  }
  
  const diceElements = dice.map(die => 
    <Dice 
      key={die.id} 
      id={die.id}
      number={die.value}
      isHeld={die.isHeld}  
      hold={hold}
    />
  )
  
  function startGame() {
    setTenzies(
      {
        gameStarted: true,
        startTime: Date.now(),
        numberOfRolls: 1,
        won: false,
        gameEnded: false
      }
    )
    setDice(generateDice())
    
  }
    
  function generateNewDice() {
    setDice(prevState => 
    prevState.map(prevDice => 
      prevDice.isHeld ? prevDice : {...prevDice, value: Math.ceil(Math.random() * 6)}
    ))
    setTenzies(prevState => ({...prevState, numberOfRolls: prevState.numberOfRolls + 1}))

  }
  
  function hold(id) {
    setDice(prevState => prevState.map(prevDice =>
      prevDice.id === id ? { ...prevDice, isHeld: !prevDice.isHeld } : prevDice
    ))
    
  }
  
  console.log(tenzies)
  return (
    <>
      {tenzies.won && <Confetti  width={width} height={height}/>}
      <main>   
        <div>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        {
          tenzies.gameStarted ? (
            <div className="dice--container">
              {diceElements}
            </div> 
          ) : ( 
            <div className={"start--game--banner"}>
              <h1>Click "Start Game"</h1>
            </div>
          )
        }
        {   
          !tenzies.gameStarted ? (
            <button onClick={startGame}>Start Game</button>
          ) : tenzies.gameEnded && tenzies.won ? (
            <button onClick={startGame}>New Game</button> 
          ) : (
            <button onClick={generateNewDice}>Roll</button>
          )
        }
        <div className="stats">
          <p>Time: --:--</p>
          <p>Rolls: {tenzies.numberOfRolls}</p>
        </div>
      </main>
    </>
  )
}

export default App
