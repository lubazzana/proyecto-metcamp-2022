import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/')
    }

    return (
        <>
            <h1>Esta es la página de contacto</h1>
            <Button text={'Ir a Home'} onClick={onClickButton} />
        </>
    )
}

export default Contact;