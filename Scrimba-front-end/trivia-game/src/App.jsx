import { useEffect, useState } from 'react'
import { YellowSVG, BlueSVG } from './components/SVGs.jsx'
import Quiz from './components/Quiz.jsx'


function App() {
  const [game, setGame] = useState({started: false})
  const [quizData, setQuizdata] = useState()
  const numberOfQuestions = 5
  
  useEffect( () => {
    fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}`)
      .then(response => response.json())
      .then(data => setQuizdata(data.results))
      .catch(error => console.error("An error occurred:", error))
  }, [])
  
  console.log(quizData)
  
  return (
    <>
      <YellowSVG />
      <main>
        {
          !game.started ? 
            <div className='game--start'>
              <h1>Quizzical</h1>
              <p>Sure you know enough?</p>
              <button onClick={() => setGame({started: true})}>Start quiz</button>
            </div>
          :
            <Quiz data={quizData}/>
        }
      </main>
      <BlueSVG />
    </>
  )
}

export default App
