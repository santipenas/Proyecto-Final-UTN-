import React from 'react';

const GaleriaPage = (props) => {
    return (
        <main class="holder">
        <h2>Galería de propiedades destacadas</h2>
        <div class="venta">
            <div> 
                <h4>Casa en Venta</h4>
                <h5>usd 500.000</h5>
                <p>Casa con gran jardín en Tigre</p>
                <img src="Recursos Proyecto Final/img galeria/1.jpg" alt="" />
                <a href="http://ficha.info/p/3c0c52dc05e948c18d9e0a8901024196">Ver ficha</a>
            </div>
            <div>
                <h4>Casa en Venta</h4>
                <h5>usd 660.000</h5>
                <p>Exclusivo chalet en Nordelta</p>
                <img src="Recursos Proyecto Final/img galeria/2.jpg" alt="" />
                <a href="http://ficha.info/p/23d9bf37f1c545e482b9b1917c31add4">Ver ficha</a>
            </div>
            <div>
                <h4>Departamento en Venta</h4>
                <h5>usd 230.000</h5>
                <p>Semipiso con vistas al río en Olivos</p>
                <img src="Recursos Proyecto Final/img galeria/3.jpg" alt="" />
                <a href="https://ficha.info/p/e7857ac667d04801a82e38791a1449d6">Ver ficha</a>
            </div>
        </div>

        <div class="alquiler">
            <div>
                <h4>Casa en Alquiler</h4>
                <h5>usd 1.800</h5>
                <p>Casa amoblada en Martínez</p>
                <img src="Recursos Proyecto Final/img galeria/4.jpg" alt="" />
                <a href="http://ficha.info/p/bacb06cb3f5c460ca69dc233d104dc07">Ver ficha</a>
            </div>
            <div>
                <h4>Hotel en Alquiler</h4>
                <h5>Consultar</h5>
                <p>Oportunidad comercial</p>
                <img src="Recursos Proyecto Final/img galeria/5.jpg" alt="" />
                <a href="http://ficha.info/p/b19dabb08e77426aa9b915962dad63ae">Ver ficha</a>
            </div>
            <div>
                <h4>Casa en Alquiler</h4>
                <h5>usd 900</h5>
                <p>Casa quinta en Benavidez</p>
                <img src="Recursos Proyecto Final/img galeria/6.jpg" alt="" />
                <a href="http://ficha.info/p/c45b4e9c532f47f291f40ca831d16aa3">Ver ficha</a>
            </div>

        </div>
    </main>
    );
}

export default GaleriaPage;