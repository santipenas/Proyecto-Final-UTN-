
import React from 'react';
const NovedadItem = (props) => {
    const { nombre, profesion, edad, tipo, mail, telefono } = props;

    return (
        <div className="novedades">
                    
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{edad}</p>
            <p>{tipo}</p>
            <p>{mail}</p>
            <p>{telefono}</p>                        
            {/* <div dangerouslySetInnerHTML={{ __html: tipo }} ></div>  */}
        </div>
    );
}
export default NovedadItem 