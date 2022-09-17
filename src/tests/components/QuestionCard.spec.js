import {render, screen} from '@testing-library/react'

import QuestionCard from '../../components/QuestionCard'
import userEvent from '@testing-library/user-event'

const props = {
    currentQuestion: {
        id: 8,
        question: "¿Quién mató a Dobby?",
        answers: [
            {
                id: 1,
                answer: "Lucius Malfoy",
                is_correct: false
            },
            {
                id: 2,
                answer: "Bellatrix Lestrange",
                is_correct: true
            },
            {
                id: 3,
                answer: "Fenrir Greyback",
                is_correct: false
            },
            {
                id: 4,
                answer: "Alecto Carrow",
                is_correct: false
            }
        ]
    },
    selectedAnswers: [],
    setSelectedAnswers: jest.fn(),
    mostrarResultado: true,
}

describe('Tests en el componente QuestionCard', () => {
    test('Debe renderizar el componente', () => {
        render(<QuestionCard {...props} />);
        const question = screen.getByText('¿Quién mató a Dobby?');

        expect(question).toBeInTheDocument();
    })

    test('Debe ejecutar la funcion setSelectedAnswers', () => {
        render(<QuestionCard {...props} />);
        //screen.logTestingPlaygroundURL();
        const answer = screen.getByRole('radio', { name: /bellatrix lestrange/i });

        userEvent.click(answer);

        expect(props.setSelectedAnswers).toHaveBeenCalled();
    })
})