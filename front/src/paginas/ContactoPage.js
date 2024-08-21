import React from 'react';
import { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {

    const initialForm = {
        
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }


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
                    <img src="../../imagenes/mapalocal.jpg" alt="ubicacion" width="280px" height="190px" />
                </div>
            </main>

            <main className="holder formulario">
                <h2>Formulario de Contacto</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="Nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}  />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </main>
        </div>
    );
}

export default ContactoPage;