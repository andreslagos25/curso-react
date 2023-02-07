/*
*  Ejemplo de uso  del Hook useState
*
* Crear un componente de tipo funcion y acceder a su estado
* privado a traves de un hook y además poder modificarlo
*/

import React, { useState} from 'react';

const Ejemplo1 = () => {

    //Valor incial para un contador
    const valorInicial = 0;

    const personaInicial ={
        nombre: 'Martin',
        email: 'marting@gmail.com'
    }

    /**
     * Queremos que el VALORINIOCIAL y PERSONAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * 
     * @param {string} nombre 
     */

    function actualizarPersona(nombre){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imagingasd.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIl: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
