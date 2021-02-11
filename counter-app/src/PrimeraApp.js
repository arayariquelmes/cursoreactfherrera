import {Fragment} from 'react';

import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo})=>{



    //Fragment evita que se tenga que usar un div adicional en el DOM
    //const saludo = "Hola Mundo papuiuuuu!";
    
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
}
PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;