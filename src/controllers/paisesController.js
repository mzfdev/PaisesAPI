const pool = require('../dbconnection')

//Obtener todos los paises (Pruebas)
const getPaises = async(req, res) => {
    const response = await pool.query('select * from paises');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

//Crear un nuevo pais
const createPais = async(req,res)=>{
    const {nombre_pais, activo} = req.body;
    const response = await pool.query('insert into paises (nombre_pais, activo) values ($1, $2)', [nombre_pais, activo]);
    console.log(response);
    res.json({
        message: 'Pais Creado',
        body : {
            paises : {nombre_pais, activo}
        }
    });
}

//eliminando un pais
/*
Pequenia restriccion, no he agregado toddavia el ON CASCADE
en el campo id_pais de usuarios,por lo que no podre eliminar registros
relacionados a un usuario de momento, solamente registros nuevos que aun no
tengan una relacion con usuario
*/
const deletePais = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM paises WHERE id = $1', [id]);
    res.json(`Pais ${id} eliminado`)
}

//Actualizando informacion de Pais por ID
const updatePais = async(req, res) => {
    const id = req.params.id
    const {nombre_pais, activo} = req.body;
    const response = await pool.query('UPDATE paises SET nombre_pais = $1, activo = $2 WHERE id = $3', [nombre_pais, activo, id]);
    res.json(`Pais ${id} actualizado`)
}

module.exports = {
    getPaises,
    createPais,
    deletePais,
    updatePais
}