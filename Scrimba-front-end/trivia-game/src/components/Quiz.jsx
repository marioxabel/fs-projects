import { useEffect, useState } from 'react';
import he from 'he';
import { shuffleArray, formatBooleanAnswer } from '../utils';
import { nanoid } from 'nanoid'


const selectedStyle = {
    backgroundColor: "#D6DBF5",
    borderColor: "#D6DBF5"
}

export default function Quiz(props) {
    const [selectedAnswers, setSelectedAnswers] = useState(
        {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: ""       
        }
    )
    const [answersShuffled, setAnswerShuffled] = useState([])
    
    
    useEffect(() => {
        const newAnswersShuffled = []
        props.data.map((questionData) => {
            const possibleAnswersArray =  questionData.type === "boolean" ? [true, false]
                    : shuffleArray([...questionData.incorrect_answers, questionData.correct_answer])
                    
            newAnswersShuffled.push(possibleAnswersArray)
         })
         setAnswerShuffled(newAnswersShuffled)
    },[props.data]) // only re-run if data changes
    
    function handleChange(event) {
        const {name, value} = event.target
        setSelectedAnswers(prevState =>
            ({...prevState, [name]: value})
        )
    } 
    
    const answersFormatted = answersShuffled.map((element, index) => 
        element.map(answer => {
            const formattedAnswer = typeof answer === "boolean" ? formatBooleanAnswer(answer)
                    : he.decode(answer)
            
            return (
                <label 
                key={nanoid()}
                    // Because we have boolean answers and strings, we change everything to string to apply conditional styling
                    style={String(selectedAnswers[`answer${index + 1}`]) === String(answer) ? selectedStyle : {}}
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
            <div key={nanoid()} className="quiz--question flex-column">
                    <h2>{he.decode(element.question)}</h2>
                    <div className='quiz--answers'>{answersFormatted[index]}</div>
            </div>
        )
    })
    
    return (
        <div className="quiz flex-column">
            <form>
                {completeQuestionElements}
            </form>
            <div className='revision'>
                <button className='button--check'>Check answers</button>
            </div>
        </div>
    )
}