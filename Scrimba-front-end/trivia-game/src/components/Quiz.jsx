import he from 'he';
import { shuffleArray } from '../utils';

export default function Quiz(props) {
    const questionsElements = props.data.map(questionData => {
        let possibleAnswers = ""
        
        if (questionData.type === "boolean") {
            possibleAnswers = [true, false]
        } else {
            possibleAnswers = shuffleArray(questionData.incorrect_answers, questionData.correct_answer)
        }
        
        const possibleAnswersFormatted = possibleAnswers.map(answer => <p>{he.decode(answer)}</p>)
        
        return (
            <>
                <h2 key={questionData.index}>{he.decode(questionData.question)}</h2>
                {possibleAnswersFormatted}
            </>
        )
    })
    
    return (
        <div className="Quiz">
            {questionsElements}
        </div>
    )
}