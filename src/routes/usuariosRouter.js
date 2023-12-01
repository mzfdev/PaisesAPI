const { Router } = require('express');
const router = Router();

//Obteniendo metodos del controller para el manejo de usuarios
const { getUsuarios, createUsuarios, 
        getUsuarioById, deleteUsuario, 
        updateUsuario } = require('../controllers/usuariosController')

//Rutas para poder acceder a las operaciones con usuarios
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);
router.post('/usuarios', createUsuarios);
router.delete('/usuarios/:id', deleteUsuario)
router.put('/usuarios/:id', updateUsuario)

module.exports = router;