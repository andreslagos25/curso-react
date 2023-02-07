import React, { useEffect } from 'react';

const AllCycles = () => {
    useEffect(() => {
        console.log('Componente actualizado')
        document.title = `${new Date(Math.random)}`
        const intervalID = setInterval( () =>{
            console.log('Actualización del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = "Tiempo detenido"
            clearInterval(intervalID)
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
