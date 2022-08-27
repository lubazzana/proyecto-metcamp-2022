import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url)
    }

    return (
        <>
            <Button text={'MetCamp Quiz'} onClick={() => onClickButton('/game')} />
            <Button text={'Contacto'} onClick={() => onClickButton('/contact')} />
        </>
    )
}

export default Home;