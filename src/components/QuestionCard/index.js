import "./styles.css";

const QuestionCard = ({ currentQuestion, selectedAnswers, setSelectedAnswers, mostrarResultado }) => {

    function seleccionarRespuesta(identificador, valorOpcion) {
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        setSelectedAnswers([...otrasRespuestas,
        {
            id: identificador,
            valorOpcion
        }
        ])
    }

    function mostrarColores(valor) {
        let valorClase;

        if(mostrarResultado) {
            if(valor === true) {
                valorClase = 'has-text-primary';
            } else {
                valorClase = 'has-text-danger';
            }
        }
        
        return valorClase;
    }

    return(
        <div className="box">
            <div className="question-title">
                <span className="tag is-rounded is-primary is-light">{currentQuestion.id}</span>
                <span><strong> {currentQuestion.question}</strong></span>
            </div>
            {
                currentQuestion.answers.map((option) => (
                    <div 
                        key={option.id} 
                        onChange={() => seleccionarRespuesta(currentQuestion.id, option.is_correct)}
                    >
                            <input 
                                type='radio' 
                                id={`${currentQuestion.id}`} 
                                name={currentQuestion.id} 
                                value={option.answer}
                            ></input>
                            <label 
                                htmlFor={`${currentQuestion.id}`}
                                className={mostrarColores(option.is_correct)}
                            > 
                                {option.answer}
                            </label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionCard;