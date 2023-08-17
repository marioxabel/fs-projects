import { useState } from 'react';
import he from 'he';
import { shuffleArray, formatBooleanAnswer } from '../utils';
import { nanoid } from 'nanoid'


export default function Quiz(props) {
    console.log(props.data.length)
    const [selectedAnswers, setSelectedAnswers] = useState(
        {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: ""       
        }
    )
    
    function handleChange(event) {
        const {name, value} = event.target
        setSelectedAnswers(prevState =>
            ({...prevState, [name]: value})
        )
    } 
    
    console.log(selectedAnswers)
    
    const questionsElements = props.data.map((questionData, index) => {
        // Mix answers arrays or make array for boolean type of question
        const possibleAnswersArray =  
            questionData.type === "boolean" 
                ? [true, false]
                : shuffleArray([...questionData.incorrect_answers, questionData.correct_answer])
        
        // Map for generating radio buttons for each possible answer in array
        const possibleAnswersRadioButtons = possibleAnswersArray.map(answer => {
            // Since answer can be boolean or contain HTML entities we have to format it
            const formattedAnswer = typeof answer === "boolean" ? formatBooleanAnswer(answer)
                : he.decode(answer)
        
            return (
                <>
                    <label>                        
                        <input
                            type="radio"
                            name={`answer${index + 1}`} 
                            value={answer}
                            onChange={handleChange}
                        />
                        {formattedAnswer}
                    </label>
                </>
            )
            
        }) 
        
        return (
            // Complete question & possible answers div
            <div key={nanoid()}>
                <h2>{he.decode(questionData.question)}</h2>
                {possibleAnswersRadioButtons}
            </div>
        )
    })
    
    return (
        <div className="Quiz">
            <form>
                {questionsElements}
            </form>
        </div>
    )
}