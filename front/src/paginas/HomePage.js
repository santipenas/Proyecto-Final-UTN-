import React from 'react';


const HomePage = (props) => {
    return (
        <div>
            <main className="holder">
                <div>
                    <img src="../../imagenes/varios5.jpg" width= "100%" height="500" alt="nosotros" />

                </div>
                <div className="encabezado">
                    <section class="bienvenidos">
                        <h2>Bienvenidos!</h2>
                        <p>Casi 30 años en el mercado inmobiliario hablan de nuestro profesionalismo y de la
                            confianza que año tras año nuestros clientes depositan en nosotros. Somos una empresa familiar que
                            crece año a año para brindarles toda nuestra calidad profesional y humana, siempre pensando en tus
                            necesidades.
                            Contamos con el entusiasmo y dinamismo de una nueva generación de inmobiliarios que apuestan a la
                            tecnología para potenciar una tradición familiar de vocación.</p>
                        <p>Porque estamos convencidos de que la excelencia es un hábito, es que cada día queremos ser mejores
                            profesionales y mejores personas; por eso su confianza es fundamental para nosotros y es para
                            cuidarla que trabajamos para poder superar sus expectativas. Queridos clientes, desde Peñas
                            Propiedades, ¡les agradecemos su confianza y el elegirnos día a día!”.</p>
                    </section>
                    <div className="columnas">
                        <section className="institucion">
                            <h2>Nuestra Institución</h2>
                            <div className="listado">
                                <div>
                                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> MISIÓN <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                    <p>Ofrecemos todo nuestro expertise para ayudarte en tus necesidades.</p>
                                </div>
                                <div>
                                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> PROPOSITO <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                    <p>Dar soluciones a nuestros clientes en sus necesidades inmobiliarias y cumplir los
                                        objetivos propuestos</p>
                                </div>
                                <div>
                                    <h4> <i class="fa-solid fa-circle-chevron-right"></i> VISIÓN <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                    <p>Posicionarnos como un referente inmobiliario como empresa destacada en el sector</p>
                                </div>
                            </div>
                        </section>
                        <section className="valores">
                            <h2>Valores</h2>
                            <div>
                                <h4> <i class="fa-solid fa-circle-chevron-right"></i> EXCELENCIA PROFESIONAL <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                <p>Ofrecemos todo nuestro conocimiento para ayudarte en tus necesidades inmobiliarias.</p>
                            </div>
                            <div>
                                <h4> <i class="fa-solid fa-circle-chevron-right"></i> ÉTICA EMPRESARIAL <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                <p>Entendemos la responsabilidad de nuestro trabajo y nos guiamos por la honestidad y compromiso
                                    hacia vos.</p>
                            </div>
                            <div>
                                <h4> <i class="fa-solid fa-circle-chevron-right"></i> PASIÓN VOCACIONAL <i class="fa-solid fa-circle-chevron-left"></i></h4>
                                <p>Esto es lo que más nos gusta hacer, nuestra vocación; por eso nos verás dar lo mejor de
                                    nosotros hacia vos</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;