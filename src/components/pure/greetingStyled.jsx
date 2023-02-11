import React, { useState } from 'react';

// Definiendo estilos en constantes
// Estilos para usuario loggeado
const loggedStyle = {
    color: 'white'
};

// Estilos para usuario no loggeado
const unloggedStyle ={
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no loggeado
    const [logged, setLogged] = useState(false);
    


    return (
        <div style={ logged ? loggedStyle: unloggedStyle}>
        { logged ? 
            (<p>Hola, { props.name }</p>)
            : 
            (<p>Please login</p>)
        }
            
            <button onClick={ () =>{
                console.log('Boton presionado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout': 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
