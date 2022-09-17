import {render, screen} from '@testing-library/react'

import Button from '../../components/Button'
import userEvent from '@testing-library/user-event'

const props = {
    text: 'metcamp test',
    disabled: false,
    onClick: jest.fn()
}

describe('Tests en el componente Button', () => {
    test('Debe renderizar mi componente Button', () => {
        render(<Button {...props} />);
        const button = screen.getByText('metcamp test');

        expect(button).toBeDefined();
    })

    test('Debe ejecutar la funcion onClick', () => {
        render(<Button {...props} />);
        //screen.logTestingPlaygroundURL();
        const button = screen.getByRole('button', {
            name: /metcamp test/i
        });

        userEvent.click(button);

        expect(props.onClick).toHaveBeenCalled();
    })
})