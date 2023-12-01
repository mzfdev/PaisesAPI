const pool = require('../dbconnection')

//Obtiendo a todos los usarios
const getUsuarios = async(req, res) => {
    const response = await pool.query('select u.nombre, u.correo, p.nombre_pais from usuarios u, paises p where u.id_pais = p.id');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

//Obtener usuario por medio de su id
const getUsuarioById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    res.json(response.rows)
}

//Crear un usuario nuevo
const createUsuarios = async(req, res) => {
    const {nombre, correo, contrasenia, id_pais, fecha_creacion} = req.body;
    const response = await pool.query('insert into usuarios (nombre, correo, contrasenia, id_pais, fecha_creacion) values ($1, $2, $3, $4, $5)', [nombre, correo, contrasenia, id_pais, fecha_creacion]);
    console.log(response);
    res.json({
        message: 'Usuario Creado',
        body : {
            usuario : {nombre, correo, contrasenia, id_pais, fecha_creacion}
        }
    });
}

//Eliminar usuario
const deleteUsuario = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
    res.json(`Usuario ${id} eliminado`)
}

//Actualizando informacion de usuario por ID
const updateUsuario = async(req, res) => {
    const id = req.params.id
    const {nombre, correo, contrasenia, id_pais, fecha_creacion} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre = $1, correo = $2, contrasenia = $3, id_pais= $4, fecha_creacion = $5 WHERE id = $6', [nombre, correo, contrasenia, id_pais, fecha_creacion, id]);
    res.json(`Usuario ${id} actualizado`)
}

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuarios,
    deleteUsuario,
    updateUsuario
}
