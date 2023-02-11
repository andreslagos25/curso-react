import React, { useState, useEffect} from 'react';

const Clock = () => {
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("Martín");
    const [apellidos, setApellidos] = useState("San José");

    useEffect(() => {
        const timerID = setInterval(() =>{
            tick();
        }, 1000);
        return () => clearInterval(timerID)
    }, []);
    const tick = () =>{
        setEdad(edad +1);
        setFecha(new Date())
    }
    return (
        <div>
            <h2>
                Hora actual: { fecha.toLocaleTimeStrin()}
            </h2>
            <h3>
                {nombre} {apellidos}
            </h3>
            <h1> Edad: { edad}</h1>
        </div>
    );
}

export default Clock;
