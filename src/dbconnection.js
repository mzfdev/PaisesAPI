//Obteniendo Pool
const { Pool } = require('pg');

//Cargando variables de entorno incluidas en el .env
require('dotenv').config(); 

//Pool de conexion a la base de datos
const pool = new Pool({
    /**
     * Los datos de la cadena de conexion son obtenidos
     * del archivo .env, el cual se debe crear en la carpeta raiz 
     * del proyecto y su contenido deben ser las variables de entorno
     * segun la configuracion de cada colaborador
     */
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

//pool exportado para ser utilizado en consultas de la base de datos
module.exports = pool;