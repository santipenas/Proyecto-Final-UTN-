import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../componentes/novedades/NovedadItem";

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/novedades");
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades y Clientes Nuevos</h2>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map((item) => (
                    <NovedadItem
                        key={item.id}
                        nombre={item.nombre}
                        profesion={item.profesion}
                        edad={item.edad}
                        tipo={item.tipo}
                        mail={item.mail}
                        telefono={item.telefono}
                    />
                ))
            )}
        </section>
    );
};

export default NovedadesPage;
