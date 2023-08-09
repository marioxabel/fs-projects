import React from "react"
import Dice from "./assets/components/Dice"
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = React.useState(generateDice())
  
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
  
  function generateNewDice() {
    setDice(prevState => 
    prevState.map(prevDice => 
      prevDice.isHeld ? prevDice : {...prevDice, value: Math.ceil(Math.random() * 6)}
    ))
  }
  
  function hold(id) {
    setDice(prevState => prevState.map(prevDice =>
      prevDice.id === id ? { ...prevDice, isHeld: !prevDice.isHeld } : prevDice
    ))
    
  }
  
  return (
    <>
      <main>
        <div>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice--container">
          {diceElements}
        </div> 
        <button onClick={generateNewDice}>Roll</button>
      </main>
    </>
  )
}

export default App
