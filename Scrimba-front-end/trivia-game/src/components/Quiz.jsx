import { useEffect, useState } from 'react';
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
    const [questionsElements, setQuestionElements] = useState()
    
    function handleChange(event) {
        const {name, value} = event.target
        setSelectedAnswers(prevState =>
            ({...prevState, [name]: value})
        )
    } 
    
    console.log(selectedAnswers)
    
    // Generate question elements once
    useEffect(() => {
        const newQuestionsElements = props.data.map((questionData, index) => {
            const possibleAnswersArray =  
                questionData.type === "boolean" 
                    ? [true, false]
                    : shuffleArray([...questionData.incorrect_answers, questionData.correct_answer])
            
            const possibleAnswersRadioButtons = possibleAnswersArray.map(answer => {
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
                // Complete question & possible answers 
                <div key={nanoid()}>
                    <h2>{he.decode(questionData.question)}</h2>
                    {possibleAnswersRadioButtons}
                </div>
            )
        })
        setQuestionElements(newQuestionsElements)
    },[props.data]) // only re-run if data changes
    
    return (
        <div className="Quiz">
            <form>
                {questionsElements}
            </form>
        </div>
    )
}