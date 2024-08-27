import React from 'react';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="../../imagenes/serviciosventa.jpg" alt="Venta y alquiler de inmuebles" />
                <div className="info">
                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> Venta y Alquiler de Inmuebles</h4>
                    <p>Cada cliente es único, por lo que te asesoramos de manera específica y personalizada.
                        Nuestra firma cuenta con los recursos y el know-how para brindar soluciones integrales a cada
                        cliente. Contamos con una división residencial, especializada en atender las necesidades de familias
                        y personas que buscan un nuevo hogar o vender; y nuestra división comercial, pensada para asistir
                        eficazmente a empresas, PyMES y firmas corporativas en búsqueda de un espacio para su actividad
                        comercial. Nuestro objetivo es que podamos acompañarte en cada etapa del proceso.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="../../imagenes/serviciostasacion.jpeg" alt="Tasaciones" />
                <div class="info">
                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> Tasaciones Profesionales</h4>
                    <p>Toda operación inmobiliaria exitosa comienza con una correcta Tasación. La importancia de un
                        profesional matriculado en la venta de tu propiedad es absoluta y permitirá que tu inmueble se venda
                        con éxito, rápido y sin stress.
                        Nuestras tasaciones se hacen según análisis estadísticos del mercado y son llevadas a cabo en forma
                        personalizada y siguiendo las disposiciones establecidas por el Tribunal de Tasaciones de la Nación
                        y las normas IRAM sobre la materia.
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="../../imagenes/varios7.jpg" alt="Busquedas" />
                <div className="info">
                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> Búsquedas personalizadas</h4>
                    <p>Buscar una propiedad puede ser una tarea agotadora. Para evitarte esto, contamos con un servicio
                        especial de búsqueda intensiva de inmuebles en forma exclusiva para vos según tus requerimientos,
                        necesidades y presupuesto. Con una entrevista, podremos conocerte y desde ahí establecer los
                        criterios de búsqueda para ayudarte en este proceso.
                    </p>
                </div>
            </div>

            <div className="servicio">
                <img src="../../imagenes/varios3.jpeg" alt="Asesoría" />
                <div className="info">
                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> Asesoría legal y contable</h4>
                    <p>Contamos con un equipo interdisciplinario de expertos en materia legal y contable, capaz de darte soluciones integrales a tus necesidades. 
                    Cualquier duda que tengas, estamos para ayudarte. Damos total asesoramiento a nuestros clientes en temas tales como contratos inmobiliarios, 
                    representación legal en pleitos judiciales, y similares. Lo mismo en temas impositivos y contables, ya seas propietario o comrpador, 
                    te daremos la mejor asesoría para defender tus derechos e intereses en cada situación.
                    </p>
                </div>
            </div>

            <div className="servicio">
                <img src="../../imagenes/servicios6.jpeg" alt="Administración" />
                <div className="info">
                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> Administración de Alquileres </h4>
                    <p>Ofrecemos el servicio de administracion de tus propiedades alquiladas. Nos encargamos de todo para que vos 
                    solo tengas que poder difrutar de tu renta, mientras nosotros nos encargamos de cobrar el alquiler y de mantener en buenas 
                    condiciones tu propiedad mientras esté alquilada. Contamos con el personal calificado para brindarte la mejor atención 
                    y servicio de administración de propiedades alquiladas
                    </p>
                </div>
            </div>


        </main>

    );
}

export default ServiciosPage;