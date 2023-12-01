const { Router } = require('express');
const router = Router();

const { getPaises, createPais, 
        deletePais, updatePais } = require('../controllers/paisesController')

//Rutas para poder acceder a las operaciones con paises
router.get('/paises', getPaises);
router.post('/paises', createPais);
router.delete('/paises/:id', deletePais);
router.put('/paises/:id',updatePais)

module.exports = router;