import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import Result from '../../components/Result';

const API_URL = 'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter';

const Game = () => {
    const [ loading, setLoading ] = useState(true);
    const [ questions, setQuestions ] = useState([]);
    const [ selectedAnswers, setSelectedAnswers ] = useState([]);
    const [ result, setResult ] = useState(0);
    const [ mostrarResultado, setMostrarResultado ] = useState(false);

    function calcularResultado() {
        const respuestasCorrectas = selectedAnswers.filter((item) => item.valorOpcion === true)
        setResult(respuestasCorrectas.length)
        setMostrarResultado(true)
    }

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setQuestions(data)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])
    
    return (
        <div className="container">
            <section className="section">
                <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>

                {
                    loading && (
                        <div>Cargando...</div>
                    )
                }
                { 
                    !loading && (
                        <form>
                            {
                                questions.map((item) => {
                                    return <QuestionCard 
                                        key={item.id} 
                                        currentQuestion={item} 
                                        selectedAnswers={selectedAnswers}
                                        setSelectedAnswers={setSelectedAnswers}
                                        mostrarResultado={mostrarResultado}
                                    />
                                })
                            }
                        </form>
                    )
                }
                <div className='level'>
                    <div className='level-left'>
                        {
                            mostrarResultado &&
                            <Result valorResultado={result} />
                            // <>
                            //     <p> {result}/{`${questions.length}`}</p>
                                
                            //     { result <4 && <img src={mal} alt="mal" /> }
                            //     { result >= 4 && result <7 && <img src={maso} alt="maso" /> }
                            //     { result >=7 && <img src={bien} alt="bien" />}
                            // </>
                        }

                    </div>
                    <div className='level-right'>
                        <Button 
                            disabled={
                                selectedAnswers?.length !== questions?.length || mostrarResultado
                            } 
                            onClick={() => calcularResultado()} 
                            text='Validar'>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Game;