import React from 'react';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="Recursos Proyecto Final/varios6.jpg" alt="Venta y alquiler de inmuebles" />
                <div className="info">
                    <h4>Venta y Alquiler de Inmuebles</h4>
                    <p>Cada cliente es único, por lo que te asesoramos de manera específica y personalizada.
                        Nuestra firma cuenta con los recursos y el know-how para brindar soluciones integrales a cada
                        cliente. Contamos con una división residencial, especializada en atender las necesidades de familias
                        y personas que buscan un nuevo hogar o vender; y nuestra división comercial, pensada para asistir
                        eficazmente a empresas, PyMES y firmas corporativas en búsqueda de un espacio para su actividad
                        comercial. Nuestro objetivo es que podamos acompañarte en cada etapa del proceso.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="Recursos Proyecto Final/tasacion.jpeg" alt="Tasaciones" />
                <div class="info">
                    <h4>Tasaciones Profesionales</h4>
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
                <img src="Recursos Proyecto Final/servicios6.jpeg" alt="Administración" />
                <div className="info">
                    <h4>Búsquedas poersonalizadas</h4>
                    <p>Buscar una propiedad puede ser una tarea agotadora. Para evitarte esto, contamos con un servicio
                        especial de búsqueda intensiva de inmuebles en forma exclusiva para vos según tus requerimientos,
                        necesidades y presupuesto. Con una entrevista, podremos conocerte y desde ahí establecer los
                        criterios de búsqueda para ayudarte en este proceso.</p>

                </div>
            </div>
        </main>

    );
}

export default ServiciosPage;