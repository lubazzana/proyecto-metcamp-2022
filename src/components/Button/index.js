import './styles.css';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="button is-primary is-medium">
            { text }
        </button>
    )
}

export default Button;