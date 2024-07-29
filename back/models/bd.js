// este archivo  hata la union de los datos de la BD SQL con las rutas, FUNIONA YA OK CON LA BASE DE DATOS "INMOBILIARIA"

//SI CAMBIO LA BD A LA BD DE USUARIOS, ESTARA TENTO DEL NOBRE DE LA BD DE QUE A PONER EN MI ARCHIVO .ENV


var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

module.exports = pool;
