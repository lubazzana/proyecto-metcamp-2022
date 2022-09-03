import "./styles.css";

import Button from "../../components/Button";
import background from "../../assets/background.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url)
    }

    return (
        <section 
            className="hero is-medium is-fullheight" 
            style={{
                backgroundImage: `url(${background})`, 
                backgroundSize: 'cover',
            }}
        >
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Button text={'MetCamp Quiz'} onClick={() => onClickButton('/game')} />
                </div>
            </div>
        </section>
    )
}

export default Home;