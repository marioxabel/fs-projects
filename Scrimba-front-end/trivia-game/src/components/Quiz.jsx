import { useEffect, useState } from 'react';
import he from 'he';
import { generateAnswersObject, shuffleArray, formatBooleanAnswer } from '../utils';
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
            const possibleAnswersArray =  questionData.type === "boolean" ? [true, false]
                    : shuffleArray([...questionData.incorrect_answers, questionData.correct_answer])
                    
            newAnswersShuffled.push(possibleAnswersArray)
         })
         setAnswerShuffled(newAnswersShuffled)
         
         console.log(correctAnswers)
    },[props.data]) // only re-run if data changes
    
    useEffect(() => {
        if (!ableToSelectAnswers) {
            for (let i = 1; i <= Object.keys(selectedAnswers).length; i++) {
                selectedAnswers[`answer${i}`] === correctAnswers[`answer${i}`] && setScore(prevState => prevState + 1)
            }            
        }
        
    },[ableToSelectAnswers])
    
    function handleChange(event) {
        if (ableToSelectAnswers) {
            const {name, value} = event.target
            setSelectedAnswers(prevState =>
                ({...prevState, [name]: value})
        )
        }
        return
    } 
    
    function checkAnswers() {
        setAbleToSelectAnswers(false)
    }
    
    function applyCondtionalStyling(index, answer, formattedAnswer ) {
        if (ableToSelectAnswers) {
            return String(selectedAnswers[`answer${index + 1}`]) === String(answer) ? conditionalStyles.selected : {}
        } else if (!ableToSelectAnswers && correctAnswers[`answer${index + 1}`]  === selectedAnswers[`answer${index + 1}`] ) {
            return correctAnswers[`answer${index + 1}`]  == formattedAnswer ? conditionalStyles.correct : {}
        } else if (!ableToSelectAnswers && correctAnswers[`answer${index + 1}`]  !== selectedAnswers[`answer${index + 1}`] ) {
            return correctAnswers[`answer${index + 1}`]  == formattedAnswer ? conditionalStyles.wrong : {}
        }
    }
    
    
    const answersFormatted = answersShuffled.map((element, index) => 
        element.map(answer => {
            const formattedAnswer = typeof answer === "boolean" ? formatBooleanAnswer(answer)
                    : he.decode(answer)
            
            return (
                <label 
                key={nanoid()}
                    // Because we have boolean answers and strings, we change everything to string to apply conditional styling
                    style={applyCondtionalStyling(index, answer, formattedAnswer)}
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
                            <p>You scored {score} correct answers</p>
                            <button onClick={checkAnswers}>Play again</button>
                        </>
                    )
                }
            </div>
            
        </div>
    )
}