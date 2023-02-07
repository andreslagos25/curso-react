/**
 * Ejemplo de componente tipo clase que dispone de los 
 * métodos de ciclo de vida 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component{
    constructor(props){
        super(props);
        console.log("CONSTRUCTOR: Cuando se instancia el componente")
    }


    componentWillMount(){
        console.log("WILLMOUNT:  Antes del montaje del componente")
    }
    componentDidMount(){
        console.log("DIDMOUNT: Justo antes del montaje del componente, antes de renderizarlo")
    }
    componentWillReceiveProps(nextProps){
        console.log("WillReciveProps: Si va a recibir nuevas props")
    }
    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controla si el componente debe o no actualizarse
         * 
         */
        // return true; 
        // return false;
        console.log('s')
    }
    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse')
    }
    componentDidUpdate(){
        console.log('DidUpdate: Justo después de actualizarse')
    }
    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }
    render(){
        return(
            <div></div>
        )
    }
}
LifeCycleExample.propTypes ={

}

export default LifeCycleExample;