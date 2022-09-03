import "./styles.css";

const QuestionCard = ({ currentQuestion }) => {
    return(
        <div className="box">
            <div className="question-title">
                <span className="tag is-rounded is-primary is-light">{currentQuestion.id}</span>
                <span><strong> {currentQuestion.question}</strong></span>
            </div>
            {
                currentQuestion.answers.map((option) => (
                    <div key={option.id}>
                        <input type='radio' id={`${option.id}`} name={option.id} value={option.answer}></input>
                        <label htmlFor={`${option.id}`}> {option.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionCard;