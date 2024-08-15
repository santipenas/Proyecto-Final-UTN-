

// ACA GENERO LA ESTRUCTURA DE LA INFO DE NOVEDADES DE MI BASE DE DATOS CON SU VISUAL EN MI WEB 

import React from 'react';
const NovedadItem = (props) => {
    const { nombre, profesion, edad, tipo, mail, telefono } = props;

    return (
        <div className="novedades">
            <h1>{nombre}</h1>
            <h2>{profesion}</h2>
            <p>{edad}</p>
            <p>{tipo}</p>
            <p>{mail}</p>
            <p>{telefono}</p>
            
            <div dangerouslySetInnerHTML={{ __html: tipo }}></div> 
        </div>
    );
}
export default NovedadItem