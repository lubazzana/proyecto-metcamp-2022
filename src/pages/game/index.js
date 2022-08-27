import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Game = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/')
    }

    return (
        <>
            <h1>Esta es la página del juego</h1>
            <Button text={'Ir a Home'} onClick={onClickButton} />
        </>
    )
}

export default Game;