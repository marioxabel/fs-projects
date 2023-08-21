import { useEffect, useState } from 'react'
import he from 'he'
import { generateAnswersObject, shuffleArray } from '../utils'
import { nanoid } from 'nanoid'


const conditionalStyles = {
    selected:
        {
            backgroundColor: "#D6DBF5",
            borderColor: "#D6DBF5"
        },
    correct: 
        {
            backgroundColor: "#94D7A2",
            borderColor: "#94D7A2"
        },
    wrong: 
        {
            backgroundColor: "#F8BCBC",
            borderColor: "#F8BCBC",
            opacity: 0.5 
        }
}

export default function Quiz(props) {
    const [selectedAnswers, setSelectedAnswers] = useState(generateAnswersObject(props.data, false))
    const [correctAnswers, setCorrectAnswers] = useState(generateAnswersObject(props.data, true))
    const [answersShuffled, setAnswerShuffled] = useState([])
    const [ableToSelectAnswers, setAbleToSelectAnswers] = useState(true)
    const [score, setScore] = useState(0)
        
    useEffect(() => {
        const newAnswersShuffled = []
        props.data.map((questionData) => {
            const possibleAnswersArray =  questionData.type === "boolean" ? ["True", "False"]
                    : shuffleArray([...questionData.incorrect_answers, questionData.correct_answer])
                    
            newAnswersShuffled.push(possibleAnswersArray)
         })
         setAnswerShuffled(newAnswersShuffled)    
         
         setCorrectAnswers(generateAnswersObject(props.data, true))
         setAbleToSelectAnswers(true)      
    },[props.data]) // only re-run if data changes
    
    
    useEffect(() => {
        // Check answers
        if (!ableToSelectAnswers) {
            for (let i = 1; i <= Object.keys(selectedAnswers).length; i++) {
                selectedAnswers[`answer${i}`] === correctAnswers[`answer${i}`] && setScore(prevState => prevState + 1)
            }          
        } 
    },[ableToSelectAnswers])
    
    // Restart Game
    useEffect(() => {
        setScore(0)
        setSelectedAnswers(generateAnswersObject(props.data, false)) 
        // To see correct anwers
        // console.log(correctAnswers)
    }, [correctAnswers])
    
    function handleChange(event) {
        if (ableToSelectAnswers) {
            const { name, value } = event.target
            setSelectedAnswers(prevState => ({...prevState, [name]: value}))
        }
        return
    } 
    
    function checkAnswers() {
        setAbleToSelectAnswers(false)
    }
    
    function applyCondtionalStyling(index, answer) {
        if (ableToSelectAnswers) {
            return selectedAnswers[`answer${index + 1}`] === answer ? conditionalStyles.selected : {}
        } else if (!ableToSelectAnswers && correctAnswers[`answer${index + 1}`]  === selectedAnswers[`answer${index + 1}`] ) {
            return correctAnswers[`answer${index + 1}`]  == answer ? conditionalStyles.correct : {}
        } else if (!ableToSelectAnswers && correctAnswers[`answer${index + 1}`]  !== selectedAnswers[`answer${index + 1}`] 
            || !ableToSelectAnswers &&  selectedAnswers[`answer${index + 1}`] == '') {
            return (
                correctAnswers[`answer${index + 1}`]  == answer ? conditionalStyles.correct : {} &&
                String(selectedAnswers[`answer${index + 1}`]) === String(answer) ? conditionalStyles.wrong : {}
            )
        }
    }
    
    function renderNewGame() {
        props.startNewGame()
    }
    
    
    const answersFormatted = answersShuffled.map((element, index) => 
        element.map(answer => {
            const formattedAnswer = typeof answer === "boolean" ? answer
                    : he.decode(answer)
            
            return (
                <label 
                key={nanoid()}
                    // Because we have boolean answers and strings, we change everything to string to apply conditional styling
                    style={applyCondtionalStyling(index, answer)}
                >                        
                    <input
                        type="radio"
                        name={`answer${index + 1}`} 
                        value={answer}
                        onChange={handleChange}
                    />
                    {formattedAnswer}
                </label>
            )
        }
    
    ))
    
    const completeQuestionElements = props.data.map((element, index) => {
        return (
            <div key={nanoid()} className="quiz--question">
                    <h2>{he.decode(element.question)}</h2>
                    <div className='quiz--answers'>{answersFormatted[index]}</div>
            </div>
        )
    })
    
    return (
        <div className="quiz">
            <form>
                {completeQuestionElements}
            </form>
            <div className='quiz--check'>
                {
                    ableToSelectAnswers ? 
                        <button onClick={checkAnswers}>Check answers</button>
                    : (
                        <>
                            <p className='score'>You scored {score}/{props.data.length} correct answers</p>
                            <button onClick={renderNewGame}>Play again</button>
                        </>
                    )
                }
            </div>
        </div>
    )
}