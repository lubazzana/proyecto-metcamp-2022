import bien from '../../assets/bien.png';
import mal from '../../assets/mal.png';
import maso from '../../assets/medio.png';
import { useEffect } from 'react';
import { useState } from 'react';

const Result = ({ valorResultado }) => {
    const [image, setImage] = useState();
    
    function getImageSource(valorResultado) {
        if(valorResultado < 4) setImage(mal)
        else if(valorResultado >= 4 && valorResultado < 7) setImage(maso)
        else setImage(bien)
    }
    
    useEffect(() => {
        getImageSource(valorResultado)
    }, [valorResultado])

    return(
        <>
            <h1>{valorResultado} respuestas correctas</h1>
            <img src={image} alt="value" />
        </>
    )
}

export default Result;