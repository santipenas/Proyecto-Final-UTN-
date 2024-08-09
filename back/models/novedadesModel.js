// aca puedo conectar con la base de datos para que me traiga todas las novedades de la tabla novedades. 

const { Router } = require('express');
var pool = require('./bd');


//CRUD: CONSULTAR O LISTAR
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}


//CRUD : INSERTAR 
async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}


// CRUD: ELIMINAR
async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

// CRUD: MODIFICAR LA NOVEDAD


async function getNovedadById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// PARA MODIFICAR UPDATE DE LOS DATOS
async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
    

//SIEMPRE RECORDAR EXPORTAR LAS FUNCIONES ACA ABAJO
module.exports = { getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById }
