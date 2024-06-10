import React from 'react';

const ContactoPage = (props) => {
    return (
        <div>
            <main className="holder contacto">
                <div className="datos">
                    <h2>Vías de Comunicación</h2>
                    <p>Podrá comunicarse con nosotros por los siguientes medios</p>
                    <ul>
                        <li> <i className="fa-solid fa-phone"></i> Teléfono: 4780-5423</li>
                        <li> <i className="fa-brands fa-whatsapp"></i> WhatsApp: (+549)11 4354-7898</li>
                        <li> <i className="fa-regular fa-envelope"></i> Email: hola@penaspropiedades.com.ar</li>
                        <li> <i className="fa-brands fa-facebook"></i> Facebook: Peñas Propiedades</li>
                        <li> <i className="fa-brands fa-instagram"></i> Instagram: Peñas Propiedades</li>
                    </ul>
                </div>
                <div className="ubicacion">
                    <h2>Ubicación Casa Central</h2>
                    <p>Av. Del Libertador 7172, CABA</p>
                    <img src="Recursos Proyecto Final/mapalocal.jpg" alt="ubicacion" width="280px" height="190px" />
                </div>
            </main>

            <main className="holder formulario">
                <h2>Formulario de Contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="Nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </main>
        </div>
    );
}

export default ContactoPage;