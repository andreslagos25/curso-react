import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../../pure/contact';
//import PropTypes from 'prop-types';


const ConctactList = () => {
    const defaultContact = new Contact('Nombre', 'Apellido', 'emailxdd', false);
    return (
        <div>
            <div>
                Your contact:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};




export default ConctactList;
