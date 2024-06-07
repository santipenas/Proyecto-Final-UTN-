import React from 'react';

const Nav = (props) => {
    return (
            <Nav>  
                <div> 
                    <ul>
                        <li><link to='/'>Home</link></li>
                        <li><link to='/nosotros'>Nosotros</link></li>
                        <li><link to='/contacto'>Contacto</link></li>
                        <li><link to='/galeria'>Galeria</link></li>
                        <li><link to='/servicios'>Servicios</link></li>
                        <li><link to='/novedades'>Novedades</link></li>
                    </ul>
                </div> 
            </Nav>
        
    );
};    

export default Nav;