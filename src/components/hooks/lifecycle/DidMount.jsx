/**
 * Ejemplo de uso de vida del método 
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido por el DOM(Renderice)')
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido por el DOM(Renderice)')
    }, []);
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}